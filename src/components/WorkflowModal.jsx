import React from 'react';
import { X, Cpu, ScanLine, Brain, FileSearch } from 'lucide-react';

export default function WorkflowModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Cpu size={18} className="text-blue-500" /> System Workflow
                    </h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-200 rounded transition-colors">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-none w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Image Acquisition</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">System ingests DICOM or Standard X-Ray images via local drag-and-drop interface.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-none w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Segmentation (U-Net)</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">U-Net architecture isolates the region of interest (bone structure vs soft tissue) to reduce noise.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-none w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">3</div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Classification & Attention</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">EfficientNet-B2 classifies the lesion. Grad-CAM generates a heatmap showing exactly which pixels influenced the decision.</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-slate-50 text-xs text-slate-500 text-center border-t border-slate-100">
                    Press <span className="font-mono bg-white px-1 py-0.5 rounded border border-slate-300">ESC</span> to close
                </div>
            </div>
        </div>
    );
}
