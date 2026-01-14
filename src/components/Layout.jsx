import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, onOpenProfile }) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Header onOpenProfile={onOpenProfile} />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
