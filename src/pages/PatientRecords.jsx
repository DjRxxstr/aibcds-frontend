import React from 'react';
import { Search, Filter, FileText, ChevronRight } from 'lucide-react';

export default function PatientRecords() {
    const patients = [
        { id: 'PT-10024', name: 'James Wilson', age: 45, region: 'Femur', date: '2023-10-24', status: 'Malignant' },
        { id: 'PT-10025', name: 'Linda Rodriguez', age: 62, region: 'Humerus', date: '2023-10-23', status: 'Benign' },
        { id: 'PT-10026', name: 'Robert Chen', age: 33, region: 'Tibia', date: '2023-10-23', status: 'Inconclusive' },
        { id: 'PT-10027', name: 'Sarah Miller', age: 71, region: 'Pelvis', date: '2023-10-22', status: 'Malignant' },
        { id: 'PT-10028', name: 'Michael Brown', age: 28, region: 'Femur', date: '2023-10-21', status: 'Benign' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Patient Records</h2>
                    <p className="text-sm text-slate-500">Manage and review radiology history</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search patients..."
                            className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
                        <Filter className="h-4 w-4" />
                        Filter
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Patient ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Body Region</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date Analyzed</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {patients.map((patient) => (
                                <tr key={patient.id} className="hover:bg-slate-50 transition-colors cursor-pointer group">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-600">{patient.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{patient.name} <span className="text-slate-400 text-xs ml-1">({patient.age}y)</span></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{patient.region}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{patient.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                    ${patient.status === 'Malignant' ? 'bg-red-50 text-red-700' :
                                                patient.status === 'Benign' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-slate-400 hover:text-brand-600">
                                            <ChevronRight className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Showing 5 of 128 records</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
