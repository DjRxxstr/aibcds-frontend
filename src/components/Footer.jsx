import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400">
                        <p>&copy; {new Date().getFullYear()} AIBCDS Medical Systems. All rights reserved.</p>
                        <p className="mt-1">Version 1.0.4-stable | Authorized Clinical Use Only</p>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-600 transition-colors">Technical Support</a>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded text-slate-600">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            System Operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
