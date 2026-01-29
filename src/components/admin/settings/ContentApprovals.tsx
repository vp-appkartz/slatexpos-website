import React, { useEffect, useState } from 'react';
import { getAllDrafts, approveDraft, discardDraft, ContentDraft } from '../../../services/firestoreService';
import { Check, X, Clock, FileText, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ContentApprovals = () => {
    const [drafts, setDrafts] = useState<ContentDraft[]>([]);
    const [loading, setLoading] = useState(true);
    const [processingId, setProcessingId] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchDrafts = async () => {
        setLoading(true);
        const data = await getAllDrafts();
        setDrafts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchDrafts();
    }, []);

    const handleApprove = async (draft: ContentDraft) => {
        if (!window.confirm(`Are you sure you want to publish changes for ${draft.targetName}?`)) return;

        setProcessingId(draft.id);
        try {
            await approveDraft(draft.id);
            toast.success('Changes published live!');
            await fetchDrafts();
        } catch (error) {
            console.error(error);
            toast.error('Failed to publish changes.');
        } finally {
            setProcessingId(null);
        }
    };

    const handleDiscard = async (draft: ContentDraft) => {
        if (!window.confirm(`Are you sure you want to discard these changes for ${draft.targetName}? This cannot be undone.`)) return;

        setProcessingId(draft.id);
        try {
            await discardDraft(draft.id);
            toast.success('Draft discarded.');
            await fetchDrafts();
        } catch (error) {
            console.error(error);
            toast.error('Failed to discard draft.');
        } finally {
            setProcessingId(null);
        }
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return 'Unknown';
        // Firestore timestamp check
        if (timestamp.seconds) {
            return new Date(timestamp.seconds * 1000).toLocaleString();
        }
        return new Date(timestamp).toLocaleString();
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Content Approvals</h1>
                    <p className="text-gray-500 mt-1">Review and approve pending changes before they go live.</p>
                </div>
                <button
                    onClick={fetchDrafts}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                    <Clock className="w-5 h-5" />
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading drafts...</div>
                ) : drafts.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">All Caught Up!</h3>
                        <p className="text-gray-500 mt-2">There are no pending drafts waiting for approval.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Module</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Target</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Modified</th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {drafts.map((draft) => (
                                    <tr key={draft.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                                ${draft.moduleType === 'product' ? 'bg-blue-100 text-blue-800' :
                                                    draft.moduleType === 'industry' ? 'bg-purple-100 text-purple-800' :
                                                        draft.moduleType === 'pricing' ? 'bg-green-100 text-green-800' :
                                                            'bg-gray-100 text-gray-800'}`}>
                                                {draft.moduleType.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{draft.targetName}</div>
                                            <div className="text-xs text-gray-500 font-mono mt-0.5">{draft.targetCollection}/{draft.targetDocId}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {formatDate(draft.lastModified)}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleDiscard(draft)}
                                                    disabled={!!processingId}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                                    title="Discard Draft"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => handleApprove(draft)}
                                                    disabled={!!processingId}
                                                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-black text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-primary-500/30"
                                                >
                                                    {processingId === draft.id ? (
                                                        <Clock className="w-4 h-4 animate-spin" />
                                                    ) : (
                                                        <Check className="w-4 h-4" />
                                                    )}
                                                    Publish
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentApprovals;
