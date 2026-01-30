import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Loader2, LayoutTemplate, Edit2, X, AlertCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { getFooterData, saveDraft, getDraft, FooterData, FooterLink } from '../../../services/firestoreService';

const FooterEditor = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [hasDraft, setHasDraft] = useState(false);

    // Store original data to revert on cancel
    const [originalData, setOriginalData] = useState<FooterData | null>(null);

    const [formData, setFormData] = useState<FooterData>({
        description: '',
        socialLinks: {
            facebook: '',
            twitter: '',
            instagram: '',
            linkedin: ''
        },
        productLinks: [],
        industryLinks: [],
        companyLinks: []
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // 1. Fetch Live Data
            const liveData = await getFooterData();

            // 2. Fetch Draft Data
            const draft = await getDraft('content', 'footer');

            let dataToUse = liveData;

            if (draft) {
                setHasDraft(true);
                dataToUse = draft.data;
                toast("You are viewing a draft version.", { icon: '📝' });
            } else if (!liveData) {
                // Initialize with defaults if absolutely nothing exists
                dataToUse = {
                    description: 'Serve up seamless service with SlateX POS—your all‑in‑one companion for menus, orders, and payments.',
                    socialLinks: {
                        facebook: 'https://www.facebook.com/slatexpos',
                        twitter: 'https://twitter.com/slatexpos',
                        instagram: 'https://www.instagram.com/slatexpos/',
                        linkedin: 'https://www.linkedin.com/company/slatexpos'
                    },
                    productLinks: [
                        { name: "Restaurant POS System", url: "restaurant-pos-system" },
                        { name: "Kitchen Display", url: "kitchen-display" },
                        { name: "Payment Processing", url: "payment-processing" },
                        { name: "Reporting App", url: "reporting-app" },
                        { name: "Web Ordering", url: "web-ordering" },
                        { name: "Branded Mobile App", url: "mobile-ordering" },
                        { name: "Loyalty & Promotion", url: "loyalty-promotion" },
                        { name: "Gift Card", url: "gift-card" }
                    ],
                    industryLinks: [
                        { name: "Quick-Service Restaurants (QSR)", url: "quick-service-restaurants-qsr" },
                        { name: "Casual Dining", url: "casual-dining" },
                        { name: "Full Services Restaurant", url: "full-services-restaurant" },
                        { name: "Fast Casual Restaurant", url: "fast-casual-restaurant" },
                        { name: "Food Trucks", url: "food-trucks" },
                        { name: "Pizzeria", url: "pizzeria" },
                        { name: "Café & Bakery", url: "cafe-bakery" },
                        { name: "Bars & Pubs", url: "bars-pubs" }
                    ],
                    companyLinks: [
                        { name: "About us", url: "/about" },
                        { name: "Hardware", url: "/hardware" },
                        { name: "Pricing", url: "/pricing" },
                        { name: "Career", url: "/career" },
                        { name: "Licenses", url: "/licenses" }
                    ]
                };
            }

            setFormData(dataToUse as FooterData);
            setOriginalData(dataToUse as FooterData);

        } catch (error) {
            console.error("Error fetching footer data:", error);
            toast.error("Failed to load footer data");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        if (originalData) {
            setFormData(originalData);
        }
        setIsEditing(false);
        toast('Changes discarded', { icon: '↩️' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.startsWith('social_')) {
            const socialKey = name.replace('social_', '');
            setFormData(prev => ({
                ...prev,
                socialLinks: {
                    ...prev.socialLinks,
                    [socialKey]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleLinkChange = (section: 'productLinks' | 'industryLinks' | 'companyLinks', index: number, field: keyof FooterLink, value: string) => {
        const newLinks = [...formData[section]];
        newLinks[index] = { ...newLinks[index], [field]: value };
        setFormData(prev => ({ ...prev, [section]: newLinks }));
    };

    const addLink = (section: 'productLinks' | 'industryLinks' | 'companyLinks') => {
        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], { name: '', url: '' }]
        }));
    };

    const removeLink = (section: 'productLinks' | 'industryLinks' | 'companyLinks', index: number) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            // Save as DRAFT
            await saveDraft(
                'content',      // targetCollection
                'footer',       // targetDocId
                formData,       // data
                'footer',       // moduleType
                'Footer'        // targetName
            );

            toast.success("Changes saved as draft!");
            setHasDraft(true);
            setOriginalData(formData);
            setIsEditing(false);

            // Optionally notify that approval is needed
            toast.custom((t) => (
                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <AlertCircle className="h-10 w-10 text-yellow-400" />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    Draft Saved
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Your changes are pending approval. Go to Settings &gt; Content Approvals to publish.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ));

        } catch (error) {
            console.error("Error saving footer draft:", error);
            toast.error("Failed to save draft");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-12">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                        <LayoutTemplate className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Footer Editor</h1>
                        {hasDraft && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                                Draft Version
                            </span>
                        )}
                    </div>
                </div>

                {!isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Footer
                    </button>
                ) : (
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleCancel}
                            disabled={saving}
                            className="flex items-center px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                        >
                            <X className="w-4 h-4 mr-2" />
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit} // Using handleSubmit which calls saveDraft
                            disabled={saving}
                            className="flex items-center px-4 py-2 bg-primary-600 text-black font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                        >
                            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            Save Draft
                        </button>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className={`space-y-8 ${!isEditing ? 'opacity-80 pointer-events-none' : ''}`}>
                {/* Description & Socials */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">General Information</h2>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Footer Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                            placeholder="Enter footer description..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(formData.socialLinks).map(([key, value]) => (
                            <div key={key}>
                                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                                    {key} URL
                                </label>
                                <input
                                    type="text"
                                    name={`social_${key}`}
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder={`https://${key}.com/...`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Link Sections */}
                {([
                    { key: 'productLinks', title: 'Product Links' },
                    { key: 'industryLinks', title: 'Industry Links' },
                    { key: 'companyLinks', title: 'Company Links' }
                ] as const).map(({ key, title }) => (
                    <div key={key} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                            <button
                                type="button"
                                onClick={() => addLink(key)}
                                className="flex items-center px-3 py-1.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                            >
                                <Plus className="w-4 h-4 mr-1.5" />
                                Add Link
                            </button>
                        </div>

                        <div className="space-y-4">
                            {formData[key].map((link, index) => (
                                <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                    <div className="flex-1 space-y-4 md:space-y-0 md:flex md:gap-4">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={link.name}
                                                onChange={(e) => handleLinkChange(key, index, 'name', e.target.value)}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                placeholder="Link Name"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={link.url}
                                                onChange={(e) => handleLinkChange(key, index, 'url', e.target.value)}
                                                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                placeholder="URL / Slug"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeLink(key, index)}
                                        className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            {formData[key].length === 0 && (
                                <p className="text-center text-gray-500 py-4 text-sm">No links added yet.</p>
                            )}
                        </div>
                    </div>
                ))}

                {/* Save Toolbar relative to form */}
                {isEditing && (
                    <div className="sticky bottom-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center justify-between z-10">
                        <p className="text-sm text-gray-500">
                            Changes will be saved as a draft and require approval.
                        </p>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex items-center px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Saving Draft...
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4 mr-2" />
                                    Save as Draft
                                </>
                            )}
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FooterEditor;
