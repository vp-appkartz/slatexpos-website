import React, { useState } from 'react';
import {
    Save,
    LayoutTemplate,
    RefreshCw,
    Edit2,
    X,
    Layers,
    Monitor
} from 'lucide-react';
import HeroContentEditor from './hero/HeroContentEditor';
import ScrollContentEditor from './hero/ScrollContentEditor';
import HardwareContentEditor, { HardwareData } from './hero/HardwareContentEditor';

import BlackSectionContentEditor, { BlackSectionData } from './hero/BlackSectionContentEditor';
import TestimonialsContentEditor from './hero/TestimonialsContentEditor';
import { TestimonialsData } from '../Common/Testimonials';
import CTAContentEditor, { CTAData } from './hero/CTAContentEditor';

// --- Types ---
interface Section {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    bgGradient: string;
    buttonText: string;
    bulletPoints: { text: string; highlight: boolean }[];
    imageSrc: string;
}

// --- Initial Data ---
const INITIAL_HERO_DATA = {
    heading: 'Run Your Restaurant',
    highlightedText: 'More Efficiently',
    suffixText: 'Smarter',
    buttonText: "Let's Connect",
    backgroundImage: '/bg.png',
    centerImage: '/hero-home-center.png',
    images: {
        leftTop: '/left-t1.png',
        leftBadge: '/left-badge.png',
        leftBottom: '/left-b1.png',
        rightTop: '/right-t1.png',
        rightBadge: '/right-badge.png',
        rightBottom: '/right-b1.png'
    },
    logos: [
        { src: '/flavours_of_gujarat.png', alt: 'Flavours of Gujarat' },
        { src: '/bombay_st.png', alt: 'Bombay Street' },
        { src: '/desi_loco.png', alt: 'Desi Loco' },
        { src: '/virsa.png', alt: 'Virsa' },
        { src: '/split_mil.png', alt: 'Split Mil' },
        { src: '/trademark.png', alt: 'Trademark' },
    ]
};

const INITIAL_SCROLL_DATA = {
    heroTitle: "What We Do",
    heroSubtitle: "Tailored for Every Table, Terminal, and Territory in Canada",
    sections: [
        {
            id: '1',
            icon: 'Utensils',
            title: 'Comprehensive All-In-One POS System',
            subtitle: 'Comprehensive All-In-One POS System',
            description: 'An easy to use and reliable cloud-based Android POS solution designed to empower restaurants in their growth journey.',
            bgColor: 'bg-gray-500',
            bgGradient: 'from-gray-400 to-gray-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-1.png',
            bulletPoints: [
                { text: 'Easy Ticket Management', highlight: true },
                { text: 'Pizza Matrix (½ & ¼)', highlight: false },
                { text: 'Control Complex Modifiers', highlight: true },
                { text: 'Binnacle Security', highlight: false },
            ]
        },
        {
            id: '2',
            icon: 'Clock',
            title: 'Streamline kitchen operations with precision',
            subtitle: 'Streamline kitchen operations with precision',
            description: 'A comprehensive Kitchen Display System streamlining restaurant operations from order management to food preparation.',
            bgColor: 'bg-green-500',
            bgGradient: 'from-green-400 to-green-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-2.png',
            bulletPoints: [
                { text: 'Aggregate all orders', highlight: true },
                { text: 'Multiple views', highlight: true },
                { text: 'Color Coded Orders', highlight: true },
            ]
        }
    ] as Section[]
};

