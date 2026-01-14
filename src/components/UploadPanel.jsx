import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, X, Play } from 'lucide-react';
import clsx from 'clsx';

export default function UploadPanel({ onRunAnalysis, isAnalyzing }) {
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        patientId: '',
        age: '',
        bodyPart: 'Femur',
        preprocessing: true,
        segmentation: true,
        gradCam: true,
    });
    const fileInputRef = useRef(null);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (selectedFile) => {
        // Basic validation
        if (selectedFile.type.startsWith('image/')) {
            setFile(Object.assign(selectedFile, {
                preview: URL.createObjectURL(selectedFile)
            }));
        } else {
            alert("Please upload an image file.");
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        if (!file) return;
        onRunAnalysis({ file, ...formData });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-6">
            <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-1">Upload X-ray</h2>
                <p className="text-sm text-slate-500">Supported formats: .png, .jpg, .jpeg</p>
            </div>

            {/* Upload Zone */}
            {!file ? (
                <div
                    className={clsx(
                        "border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-colors cursor-pointer",
                        dragActive ? "border-brand-500 bg-brand-50" : "border-slate-300 hover:border-brand-400 hover:bg-slate-50"
                    )}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleChange}
                    />
                    <div className="bg-brand-100 p-3 rounded-full mb-4">
                        <UploadCloud className="h-6 w-6 text-brand-600" />
                    </div>
                    <p className="text-sm font-medium text-slate-700 text-center">
                        <span className="text-brand-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-slate-400 mt-1 max-w-[200px] text-center">
                        X-ray images (DICOM support coming soon)
                    </p>
                </div>
            ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-4">
                    <div className="h-16 w-16 bg-white rounded-lg border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                        <img src={file.preview} alt="Preview" className="max-h-full max-w-full" />
                    </div>
                    <div className="flex-grow min-w-0">
                        <h4 className="text-sm font-medium text-slate-900 truncate" title={file.name}>{file.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{(file.size / 1024).toFixed(0)} KB</p>
                    </div>
                    <button onClick={removeFile} className="text-slate-400 hover:text-red-500 p-1">
                        <X className="h-5 w-5" />
                    </button>
                </div>
            )}

            <hr className="border-slate-100" />

            {/* Metadata Form */}
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Patient ID (Optional)</label>
                        <input
                            type="text"
                            name="patientId"
                            value={formData.patientId}
                            onChange={handleInputChange}
                            placeholder="e.g. PT-10024"
                            className="w-full text-sm rounded-lg border-slate-200 focus:border-brand-500 focus:ring-brand-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            placeholder="e.g. 45"
                            className="w-full text-sm rounded-lg border-slate-200 focus:border-brand-500 focus:ring-brand-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Body Region</label>
                    <select
                        name="bodyPart"
                        value={formData.bodyPart}
                        onChange={handleInputChange}
                        className="w-full text-sm rounded-lg border-slate-200 focus:border-brand-500 focus:ring-brand-500"
                    >
                        <option value="Femur">Femur</option>
                        <option value="Tibia">Tibia</option>
                        <option value="Humerus">Humerus</option>
                        <option value="Pelvis">Pelvis</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <hr className="border-slate-100" />

            {/* Options */}
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Analysis Options</h3>
                <div className="space-y-2">
                    {[
                        { id: 'preprocessing', label: 'Apply Preprocessing' },
                        { id: 'segmentation', label: 'Use Lesion Segmentation (U-Net)' },
                        { id: 'gradCam', label: 'Generate Grad-CAM Heatmap' }
                    ].map(opt => (
                        <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name={opt.id}
                                checked={formData[opt.id]}
                                onChange={handleInputChange}
                                className="rounded text-brand-600 focus:ring-brand-500 border-gray-300"
                            />
                            <span className="text-sm text-slate-700">{opt.label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button
                onClick={handleSubmit}
                disabled={!file || isAnalyzing}
                className={clsx(
                    "mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium transition-all",
                    !file || isAnalyzing
                        ? "bg-slate-300 cursor-not-allowed"
                        : "bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-600/20 active:scale-[0.98]"
                )}
            >
                {isAnalyzing ? (
                    <>Processing...</>
                ) : (
                    <>
                        <Play className="h-4 w-4 fill-current" />
                        Run Analysis
                    </>
                )}
            </button>

        </div>
    );
}
