import React from 'react';
import { X, FileText, Download, Printer, Copy } from 'lucide-react';

export default function ReportPreviewModal({ isOpen, onClose, file, data }) {
    if (!isOpen) return null;

    // Placeholder Data
    const reportDate = new Date().toLocaleString();
    const reportId = "RPT-" + Math.floor(Math.random() * 100000);

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl h-[90vh] flex flex-col rounded-xl shadow-2xl overflow-hidden border border-slate-200">

                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded text-white shadow-sm">
                            <FileText size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">AI Analysis Report</h3>
                            <p className="text-xs text-slate-500 font-mono">{reportId} | Generated: {reportDate}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Report Content (Scrollable Print View) */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-100">
                    <div className="bg-white shadow-lg p-10 max-w-[210mm] mx-auto min-h-[297mm] text-slate-900 font-serif">

                        {/* 1. Report Header */}
                        <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 uppercase tracking-widest mb-1">AI-BCDS</h1>
                                <p className="text-sm text-slate-600">Bone Cancer Detection System v0.1</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500 uppercase font-sans">Automated Decision Support</p>
                                <p className="text-xs text-slate-500 font-sans">Provisional Findings</p>
                            </div>
                        </div>

                        {/* 2. Study Info */}
                        <div className="grid grid-cols-2 gap-8 mb-8 font-sans text-sm">
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Study Information</h4>
                                <table className="w-full text-left">
                                    <tbody>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600 w-24">File Name:</th><td>{file?.name || "Unknown"}</td></tr>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600">Scan ID:</th><td>{Math.random().toString(36).substr(2, 9).toUpperCase()}</td></tr>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600">Region:</th><td>Femur (Auto-detected)</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Subject Metadata</h4>
                                <table className="w-full text-left">
                                    <tbody>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600 w-24">Patient ID:</th><td>PID-XXXX (Anonymized)</td></tr>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600">Age/Sex:</th><td>-- / --</td></tr>
                                        <tr className="border-b border-slate-100"><th className="py-1 font-medium text-slate-600">Date:</th><td>{new Date().toLocaleDateString()}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. AI Findings */}
                        <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded">
                            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">AI Analysis Summary</h2>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="p-3 bg-red-50 border border-red-100 rounded">
                                    <span className="block text-xs font-bold text-red-400 uppercase">Primary Classification</span>
                                    <span className="block text-xl font-bold text-red-700 mt-1">MALIGNANT</span>
                                </div>
                                <div className="p-3 bg-white border border-slate-200 rounded">
                                    <span className="block text-xs font-bold text-slate-400 uppercase">Confidence Score</span>
                                    <span className="block text-xl font-bold text-slate-800 mt-1">91.0%</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                                <p><strong>Observation:</strong> The deep learning model (EfficientNet-B2) identified high-confidence patterns consistent with malignant bone lesions.</p>
                                <p><strong>Localization:</strong> U-Net segmentation successfully isolated a region of interest in the distal diaphysis. Grad-CAM attention mapping correlates with the visible osteolytic variance.</p>
                            </div>
                        </div>

                        {/* 4. Explainability */}
                        <div className="mb-8">
                            <h3 className="text-md font-bold text-slate-800 mb-2">Interpretability & Attention</h3>
                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                "Model attention visualization highlights areas influencing the prediction. This visualization provides qualitative insight and does not represent exact lesion boundaries. The heatmaps generated by Gradient-weighted Class Activation Mapping (Grad-CAM) indicate the pixel regions that most strongly activated the final classification layer."
                            </p>
                        </div>

                        {/* 5. Footer / Disclaimer */}
                        <div className="mt-12 pt-6 border-t border-slate-300 text-center">
                            <p className="text-xs text-slate-500 font-bold mb-1">*** END OF AUTOMATED REPORT ***</p>
                            <div className="bg-yellow-50 border border-yellow-200 p-3 mt-4 text-xs text-yellow-800 text-justify">
                                <strong>DISCLAIMER:</strong> This report is generated by an AI-based decision-support system for research and educational purposes only. It does not constitute a medical diagnosis. Final interpretation and clinical decisions must be made by a qualified healthcare professional. The reliability of this prototype has not been validated in clinical trials.
                            </div>
                        </div>

                    </div>
                </div>

                {/* Modal Actions */}
                <div className="p-4 border-t border-slate-200 bg-white flex justify-end gap-3 z-10">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded border border-slate-200 transition-colors">
                        Close Preview
                    </button>
                    <button disabled className="px-4 py-2 text-sm font-medium text-slate-400 bg-slate-50 rounded border border-slate-100 cursor-not-allowed flex items-center gap-2">
                        <Copy size={16} /> Copy Text
                    </button>
                    <button onClick={() => alert("Simulated: Exporting PDF...")} className="px-4 py-2 text-sm font-bold text-white bg-slate-800 hover:bg-slate-900 rounded shadow-sm hover:shadow flex items-center gap-2 transition-all">
                        <Download size={16} /> Export to PDF
                    </button>
                </div>
            </div>
        </div>
    );
}
