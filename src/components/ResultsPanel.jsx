import React from 'react';
import ImageCard from './ImageCard';
import PredictionCard from './PredictionCard';

export default function ResultsPanel({ file, results, isAnalyzing }) {
    // Determine if we should show results based on state
    const hasResults = !!results;
    const showPlaceholders = !hasResults && !isAnalyzing;

    return (
        <div className="flex flex-col gap-6">

            {/* Top Row: Original & Segmentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageCard
                    title="Original X-ray"
                    imageSrc={file?.preview}
                    placeholderText="Upload an image to view it here."
                />
                <ImageCard
                    title="Lesion Segmentation"
                    imageSrc={hasResults ? file?.preview : null}
                    type="segmentation"
                    placeholderText="Segmentation mask will appear here after analysis."
                // In a real app, this would be the segmented mask result
                />
            </div>

            {/* Bottom Row: Grad-CAM & Prediction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageCard
                    title="Grad-CAM Heatmap"
                    imageSrc={hasResults ? file?.preview : null}
                    placeholderText="Heatmap visualization will appear here."
                    overlay={hasResults && (
                        <div
                            className="w-full h-full opacity-50 mix-blend-multiply"
                            style={{
                                background: 'radial-gradient(circle at 60% 40%, rgb(255, 0, 0) 0%, rgba(255,165,0,0.5) 40%, transparent 70%)'
                            }}
                        ></div>
                    )}
                />
                <PredictionCard
                    loading={isAnalyzing}
                    result={results}
                />
            </div>

        </div>
    );
}
