import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../lib/firebase';

/**
 * Uploads an image file to Firebase Storage and returns the download URL.
 * @param file The file to upload.
 * @param folder The folder in Firebase Storage to upload to (default: 'uploads').
 * @returns Promise resolving to the download URL.
 */
export const uploadImage = async (file: File, folder: string = 'uploads', customName?: string): Promise<string> => {
    try {
        let fullPath;
        if (customName) {
            // When using custom name, we don't append extension to strictly enforce
            // "one file per ID" rule to prevent duplicates with different extensions.
            // Firebase Storage stores and serves the correct Content-Type metadata automatically.
            fullPath = `${folder}/${customName}`;
        } else {
            const timestamp = Date.now();
            // Sanitize filename
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '-');
            fullPath = `${folder}/${timestamp}-${safeName}`;
        }

        const storageRef = ref(storage, fullPath);

        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw new Error("Failed to upload image to storage");
    }
};

/**
 * Deletes an image from Firebase Storage.
 * @param imageUrl The full download URL or path of the image to delete.
 */
export const deleteImage = async (imageUrl: string): Promise<void> => {
    if (!imageUrl) return;

    try {
        // Create a reference to the file to delete
        const storageRef = ref(storage, imageUrl);
        await deleteObject(storageRef);
    } catch (error) {
        console.error("Error deleting image:", error);
        // We don't throw here to prevent blocking UI if deletion fails
        // (e.g. if file didn't exist)
    }
};
