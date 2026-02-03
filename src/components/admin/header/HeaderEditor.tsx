
import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, ArrowLeft, Loader2, Upload, AlertCircle, Edit, X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {
    getHeaderData,
    saveHeaderData,
    saveDraft,
    getDraft,

    discardDraft,
    HeaderData,
    ProductSection,
    NavigationItem
} from '../../../services/firestoreService';

const defaultProductSections = [
    {
        title: "Restaurant Operations",
        items: [
            {
                image: "/prh1.png",
                title: "Restaurant POS System",
                description: "Manage, Operate orders, payments, and operations with ease, in an all-in-one, intuitive POS system.",
                slug: "restaurant-pos-system"
            },
            {
                image: "/prh2.png",
                title: "Kitchen Display",
                description: "Optimize kitchen efficiency with real-time digital order tracking and management.",
                slug: "kitchen-display"
            },
            {
                image: "/prh3.png",
                title: "Payment Processing",
                description: "Accept all major payment types securely with fast and reliable payment solutions.",
                slug: "payment-processing"
            },
            {
                image: "/prh4.png",
                title: "Reporting App",
                description: "Gain powerful insights into sales and performance with easy-to-understand reports.",
                slug: "reporting-app"
            }
        ]
    },
    {
        title: "Customer Interaction",
        items: [
            {
                image: "/prh5.png",
                title: "Web Ordering",
                description: "Let your customers order online seamlessly from your branded web platform.",
                slug: "web-ordering"
            },
            {
                image: "/prh6.png",
                title: "Branded Mobile App",
                description: "Offer a custom mobile app for convenient ordering, rewards, and direct engagement.",
                slug: "mobile-ordering"
            }
        ]
    },
    {
        title: "Marketing Operations",
        items: [
            {
                image: "/prh7.png",
                title: "Loyalty & Promotion",
                description: "Drive repeat business with tailored loyalty programs and automated promotions.",
                slug: "loyalty-promotion"
            },
            {
                image: "/prh8.png",
                title: "Gift Card",
                description: "Boost revenue and reach with flexible, easy-to-use digital and physical gift cards.",
                slug: "gift-card"
            }
        ]
    }
];

const defaultCategoryItems = [
    {
        image: "/ih1.png",
        title: "Quick-Service Restaurants (QSR)",
        description: "Speed up service and manage high-volume orders effortlessly with our lightning-fast POS."
    },
    {
        image: "/ih2.png",
        title: "Casual Dining",
        description: "Deliver smooth table service with tools for order splitting, modifiers, and small fulfillment."
    },
    {
        image: "/ih3.png",
        title: "Full Services Restaurant",
        description: "Elevate guest experiences with full-service features like table management and gratuity control."
    },
    {
        image: "/ih4.png",
        title: "Fast Casual Restaurant",
        description: "Combine speed and flexibility with kiosk support, mobile ordering, and efficient workflows."
    },
    {
        image: "/ih5.png",
        title: "Food Trucks",
        description: "Go mobile with a lightweight, offline-ready POS built for fast-paced, on-the-go operations."
    },
    {
        image: "/ih6.png",
        title: "Pizzeria",
        description: "Handle custom pizzas with ease using half-and-half modifiers, toppings matrix, and combos."
    },
    {
        image: "/ih7.png",
        title: "Café & Bakery",
        description: "Simplify morning rushes with quick item selection, loyalty rewards, and kitchen sync."
    },
    {
        image: "/ih8.png",
        title: "Bars & Pubs",
        description: "Manage tabs, happy hours, and tip distribution effortlessly with bar-optimized POS features."
    }
];

