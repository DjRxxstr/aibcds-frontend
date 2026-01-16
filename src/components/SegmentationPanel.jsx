import React from 'react';
import { Layers } from 'lucide-react';

export default function SegmentationPanel({ file, isAnalyzed }) {
    if (!file) {
        return (
            <div className="bg-slate-900 flex flex-col h-full rounded border border-slate-800 relative">
                <div className="absolute top-2 left-2 text-xs font-mono text-slate-500 z-10 flex items-center gap-2">
                    <Layers size={12} /> Segmentation Mask
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-slate-800 text-[10px] uppercase tracking-wider">Empty</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-1 relative flex flex-col h-full rounded border border-slate-200 overflow-hidden shadow-sm">
            <div className="absolute top-2 left-2 z-10">
                <div className="bg-black/60 backdrop-blur px-2 py-1 rounded flex items-center gap-2 text-white">
                    <Layers size={12} className="text-purple-300" />
                    <span className="text-xs font-bold text-purple-100">U-Net Segmentation</span>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative bg-slate-900 rounded overflow-hidden">
                <img src={file.preview} alt="seg-base" className="max-w-full max-h-full object-contain opacity-50 grayscale" />

                {/* Simulation of Mask */}
                {isAnalyzed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* This would be real mask data, for now a CSS trick simulated overlay */}
                        <div className="w-32 h-32 border-2 border-purple-500 bg-purple-500/20 rounded-full blur-sm animate-pulse"></div>
                    </div>
                )}

                {!isAnalyzed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <span className="text-xs text-slate-400 font-mono">Waiting for analysis...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
