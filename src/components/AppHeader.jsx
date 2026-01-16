import React, { useState } from 'react';
import { Activity, HelpCircle } from 'lucide-react';
import WorkflowModal from './WorkflowModal';

export default function AppHeader() {
    const [showHelp, setShowHelp] = useState(false);

    return (
        <>
            <header className="h-12 bg-white border-b border-slate-200 text-slate-800 flex items-center justify-between px-4 select-none flex-none z-50">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                        <Activity size={16} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold tracking-tight leading-none text-slate-900">AIBCDS <span className="text-slate-500 font-medium">| Bone Cancer Detection System</span></h1>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500">
                    <button
                        onClick={() => setShowHelp(true)}
                        className="flex items-center gap-1 hover:text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                    >
                        <HelpCircle size={14} />
                        <span className="hidden sm:inline font-medium">Workflow</span>
                    </button>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="font-bold text-[10px] tracking-wide">SYSTEM READY</span>
                    </div>
                    <span className="font-mono text-slate-400">v0.1.0</span>
                </div>
            </header>

            <WorkflowModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
        </>
    );
}
