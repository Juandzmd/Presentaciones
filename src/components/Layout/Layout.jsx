import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-slate-950">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-800/20 blur-[120px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            <Sidebar />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen pl-20">
                <header className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-lg tracking-tight text-slate-200">
                                HUB<span className="text-gold-400">-Presentaciones</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block text-xs font-mono text-slate-500">
                                v1.1.0-gold
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400">
                                JD
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    {children}
                </main>

                <footer className="border-t border-white/5 py-8 mt-auto">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-slate-600 text-sm">
                            © 2025 Juan Salvador Díaz Modinger. HUB-Presentaciones.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
