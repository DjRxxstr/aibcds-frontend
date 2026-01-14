import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function ImageCard({ title, imageSrc, overlay, placeholderText, type = 'default' }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
                {imageSrc && (
                    <button className="text-slate-400 hover:text-brand-600 transition-colors">
                        <Maximize2 className="h-4 w-4" />
                    </button>
                )}
            </div>
            <div className="relative flex-grow min-h-[250px] bg-slate-100 flex items-center justify-center p-4">
                {imageSrc ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="max-h-full max-w-full object-contain rounded-md"
                        />
                        {overlay && (
                            <div className="absolute inset-0 pointer-events-none">
                                {overlay}
                            </div>
                        )}

                        {/* Simulation of segmentation overlay if type is segmentation */}
                        {type === 'segmentation' && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                                <div className="border-2 border-red-500 w-1/3 h-1/3 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center p-6">
                        <div className="mx-auto h-12 w-12 text-slate-300 mb-3 bg-slate-200 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </div>
                        <p className="text-sm text-slate-400">{placeholderText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
