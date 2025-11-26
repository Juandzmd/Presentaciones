import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, Monitor, Shield, Brain, Users, Globe, Briefcase, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const subjects = [
    {
        id: 'EAY4615',
        name: 'ETICA PROFESIONAL',
        code: 'EAY4615',
        icon: Users,
        presentations: []
    },
    {
        id: 'GPY6111',
        name: 'GESTION DE PROYECTOS INFORMATICOS',
        code: 'GPY6111',
        icon: Briefcase,
        presentations: []
    },
    {
        id: 'EMP2103',
        name: 'HERRAMIENTAS PARA EL EMPRENDIMIENTO',
        code: 'EMP2103',
        icon: Globe,
        presentations: []
    },
    {
        id: 'ESP1513',
        name: 'INTEGRATED ENGLISH PRACTICE',
        code: 'ESP1513',
        icon: Book,
        presentations: []
    },
    {
        id: 'BIY6121',
        name: 'INTELIGENCIA DE NEGOCIOS',
        code: 'BIY6121',
        icon: Monitor,
        presentations: []
    },
    {
        id: 'MLY0100',
        name: 'MACHINE LEARNING',
        code: 'MLY0100',
        icon: Brain,
        presentations: []
    },
    {
        id: 'ASY6131',
        name: 'SEGURIDAD EN SISTEMAS COMPUTACIONALES',
        code: 'ASY6131',
        icon: Shield,
        presentations: [
            { id: 'ev4', name: 'Evaluación 4: Auditoría de Seguridad', path: '/2025-2/ASY6131/ev4' }
        ]
    }
];

const Hub = () => {
    const [selectedYear, setSelectedYear] = useState('2025-2');
    const [selectedSubject, setSelectedSubject] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <header className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
                    >
                        Academic Portfolio
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl"
                    >
                        Juan Salvador Díaz Modinger | Duoc UC
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar / Year Selection */}
                    <div className="lg:col-span-3 space-y-4">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Semestres</h2>
                        {['2025-2'].map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 border ${selectedYear === year
                                        ? 'bg-blue-600/10 border-blue-500/50 text-blue-400 shadow-lg shadow-blue-500/10'
                                        : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-lg">{year}</span>
                                    {selectedYear === year && <ChevronRight size={16} />}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            {!selectedSubject ? (
                                <motion.div
                                    key="subjects"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {subjects.map((subject, index) => (
                                        <motion.button
                                            key={subject.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => setSelectedSubject(subject)}
                                            className="group relative overflow-hidden bg-gray-900 border border-gray-800 p-6 rounded-2xl text-left hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="relative z-10 flex items-start gap-4">
                                                <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                                    <subject.icon size={24} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-mono text-gray-500 mb-1 block">{subject.code}</span>
                                                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                                                        {subject.name}
                                                    </h3>
                                                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                                                        <span className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-blue-500 transition-colors" />
                                                        {subject.presentations.length} Presentaciones
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
                                        className="mb-6 text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                                    >
                                        ← Volver a Asignaturas
                                    </button>

                                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
                                            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                                <selectedSubject.icon size={32} />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white">{selectedSubject.name}</h2>
                                                <p className="text-gray-400 font-mono">{selectedSubject.code}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {selectedSubject.presentations.length > 0 ? (
                                                selectedSubject.presentations.map((pres) => (
                                                    <div
                                                        key={pres.id}
                                                        onClick={() => navigate(pres.path)}
                                                        className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 cursor-pointer transition-all group"
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                                <Monitor size={20} />
                                                            </div>
                                                            <span className="font-medium text-gray-200 group-hover:text-white">{pres.name}</span>
                                                        </div>
                                                        <ChevronRight size={16} className="text-gray-500 group-hover:text-blue-400" />
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-center py-12 text-gray-500">
                                                    <Terminal size={48} className="mx-auto mb-4 opacity-20" />
                                                    <p>No hay presentaciones disponibles aún.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hub;
