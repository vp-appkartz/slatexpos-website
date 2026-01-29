import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

// --- Draft System ---

export interface ContentDraft {
    id: string; // composite: targetCollection_targetDocId
    targetCollection: string;
    targetDocId: string;
    targetName: string; // Human readable name (e.g., "QSR Industry" or "Pro Plan")
    moduleType: 'product' | 'industry' | 'pricing' | 'hero' | 'hardware';
    data: any;
    lastModified: any; // Firestore Timestamp
    status: 'draft';
}

const DRAFTS_COLLECTION = 'content_drafts';

// Save a draft (Upsert)
export const saveDraft = async (
    targetCollection: string,
    targetDocId: string,
    data: any,
    moduleType: ContentDraft['moduleType'],
    targetName: string
): Promise<void> => {
    try {
        const draftId = `${targetCollection}_${targetDocId}`;
        const draftRef = doc(db, DRAFTS_COLLECTION, draftId);

        const draftData: ContentDraft = {
            id: draftId,
            targetCollection,
            targetDocId,
            targetName,
            moduleType,
            data,
            lastModified: serverTimestamp(), // Use Firestore serverTimestamp
            status: 'draft'
        };

        await setDoc(draftRef, draftData);
    } catch (error) {
        console.error("Error saving draft:", error);
        throw error;
    }
};

// Get a specific draft
export const getDraft = async (targetCollection: string, targetDocId: string): Promise<ContentDraft | null> => {
    try {
        const draftId = `${targetCollection}_${targetDocId}`;
        const draftRef = doc(db, DRAFTS_COLLECTION, draftId);
        const docSnap = await getDoc(draftRef);
        return docSnap.exists() ? (docSnap.data() as ContentDraft) : null;
    } catch (error) {
        console.error("Error fetching draft:", error);
        return null;
    }
};

// Get all pending drafts
export const getAllDrafts = async (): Promise<ContentDraft[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, DRAFTS_COLLECTION));
        return querySnapshot.docs.map(doc => doc.data() as ContentDraft);
    } catch (error) {
        console.error("Error fetching all drafts:", error);
        return [];
    }
};

// Approve a draft (Publish to Live)
export const approveDraft = async (draftId: string): Promise<void> => {
    try {
        const draftRef = doc(db, DRAFTS_COLLECTION, draftId);
        const draftSnap = await getDoc(draftRef);

        if (!draftSnap.exists()) throw new Error("Draft not found");

        const draft = draftSnap.data() as ContentDraft;

        // 1. Write to Live Collection
        const liveDocRef = doc(db, draft.targetCollection, draft.targetDocId);
        await setDoc(liveDocRef, {
            ...draft.data,
            updatedAt: serverTimestamp() // Add update timestamp on approval
        }, { merge: true });

        // 2. Delete Draft
        await deleteDoc(draftRef);
    } catch (error) {
        console.error("Error approving draft:", error);
        throw error;
    }
};

// Discard a draft
export const discardDraft = async (draftId: string): Promise<void> => {
    try {
        const draftRef = doc(db, DRAFTS_COLLECTION, draftId);
        await deleteDoc(draftRef);
    } catch (error) {
        console.error("Error discarding draft:", error);
        throw error;
    }
};

// --- Types (Schema Definitions) ---
import { HardwareData } from '../components/admin/hero/HardwareContentEditor';
import { BlackSectionData } from '../components/admin/hero/BlackSectionContentEditor';
import { TestimonialsData } from '../components/Common/Testimonials';
import { CTAData } from '../components/admin/hero/CTAContentEditor';

// Hero Module Types
export interface HeroData {
    heading: string;
    highlightedText: string;
    suffixText: string;
    buttonText: string;
    backgroundImage: string;
    centerImage: string;
    images: {
        leftTop: string;
        leftBadge: string;
        leftBottom: string;
        rightTop: string;
        rightBadge: string;
        rightBottom: string;
    };
    logos: Array<{ src: string; alt: string }>;
}

export interface ScrollSectionData {
    heroTitle: string;
    heroSubtitle: string;
    sections: Array<{
        id: string;
        icon: string;
        title: string;
        subtitle: string;
        description: string;
        bgColor: string;
        bgGradient: string;
        buttonText: string;
        bulletPoints: Array<{ text: string; highlight: boolean }>;
        imageSrc: string;
    }>;
}

export interface HeroPageContent {
    hero: HeroData;
    scroll: ScrollSectionData;
    hardware: HardwareData;
    blackSection: BlackSectionData;
    testimonials: TestimonialsData;
    cta: CTAData;
    updatedAt?: any;
}

// Product/Industry Types
import { ProductPageData } from '../Data/productData';
import { CategoryPageData } from '../Data/categoryData';

// Hardware Page Types
export interface HardwareItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface SolutionItem {
    id: number;
    title: string;
    row: number;
}

