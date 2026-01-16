import React from 'react';
import { ZoomIn, Move, Maximize2 } from 'lucide-react';

export default function ImageViewer({ file, label = "Original X-Ray" }) {
    if (!file) {
        return (
            <div className="bg-black/90 p-1 flex flex-col h-full rounded border border-slate-800 relative group">
                <div className="absolute top-2 left-2 text-xs font-mono text-slate-500 z-10">{label}</div>
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-slate-700 text-xs uppercase tracking-widest">No Signal</span>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white p-1 flex flex-col h-full rounded border border-slate-200 relative overflow-hidden group shadow-sm">
            {/* HUD Info */}
            <div className="absolute top-1 left-1 right-1 p-2 flex justify-between items-start pointer-events-none z-10">
                <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-white shadow-sm">
                    <span className="text-xs font-bold block mb-0.5 text-blue-200">{label}</span>
                    <span className="text-[10px] font-mono opacity-80 block">{file.name}</span>
                </div>
            </div>

            {/* Toolbar (Hover) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-lg border border-slate-200 text-slate-600">
                <button className="hover:text-blue-600 p-1"><ZoomIn size={14} /></button>
                <button className="hover:text-blue-600 p-1"><Move size={14} /></button>
                <div className="w-px h-3 bg-slate-300"></div>
                <button className="hover:text-blue-600 p-1"><Maximize2 size={14} /></button>
            </div>

            {/* Image Render */}
            <div className="flex-1 flex items-center justify-center bg-slate-900 rounded overflow-hidden relative">
                <img src={file.preview} alt="xray" className="max-w-full max-h-full object-contain" />
            </div>
        </div>
    );
}
