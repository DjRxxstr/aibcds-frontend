import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import StudyInputPanel from './components/StudyInputPanel';
import ImagingResultsPane from './components/ImagingResultsPane';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  const handleRunAnalysis = (data) => {
    setCurrentFile(data.file);
    setIsAnalyzing(true);
    setAnalysisComplete(false);

    // Simulate Processing Delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2500); // 2.5s delay
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-100 text-slate-900 overflow-hidden">
      {/* 1. Top Bar */}
      <AppHeader />

      {/* 2. Main Workstation Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane */}
        <StudyInputPanel
          onRunAnalysis={handleRunAnalysis}
          isAnalyzing={isAnalyzing}
        />

        {/* Right Pane */}
        <ImagingResultsPane
          file={currentFile}
          isAnalyzed={analysisComplete}
        />
      </div>
    </div>
  );
}

export default App;
