import React from 'react';
import ImageViewer from './ImageViewer';
import SegmentationPanel from './SegmentationPanel';
import GradCAMPanel from './GradCAMPanel';
import PredictionSummary from './PredictionSummary';

export default function ImagingResultsPane({ file, isAnalyzed, predictionResult, error }) {
    return (
        <main className="flex-1 bg-slate-50 p-2 overflow-hidden flex flex-col">
            {/* Top Toolbar Placeholder */}
            <div className="h-8 flex items-center justify-end gap-2 mb-2 px-2">
                <span className="text-[10px] text-slate-400 font-mono uppercase">Workstation ID: WS-042</span>
            </div>

            {/* 2x2 PACS Grid */}
            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 min-h-0">
                {/* 1. Original */}
                <div className="min-h-0 relative">
                    <ImageViewer file={file} label="1. Original Acquisition" />
                </div>

                {/* 2. Segmentation */}
                <div className="min-h-0 relative">
                    <SegmentationPanel file={file} isAnalyzed={isAnalyzed} />
                </div>

                {/* 3. Grad-CAM */}
                <div className="min-h-0 relative">
                    <GradCAMPanel file={file} isAnalyzed={isAnalyzed} />
                </div>

                {/* 4. Predictions */}
                <div className="min-h-0 relative text-slate-900">
                    <PredictionSummary isAnalyzed={isAnalyzed} file={file} predictionResult={predictionResult} error={error} />
                </div>
            </div>
        </main>
    );
}
