import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import StudyInputPanel from './components/StudyInputPanel';
import ImagingResultsPane from './components/ImagingResultsPane';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRunAnalysis = async (data) => {
    setCurrentFile(data.file);
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setPredictionResult(null);
    setError(null);

    try {
      const formData = new FormData();
      if (data.file && data.file.originalFile) {
          formData.append('image', data.file.originalFile);
      } else {
          throw new Error('Image file is missing. Please re-select the image to upload.');
      }

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const result = await response.json();
      setPredictionResult(result);
    } catch (err) {
      console.error("Error during analysis:", err);
      // Give a friendly message for common fetch failures (backend down)
      const isNetworkError = err.message.includes("Failed to fetch") || err.message.includes("NetworkError");
      setError(isNetworkError ? "Cannot connect to server. Is the FLASK backend running?" : err.message);
    } finally {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }
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
          predictionResult={predictionResult}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