export interface HardwarePageContent {
    hardware: {
        title: string;
        subtitle?: string;
        description?: string;
        items: HardwareItem[];
    };
    solutions: SolutionItem[] | {
        title: string;
        subtitle: string;
        backgroundImage: string;
        items: SolutionItem[];
    };
    updatedAt?: any;
}

// Pricing Page Types
export interface PricingPageContent {
    hero: any;
    plans: any;
    addons: any;
    faq: any;
    updatedAt?: any;
}


// --- Firestore Functions ---

// 1. Hero Module (Stored in 'content' collection, doc 'hero')
const HERO_DOC_REF = doc(db, 'content', 'hero');

// Subscribe to Hero Data (Real-time)

export const subscribeToHeroPageData = (callback: (data: HeroPageContent | null) => void) => {
    return onSnapshot(HERO_DOC_REF, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data() as HeroPageContent);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error("Error subscribing to hero page data:", error);
        callback(null);
    });
};

export const getHeroPageData = async (): Promise<HeroPageContent | null> => {
    try {
        const docSnap = await getDoc(HERO_DOC_REF);
        if (docSnap.exists()) {
            return docSnap.data() as HeroPageContent;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching hero page data:", error);
        return null;
    }
};

export const saveHeroPageData = async (data: HeroPageContent): Promise<void> => {
    try {
        await setDoc(HERO_DOC_REF, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error("Error saving hero page data:", error);
        throw error;
    }
};

// 2. Hardware Page (Stored in 'content' collection, doc 'hardware_page')
const HARDWARE_DOC_REF = doc(db, 'content', 'hardware_page');

export const getHardwarePageData = async (): Promise<any | null> => {
    try {
        const docSnap = await getDoc(HARDWARE_DOC_REF);
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
        console.error("Error fetching hardware page data:", error);
        return null;
    }
};

export const saveHardwarePageData = async (data: any): Promise<void> => {
    try {
        await setDoc(HARDWARE_DOC_REF, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error("Error saving hardware page data:", error);
        throw error;
    }
};

export const subscribeToHardwarePageData = (callback: (data: HardwarePageContent | null) => void) => {
    return onSnapshot(HARDWARE_DOC_REF, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data() as HardwarePageContent);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error("Error subscribing to hardware page data:", error);
        callback(null);
    });
};

// 3. Pricing Page (Stored in 'content' collection, doc 'pricing_page')
const PRICING_DOC_REF = doc(db, 'content', 'pricing_page');

export const getPricingPageData = async (): Promise<any | null> => {
    try {
        const docSnap = await getDoc(PRICING_DOC_REF);
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
        console.error("Error fetching pricing page data:", error);
        return null;
    }
};

export const savePricingPageData = async (data: any): Promise<void> => {
    try {
        await setDoc(PRICING_DOC_REF, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error("Error saving pricing page data:", error);
        throw error;
    }
};

export const subscribeToPricingPageData = (callback: (data: any | null) => void) => {
    return onSnapshot(PRICING_DOC_REF, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data());
        } else {
            callback(null);
        }
    }, (error) => {
        console.error("Error subscribing to pricing page data:", error);
        callback(null);
    });
};

// 4. Products (Collection 'products', doc ID = slug)
export const getProductData = async (slug: string): Promise<ProductPageData | null> => {
    try {
        const docRef = doc(db, 'products', slug);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? (docSnap.data() as ProductPageData) : null;
    } catch (error) {
        console.error(`Error fetching product data for ${slug}:`, error);
        return null;
    }
};

export const subscribeToProductData = (slug: string, callback: (data: ProductPageData | null) => void) => {
    const docRef = doc(db, 'products', slug);
    return onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data() as ProductPageData);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error(`Error subscribing to product data for ${slug}:`, error);
        callback(null);
    });
};

export const saveProductData = async (slug: string, data: ProductPageData): Promise<void> => {
    try {
        const docRef = doc(db, 'products', slug);
        await setDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error(`Error saving product data for ${slug}:`, error);
        throw error;
    }
};

// 5. Industries (Collection 'industries', doc ID = slug)
export const getIndustryData = async (slug: string): Promise<CategoryPageData | null> => {
    try {
        const docRef = doc(db, 'industries', slug);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? (docSnap.data() as CategoryPageData) : null;
    } catch (error) {
        console.error(`Error fetching industry data for ${slug}:`, error);
        return null;
    }
};

export const saveIndustryData = async (slug: string, data: CategoryPageData): Promise<void> => {
    try {
        const docRef = doc(db, 'industries', slug);
        await setDoc(docRef, {
            ...data,
            updatedAt: serverTimestamp()
        }, { merge: true });
    } catch (error) {
        console.error(`Error saving industry data for ${slug}:`, error);
        throw error;
    }
};

export const subscribeToIndustryData = (slug: string, callback: (data: CategoryPageData | null) => void) => {
    const docRef = doc(db, 'industries', slug);
    return onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
            callback(docSnap.data() as CategoryPageData);
        } else {
            callback(null);
        }
    }, (error) => {
        console.error(`Error subscribing to industry data for ${slug}:`, error);
        callback(null);
    });
};

