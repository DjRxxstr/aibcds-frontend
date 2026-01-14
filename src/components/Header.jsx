import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Stethoscope } from 'lucide-react';
import clsx from 'clsx';

export default function Header({ onOpenProfile }) {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-brand-600 bg-brand-50" : "text-slate-600 hover:text-brand-600 hover:bg-slate-50";
    };

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3 text-brand-600 decoration-none">
                            <div className="bg-brand-50 p-1.5 rounded-lg border border-brand-100">
                                <Activity className="h-6 w-6" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold leading-tight text-slate-900 tracking-tight">
                                    AIBCDS <span className="font-normal text-slate-600">Clinical Suite</span>
                                </h1>
                                <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                                    Radiology Decision Support
                                </p>
                            </div>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center space-x-2">
                        <Link to="/" className={clsx("px-3 py-2 text-sm font-medium transition-colors rounded-lg", isActive('/'))}>
                            Dashboard
                        </Link>
                        <Link to="/patients" className={clsx("px-3 py-2 text-sm font-medium transition-colors rounded-lg", isActive('/patients'))}>
                            Patient Records
                        </Link>
                        <Link to="/settings" className={clsx("px-3 py-2 text-sm font-medium transition-colors rounded-lg", isActive('/settings'))}>
                            Settings
                        </Link>
                        <div className="h-6 w-px bg-slate-200 mx-2"></div>
                        <button
                            onClick={onOpenProfile}
                            className="flex items-center gap-3 pl-2 hover:bg-slate-50 p-2 rounded-xl transition-colors text-left"
                        >
                            <div className="hidden lg:block">
                                <p className="text-xs font-semibold text-slate-700 leading-none">Dr. Sarah Chen</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">Chief Radiologist</p>
                            </div>
                            <div className="h-8 w-8 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center text-slate-500">
                                <Stethoscope className="h-4 w-4" />
                            </div>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
