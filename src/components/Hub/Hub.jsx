import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, Monitor, Shield, Brain, Users, Globe, Briefcase, Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const subjects = [
    {
        id: 'EAY4615',
        name: 'ETICA PROFESIONAL',
        code: 'EAY4615',
        icon: Users,
        color: 'from-emerald-500 to-teal-500',
        presentations: []
    },
    {
        id: 'GPY6111',
        name: 'GESTION DE PROYECTOS',
        code: 'GPY6111',
        icon: Briefcase,
        color: 'from-orange-500 to-amber-500',
        presentations: []
    },
    {
        id: 'EMP2103',
        name: 'EMPRENDIMIENTO',
        code: 'EMP2103',
        icon: Globe,
        color: 'from-pink-500 to-rose-500',
        presentations: []
    },
    {
        id: 'ESP1513',
        name: 'ENGLISH PRACTICE',
        code: 'ESP1513',
        icon: Book,
        color: 'from-blue-500 to-indigo-500',
        presentations: []
    },
    {
        id: 'BIY6121',
        name: 'INTELIGENCIA DE NEGOCIOS',
        code: 'BIY6121',
        icon: Monitor,
        color: 'from-cyan-500 to-blue-500',
        presentations: []
    },
    {
        id: 'MLY0100',
        name: 'MACHINE LEARNING',
        code: 'MLY0100',
        icon: Brain,
        color: 'from-violet-500 to-purple-500',
        presentations: []
    },
    {
        id: 'ASY6131',
        name: 'SEGURIDAD EN SISTEMAS',
        code: 'ASY6131',
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        presentations: [
            { id: 'ev4', name: 'Evaluación 4: Auditoría de Seguridad', path: '/2025-2/ASY6131/ev4', date: 'Nov 2025' }
        ]
    }
];

const Hub = () => {
    const [selectedYear, setSelectedYear] = useState('2025-2');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-6">
                            <Sparkles size={12} />
                            <span>ACADEMIC PORTFOLIO</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                                Excellence
                            </span>
                        </h1>
                        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
                            A curated collection of academic projects, research, and presentations.
                            Demonstrating technical proficiency in software engineering and security.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Academic Period</h3>
                                <div className="space-y-2">
                                    {['2025-2'].map((year) => (
                                        <button
                                            key={year}
                                            onClick={() => setSelectedYear(year)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border group ${selectedYear === year
                                                    ? 'bg-indigo-500/10 border-indigo-500/50 text-indigo-300'
                                                    : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono font-medium">{year}</span>
                                                {selectedYear === year && (
                                                    <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                                        <span className="font-bold text-white">JD</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">Juan Diaz</p>
                                        <p className="text-xs text-slate-500">Duoc UC Student</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-1 flex-1 rounded-full bg-indigo-500" />
                                    <div className="h-1 flex-1 rounded-full bg-purple-500" />
                                    <div className="h-1 flex-1 rounded-full bg-cyan-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            {!selectedSubject ? (
                                <motion.div
                                    key="subjects"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {subjects.map((subject, index) => (
                                        <motion.button
                                            key={subject.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => setSelectedSubject(subject)}
                                            className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-white/5 p-1 rounded-3xl hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 text-left"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="relative z-10 bg-slate-950/50 rounded-[20px] p-6 h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-xl border border-white/10 shadow-lg`}>
                                                        <subject.icon size={24} className="text-white" />
                                                    </div>
                                                    <span className="font-mono text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-white/5">
                                                        {subject.code}
                                                    </span>
                                                </div>

                                                <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                                                    {subject.name}
                                                </h3>

                                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                                                    <span className="text-xs text-slate-500 font-medium">
                                                        {subject.presentations.length} Resources
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                                        <ArrowRight size={14} />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="presentations"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <button
                                        onClick={() => setSelectedSubject(null)}
                                        className="group mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <ChevronRight size={14} className="rotate-180" />
                                        </div>
                                        <span>Back to Subjects</span>
                                    </button>

                                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden">
                                        <div className="p-8 border-b border-white/5 bg-gradient-to-r from-slate-900 to-slate-800/50">
                                            <div className="flex items-center gap-6">
                                                <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedSubject.color} shadow-lg shadow-indigo-500/20`}>
                                                    <selectedSubject.icon size={32} className="text-white" />
                                                </div>
                                                <div>
                                                    <h2 className="text-3xl font-bold text-white mb-2">{selectedSubject.name}</h2>
                                                    <p className="text-slate-400 font-mono text-sm">{selectedSubject.code} • 2025-2</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Available Presentations</h3>
                                            <div className="space-y-4">
                                                {selectedSubject.presentations.length > 0 ? (
                                                    selectedSubject.presentations.map((pres) => (
                                                        <div
                                                            key={pres.id}
                                                            onClick={() => navigate(pres.path)}
                                                            className="group flex items-center justify-between p-5 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 cursor-pointer transition-all duration-300"
                                                        >
                                                            <div className="flex items-center gap-5">
                                                                <div className="p-3 bg-slate-900 rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-colors">
                                                                    <Monitor size={20} />
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-slate-200 group-hover:text-white text-lg transition-colors">{pres.name}</h4>
                                                                    <p className="text-sm text-slate-500 mt-1">{pres.date}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                                                    COMPLETED
                                                                </span>
                                                                <ChevronRight size={20} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-2xl">
                                                        <Terminal size={48} className="mx-auto mb-4 text-slate-700" />
                                                        <p className="text-slate-500 font-medium">No presentations available yet.</p>
                                                        <p className="text-slate-600 text-sm mt-2">Check back later for updates.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Hub;
