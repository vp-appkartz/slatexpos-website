import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
    Save,
    LayoutTemplate,
    RefreshCw,
    Edit2,
    X,
    Layers,
    Monitor,
    Menu // Added Menu icon if needed for mobile, but primarily using layout adjustments
} from 'lucide-react';
import HeroContentEditor from './hero/HeroContentEditor';
import ScrollContentEditor from './hero/ScrollContentEditor';
import HardwareContentEditor, { HardwareData } from './hero/HardwareContentEditor';

import BlackSectionContentEditor, { BlackSectionData } from './hero/BlackSectionContentEditor';
import TestimonialsContentEditor from './hero/TestimonialsContentEditor';
import { TestimonialsData, TestimonialItem } from '../Common/Testimonials';
import CTAContentEditor, { CTAData } from './hero/CTAContentEditor';
import {
    getHeroPageData,
    saveHeroPageData,
    HeroData,
    ScrollSectionData,
    HeroPageContent
} from '../../services/firestoreService';
import { deleteImage } from '../../services/imageService';

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

// --- Initial Data (Fallbacks) ---
const INITIAL_HERO_DATA: HeroData = {
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
        { id: '1', src: '/flavours_of_gujarat.png', alt: 'Flavours of Gujarat' },
        { id: '2', src: '/bombay_st.png', alt: 'Bombay Street' },
        { id: '3', src: '/desi_loco.png', alt: 'Desi Loco' },
        { id: '4', src: '/virsa.png', alt: 'Virsa' },
        { id: '5', src: '/split_mil.png', alt: 'Split Mil' },
        { id: '6', src: '/trademark.png', alt: 'Trademark' },
    ]
};

const INITIAL_SCROLL_DATA: ScrollSectionData = {
    heroTitle: "What We Do",
    heroSubtitle: "Tailored for Every Table, Terminal, and Territory in Canada",
    sections: [
        {
            id: '1',
            icon: "Utensils",
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
                { text: 'Accurate & easy insights', highlight: true },
                { text: 'Employee Management', highlight: false },
                { text: 'Tip Reconciliation', highlight: true },
                { text: 'Third Party Order Integration', highlight: false },
                { text: 'Timecard and Payroll', highlight: true },
                { text: 'CRM & Loyalty', highlight: false },
                { text: 'Versatile item and menu management', highlight: true },
                { text: 'Comprehensive Management', highlight: false },
            ]
        },
        {
            id: '2',
            icon: "Clock",
            title: 'Streamline kitchen operations with precision',
            subtitle: 'Streamline kitchen operations with precision',
            description: 'A comprehensive Kitchen Display System streamlining restaurant operations from order management to food preparation. Ensure seamless communication and enhanced efficiency in your kitchen allowing your staff to focus on preparing and serving delicious food.',
            bgColor: 'bg-green-500',
            bgGradient: 'from-green-400 to-green-600',
            buttonText: 'Let\'s Connect',
            imageSrc: '/home-about-2.png',
            bulletPoints: [
                { text: 'Aggregate all orders', highlight: true },
                { text: 'Multiple views', highlight: true },
                { text: 'Color Coded Orders', highlight: true },
                { text: 'Kitchen productivity reports', highlight: true },
                { text: 'Bump & Recall Items', highlight: true },
                { text: 'Prep time countdown timer', highlight: true },
                { text: 'Ticket Status Digital Signage Integration', highlight: true }
            ]
        },
        {
            id: '3',
            icon: "Zap",
            title: 'Boost your profit with zero-commission online ordering!',
            subtitle: 'Boost your profit with zero-commission online ordering!',
            description: "Increase your sales and expand your reach with the commission-free online ordering solution of SlateX POS. From easy menu customization to timely order fulfillment, we empower restaurants to serve customers anytime, anywhere.",
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-red-500',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-3.png',
            bulletPoints: [
                { text: 'Commission Free', highlight: true },
                { text: 'Future ordering options', highlight: true },
                { text: 'Multiple color branding option', highlight: false },
                { text: 'Multi store listing', highlight: true },
                { text: 'Loyalty Program Integration', highlight: false },
                { text: 'Offers/Coupons Management', highlight: false },
                { text: 'Integration with POS/Kitchen', highlight: false },
                { text: 'Guest Alerts Email/SMS', highlight: true },
                { text: 'Third party analytics integration', highlight: false },
                { text: 'Catering/Express Catering options', highlight: false },
            ]
        },
        {
            id: '4',
            icon: "Check",
            title: 'Tailored loyalty program all restaurants desire and customers crave',
            subtitle: 'Tailored loyalty program all restaurants desire and customers crave',
            description: 'Enhance customer retention and encourage repeat visits with personalized incentives and rewards using SlateX POS. Help customers unlock exclusive perks, fostering loyalty and satisfaction with every transaction.',
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-orange-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-4.png',
            bulletPoints: [
                { text: 'Easy & Quick implementation', highlight: true },
                { text: 'Detailed customer analytics report', highlight: false },
                { text: 'Point or Reward based', highlight: false },
                { text: 'Menu item reward options', highlight: true },
                { text: 'Inststore/Online/Kiosk integration', highlight: false },
                { text: 'Customer portal', highlight: true },
                { text: 'Integrated marketing campaigns', highlight: false },
                { text: 'Personalized communication', highlight: true },
            ]
        },
        {
            id: '5',
            icon: "Check",
            title: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
            subtitle: 'Let customers pay effortlessly with Payment Processing of SlateX POS',
            description: 'SlateX POS offers fast, secure, and flexible payment options making it easy for both the customers and the restaurants to manage payments and transactions accurately without any errors.',
            bgColor: 'bg-primary-300',
            bgGradient: 'from-orange-400 to-orange-600',
            buttonText: "Let's Connect",
            imageSrc: '/home-about-5.png',
            bulletPoints: [
                { text: 'Customized and transparent rates', highlight: true },
                { text: 'Compliant Surcharge Program', highlight: true },
                { text: 'Fast and Secure Transactions', highlight: true },
                { text: 'Comprehensive Payment Reports', highlight: true },
                { text: 'Diverse Payment Options', highlight: true },
                { text: 'Tip Management', highlight: true },
            ]
        }
    ]
};

