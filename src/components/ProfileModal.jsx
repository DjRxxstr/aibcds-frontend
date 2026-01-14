import React from 'react';
import { X, User, Briefcase, Award, LogOut } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                <div className="relative h-24 bg-gradient-to-r from-brand-600 to-brand-700">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="px-6 pb-6 mt-[-3rem]">
                    <div className="flex flex-col items-center">
                        <div className="h-24 w-24 bg-white rounded-full p-1.5 shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover border border-slate-100"
                            />
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-slate-900">Dr. Sarah Chen</h3>
                        <p className="text-sm font-medium text-brand-600">Chief Radiologist</p>
                        <p className="text-xs text-slate-500 mt-1">Oncology Department</p>

                        <div className="w-full mt-6 space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="bg-white p-2 rounded-lg text-slate-500 shadow-sm">
                                    <Briefcase className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">ID Number</p>
                                    <p className="text-sm font-semibold text-slate-700">MD-8842-XC</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className="bg-white p-2 rounded-lg text-slate-500 shadow-sm">
                                    <Award className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">License Key</p>
                                    <p className="text-sm font-semibold text-slate-700">RAD-2025-LIC</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 text-red-700 font-medium rounded-xl hover:bg-red-100 transition-colors">
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
