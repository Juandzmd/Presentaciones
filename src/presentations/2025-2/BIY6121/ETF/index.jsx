import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronLeft, ChevronRight, Home, PieChart, TrendingUp, Users, Map,
    Database, Server, Code, CheckCircle, BarChart, X, Menu, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const KentFoodsETF = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const slides = [
        { id: 'cover', title: 'Portada' },
        { id: 'context', title: 'Contexto del Negocio' },
        { id: 'kpis', title: 'Alineación Estratégica' },
        { id: 'architecture', title: 'Especificación Técnica' },
        { id: 'model', title: 'Diseño Dimensional' },
        { id: 'etl', title: 'Proceso ETL' },
        { id: 'validation', title: 'Validación Técnica' },
        { id: 'olap', title: 'Capa Analítica' },
        { id: 'dashboard', title: 'Visualización Final' },
        { id: 'conclusion', title: 'Conclusiones' }
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
        <div className="flex flex-col items-center justify-center text-center h-full bg-gradient-to-br from-[#003366] to-[#001a33] text-white p-8">
            <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <PieChart size={80} className="text-[#ffcc00]" />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold uppercase mb-4 font-sans tracking-wider"
            >
                Examen Transversal
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-[#005b96] border-b-4 border-[#ffcc00] pb-2 mb-8"
            >
                Caso: Kent Foods
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-12"
            >
                Inteligencia de Negocios – BIY6121
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                className="border-t border-white/20 pt-6"
            >
                <p className="text-lg">Alumno: Juan Díaz | Sección: 005V</p>
                <p className="text-base text-gray-400">Profesor(a): Stefanny Alexandra Salcidua Venegas</p>
            </motion.div>
        </div>
    );

    const ContextSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Contexto del Negocio</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Situación Actual de Kent Foods
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 items-center">
                <div>
                    <p className="text-xl text-gray-800 mb-4"><strong>El Desafío:</strong><br />
                        Kent Foods, una distribuidora de alimentos en expansión, enfrenta dificultades para analizar su desempeño debido a la dispersión de datos.</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg mb-6">
                        <li>Datos en sistema transaccional (OLTP).</li>
                        <li>Consultas lentas y complejas.</li>
                        <li>Ausencia de indicadores históricos.</li>
                    </ul>
                    <div className="bg-[#003366]/10 p-4 rounded-lg border-l-4 border-[#003366]">
                        <p className="text-[#003366] font-bold text-lg">
                            Objetivo: Implementar una solución BI para centralizar la información y soportar la toma de decisiones.
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-lg">
                    <img src="https://i.imgur.com/H2sCkSm.png" alt="Diagrama Relacional" className="w-full h-auto object-contain max-h-[400px]" />
                    <p className="text-center text-gray-500 text-sm mt-2 italic">Figura 1: Base de datos original OLTP</p>
                </div>
            </div>
        </div>
    );

    const KPISlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Alineación Estratégica</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Preguntas de Negocio y KPIs
            </h2>
            <p className="text-gray-700 text-xl mb-8">El diseño del Data Warehouse fue guiado para responder a tres indicadores clave:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: TrendingUp, title: "KPI 1: Variación de Ingresos", desc: "¿Cómo han crecido las ventas respecto al mes anterior?" },
                    { icon: Users, title: "KPI 2: Productividad", desc: "¿Cuál es el desempeño de ventas por cada empleado?" },
                    { icon: Map, title: "KPI 3: Cobertura", desc: "¿Qué regiones y países concentran la mayor facturación?" }
                ].map((kpi, idx) => (
                    <div key={idx} className="bg-white border-t-4 border-[#ffcc00] p-6 shadow-xl rounded-lg text-center flex flex-col items-center">
                        <kpi.icon size={48} className="text-[#003366] mb-4" />
                        <h3 className="text-[#005b96] font-bold text-lg mb-2">{kpi.title}</h3>
                        <p className="text-gray-600">{kpi.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const ArchitectureSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Especificación Técnica</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Herramientas y Arquitectura
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <ul className="space-y-4 text-gray-700 text-lg">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                            <span><strong>Metodología:</strong> Ralph Kimball (Bottom-up).</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                            <span><strong>Base de Datos:</strong> SQL Server (AWS RDS).</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                            <span><strong>ETL:</strong> SQL Server Integration Services (SSIS).</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                            <span><strong>Motor OLAP:</strong> SQL Server Analysis Services (SSAS).</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#ffcc00] rounded-full" />
                            <span><strong>Visualización:</strong> Power BI.</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-lg">
                    <img src="https://i.imgur.com/UYuB069.png" alt="Entorno Visual Studio" className="w-full h-auto object-contain max-h-[400px]" />
                    <p className="text-center text-gray-500 text-sm mt-2 italic">Entorno de Desarrollo Integrado (Visual Studio 2022)</p>
                </div>
            </div>
        </div>
    );

    const ModelSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Diseño de la Solución</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Modelo Dimensional (Estrella)
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-lg p-0">
                    <img src="https://i.imgur.com/IYef1TZ.png" alt="Modelo Estrella" className="w-full h-auto object-contain max-h-[450px]" />
                </div>
                <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <p className="text-[#003366] font-bold text-lg mb-2">Tabla de Hechos (Fact_Ventas):</p>
                        <p className="text-gray-700">Contiene métricas aditivas: Cantidad, Precio, Descuento, Total.</p>
                    </div>
                    <div>
                        <p className="text-[#003366] font-bold text-lg mb-2">Dimensiones:</p>
                        <ul className="grid grid-cols-2 gap-2">
                            {["Dim_Tiempo (Esencial)", "Dim_Producto", "Dim_Cliente", "Dim_Empleado"].map((dim, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                    <CheckCircle size={16} className="text-[#ffcc00]" /> {dim}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-sm text-gray-500 italic border-t pt-4">*Se utilizaron Claves Subrogadas para mantener integridad histórica.</p>
                </div>
            </div>
        </div>
    );

    const ETLSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Proceso Funcional: ETL</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Extracción, Transformación y Carga
            </h2>
            <p className="text-gray-700 text-lg mb-6">Implementación en SSIS con flujo secuencial para respetar integridad referencial.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[300px]">
                <div className="flex flex-col">
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow flex-1 flex items-center justify-center">
                        <img src="https://i.imgur.com/MBQwu95.png" alt="Control Flow" className="max-w-full max-h-[350px] object-contain" />
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-2 italic">Control Flow: Carga Dimensiones {'>'} Hechos</p>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 shadow flex-1 flex items-center justify-center">
                        <img src="https://i.imgur.com/qDssHgx.png" alt="Data Flow" className="max-w-full max-h-[350px] object-contain" />
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-2 italic">Data Flow: Transformaciones</p>
                </div>
            </div>
        </div>
    );

    const ValidationSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Validación Técnica</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Ejecución Exitosa
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-gray-700 text-lg space-y-6">
                    <p>El paquete ETL se ejecutó correctamente, poblando el Data Warehouse sin errores.</p>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Database className="text-green-600" size={20} />
                                <span><strong>Dim_Tiempo:</strong> 14.975 registros.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Database className="text-green-600" size={20} />
                                <span><strong>Fact_Ventas:</strong> 2.155 transacciones.</span>
                            </li>
                        </ul>
                    </div>
                    <p>Se realizaron auditorías SQL (Count/Sum) para validar que los montos coincidieran con el origen.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-lg">
                    <img src="https://i.imgur.com/3K3ONhN.png" alt="Ejecución Exitosa" className="w-full h-auto object-contain max-h-[400px]" />
                    <p className="text-center text-gray-500 text-sm mt-2 italic">Ejecución correcta del paquete SSIS</p>
                </div>
            </div>
        </div>
    );

    const OLAPSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Capa Analítica (OLAP)</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Cubo Multidimensional
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-lg">
                    <img src="https://i.imgur.com/yJ3ERGH.png" alt="Cubo SSAS" className="w-full h-auto object-contain max-h-[400px]" />
                </div>
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <p className="text-[#003366] font-bold text-lg mb-4">Funcionalidad del Cubo:</p>
                        <ul className="space-y-3 text-gray-700">
                            {["Pre-cálculo de agregaciones", "Navegación jerárquica (Drill-down)", "Respuesta inmediata a consultas complejas"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-[#ffcc00]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-[#005b96] mt-6 italic text-center">La imagen muestra la correcta relación de tablas importadas y procesadas.</p>
                </div>
            </div>
        </div>
    );

    const DashboardSlide = () => (
        <div className="flex flex-col h-full bg-white p-8 md:p-12 overflow-y-auto">
            <h1 className="text-[#003366] text-3xl md:text-4xl font-bold mb-2">Visualización Final</h1>
            <h2 className="text-[#005b96] text-xl md:text-2xl font-light border-b-2 border-[#ffcc00] pb-1 mb-8 inline-block w-fit">
                Dashboard en Power BI
            </h2>
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-2 shadow-inner">
                <img src="https://i.imgur.com/XDRksnO.png" alt="Dashboard Power BI" className="max-w-full max-h-[500px] object-contain rounded shadow-lg" />
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg">Respuesta visual a los 3 KPIs: Ventas por categoría, Mapa geográfico y Tendencias.</p>
        </div>
    );

    const ConclusionSlide = () => (
        <div className="flex flex-col items-center justify-center text-center h-full bg-gradient-to-br from-[#003366] to-[#001a33] text-white p-8">
            <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <CheckCircle size={80} className="text-[#ffcc00]" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 font-sans tracking-wider">Conclusiones</h1>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
                {[
                    "Se logró consolidar una versión única de la verdad para Kent Foods.",
                    "El proceso ETL automatizado garantiza datos limpios y oportunos.",
                    "La solución es escalable y permite a la gerencia tomar decisiones basadas en datos reales."
                ].map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 * i + 0.5 }}
                        className="flex items-start gap-4 text-xl md:text-2xl"
                    >
                        <span className="text-[#ffcc00] mt-1">•</span>
                        <span>{text}</span>
                    </motion.div>
                ))}
            </div>
            <motion.h2
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="text-3xl font-light text-[#ffcc00] mt-16"
            >
                ¡Muchas Gracias!
            </motion.h2>
        </div>
    );

    const renderSlide = () => {
        switch (slides[currentSlide].id) {
            case 'cover': return <CoverSlide />;
            case 'context': return <ContextSlide />;
            case 'kpis': return <KPISlide />;
            case 'architecture': return <ArchitectureSlide />;
            case 'model': return <ModelSlide />;
            case 'etl': return <ETLSlide />;
            case 'validation': return <ValidationSlide />;
            case 'olap': return <OLAPSlide />;
            case 'dashboard': return <DashboardSlide />;
            case 'conclusion': return <ConclusionSlide />;
            default: return <CoverSlide />;
        }
    };

    return (
        <div className="h-screen w-screen bg-[#111] font-sans flex items-center justify-center overflow-hidden">
            {/* Mobile Header */}
            <header className="md:hidden fixed top-0 w-full bg-[#003366] z-50 p-4 flex justify-between items-center shadow-md">
                <button onClick={() => navigate('/')} className="text-white">
                    <ArrowLeft size={24} />
                </button>
                <span className="text-white font-bold">Kent Foods BI</span>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-16 bg-[#001a33]/95 z-40 p-4"
                    >
                        <div className="space-y-2">
                            {slides.map((s, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setCurrentSlide(idx); setIsMenuOpen(false); }}
                                    className={`w-full text-left p-4 rounded text-lg ${currentSlide === idx ? 'bg-[#ffcc00] text-[#003366] font-bold' : 'text-white hover:bg-white/10'}`}
                                >
                                    {s.title}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Presentation Container (16:9 Aspect Ratio) */}
            <div className="relative w-full h-full md:max-w-[1280px] md:max-h-[720px] bg-white shadow-2xl overflow-hidden md:rounded-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                        className="w-full h-full"
                    >
                        {renderSlide()}
                    </motion.div>
                </AnimatePresence>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-[#ffcc00] transition-all duration-300 z-10" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />

                {/* Footer Info */}
                <div className="absolute bottom-4 left-6 text-gray-400 text-sm hidden md:block">
                    Examen Transversal | Kent Foods | Juan Díaz
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-6 flex gap-4 z-20">
                    <button
                        onClick={prevSlide} disabled={currentSlide === 0}
                        className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#003366] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide} disabled={currentSlide === slides.length - 1}
                        className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center hover:bg-[#ffcc00] hover:text-[#003366] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Desktop Back Button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-6 right-6 text-gray-400 hover:text-[#003366] transition-colors z-20 hidden md:block" title="Volver al Hub"
                >
                    <X size={32} />
                </button>
            </div>
        </div>
    );
};

export default KentFoodsETF;
