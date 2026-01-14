import React, { useState } from 'react';
import UploadPanel from '../components/UploadPanel';
import ResultsPanel from '../components/ResultsPanel';
import SystemStatus from '../components/SystemStatus';

export default function Dashboard() {
    const [analyzing, setAnalyzing] = useState(false);
    const [results, setResults] = useState(null);
    const [file, setFile] = useState(null);

    const handleRunAnalysis = (data) => {
        setAnalyzing(true);
        setResults(null);
        setFile(data.file);

        setTimeout(() => {
            setAnalyzing(false);
            setResults({
                class: 'Malignant',
                confidence: 0.92,
                segmentation: true,
                gradCam: true
            });
        }, 2500);
    };

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 xl:col-span-3 space-y-6">
                    <UploadPanel
                        onRunAnalysis={handleRunAnalysis}
                        isAnalyzing={analyzing}
                    />
                    <div className="lg:hidden text-center text-xs text-slate-400">
                        Scroll down for results
                    </div>
                </div>

                <div className="lg:col-span-8 xl:col-span-9">
                    <ResultsPanel
                        file={file}
                        results={results}
                        isAnalyzing={analyzing}
                    />
                </div>
            </div>
            <SystemStatus />
        </div>
    );
}
