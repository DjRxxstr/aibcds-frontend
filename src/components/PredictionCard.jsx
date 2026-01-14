import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

export default function PredictionCard({ loading, result }) {
    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center min-h-[200px] animate-pulse">
                <div className="h-8 w-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mb-4"></div>
                <p className="text-brand-700 font-medium">Analyzing X-ray image...</p>
                <p className="text-slate-400 text-xs mt-2">Running U-Net segmentation & Grad-CAM...</p>
            </div>
        );
    }

    if (!result) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center justify-center min-h-[200px]">
                <p className="text-slate-400 text-sm text-center">
                    Upload an image and run analysis to see predictions.
                </p>
            </div>
        );
    }

    const isMalignant = result.class === 'Malignant';
    const confidencePercent = Math.round(result.confidence * 100);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-sm font-semibold text-slate-700">Prediction Summary</h3>
            </div>
            <div className="p-6">
                <div className={clsx(
                    "flex items-center gap-3 mb-6 p-4 rounded-lg border",
                    isMalignant
                        ? "bg-red-50 border-red-100 text-red-700"
                        : "bg-emerald-50 border-emerald-100 text-emerald-700"
                )}>
                    {isMalignant ? <AlertCircle className="h-6 w-6" /> : <CheckCircle2 className="h-6 w-6" />}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Predicted Class</p>
                        <div className="text-xl font-bold">{result.class}</div>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-xs font-medium opacity-80">Confidence</p>
                        <div className="text-xl font-bold">{result.confidence}</div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700">Malignant</span>
                            <span className="text-slate-500">{isMalignant ? confidencePercent : 100 - confidencePercent}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                            <div
                                className="bg-red-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${isMalignant ? confidencePercent : 100 - confidencePercent}%` }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium text-slate-700">Benign</span>
                            <span className="text-slate-500">{!isMalignant ? confidencePercent : 100 - confidencePercent}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                            <div
                                className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${!isMalignant ? confidencePercent : 100 - confidencePercent}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
