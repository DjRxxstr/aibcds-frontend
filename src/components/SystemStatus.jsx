import React from 'react';
import { Server, ShieldCheck, Activity } from 'lucide-react';

export default function SystemStatus() {
    return (
        <section className="py-8 border-t border-slate-200 mt-12 mb-4 bg-slate-50/50 rounded-xl px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-4">System Status</h3>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-100 rounded-full text-emerald-600">
                                <Server className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-700">Inference Engine</p>
                                <p className="text-[10px] text-emerald-600 font-semibold">Online (v2.1)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-blue-100 rounded-full text-blue-600">
                                <ShieldCheck className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-700">security-protocol</p>
                                <p className="text-[10px] text-blue-600 font-semibold">TLS 1.3 Active</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-slate-200"></div>

                <div className="flex-1 max-w-lg">
                    <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-2">Model Configuration</h3>
                    <div className="flex justify-between items-center text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <span>Core: <strong className="text-slate-700">EfficientNet-B2</strong></span>
                        <span>Segmentation: <strong className="text-slate-700">U-Net (ResNet34)</strong></span>
                        <span>Vis: <strong className="text-slate-700">Grad-CAM++</strong></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
