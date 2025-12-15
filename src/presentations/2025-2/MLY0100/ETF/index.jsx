import React, { useState, useEffect } from 'react';
import {
    ChevronLeft, ChevronRight, Home, TrendingUp, Users, Map,
    Database, Server, Code, CheckCircle, BarChart, X, Menu, ArrowLeft,
    Target, Search, Award, Brain, BarChart2, PieChart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MonopolyMLPresentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const slides = [
        { id: 'cover', title: 'Portada', icon: Home },
        { id: 'context', title: 'Contexto y Objetivos', icon: Search },
        { id: 'data', title: 'Comprensión de Datos', icon: Database },
        { id: 'modeling', title: 'Enfoque de Modelado', icon: Brain },
        { id: 'classification', title: 'Resultados Clasificación', icon: Users },
        { id: 'regression', title: 'Resultados Regresión', icon: TrendingUp },
        { id: 'segmentation', title: 'Segmentación', icon: PieChart },
        { id: 'conclusions', title: 'Conclusiones Finales', icon: Award }
    ];

    const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') nextSlide();
            if (e.key === 'ArrowLeft' || e.key === 'Backspace') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // --- Slide Components ---

    const CoverSlide = () => (
        <div className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12"
            style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            }}
        >
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 animate-fade-in max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-8 backdrop-blur-sm">
                    <Brain className="text-purple-400" size={20} />
                    <span className="text-purple-200 text-sm font-medium tracking-wide">Machine Learning – MLY0100</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Optimización de Estrategias Comerciales mediante <span className="text-purple-400">Machine Learning</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-light text-blue-200 mb-12 flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-blue-500/50"></span>
                    Examen Transversal - Caso "Monopoly"
                    <span className="h-px w-12 bg-blue-500/50"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors group">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Users className="text-purple-400" size={20} />
                        </div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Integrante</p>
                        <p className="text-white font-semibold text-lg">Juan Diaz</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors group">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Target className="text-blue-400" size={20} />
                        </div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Metodología</p>
                        <p className="text-white font-semibold text-lg">CRISP-DM</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const ContextSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Contexto del Negocio y Objetivos" subtitle="Fase 1: CRISP-DM" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-purple-900/10 rounded-xl p-8 border border-purple-500/20 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Target className="text-purple-400" /> El Problema
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-4">
                        "Monopoly" enfrenta desafíos críticos en la retención de clientes y en la estimación precisa del valor de su cartera.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Actualmente, la toma de decisiones es reactiva. Se busca pasar a un enfoque <strong>proactivo</strong> impulsado por datos.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Objetivos Específicos</h3>

                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
                        <div className="p-3 bg-red-500/20 rounded-lg shrink-0">
                            <Users className="text-red-400" size={24} />
                        </div>
                        <div>
                            <strong className="text-white text-lg block mb-1">1. Predecir Fuga</strong>
                            <p className="text-gray-400 text-sm">Identificar clientes en riesgo de abandonar la empresa (Clasificación).</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                        <div className="p-3 bg-green-500/20 rounded-lg shrink-0">
                            <TrendingUp className="text-green-400" size={24} />
                        </div>
                        <div>
                            <strong className="text-white text-lg block mb-1">2. Estimar Valor</strong>
                            <p className="text-gray-400 text-sm">Determinar la antigüedad y valor estimado de los clientes (Regresión).</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                        <div className="p-3 bg-blue-500/20 rounded-lg shrink-0">
                            <PieChart className="text-blue-400" size={24} />
                        </div>
                        <div>
                            <strong className="text-white text-lg block mb-1">3. Segmentar Clientes</strong>
                            <p className="text-gray-400 text-sm">Agrupar clientes por características comunes para marketing dirigido (Clustering).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 text-center italic text-gray-500">
                "No buscamos solo predecir números, sino resolver problemas de negocio reales."
            </div>
        </div>
    );

    const DataSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Comprensión y Preparación de Datos" subtitle="Calidad de Datos y Limpieza" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-red-900/10 p-6 rounded-xl border border-red-500/20">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <X className="text-red-400" /> Desafíos Encontrados
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-red-400 shrink-0" />
                                <div>
                                    <strong className="text-gray-200 block">Encabezados Corruptos</strong>
                                    <p className="text-gray-400 text-sm">Presencia de filas basura (ej. fila de "1s") en los metadatos.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 mt-2 rounded-full bg-red-400 shrink-0" />
                                <div>
                                    <strong className="text-gray-200 block">Formato Decimal Erróneo</strong>
                                    <p className="text-gray-400 text-sm">Uso de comas (,) en lugar de puntos (.) causando que variables numéricas se lean como texto (Object -&gt; Float).</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-green-900/10 p-6 rounded-xl border border-green-500/20">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="text-green-400" /> Tratamiento Aplicado
                        </h3>
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                <span className="text-green-400 font-bold text-sm uppercase tracking-wide">Limpieza</span>
                                <p className="text-white mt-1">Eliminación de filas corruptas y conversión de tipos.</p>
                            </div>
                            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                <span className="text-blue-400 font-bold text-sm uppercase tracking-wide">Imputación Nulos</span>
                                <p className="text-white mt-1">Uso de la <strong>Mediana</strong> en variables numéricas para preservar distribución.</p>
                            </div>
                            <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                                <span className="text-purple-400 font-bold text-sm uppercase tracking-wide">Outliers</span>
                                <p className="text-white mt-1">Aplicación de <strong>StandardScaler</strong> para mitigar impacto sin perder datos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ModelingSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Enfoque de Modelado" subtitle="Diferenciando Tareas Supervisadas" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center h-[calc(100%-150px)]">

                {/* Classification */}
                <div className="h-full flex flex-col bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400 transition-all hover:-translate-y-1 shadow-lg group">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tarea 1: Clasificación</h3>
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-300 text-lg">
                            ¿El cliente se fugará?
                        </p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                                <span className="text-gray-400">Objetivo</span>
                                <span className="text-blue-300 font-medium">Predecir Categoría (Sí/No)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                                <span className="text-gray-400">Salida</span>
                                <span className="text-blue-300 font-medium">Binaria (0 o 1)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-blue-500/20 pb-2">
                                <span className="text-gray-400">Modelo</span>
                                <span className="text-blue-300 font-medium">Regresión Logística</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regression */}
                <div className="h-full flex flex-col bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all hover:-translate-y-1 shadow-lg group">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <TrendingUp size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tarea 2: Regresión</h3>
                    <div className="flex-1 space-y-6">
                        <p className="text-gray-300 text-lg">
                            ¿Cuál es la antigüedad estimada?
                        </p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center border-b border-purple-500/20 pb-2">
                                <span className="text-gray-400">Objetivo</span>
                                <span className="text-purple-300 font-medium">Predecir Valor Continuo</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-purple-500/20 pb-2">
                                <span className="text-gray-400">Salida</span>
                                <span className="text-purple-300 font-medium">Número Real</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-purple-500/20 pb-2">
                                <span className="text-gray-400">Modelo</span>
                                <span className="text-purple-300 font-medium">Random Forest</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    const ClassificationResultsSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Análisis de Resultados: Clasificación" subtitle="Modelo de Fuga de Clientes" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-4">Estrategia: Manejo del Desbalance</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden flex">
                                <div className="bg-blue-500 w-[10%]"></div>
                                <div className="bg-gray-500 w-[90%]"></div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Pocos casos de "Fuga" vs muchos de "No Fuga".
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30 text-sm font-bold">
                                SMOTE
                            </div>
                            <span className="text-gray-300 text-sm">Sobremuestreo sintético de la clase minoritaria.</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 text-center">
                            <p className="text-blue-300 text-sm uppercase tracking-wide mb-2">Métrica Prioritaria</p>
                            <p className="text-3xl font-bold text-white">Recall</p>
                            <p className="text-xs text-gray-400 mt-2">Minimizar Falsos Negativos (Fugas no detectadas)</p>
                        </div>
                        <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 text-center">
                            <p className="text-purple-300 text-sm uppercase tracking-wide mb-2">ROC-AUC</p>
                            <p className="text-3xl font-bold text-white">0.9165</p>
                            <p className="text-xs text-gray-400 mt-2">Excelente capacidad de distinción</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Matriz de Confusión: Regresión Logística + SMOTE</h3>
                    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg border border-gray-600">
                        <img
                            src="https://i.imgur.com/oPl4BXj.png"
                            alt="Matriz de Confusión"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </div>
                    <p className="text-center text-gray-500 text-xs mt-4 italic">
                        "Alta efectividad en la detección de casos positivos (Fuga) gracias al balanceo con SMOTE."
                    </p>
                </div>
            </div>
        </div>
    );

    const RegressionSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Resultados: Regresión y Optimización" subtitle="Estimación de Antigüedad del Cliente" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-2">Selección del Modelo</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="line-through text-gray-500">Regresión Lineal Simple</span>
                            <span className="text-gray-500">→</span>
                            <span className="text-green-400 font-bold">Random Forest Regressor</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            La regresión lineal fue insuficiente para capturar la complejidad de los datos (relaciones no lineales).
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-4">Optimización de Hiperparámetros</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span className="text-gray-400">max_depth</span>
                                <span className="text-purple-300 font-mono">10</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span className="text-gray-400">n_jobs</span>
                                <span className="text-purple-300 font-mono">-1 (Todo CPU)</span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">
                            *Se limitó la profundidad para evitar Overfitting y mejorar tiempos.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-gray-800 p-8 rounded-xl border border-green-500/30 text-center flex flex-col items-center justify-center space-y-6">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-2 animate-pulse">
                        <BarChart2 className="text-green-400" size={32} />
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-full">
                        <div className="text-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">R2 Score</p>
                            <h2 className="text-3xl font-bold text-white">0.6025</h2>
                        </div>
                        <div className="text-center border-l border-gray-700">
                            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">MAE</p>
                            <h2 className="text-3xl font-bold text-white">5.97</h2>
                        </div>
                        <div className="text-center border-l border-gray-700">
                            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">RMSE</p>
                            <h2 className="text-3xl font-bold text-white">8.39</h2>
                        </div>
                    </div>

                    <p className="text-green-300 text-sm font-medium border-t border-gray-700 pt-4 w-full">
                        Modelo optimizado con Random Forest
                    </p>
                </div>
            </div>
        </div>
    );

    const SegmentationSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Segmentación de Clientes: Resultados" subtitle="Clustering con K-Means" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full pb-20">
                {/* Left Column: Stats & Elbow Method */}
                <div className="space-y-6">
                    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <TrendingUp size={18} className="text-purple-400" /> Método del Codo
                        </h3>
                        <div className="rounded-lg overflow-hidden border border-gray-600">
                            <img src="https://i.imgur.com/RY1uICj.png" alt="Método del Codo" referrerPolicy="no-referrer" className="w-full h-48 object-cover hover:object-contain transition-all duration-300 bg-white" />
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Punto de inflexión óptimo identificado en K=3 clusters.</p>
                    </div>

                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-white font-bold mb-4">Distribución de Clientes</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-purple-900/20 rounded border-l-4 border-purple-500">
                                <span className="text-gray-300">Cluster 0</span>
                                <span className="text-white font-mono font-bold">3,722</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-900/20 rounded border-l-4 border-red-500">
                                <span className="text-gray-300">Cluster 1</span>
                                <span className="text-white font-mono font-bold">5,696</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-blue-900/20 rounded border-l-4 border-blue-500">
                                <span className="text-gray-300">Cluster 2 (Mayoritario)</span>
                                <span className="text-white font-mono font-bold">41,707</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interpretation */}
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col justify-center">
                    <PieChart size={48} className="text-purple-400 mb-6" />
                    <h3 className="text-2xl font-light text-white mb-4">Interpretación de Segmentos</h3>

                    <div className="space-y-6">
                        <div className="pl-4 border-l-2 border-purple-500">
                            <strong className="text-purple-300 block text-lg">Cluster 0 (Minoritario)</strong>
                            <p className="text-gray-400">Grupo selecto. Posiblemente clientes de alto valor o nicho específico.</p>
                        </div>
                        <div className="pl-4 border-l-2 border-red-500">
                            <strong className="text-red-300 block text-lg">Cluster 1 (Riesgo/Oportunidad)</strong>
                            <p className="text-gray-400">Segmento mediano que requiere atención diferenciada para evitar fuga o aumentar valor.</p>
                        </div>
                        <div className="pl-4 border-l-2 border-blue-500">
                            <strong className="text-blue-300 block text-lg">Cluster 2 (Masivo)</strong>
                            <p className="text-gray-400">Representa la base principal de clientes ("Core Business"). Las estrategias aquí tienen el mayor impacto en volumen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ConclusionsSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#1a1a2e]">
            <SectionHeader title="Integración y Conclusiones del Negocio" subtitle="Impacto Estratégico" />

            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl bg-gray-800/50 p-2 rounded-xl border border-gray-700 shadow-2xl mb-8">
                    <img
                        src="https://i.imgur.com/zX16utS.png"
                        alt="Integración del Negocio"
                        referrerPolicy="no-referrer"
                        className="w-full rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors">
                        <CheckCircle className="text-green-400 mb-3" size={24} />
                        <h4 className="text-white font-bold mb-2">Decisiones Informadas</h4>
                        <p className="text-sm text-gray-400">Pasamos de la intuición a la certeza matemática con un modelo de clasificación de alta precisión (AUC 0.91).</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                        <Target className="text-blue-400 mb-3" size={24} />
                        <h4 className="text-white font-bold mb-2">Focalización</h4>
                        <p className="text-sm text-gray-400">La segmentación identificó claramente el "Core" del negocio (Cluster 2) vs segmentos de oportunidad.</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                        <Award className="text-purple-400 mb-3" size={24} />
                        <h4 className="text-white font-bold mb-2">Valor Agregado</h4>
                        <p className="text-sm text-gray-400">Integración exitosa de técnicas supervisadas y no supervisadas para una visión 360 del cliente.</p>
                    </div>
                </div>
            </div>
        </div>
    );


    // --- Helper Components ---

    const SectionHeader = ({ title, subtitle }) => (
        <div className="mb-8 border-b border-gray-700/50 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{title}</h2>
            <p className="text-purple-400 text-lg font-light">{subtitle}</p>
        </div>
    );

    const renderSlide = () => {
        switch (slides[currentSlide].id) {
            case 'cover': return <CoverSlide />;
            case 'context': return <ContextSlide />;
            case 'data': return <DataSlide />;
            case 'modeling': return <ModelingSlide />;
            case 'classification': return <ClassificationResultsSlide />;
            case 'regression': return <RegressionSlide />;
            case 'segmentation': return <SegmentationSlide />;
            case 'conclusions': return <ConclusionsSlide />;
            default: return <CoverSlide />;
        }
    };

    return (
        <div className="min-h-screen bg-[#16213e] text-gray-200 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
            <style>{`
                .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            {/* Mobile Header */}
            <header className="md:hidden bg-[#1a1a2e] border-b border-white/10 p-4 flex items-center justify-between sticky top-0 z-50">
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <Brain className="text-purple-400" size={20} />
                    <span className="font-bold text-white tracking-wide">ML Monopoly</span>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white transition-colors">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-[#1a1a2e]/95 backdrop-blur-xl pt-16 animate-fade-in">
                    <nav className="p-4 space-y-1">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => { setCurrentSlide(index); setIsMenuOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentSlide === index
                                    ? 'bg-purple-600 text-white font-medium shadow-lg shadow-purple-900/50'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <slide.icon size={18} />
                                <span>{slide.title}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            <div className="flex flex-1 overflow-hidden h-screen">
                {/* Desktop Sidebar */}
                <aside className="hidden md:flex w-72 bg-[#1a1a2e] border-r border-white/5 flex-col relative z-20 shadow-2xl">
                    <div className="p-6 border-b border-white/5 bg-[#16213e]">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider mb-8 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Volver al Hub
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl shadow-lg border border-purple-400/30">
                                <Brain className="text-white" size={28} />
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-lg leading-tight">Monopoly ML</h1>
                                <p className="text-xs text-purple-300 font-medium mt-1">Examen Transversal</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 overflow-y-auto space-y-1">
                        <p className="text-[10px] font-bold text-purple-400/60 uppercase tracking-widest mb-4 px-3 mt-2">Navegación</p>
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${currentSlide === index
                                    ? 'bg-purple-600/90 text-white shadow-lg shadow-purple-900/50 font-medium'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <slide.icon size={18} className={`transition-colors ${currentSlide === index ? 'text-white' : 'group-hover:text-purple-300'}`} />
                                <span className="relative z-10">{slide.title}</span>
                                {currentSlide === index && <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-100 -z-0" />}
                            </button>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 bg-[#0f172a] border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Juan Díaz</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Machine Learning</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col overflow-hidden bg-[#16213e] relative">
                    {/* Slide Render */}
                    <div key={currentSlide} className="flex-1 overflow-hidden relative">
                        {renderSlide()}
                    </div>

                    {/* Navigation Bar */}
                    <footer className="bg-[#1a1a2e] border-t border-white/5 p-4 shrink-0 z-30">
                        <div className="flex items-center justify-between max-w-5xl mx-auto">
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft size={20} />
                                <span className="hidden sm:inline font-medium">Anterior</span>
                            </button>

                            <div className="flex items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index
                                            ? 'bg-purple-500 w-8'
                                            : 'bg-gray-700 w-2 hover:bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                disabled={currentSlide === slides.length - 1}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <span className="hidden sm:inline font-medium">Siguiente</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default MonopolyMLPresentation;