const INITIAL_HARDWARE_DATA: HardwareData = {
    items: [
        {
            id: 1,
            title: "SlateX Station",
            description: "Dual Side display terminal streamlines high‑volume ordering and promotes upsells right at the counter. Built for restaurants, cafés, and quick‑serve chains, it offers rock‑solid performance when every second counts.",
            image: "/SlateX Station.webp",
        },
        {
            id: 2,
            title: "SlateX Tab",
            description: "Lightweight 11″ Android tablet delivers full POS capabilities wherever your guests choose to sit. Ideal for food trucks, pop‑ups, and casual dining, it lets servers take orders and accept payments instantly at the table.",
            image: "/SlateX Tab.webp",
        },
        {
            id: 3,
            title: "SlateX Go",
            description: "A fully powered handheld terminal that lets you take orders and process payments from anywhere—tableside, curbside, or on delivery. It delivers secure, encrypted transactions, tip prompts, and digital receipts in a rugged, all‑day battery design",
            image: "/SlateX Go.webp",
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
    const [heroData, setHeroData] = useState<HeroData>(INITIAL_HERO_DATA);
    const [scrollData, setScrollData] = useState<ScrollSectionData>(INITIAL_SCROLL_DATA);
    const [hardwareData, setHardwareData] = useState<HardwareData>(INITIAL_HARDWARE_DATA);
    const [blackSectionData, setBlackSectionData] = useState<BlackSectionData>(INITIAL_BLACK_SECTION_DATA);
    const [testimonialsData, setTestimonialsData] = useState<TestimonialsData>(INITIAL_TESTIMONIALS_DATA);
    const [ctaData, setCtaData] = useState<CTAData>(INITIAL_CTA_DATA);
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await getHeroPageData();
            console.log(data);
            if (data) {
                // Ensure logos have IDs
                const processedHero = {
                    ...data.hero,
                    logos: (data.hero.logos || []).map((logo: any) => ({
                        ...logo,
                        id: logo.id || crypto.randomUUID()
                    }))
                };
                setHeroData(processedHero);

                // Merge remote data with initial data to ensure all default sections exist
                if (data.scroll && data.scroll.sections) {
                    const existingIds = new Set(data.scroll.sections.map((s: any) => s.id));
                    const missingSections = INITIAL_SCROLL_DATA.sections.filter(s => !existingIds.has(s.id));

                    const mergedSections = [...data.scroll.sections, ...missingSections].sort((a, b) =>
                        parseInt(a.id) - parseInt(b.id)
                    );

                    setScrollData({
                        ...data.scroll,
                        sections: mergedSections
                    });
                } else {
                    setScrollData(data.scroll);
                }
                setHardwareData({
                    ...data.hardware,
                    items: data.hardware.items.map((item: any) => ({ ...item, id: item.id || crypto.randomUUID() })),
                    solutions: data.hardware.solutions.map((sol: any) => ({ ...sol, id: sol.id || crypto.randomUUID() }))
                });
                setBlackSectionData(data.blackSection);
                setTestimonialsData({
                    ...data.testimonials,
                    items: (data.testimonials.items || []).map((item: any) => ({ ...item, id: item.id || crypto.randomUUID() }))
                });
                setCtaData(data.cta);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

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

    const handleLogoUpload = (url: string) => {
        const newLogo = {
            id: crypto.randomUUID(),
            src: url,
            alt: 'New Partner'
        };
        setHeroData(prev => ({ ...prev, logos: [...prev.logos, newLogo] }));
    };

    const removeLogo = async (index: number) => {
        const logoToRemove = heroData.logos[index];
        if (logoToRemove && logoToRemove.src) {
            await deleteImage(logoToRemove.src);
        }
        setHeroData(prev => ({ ...prev, logos: prev.logos.filter((_, i) => i !== index) }));
    };

    const updateLogoAlt = (index: number, alt: string) => {
        setHeroData(prev => ({ ...prev, logos: prev.logos.map((logo, i) => i === index ? { ...logo, alt } : logo) }));
    };

    const updateLogoImage = async (index: number, url: string) => {
        const logoToUpdate = heroData.logos[index];
        if (logoToUpdate && logoToUpdate.src) {
            await deleteImage(logoToUpdate.src);
        }
        setHeroData(prev => ({ ...prev, logos: prev.logos.map((logo, i) => i === index ? { ...logo, src: url } : logo) }));
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
        const newId = crypto.randomUUID();
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
    // --- Hardware Handlers ---
    const handleHardwareItemChange = (id: string | number, field: any, value: any) => {
        setHardwareData(prev => ({
            ...prev,
            items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const handleHardwareImageUpload = (id: string | number, url: string) => {
        handleHardwareItemChange(id, 'image', url);
    };

    const handleSolutionChange = (id: string | number, field: any, value: any) => {
        setHardwareData(prev => ({
            ...prev,
            solutions: prev.solutions.map(sol => sol.id === id ? { ...sol, [field]: value } : sol)
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

    const handleBlackSectionImageUpload = (url: string) => {
        handleBlackSectionChange('imageSrc', url);
    };


    // --- Testimonials Handlers ---
    const handleTestimonialsChange = (field: keyof TestimonialsData, value: any) => {
        setTestimonialsData(prev => ({ ...prev, [field]: value }));
    };

    const handleTestimonialItemChange = (id: string | number, field: keyof TestimonialItem, value: any) => {
        setTestimonialsData(prev => {
            if (!prev) return null;
            return {
                ...prev,
                items: (prev.items || []).map(item =>
                    item.id === id ? { ...item, [field]: value } : item
                )
            };
        });
    };

    const handleTestimonialImageUpload = (id: string | number, url: string) => {
        handleTestimonialItemChange(id, 'image', url);
    };


    // --- CTA Handlers ---
    const handleCTAChange = (field: keyof CTAData, value: string) => {
        setCtaData(prev => ({ ...prev, [field]: value }));
    };


    // --- Common Handlers ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const fullData: HeroPageContent = {
                hero: heroData,
                scroll: scrollData,
                hardware: hardwareData,
                blackSection: blackSectionData,
                testimonials: testimonialsData,
                cta: ctaData
            };
            await saveHeroPageData(fullData);
            toast.success('Changes saved successfully!');
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving data:", error);
            toast.error('Failed to save changes.');
        } finally {
            setIsSaving(false);
        }
    };

    const toggleEdit = () => setIsEditing(!isEditing);
    // Modified cancelEdit to just turn off editing mode, could optionally re-fetch data
    const cancelEdit = () => {
        setIsEditing(false);
        // Optionally revert data to initial or last fetched state. 
        // For simplicity, we just exit edit mode, assuming user didn't want to save.
        // A robust solution would re-fetch or use a ref to store original loaded data.
    };

    if (isLoading) {
        return <div className="p-8 text-center">Loading Content...</div>;
    }

    return (
        <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6 sm:space-y-8">
            {/* Header with Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hero Module</h1>
                    <p className="text-gray-500 mt-1">Manage homepage Hero, Scroll, and Hardware sections.</p>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-center">
                    {!isEditing ? (
                        <button
                            onClick={toggleEdit}
                            className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gray-900/10 w-full sm:w-auto"
                        >
                            <Edit2 className="w-5 h-5" />
                            <span>Edit Content</span>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={cancelEdit}
                                disabled={isSaving}
                                className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto"
                            >
                                <X className="w-5 h-5" />
                                <span>Cancel</span>
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSaving}
                                className={`flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl text-gray font-medium shadow-lg shadow-primary-500/20 transition-all duration-200 w-full sm:w-auto
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
            <div className="w-full overflow-x-auto pb-2 -mb-2">
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl w-max min-w-full sm:min-w-0 sm:w-fit">
                    <button
                        onClick={() => setActiveTab('hero')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'hero' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <LayoutTemplate className="w-4 h-4" />
                        <span>Hero Section</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('scroll')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'scroll' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <Layers className="w-4 h-4" />
                        <span>Scroll Section</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('hardware')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'hardware' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <Monitor className="w-4 h-4" />
                        <span>Hardware</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('blackSection')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'blackSection' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <LayoutTemplate className="w-4 h-4" />
                        <span>Black Section</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('testimonials')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'testimonials' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <LayoutTemplate className="w-4 h-4" />
                        <span>Testimonials</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('cta')}
                        className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeTab === 'cta' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <LayoutTemplate className="w-4 h-4" />
                        <span>Contact</span>
                    </button>
                </div>
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
                    onUpdateLogoImage={updateLogoImage}
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
                    onImageUpload={handleHardwareImageUpload}
                    onSolutionChange={handleSolutionChange}
                    isEditing={isEditing}
                />
            )}

            {/* Tab: Black Section Content */}
            {activeTab === 'blackSection' && (
                <BlackSectionContentEditor
                    data={blackSectionData}
                    onChange={handleBlackSectionChange}
                    onTrustIndicatorChange={handleTrustIndicatorChange}
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
