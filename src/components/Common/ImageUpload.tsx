import React, { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { uploadImage } from '../../services/imageService';

const getFileName = (url: string) => {
    try {
        const decoded = decodeURIComponent(url);
        const filename = decoded.split('?')[0].split('/').pop() || 'Image';
        return filename.replace(/^\d+-/, '');
    } catch {
        return 'Image';
    }
};

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    folder?: string;
    fileName?: string;
    className?: string;
    disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    value,
    onChange,
    folder = 'uploads',
    fileName,
    className = 'w-32 h-32',
    disabled = false
}) => {
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validation
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            toast.error('Image size should be less than 5MB');
            return;
        }

        try {
            setUploading(true);
            const url = await uploadImage(file, folder, fileName);
            onChange(url);
            toast.success('Image uploaded successfully');
        } catch (error) {
            console.error(error);
            toast.error('Failed to upload image');
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange('');
    };

    const handleClick = () => {
        if (!disabled && !uploading) {
            fileInputRef.current?.click();
        }
    };

    return (
        <div className={`relative ${className}`}>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                className="hidden"
                disabled={disabled || uploading}
            />

            <div
                onClick={handleClick}
                className={`
                    relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed transition-all duration-200
                    ${value
                        ? 'border-gray-200 bg-gray-50'
                        : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
                    }
                    ${disabled ? 'opacity-60 cursor-not-allowed hover:border-gray-300 hover:bg-transparent' : ''}
                    w-full h-full flex flex-col items-center justify-center
                `}
            >
                {uploading ? (
                    <div className="flex flex-col items-center gap-2 text-primary-600">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span className="text-xs font-medium">Uploading...</span>
                    </div>
                ) : value ? (
                    <>
                        <img
                            src={value}
                            alt="Uploaded"
                            className="w-full h-full object-contain p-2"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] px-2 py-1 truncate text-center backdrop-blur-sm">
                            {getFileName(value)}
                        </div>
                        {!disabled && (
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    onClick={handleRemove}
                                    className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-sm"
                                    title="Remove image"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-primary-500 transition-colors">
                        <Upload className="w-6 h-6" />
                        <span className="text-xs font-medium">Upload Image</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
