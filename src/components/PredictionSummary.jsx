import React, { useState } from 'react';
import { FileChartColumn, AlertTriangle, FileText } from 'lucide-react';
import ReportPreviewModal from './ReportPreviewModal';

export default function PredictionSummary({ isAnalyzed, file, predictionResult, error, studyMetadata }) {
    const [showReport, setShowReport] = useState(false);

    if (!isAnalyzed) {
        return (
            <div className="h-full bg-slate-50 rounded border border-slate-200 flex flex-col items-center justify-center p-6 text-center">
                <FileChartColumn className="text-slate-300 mb-3" size={32} />
                <p className="text-sm font-medium text-slate-400">Analysis Pending</p>
                <p className="text-xs text-slate-400 mt-1">Run diagnostics to generate prediction report.</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="h-full bg-red-50 rounded border border-red-200 flex flex-col items-center justify-center p-6 text-center text-red-700">
                <AlertTriangle className="text-red-400 mb-3" size={32} />
                <p className="text-sm font-bold mb-1">Analysis Failed</p>
                <p className="text-xs max-w-[200px] leading-relaxed opacity-90">{error}</p>
            </div>
        )
    }

    // Real Results
    const malignProb = predictionResult ? Math.round((predictionResult.prediction === "Malignant" ? predictionResult.confidence : 1 - predictionResult.confidence) * 100) : 0;
    const benignProb = predictionResult ? Math.round((predictionResult.prediction === "Benign" ? predictionResult.confidence : 1 - predictionResult.confidence) * 100) : 0;
    const isMalignant = predictionResult ? predictionResult.prediction === "Malignant" : false;

    return (
        <>
            <div className="h-full bg-white rounded border border-slate-200 flex flex-col p-4 shadow-sm relative overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Prediction Summary</h3>
                    {predictionResult && (
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-full border shadow-sm ${isMalignant ? 'bg-red-50 text-red-700 border-red-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>
                            {isMalignant ? 'MALIGNANT DETECTED' : 'BENIGN DETECTED'}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                    {/* Score Large */}
                    <div className="text-center py-2">
                        <div className="text-5xl font-light text-slate-900">{predictionResult ? Math.round(predictionResult.confidence * 100) : '--'}<span className="text-2xl text-slate-400">%</span></div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Confidence Score</div>
                    </div>

                    {/* Bars */}
                    <div className="space-y-3 pt-2 border-t border-slate-100">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700">Malignant (Positive)</span>
                                <span className="font-mono text-slate-500">{malignProb}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 rounded-full" style={{ width: `${malignProb}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="font-medium text-slate-700">Benign (Negative)</span>
                                <span className="font-mono text-slate-500">{benignProb}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${benignProb}%` }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Action Button: Generate Report */}
                    <button
                        onClick={() => setShowReport(true)}
                        className="w-full mt-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded flex items-center justify-center gap-2 text-sm font-semibold transition-colors"
                    >
                        <FileText size={16} />
                        Generate AI Report
                    </button>
                </div>

                {/* Disclaimer */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-start gap-2">
                    <AlertTriangle size={12} className="text-orange-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-slate-400 italic leading-tight">
                        This is a decision-support calculation. Results must be verified by a qualified radiologist.
                    </p>
                </div>
            </div>

            {/* Modal */}
            <ReportPreviewModal
                isOpen={showReport}
                onClose={() => setShowReport(false)}
                file={file}
                studyMetadata={studyMetadata}
                predictionResult={predictionResult}
            />
        </>
    );
}
