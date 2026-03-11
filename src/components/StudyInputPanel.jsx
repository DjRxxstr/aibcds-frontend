import React, { useState } from 'react';
import { Upload, FileImage, AlertCircle, Play, CheckCircle2 } from 'lucide-react';

export default function StudyInputPanel({ onRunAnalysis, isAnalyzing }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [patientId, setPatientId] = useState('');
    const [age, setAge] = useState('');
    const [anatomy, setAnatomy] = useState('Femur');

    // Analysis Options
    const [usePreprocessing, setUsePreprocessing] = useState(true);
    const [useSegmentation, setUseSegmentation] = useState(true);
    const [useExplainability, setUseExplainability] = useState(true);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a fake preview for the file
            const previewUrl = URL.createObjectURL(file);
            setSelectedFile({
                originalFile: file,
                name: file.name,
                size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
                preview: previewUrl,
                type: file.type
            });
        }
    };

    const handleRunClick = () => {
        if (!selectedFile) return;
        onRunAnalysis({
            file: selectedFile,
            metadata: { patientId, age, anatomy },
            options: { usePreprocessing, useSegmentation, useExplainability }
        });
    };

    return (
        <aside className="w-80 bg-slate-50 border-r border-slate-200 flex flex-col h-full overflow-hidden">

            {/* Panel Headers */}
            <div className="p-3 border-b border-slate-200 bg-white">
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Study Input</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">

                {/* 1. X-Ray Import */}
                <section>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Acquire Image</label>

                    {!selectedFile ? (
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileSelect}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <Upload className="text-slate-400 mb-2" size={24} />
                            <span className="text-xs text-slate-500 font-medium">Click or Drag X-Ray</span>
                            <span className="text-[10px] text-slate-400 mt-1">DICOM, PNG, JPG supported</span>
                        </div>
                    ) : (
                        <div className="bg-white border boundary-slate-200 rounded-lg p-3 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-slate-100 rounded flex-none overflow-hidden">
                                    <img src={selectedFile.preview} alt="preview" className="w-full h-full object-cover" />
                                </div>
                                <div className="overflow-hidden flex-1">
                                    <p className="text-sm font-medium text-slate-900 truncate">{selectedFile.name}</p>
                                    <p className="text-xs text-slate-500">{selectedFile.size} • {selectedFile.type}</p>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="text-[10px] text-red-500 hover:underline mt-1"
                                        disabled={isAnalyzing}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* 2. Patient Data */}
                <section>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Metadata <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Patient ID / MRN"
                            className="w-full text-sm border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-1.5 px-2 bg-white border"
                            value={patientId}
                            onChange={e => setPatientId(e.target.value)}
                            disabled={isAnalyzing}
                        />
                        <div className="flex gap-2">
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-20 text-sm border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-1.5 px-2 bg-white border"
                                value={age}
                                onChange={e => setAge(e.target.value)}
                                disabled={isAnalyzing}
                            />
                            <select
                                className="flex-1 text-sm border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-1.5 px-2 bg-white border"
                                value={anatomy}
                                onChange={e => setAnatomy(e.target.value)}
                                disabled={isAnalyzing}
                            >
                                <option>Femur</option>
                                <option>Tibia</option>
                                <option>Humerus</option>
                                <option>Pelvis</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* 3. Analysis Config */}
                <section className="pt-2 border-t border-slate-200">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Protocol Options</label>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={usePreprocessing}
                                onChange={e => setUsePreprocessing(e.target.checked)}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                disabled={isAnalyzing}
                            />
                            <span className="text-sm text-slate-600">Adaptive Histogram Eq.</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={useSegmentation}
                                onChange={e => setUseSegmentation(e.target.checked)}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                disabled={isAnalyzing}
                            />
                            <span className="text-sm text-slate-600">Lesion Segmentation</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={useExplainability}
                                onChange={e => setUseExplainability(e.target.checked)}
                                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                disabled={isAnalyzing}
                            />
                            <span className="text-sm text-slate-600">Grad-CAM Visualization</span>
                        </label>
                    </div>
                </section>
            </div>

            {/* Footer / Action */}
            <div className="p-4 bg-white border-t border-slate-200">
                <button
                    onClick={handleRunClick}
                    disabled={!selectedFile || isAnalyzing}
                    className={`
             w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-sm font-medium transition-all
             ${!selectedFile
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : isAnalyzing
                                ? 'bg-blue-50 text-blue-600 cursor-wait'
                                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow active:scale-95'
                        }
           `}
                >
                    {isAnalyzing ? (
                        <>
                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                        </>
                    ) : (
                        <>
                            <Play size={16} fill="currentColor" />
                            Run Diagnostics
                        </>
                    )}
                </button>
                <div className="mt-3 flex items-start gap-2">
                    <AlertCircle size={14} className="text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-slate-500 leading-tight">
                        Files are processed locally using the embedded inference engine. No data leaves this workstation.
                    </p>
                </div>
            </div>

        </aside>
    );
}
