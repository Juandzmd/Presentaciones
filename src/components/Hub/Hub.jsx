import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, Monitor, Shield, Brain, Users, Globe, Briefcase, Terminal, ArrowRight, Sparkles, Play, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const initialSubjects = [
    {
        id: 'EAY4615',
        name: 'ÉTICA PROFESIONAL',
        code: 'EAY4615',
        icon: Users,
        color: 'from-emerald-500 to-teal-500',
        image: '/Presentaciones/assets/cards/ethics.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'GPY6111',
        name: 'GESTIÓN DE PROYECTOS',
        code: 'GPY6111',
        icon: Briefcase,
        color: 'from-orange-500 to-amber-500',
        image: '/Presentaciones/assets/cards/management.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'EMP2103',
        name: 'EMPRENDIMIENTO',
        code: 'EMP2103',
        icon: Globe,
        color: 'from-pink-500 to-rose-500',
        image: '/Presentaciones/assets/cards/management.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'ESP1513',
        name: 'ENGLISH PRACTICE',
        code: 'ESP1513',
        icon: Book,
        color: 'from-blue-500 to-indigo-500',
        image: '/Presentaciones/assets/cards/ethics.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'BIY6121',
        name: 'INTELIGENCIA DE NEGOCIOS',
        code: 'BIY6121',
        icon: Monitor,
        color: 'from-cyan-500 to-blue-500',
        image: '/Presentaciones/assets/cards/ai.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'MLY0100',
        name: 'MACHINE LEARNING',
        code: 'MLY0100',
        icon: Brain,
        color: 'from-violet-500 to-purple-500',
        image: '/Presentaciones/assets/cards/ai.png',
        isPresented: false,
        presentations: []
    },
    {
        id: 'ASY6131',
        name: 'SEGURIDAD EN SISTEMAS',
        code: 'ASY6131',
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        image: '/Presentaciones/assets/cards/security.png',
        isPresented: true,
        presentations: [
            { id: 'ev4', name: 'Evaluación 4: Auditoría de Seguridad', path: '/2025-2/ASY6131/ev4', date: 'Nov 2025' }
        ]
    }
];