const INITIAL_HARDWARE_DATA: HardwareData = {
    items: [
        {
            id: 1,
            title: "SlateX Station",
            description: "Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.",
            image: "/slatex-terminal.png",
        },
        {
            id: 2,
            title: "SlateX Tab",
            description: "Lightweight 11″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.",
            image: "/slatex-tablet.png",
        },
        {
            id: 3,
            title: "SlateX Go",
            description: "A fully powered handheld terminal that lets you take orders and process payments from anywhere—tableside, curbside, or on delivery. It delivers secure, encrypted transactions, tip prompts, and digital receipts in a rugged, all‑day battery design",
            image: "/slatex-go.png",
        },
    ],
    solutions: [
        { id: 1, title: "Products", row: 1 },
        { id: 2, title: "Casual Dining", row: 1 },
        { id: 3, title: "Cafe n Bakery", row: 1 },
        { id: 4, title: "Hotel", row: 2 },
        { id: 5, title: "Pizzeria", row: 2 },
        { id: 6, title: "Bar n Lounge", row: 2 },
    ]
};

const INITIAL_BLACK_SECTION_DATA: BlackSectionData = {
    title: "Why Choose SlateX POS?",
    description: "Switch to SlateX POS for a flexible, all‑in‑one solution: tweak menus and taxes on the fly, and leverage built‑in tools like gift cards, loyalty programs, and seamless payment processing. SlateX adapts as you grow, so you can focus on delighting customers and boosting profits.",
    buttonText: "Signup Now",
    imageSrc: "/pos-lady.png",
    imageAlt: "Woman working with laptop in restaurant",
    trustIndicators: [
        "200+ Loyal Partner",
        "Reliable Hardware",
        "No Hidden Charges",
        "24/7 Customer"
    ]
};

const INITIAL_TESTIMONIALS_DATA: TestimonialsData = {
    title: "Testimonials",
    subtitle: "Proof in every plate, Hear from our customers",
    items: [
        {
            id: 1,
            name: "Tushar Mistry",
            position: "Bombay Street Tadka",
            image: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            text: "SlateX POS has completely transformed how we manage our restaurant operations. From real-time KOT printing to handling modifiers and multi-device sync, everything just works flawlessly. It’s fast, reliable, and tailor-made for busy Indian kitchens like ours.",
            logo: "Bombay Street Tadka",
            logoSubtext: ""
        },
        {
            id: 2,
            name: "Ankit Patel",
            position: "Flavors Of Gujarat",
            image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            text: "We were looking for a system that understands the complexity of Gujarati menus and fast-paced service – and SlateX POS delivered! It’s easy to train staff on, and the reporting tools give us full control of our day-to-day operations.",
            logo: "Flavors Of Gujarat",
            logoSubtext: ""
        },
        {
            id: 3,
            name: "Gurbir Singh",
            position: "Royal Sweets & Restaurant",
            image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            text: "Managing dine-in, takeout, and sweets counters together used to be stressful. With SlateX POS, we’ve streamlined everything under one roof. The intuitive interface, kitchen display integration, and smooth payment processing make a huge difference.",
            logo: "Royal Sweets & Restaurant",
            logoSubtext: ""
        },
        {
            id: 4,
            name: "Riaz Khan",
            position: "Chutney Restaurant",
            image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
            text: "What I love most about SlateX POS is the customization. From invoice design to tax settings, everything is flexible to match how we work. Support is responsive, and the system never lags – even during our busiest hours!",
            logo: "Chutney Restaurant",
            logoSubtext: ""
        }
    ]
};

const INITIAL_CTA_DATA: CTAData = {
    title: "Let's schedule\nyour free demo",
    description: "Discover why top restaurants trust SlateX POS to run their business smoothly and efficiently. With powerful features like real-time order syncing, customizable menus, and seamless payment integration, our system is built to make your life easier. Book your free demo today and see how SlateX POS can help you save time, reduce errors, and grow your profits — all with a solution tailored to your restaurant's unique needs. Let us show you the difference in just one call!"
};