const HeaderEditor: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [activeTab, setActiveTab] = useState<'products' | 'industries'>('products');
    const [isEditing, setIsEditing] = useState(false);
    const [hasPendingDraft, setHasPendingDraft] = useState(false);
    const [draftId, setDraftId] = useState<string | null>(null);

    const [data, setData] = useState<HeaderData>({
        productSections: [],
        categoryItems: []
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);

            // 1. Try to fetch draft first
            const draft = await getDraft('content', 'header');

            if (draft) {
                console.log("Loaded draft data");
                setData(draft.data as HeaderData);
                setHasPendingDraft(true);
                setDraftId(draft.id);
                toast.success("Loaded unsaved draft");
            } else {
                // 2. Fallback to live data
                const fetchedData = await getHeaderData();

                // Check if fetched data is effectively empty
                const isEmpty = !fetchedData ||
                    (fetchedData.categoryItems.length === 0 &&
                        fetchedData.productSections.every(s => s.items.length === 0));

                if (!isEmpty && fetchedData) {
                    setData(fetchedData);
                } else {
                    // 3. Fallback to defaults
                    setData({
                        productSections: defaultProductSections,
                        categoryItems: defaultCategoryItems
                    });
                }
                setHasPendingDraft(false);
                setDraftId(null);
            }
        } catch (error) {
            console.error("Error loading header data:", error);
            toast.error("Failed to load header data");
        } finally {
            setLoading(false);
        }
    };



    const handleSaveDraft = async () => {
        setSaving(true);
        try {
            await saveDraft(
                'content',      // targetCollection
                'header',       // targetDocId
                data,
                'header',       // moduleType
                'Header Navigation' // targetName
            );
            setHasPendingDraft(true);
            setDraftId('content_header');
            toast.success("Draft saved successfully");
        } catch (error) {
            console.error("Error saving draft:", error);
            toast.error("Failed to save draft");
        } finally {
            setSaving(false);
        }
    };



    const handleDiscard = async () => {
        if (confirm("Are you sure you want to discard changes? This will revert to the live version.")) {
            if (draftId) {
                await discardDraft(draftId);
            }
            setIsEditing(false);
            loadData();
            toast.success("Changes discarded");
        }
    };
    const updateProductSection = (index: number, field: keyof ProductSection, value: any) => {
        const newSections = [...data.productSections];
        newSections[index] = { ...newSections[index], [field]: value };
        setData({ ...data, productSections: newSections });
    };

    const addProductItem = (sectionIndex: number) => {
        const newSections = [...data.productSections];
        newSections[sectionIndex].items.push({
            title: "New Product",
            description: "Product description",
            image: "/prh1.png",
            slug: "new-product"
        });
        setData({ ...data, productSections: newSections });
    };

    const removeProductItem = (sectionIndex: number, itemIndex: number) => {
        const newSections = [...data.productSections];
        newSections[sectionIndex].items.splice(itemIndex, 1);
        setData({ ...data, productSections: newSections });
    };

    const updateProductItem = (sectionIndex: number, itemIndex: number, field: keyof NavigationItem, value: string) => {
        const newSections = [...data.productSections];
        newSections[sectionIndex].items[itemIndex] = {
            ...newSections[sectionIndex].items[itemIndex],
            [field]: value
        };
        setData({ ...data, productSections: newSections });
    };

    const addCategoryItem = () => {
        const newItems = [...data.categoryItems];
        newItems.push({
            title: "New Category",
            description: "Category description",
            image: "/ih1.png"
        });
        setData({ ...data, categoryItems: newItems });
    };

    const removeCategoryItem = (index: number) => {
        const newItems = [...data.categoryItems];
        newItems.splice(index, 1);
        setData({ ...data, categoryItems: newItems });
    };

    const updateCategoryItem = (index: number, field: keyof NavigationItem, value: string) => {
        const newItems = [...data.categoryItems];
        newItems[index] = { ...newItems[index], [field]: value };
        setData({ ...data, categoryItems: newItems });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-8 h-8 animate-spin text-primary-300" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/admin/dashboard')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-500" />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                                Header Navigation Editor
                            </h1>
                            {hasPendingDraft && (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    <AlertCircle className="w-3 h-3" />
                                    Draft Mode
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 mt-1">Manage global navigation menu structure</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10"
                        >
                            <Edit className="w-5 h-5" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleDiscard}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                                title="Discard Changes"
                            >
                                <X className="w-5 h-5" />
                                <span className="hidden sm:inline">Discard</span>
                            </button>
                            <button
                                onClick={handleSaveDraft}
                                disabled={saving}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-700 bg-white border border-gray-200 font-medium hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
                            >
                                {saving ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Save className="w-4 h-4" />
                                )}
                                <span>Save Changes</span>
                            </button>

                        </>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
                <TabButton
                    active={activeTab === 'products'}
                    onClick={() => setActiveTab('products')}
                    label="Product Menu"
                />
                <TabButton
                    active={activeTab === 'industries'}
                    onClick={() => setActiveTab('industries')}
                    label="Industry Menu"
                />
            </div>

            {/* Content Area */}
            <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 min-h-[500px] transition-all duration-300 ${!isEditing ? 'opacity-90 pointer-events-none grayscale-[0.05]' : 'opacity-100'}`}>
                {activeTab === 'products' ? (
                    <div className="space-y-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                            <p className="text-sm text-blue-700">
                                Configure the dropdown menu for "Products". You can organize items into sections (e.g., Restaurant Operations, Customer Interaction).
                            </p>
                        </div>

                        {data.productSections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                    <input
                                        type="text"
                                        value={section.title}
                                        onChange={(e) => updateProductSection(sectionIndex, 'title', e.target.value)}
                                        className="text-lg font-semibold bg-transparent border-none focus:ring-0 text-gray-900 w-full disabled:text-gray-600"
                                        placeholder="Section Title"
                                        disabled={!isEditing}
                                    />
                                </div>
                                <div className="p-4 space-y-4">
                                    {section.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors">
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                                                    ) : (
                                                        <Upload className="w-6 h-6 text-gray-400" />
                                                    )}
                                                </div>
                                                <input
                                                    type="text"
                                                    value={item.image}
                                                    onChange={(e) => updateProductItem(sectionIndex, itemIndex, 'image', e.target.value)}
                                                    className="mt-2 text-xs w-full p-1.5 border rounded-md"
                                                    placeholder="Image URL"
                                                    disabled={true}
                                                />
                                            </div>
                                            <div className="flex-1 space-y-3">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                                                        <input
                                                            type="text"
                                                            value={item.title}
                                                            onChange={(e) => updateProductItem(sectionIndex, itemIndex, 'title', e.target.value)}
                                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                                            disabled={!isEditing}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-medium text-gray-500 mb-1">Slug</label>
                                                        <input
                                                            type="text"
                                                            value={item.slug || ''}
                                                            onChange={(e) => updateProductItem(sectionIndex, itemIndex, 'slug', e.target.value)}
                                                            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                                            disabled={!isEditing}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                                                    <textarea
                                                        value={item.description}
                                                        onChange={(e) => updateProductItem(sectionIndex, itemIndex, 'description', e.target.value)}
                                                        rows={2}
                                                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                                        disabled={!isEditing}
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeProductItem(sectionIndex, itemIndex)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                disabled={!isEditing}
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => addProductItem(sectionIndex)}
                                        disabled={!isEditing}
                                        className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-primary-300 hover:text-primary-300 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Plus className="w-5 h-5" />
                                        <span>Add Product Item</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                            <p className="text-sm text-blue-700">
                                Configure the dropdown menu for "Industries". These items link to category pages.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-0">
                            <div className="space-y-6">
                                {data.categoryItems.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors relative group">
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                                                {item.image ? (
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                                                ) : (
                                                    <Upload className="w-6 h-6 text-gray-400" />
                                                )}
                                            </div>
                                            <input
                                                type="text"
                                                value={item.image}
                                                onChange={(e) => updateCategoryItem(index, 'image', e.target.value)}
                                                className="mt-2 text-xs w-full p-1.5 border rounded-md"
                                                placeholder="Image URL"
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Title</label>
                                                <input
                                                    type="text"
                                                    value={item.title}
                                                    onChange={(e) => updateCategoryItem(index, 'title', e.target.value)}
                                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                                                <textarea
                                                    value={item.description}
                                                    onChange={(e) => updateCategoryItem(index, 'description', e.target.value)}
                                                    rows={2}
                                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeCategoryItem(index)}
                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            disabled={!isEditing}
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={addCategoryItem}
                                    disabled={!isEditing}
                                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-primary-300 hover:text-primary-300 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span>Add Industry Category</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const TabButton: React.FC<{
    active: boolean;
    onClick: () => void;
    label: string;
}> = ({ active, onClick, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap
            ${active
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
    >
        <span>{label}</span>
    </button>
);

export default HeaderEditor;