const Hub = () => {
    const [selectedYear, setSelectedYear] = useState('2025-2');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [subjects, setSubjects] = useState(initialSubjects);
    const navigate = useNavigate();

    const togglePresented = (id, e) => {
        e.stopPropagation();
        setSubjects(prev => prev.map(sub =>
            sub.id === id ? { ...sub, isPresented: !sub.isPresented } : sub
        ));
    };

    const sortedSubjects = useMemo(() => {
        return [...subjects].sort((a, b) => {
            // 1. Unpresented first (!isPresented)
            if (a.isPresented !== b.isPresented) {
                return a.isPresented ? 1 : -1;
            }
            // 2. Most presentations first
            if (a.presentations.length !== b.presentations.length) {
                return b.presentations.length - a.presentations.length;
            }
            // 3. Alphabetical fallback
            return a.name.localeCompare(b.name);
        });
    }, [subjects]);

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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono mb-6">
                            <Sparkles size={12} />
                            <span>PORTAFOLIO ACADÉMICO</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-serif">
                            Ingeniería de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-yellow-200 to-gold-500">
                                Excelencia
                            </span>
                        </h1>
                        <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
                            Una colección curada de proyectos académicos, investigaciones y presentaciones.
                            Demostrando competencia técnica en ingeniería de software y seguridad.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Periodo Académico</h3>
                                <div className="space-y-2">
                                    {['2025-2'].map((year) => (
                                        <button
                                            key={year}
                                            onClick={() => setSelectedYear(year)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border group ${selectedYear === year
                                                    ? 'bg-gold-500/10 border-gold-500/50 text-gold-400'
                                                    : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono font-medium">{year}</span>
                                                {selectedYear === year && (
                                                    <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-gold-500" />
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
                                        <p className="text-xs text-slate-500">Estudiante Duoc UC</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-1 flex-1 rounded-full bg-gold-500" />
                                    <div className="h-1 flex-1 rounded-full bg-slate-700" />
                                    <div className="h-1 flex-1 rounded-full bg-slate-700" />
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
                                    {sortedSubjects.map((subject) => (
                                        <motion.div
                                            layout
                                            key={subject.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="group relative overflow-hidden rounded-[20px] border border-white/10 h-[320px] hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10"
                                        >
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${subject.image})` }}
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950/95" />

                                            {/* Content */}
                                            <div className="relative z-10 p-6 h-full flex flex-col">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg`}>
                                                        <subject.icon size={24} className="text-white" />
                                                    </div>
                                                    <span className="font-mono text-xs text-white/80 bg-black/40 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                                                        {subject.code}
                                                    </span>
                                                </div>

                                                <div className="mt-auto">
                                                    <h3 className="text-2xl font-bold text-white mb-2 font-serif tracking-wide">
                                                        {subject.name}
                                                    </h3>

                                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                                                        <button
                                                            onClick={() => setSelectedSubject(subject)}
                                                            className="flex items-center gap-2 px-4 py-2 bg-gold-500 text-slate-950 font-bold text-sm rounded-lg hover:bg-gold-400 transition-colors"
                                                        >
                                                            Ver Proyecto
                                                            <ArrowRight size={16} />
                                                        </button>

                                                        {/* Presented Switch */}
                                                        <button
                                                            onClick={(e) => togglePresented(subject.id, e)}
                                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${subject.isPresented
                                                                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                                                                    : 'bg-red-500/10 border-red-500/50 text-red-400'
                                                                }`}
                                                        >
                                                            <div className={`w-2 h-2 rounded-full ${subject.isPresented ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                                            <span className="text-xs font-bold uppercase">
                                                                {subject.isPresented ? 'Presentado' : 'Pendiente'}
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
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
                                        <span>Volver a Asignaturas</span>
                                    </button>

                                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden relative">
                                        {/* Header Background */}
                                        <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden z-0">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
                                                style={{ backgroundImage: `url(${selectedSubject.image})` }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 to-slate-900" />
                                        </div>

                                        <div className="relative z-10 p-8 pt-12">
                                            <div className="flex items-end gap-6 mb-8">
                                                <div className={`p-6 rounded-2xl bg-slate-950 border border-white/10 shadow-2xl`}>
                                                    <selectedSubject.icon size={48} className="text-gold-400" />
                                                </div>
                                                <div>
                                                    <h2 className="text-4xl font-bold text-white mb-2 font-serif">{selectedSubject.name}</h2>
                                                    <p className="text-gold-400 font-mono text-sm">{selectedSubject.code} • 2025-2</p>
                                                </div>
                                            </div>

                                            <div className="mt-12">
                                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Presentaciones Disponibles</h3>
                                                <div className="space-y-4">
                                                    {selectedSubject.presentations.length > 0 ? (
                                                        selectedSubject.presentations.map((pres) => (
                                                            <div
                                                                key={pres.id}
                                                                onClick={() => navigate(pres.path)}
                                                                className="group flex items-center justify-between p-5 rounded-2xl bg-slate-800/30 border border-white/5 hover:border-gold-500/50 hover:bg-slate-800/50 cursor-pointer transition-all duration-300"
                                                            >
                                                                <div className="flex items-center gap-5">
                                                                    <div className="p-3 bg-slate-900 rounded-xl text-gold-400 group-hover:text-slate-900 group-hover:bg-gold-500 transition-colors">
                                                                        <Play size={20} fill="currentColor" />
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="font-bold text-slate-200 group-hover:text-white text-lg transition-colors">{pres.name}</h4>
                                                                        <p className="text-sm text-slate-500 mt-1">{pres.date}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-4">
                                                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                                                        COMPLETADO
                                                                    </span>
                                                                    <ChevronRight size={20} className="text-slate-600 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-2xl">
                                                            <Terminal size={48} className="mx-auto mb-4 text-slate-700" />
                                                            <p className="text-slate-500 font-medium">No hay presentaciones disponibles aún.</p>
                                                            <p className="text-slate-600 text-sm mt-2">Vuelve más tarde para ver actualizaciones.</p>
                                                        </div>
                                                    )}
                                                </div>
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
