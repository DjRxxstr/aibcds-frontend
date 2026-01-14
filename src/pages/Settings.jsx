import React from 'react';
import { Bell, Shield, User, Monitor } from 'lucide-react';

export default function Settings() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h2 className="text-xl font-bold text-slate-900">Settings</h2>
                <p className="text-sm text-slate-500">Manage your account preferences and system configuration</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Sidebar Nav */}
                <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-brand-700 bg-brand-50 rounded-lg">
                        <User className="h-4 w-4" />
                        Account
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Bell className="h-4 w-4" />
                        Notifications
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Shield className="h-4 w-4" />
                        Privacy & Security
                    </button>
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Monitor className="h-4 w-4" />
                        System
                    </button>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Profile Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Profile Information</h3>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                                    <input type="text" value="Dr. Sarah Chen" className="w-full text-sm rounded-lg border-slate-200 bg-slate-50" readOnly />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1">Medical ID</label>
                                    <input type="text" value="MD-8842-XC" className="w-full text-sm rounded-lg border-slate-200 bg-slate-50" readOnly />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-medium text-slate-700 mb-1">Department</label>
                                    <input type="text" value="Oncology Radiology Unit" className="w-full text-sm rounded-lg border-slate-200 bg-slate-50" readOnly />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Preferences</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-slate-700">Dark Mode</p>
                                    <p className="text-xs text-slate-500">Use system theme where possible</p>
                                </div>
                                <div className="w-11 h-6 bg-slate-200 rounded-full cursor-pointer relative">
                                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <hr className="border-slate-100" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-slate-700">Auto-Save Reports</p>
                                    <p className="text-xs text-slate-500">Automatically save analysis results</p>
                                </div>
                                <div className="w-11 h-6 bg-brand-600 rounded-full cursor-pointer relative">
                                    <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
