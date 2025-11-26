import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-slate-950">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] rounded-full bg-purple-500/5 blur-[100px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <Shield size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-200">
                                Hub<span className="text-indigo-400">.Presentaciones</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:block text-xs font-mono text-slate-500">
                                v1.0.0-beta
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
                            © 2025 Juan Salvador Díaz Modinger. Built with React & Tailwind.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
