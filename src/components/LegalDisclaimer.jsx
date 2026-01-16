import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function LegalDisclaimer() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        // Minimized
        return (
            <div
                className="fixed bottom-2 right-2 bg-white/80 backdrop-blur border border-slate-300 shadow-lg rounded-full px-3 py-1 text-[10px] text-slate-500 cursor-pointer hover:bg-white transition-colors z-50"
                onClick={() => setIsOpen(true)}
            >
                Legal & Disclaimer
            </div>
        )
    }

    return (
        <div className="fixed bottom-4 right-4 w-96 bg-white shadow-2xl rounded-lg border border-slate-200 p-4 z-50 animate-in slide-in-from-bottom-4 fade-in">
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            >
                <X size={14} />
            </button>

            <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Academic Project Disclaimer</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                This software (AIBCDS) is a <strong>Final Year Engineering Project</strong> developed for research and educational demonstration only.
            </p>
            <div className="bg-orange-50 border-l-2 border-orange-400 p-2 mb-2">
                <p className="text-[10px] text-orange-800 font-medium">
                    NOT A MEDICAL DEVICE. Do not use for actual clinical diagnosis.
                </p>
            </div>
            <div className="text-[10px] text-slate-400">
                <p>Team: [Your Names Here]</p>
                <p>Institution: [College Name]</p>
                <p>© 2026 Academic Research Group</p>
            </div>
        </div>
    );
}