const HeroEditor = () => {
    const [activeTab, setActiveTab] = useState<'hero' | 'scroll' | 'hardware' | 'blackSection' | 'testimonials' | 'cta'>('hero');
    const [heroData, setHeroData] = useState(INITIAL_HERO_DATA);
    const [scrollData, setScrollData] = useState(INITIAL_SCROLL_DATA);
    const [hardwareData, setHardwareData] = useState(INITIAL_HARDWARE_DATA);
    const [blackSectionData, setBlackSectionData] = useState(INITIAL_BLACK_SECTION_DATA);
    const [testimonialsData, setTestimonialsData] = useState(INITIAL_TESTIMONIALS_DATA);
    const [ctaData, setCtaData] = useState(INITIAL_CTA_DATA);
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // --- Hero Handlers ---
    const handleHeroTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHeroData(prev => ({ ...prev, [name]: value }));
    };

    const handleHeroImageChange = (key: string, value: string) => {
        if (key.includes('.')) {
            const [parent, child] = key.split('.');
            setHeroData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent as keyof typeof prev] as object,
                    [child]: value
                }
            }));
        } else {
            setHeroData(prev => ({ ...prev, [key]: value }));
        }
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const newLogo = {
                src: URL.createObjectURL(e.target.files[0]),
                alt: 'New Partner'
            };
            setHeroData(prev => ({ ...prev, logos: [...prev.logos, newLogo] }));
        }
    };

    const removeLogo = (index: number) => {
        setHeroData(prev => ({ ...prev, logos: prev.logos.filter((_, i) => i !== index) }));
    };

    const updateLogoAlt = (index: number, alt: string) => {
        setHeroData(prev => ({ ...prev, logos: prev.logos.map((logo, i) => i === index ? { ...logo, alt } : logo) }));
    };

    // --- Scroll Section Handlers ---
    const handleScrollGlobalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setScrollData(prev => ({ ...prev, [name]: value }));
    };

    const updateSection = (id: string, field: keyof Section, value: any) => {
        setScrollData(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === id ? { ...s, [field]: value } : s)
        }));
    };

    const addBullet = (sectionId: string) => {
        setScrollData(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === sectionId ? {
                ...s,
                bulletPoints: [...s.bulletPoints, { text: 'New Feature', highlight: false }]
            } : s)
        }));
    };

    const updateBullet = (sectionId: string, index: number, field: 'text' | 'highlight', value: any) => {
        setScrollData(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === sectionId ? {
                ...s,
                bulletPoints: s.bulletPoints.map((b, i) => i === index ? { ...b, [field]: value } : b)
            } : s)
        }));
    };

    const removeBullet = (sectionId: string, index: number) => {
        setScrollData(prev => ({
            ...prev,
            sections: prev.sections.map(s => s.id === sectionId ? {
                ...s,
                bulletPoints: s.bulletPoints.filter((_, i) => i !== index)
            } : s)
        }));
    };

    const addSection = () => {
        const newId = (scrollData.sections.length + 1).toString();
        const newSection: Section = {
            id: newId,
            icon: 'Zap',
            title: 'New Section Title',
            subtitle: 'New Section Subtitle',
            description: 'Section description goes here.',
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-red-500',
            buttonText: "Learn More",
            imageSrc: '',
            bulletPoints: []
        };
        setScrollData(prev => ({ ...prev, sections: [...prev.sections, newSection] }));
    };

    const removeSection = (id: string) => {
        setScrollData(prev => ({ ...prev, sections: prev.sections.filter(s => s.id !== id) }));
    };

    // --- Hardware Handlers ---
    const handleHardwareItemChange = (id: number, field: any, value: any) => {
        setHardwareData(prev => ({
            ...prev,
            items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const addHardwareItem = () => {
        const newId = Math.max(...hardwareData.items.map(i => i.id), 0) + 1;
        setHardwareData(prev => ({
            ...prev,
            items: [...prev.items, {
                id: newId,
                title: "New Device",
                description: "Description",
                image: ""
            }]
        }));
    };

    const removeHardwareItem = (id: number) => {
        setHardwareData(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== id)
        }));
    };

    const handleHardwareImageUpload = (id: number, file: File) => {
        const imageUrl = URL.createObjectURL(file);
        handleHardwareItemChange(id, 'image', imageUrl);
    };

    const handleSolutionChange = (id: number, field: any, value: any) => {
        setHardwareData(prev => ({
            ...prev,
            solutions: prev.solutions.map(sol => sol.id === id ? { ...sol, [field]: value } : sol)
        }));
    };

    const addSolution = () => {
        const newId = Math.max(...hardwareData.solutions.map(s => s.id), 0) + 1;
        setHardwareData(prev => ({
            ...prev,
            solutions: [...prev.solutions, { id: newId, title: "New Solution", row: 1 }]
        }));
    };

    const removeSolution = (id: number) => {
        setHardwareData(prev => ({
            ...prev,
            solutions: prev.solutions.filter(sol => sol.id !== id)
        }));
    };

    // --- Black Section Handlers ---
    const handleBlackSectionChange = (field: keyof BlackSectionData, value: any) => {
        setBlackSectionData(prev => ({ ...prev, [field]: value }));
    };

    const handleTrustIndicatorChange = (index: number, value: string) => {
        setBlackSectionData(prev => ({
            ...prev,
            trustIndicators: prev.trustIndicators.map((item, i) => i === index ? value : item)
        }));
    };

    const addTrustIndicator = () => {
        setBlackSectionData(prev => ({
            ...prev,
            trustIndicators: [...prev.trustIndicators, "New Trust Indicator"]
        }));
    };

    const removeTrustIndicator = (index: number) => {
        setBlackSectionData(prev => ({
            ...prev,
            trustIndicators: prev.trustIndicators.filter((_, i) => i !== index)
        }));
    };

    const handleBlackSectionImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            handleBlackSectionChange('imageSrc', imageUrl);
        }
    };


    // --- Testimonials Handlers ---
    const handleTestimonialsChange = (field: keyof TestimonialsData, value: any) => {
        setTestimonialsData(prev => ({ ...prev, [field]: value }));
    };

    const handleTestimonialItemChange = (id: number, field: any, value: any) => {
        setTestimonialsData(prev => ({
            ...prev,
            items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const addTestimonialItem = () => {
        const newId = Math.max(...testimonialsData.items.map(i => i.id), 0) + 1;
        setTestimonialsData(prev => ({
            ...prev,
            items: [...prev.items, {
                id: newId,
                name: "New Customer",
                position: "Restaurant Name",
                image: "",
                text: "Add your testimonial text here.",
                logo: "",
                logoSubtext: ""
            }]
        }));
    };

    const removeTestimonialItem = (id: number) => {
        setTestimonialsData(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== id)
        }));
    };

    const handleTestimonialImageUpload = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            handleTestimonialItemChange(id, 'image', imageUrl);
        }
    };


    // --- CTA Handlers ---
    const handleCTAChange = (field: keyof CTAData, value: string) => {
        setCtaData(prev => ({ ...prev, [field]: value }));
    };


    // --- Common Handlers ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setIsEditing(false);
            alert('Changes saved successfully! (Mock)');
        }, 1000);
    };

    const toggleEdit = () => setIsEditing(!isEditing);
    const cancelEdit = () => {
        setIsEditing(false);
        setHeroData(INITIAL_HERO_DATA);
        setScrollData(INITIAL_SCROLL_DATA);
        setHardwareData(INITIAL_HARDWARE_DATA);
        setHardwareData(INITIAL_HARDWARE_DATA);
        setBlackSectionData(INITIAL_BLACK_SECTION_DATA);
        setBlackSectionData(INITIAL_BLACK_SECTION_DATA);
        setTestimonialsData(INITIAL_TESTIMONIALS_DATA);
        setCtaData(INITIAL_CTA_DATA);
    };


    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header with Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hero Module</h1>
                    <p className="text-gray-500 mt-1">Manage homepage Hero, Scroll, and Hardware sections.</p>
                </div>

                <div className="flex items-center gap-3">
                    {!isEditing ? (
                        <button
                            onClick={toggleEdit}
                            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10"
                        >
                            <Edit2 className="w-5 h-5" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={cancelEdit}
                                disabled={isSaving}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200"
                            >
                                <X className="w-5 h-5" />
                                <span>Cancel</span>
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSaving}
                                className={`flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-gray font-medium shadow-lg shadow-primary-500/20 transition-all duration-200
                                    ${isSaving ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 hover:shadow-primary-500/30 hover:-translate-y-0.5'}`}
                            >
                                {isSaving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab('hero')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'hero' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <LayoutTemplate className="w-4 h-4" />
                    <span>Hero Section</span>
                </button>
                <button
                    onClick={() => setActiveTab('scroll')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'scroll' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Layers className="w-4 h-4" />
                    <span>Scroll Section</span>
                </button>
                <button
                    onClick={() => setActiveTab('hardware')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'hardware' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <Monitor className="w-4 h-4" />
                    <span>Hardware</span>
                </button>
                <button
                    onClick={() => setActiveTab('blackSection')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'blackSection' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <LayoutTemplate className="w-4 h-4" />
                    <span>Black Section</span>
                </button>
                <button
                    onClick={() => setActiveTab('testimonials')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'testimonials' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <LayoutTemplate className="w-4 h-4" />
                    <span>Testimonials</span>
                </button>
                <button
                    onClick={() => setActiveTab('cta')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'cta' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    <LayoutTemplate className="w-4 h-4" />
                    <span>Contact</span>
                </button>
            </div>

            {/* Tab: Hero Content */}
            {activeTab === 'hero' && (
                <HeroContentEditor
                    data={heroData}
                    onChange={handleHeroTextChange}
                    onImageChange={handleHeroImageChange}
                    onLogoUpload={handleLogoUpload}
                    onRemoveLogo={removeLogo}
                    onUpdateLogoAlt={updateLogoAlt}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: Scroll Content */}
            {activeTab === 'scroll' && (
                <ScrollContentEditor
                    data={scrollData}
                    onGlobalChange={handleScrollGlobalChange}
                    onUpdateSection={updateSection}
                    onAddSection={addSection}
                    onRemoveSection={removeSection}
                    onAddBullet={addBullet}
                    onUpdateBullet={updateBullet}
                    onRemoveBullet={removeBullet}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: Hardware Content */}
            {activeTab === 'hardware' && (
                <HardwareContentEditor
                    data={hardwareData}
                    onItemChange={handleHardwareItemChange}
                    onAddItem={addHardwareItem}
                    onRemoveItem={removeHardwareItem}
                    onImageUpload={handleHardwareImageUpload}
                    onSolutionChange={handleSolutionChange}
                    onAddSolution={addSolution}
                    onRemoveSolution={removeSolution}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: Black Section Content */}
            {activeTab === 'blackSection' && (
                <BlackSectionContentEditor
                    data={blackSectionData}
                    onChange={handleBlackSectionChange}
                    onTrustIndicatorChange={handleTrustIndicatorChange}
                    onAddTrustIndicator={addTrustIndicator}
                    onRemoveTrustIndicator={removeTrustIndicator}
                    onImageUpload={handleBlackSectionImageUpload}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: Testimonials Content */}
            {activeTab === 'testimonials' && (
                <TestimonialsContentEditor
                    data={testimonialsData}
                    onChange={handleTestimonialsChange}
                    onItemChange={handleTestimonialItemChange}
                    onAddItem={addTestimonialItem}
                    onRemoveItem={removeTestimonialItem}
                    onImageUpload={handleTestimonialImageUpload}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: CTA Content */}
            {activeTab === 'cta' && (
                <CTAContentEditor
                    data={ctaData}
                    onChange={handleCTAChange}
                    isEditing={isEditing}
                />
            )}
        </div>
    );
};

export default HeroEditor;
