import React from 'react';
import { Eye } from 'lucide-react';

export default function GradCAMPanel({ file, isAnalyzed }) {
    if (!file) {
        return (
            <div className="bg-slate-50 flex flex-col h-full rounded border border-slate-200 relative">
                <div className="absolute top-2 left-2 text-xs font-mono text-slate-400 z-10 flex items-center gap-2">
                    <Eye size={12} /> Gradient CAM
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-slate-300 text-[10px] uppercase tracking-wider">Empty</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-1 relative flex flex-col h-full rounded border border-slate-200 overflow-hidden shadow-sm">
            <div className="absolute top-2 left-2 z-10">
                <div className="bg-black/60 backdrop-blur px-2 py-1 rounded flex items-center gap-2 text-white">
                    <Eye size={12} className="text-orange-300" />
                    <span className="text-xs font-bold text-orange-100">Model Attention</span>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative bg-slate-900 rounded overflow-hidden">
                <img src={file.preview} alt="cam-base" className="max-w-full max-h-full object-contain" />

                {/* Simulation of Heatmap */}
                {isAnalyzed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-to-r from-red-500/50 via-yellow-500/30 to-transparent rounded-full blur-xl mix-blend-color-dodge"></div>
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
