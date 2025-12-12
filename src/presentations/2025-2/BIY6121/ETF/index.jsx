import React, { useState, useEffect } from 'react';
import {
    ChevronLeft, ChevronRight, Home, PieChart, TrendingUp, Users, Map,
    Database, Server, Code, CheckCircle, BarChart, X, Menu, ArrowLeft,
    Target, Search, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KentFoodsETF = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const slides = [
        { id: 'cover', title: 'Portada', icon: Home },
        { id: 'context', title: 'Contexto del Negocio', icon: Search },
        { id: 'kpis', title: 'KPIs Estratégicos', icon: TrendingUp },
        { id: 'architecture', title: 'Arquitectura', icon: Server },
        { id: 'model', title: 'Modelo Dimensional', icon: Database },
        { id: 'etl', title: 'Proceso ETL', icon: Code },
        { id: 'validation', title: 'Validación', icon: CheckCircle },
        { id: 'olap', title: 'Cubo OLAP', icon: Users },
        { id: 'dashboard', title: 'Dashboard', icon: BarChart },
        { id: 'conclusion', title: 'Conclusiones', icon: Award }
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
                background: 'linear-gradient(135deg, #001a33 0%, #000000 100%)'
            }}
        >
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffcc00]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 animate-fade-in max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 mb-8 backdrop-blur-sm">
                    <PieChart className="text-[#ffcc00]" size={20} />
                    <span className="text-blue-200 text-sm font-medium tracking-wide">Inteligencia de Negocios – BIY6121</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    EXAMEN <span className="text-[#ffcc00]">TRANSVERSAL</span>
                </h1>

                <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-12 flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-blue-500/50"></span>
                    Caso: Kent Foods
                    <span className="h-px w-12 bg-blue-500/50"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-colors group">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Users className="text-blue-400" size={20} />
                        </div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Alumno</p>
                        <p className="text-white font-semibold text-lg">Juan Díaz</p>
                        <p className="text-gray-500 text-sm">Sección: 005V</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#ffcc00]/50 transition-colors group">
                        <div className="w-10 h-10 bg-[#ffcc00]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Award className="text-[#ffcc00]" size={20} />
                        </div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Docente</p>
                        <p className="text-white font-semibold text-lg">Stefanny Salcidua</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const ContextSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Contexto del Negocio" subtitle="Situación actual y desafíos de Kent Foods" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                    <div className="bg-blue-900/10 rounded-xl p-6 border border-blue-500/20">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Target className="text-[#ffcc00]" /> El Desafío
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Kent Foods, distribuidora en expansión, enfrenta dificultades críticas para analizar su desempeño debido a la dispersión de datos y sistemas legados.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <Database className="text-red-400 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="text-white block">Datos Dispersos</strong>
                                <p className="text-gray-400 text-sm">Información fragmentada en sistemas OLTP transaccionales.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <Server className="text-orange-400 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="text-white block">Consultas Lentas</strong>
                                <p className="text-gray-400 text-sm">Reportes complejos impactan el rendimiento operativo.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                            <Map className="text-yellow-400 mt-1 shrink-0" size={20} />
                            <div>
                                <strong className="text-white block">Ceguera Histórica</strong>
                                <p className="text-gray-400 text-sm">Ausencia de indicadores para comparar periodos anteriores.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-xl">
                    <img src="https://i.imgur.com/H2sCkSm.png" alt="Diagrama Relacional" className="w-full h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity" />
                    <p className="text-center text-gray-500 text-xs mt-3 font-mono">FIG 1: BASE DE DATOS ORIGINAL OLTP</p>
                </div>
            </div>
        </div>
    );

    const KPISlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="KPIs Estratégicos" subtitle="Alineación con los objetivos del negocio" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* KPI 1 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#ffcc00]/50 transition-all hover:-translate-y-1 shadow-lg group">
                    <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                        <TrendingUp className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Variación de Ingresos</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        ¿Cómo han crecido las ventas respecto al mes anterior?
                    </p>
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-3/4"></div>
                    </div>
                </div>

                {/* KPI 2 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#ffcc00]/50 transition-all hover:-translate-y-1 shadow-lg group">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                        <Users className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Productividad</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        ¿Cuál es el desempeño de ventas por cada empleado?
                    </p>
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-1/2"></div>
                    </div>
                </div>

                {/* KPI 3 */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-[#ffcc00]/50 transition-all hover:-translate-y-1 shadow-lg group">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                        <Map className="text-purple-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cobertura</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        ¿Qué regiones concentran la facturación?
                    </p>
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-2/3"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ArchitectureSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Especificación Técnica" subtitle="Stack tecnológico y arquitectura" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-xl"></div>
                    <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-700">
                        <div className="space-y-6">
                            <TechItem label="Metodología" value="Ralph Kimball (Bottom-up)" color="text-[#ffcc00]" />
                            <TechItem label="Base de Datos" value="SQL Server (AWS RDS)" color="text-blue-400" />
                            <TechItem label="ETL" value="SQL Server Integration Services (SSIS)" color="text-purple-400" />
                            <TechItem label="Motor OLAP" value="SQL Server Analysis Services (SSAS)" color="text-green-400" />
                            <TechItem label="Visualización" value="Power BI" color="text-yellow-400" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white p-2 rounded-lg shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <img src="https://i.imgur.com/UYuB069.png" alt="Visual Studio" className="w-full rounded border border-gray-200" />
                    </div>
                    <p className="text-center text-gray-500 font-mono text-xs">ENTORNO DE DESARROLLO INTEGRADO (VS 2022)</p>
                </div>
            </div>
        </div>
    );

    // Helper component for ArchitectureSlide
    const TechItem = ({ label, value, color }) => (
        <div className="flex items-center justify-between border-b border-gray-800 pb-3 last:border-0 last:pb-0">
            <span className="text-gray-400 font-medium">{label}</span>
            <span className={`font-bold ${color} text-right`}>{value}</span>
        </div>
    );

    const ModelSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Diseño Dimensional" subtitle="Modelo Estrella (Star Schema)" />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2 bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-lg">
                    <img src="https://i.imgur.com/IYef1TZ.png" alt="Modelo Estrella" className="w-full h-auto rounded bg-white/5" />
                </div>

                <div className="space-y-6">
                    <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30">
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <Database size={18} className="text-blue-400" /> Fact_Ventas
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">Tabla central de hechos transaccionales.</p>
                        <div className="flex flex-wrap gap-2">
                            {['Cantidad', 'Precio', 'Descuento', 'Total'].map(m => (
                                <span key={m} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded border border-blue-500/20">{m}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-4">Dimensiones</h3>
                        <ul className="space-y-3">
                            {['Dim_Tiempo (Esencial)', 'Dim_Producto', 'Dim_Cliente', 'Dim_Empleado'].map((d, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">{i + 1}</div>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const ETLSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Proceso ETL" subtitle="Extracción, Transformación y Carga con SSIS" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100%-100px)]">
                <div className="flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group hover:border-purple-500/50 transition-colors">
                    <div className="p-4 bg-gray-900 border-b border-gray-700 flex justify-between items-center">
                        <span className="font-bold text-white">Control Flow</span>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">Orquestación</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center justify-center bg-gray-800 scrollbar-hide overflow-hidden">
                        <img src="https://i.imgur.com/MBQwu95.png" alt="Control Flow" className="max-w-full max-h-[300px] object-contain shadow-lg" />
                    </div>
                </div>

                <div className="flex flex-col bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group hover:border-blue-500/50 transition-colors">
                    <div className="p-4 bg-gray-900 border-b border-gray-700 flex justify-between items-center">
                        <span className="font-bold text-white">Data Flow</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Transformación</span>
                    </div>
                    <div className="flex-1 p-6 flex items-center justify-center bg-gray-800 scrollbar-hide overflow-hidden">
                        <img src="https://i.imgur.com/qDssHgx.png" alt="Data Flow" className="max-w-full max-h-[300px] object-contain shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );

    const ValidationSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Validación Técnica" subtitle="Resultados de la carga de datos" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-green-500 rounded-full text-white shadow-lg shadow-green-500/30">
                            <CheckCircle size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Carga Exitosa</h3>
                            <p className="text-green-300">El paquete ETL finalizó sin errores de validación.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Dim_Tiempo</p>
                            <p className="text-3xl font-bold text-white">14.975</p>
                            <p className="text-xs text-gray-400 mt-1">Registros</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Fact_Ventas</p>
                            <p className="text-3xl font-bold text-[#ffcc00]">2.155</p>
                            <p className="text-xs text-gray-400 mt-1">Transacciones</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-2 rounded-xl border border-gray-700 shadow-2xl">
                    <img src="https://i.imgur.com/3K3ONhN.png" alt="Ejecución Exitosa" className="w-full rounded" />
                </div>
            </div>
        </div>
    );

    const OLAPSlide = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Capa Analítica (OLAP)" subtitle="Cubo Multidimensional SSAS" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-2 rounded-xl shadow-2xl">
                    <img src="https://i.imgur.com/yJ3ERGH.png" alt="Cubo SSAS" className="w-full rounded" />
                </div>

                <div className="space-y-6">
                    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-bold text-white mb-4">Capacidades del Cubo</h3>
                        <ul className="space-y-4">
                            {[
                                { title: 'Pre-cálculo', desc: 'Agregaciones optimizadas para velocidad.' },
                                { title: 'Drill-down', desc: 'Navegación jerárquica (Año > Mes > Día).' },
                                { title: 'Performance', desc: 'Respuesta inmediata a consultas complejas.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-[#ffcc00] shrink-0" />
                                    <div>
                                        <strong className="text-white block">{item.title}</strong>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const DashboardSlide = () => (
        <div className="h-full flex flex-col p-6 md:p-12 animate-fade-in bg-[#0f172a]">
            <SectionHeader title="Visualización Final" subtitle="Dashboard interactivo en Power BI" />

            <div className="flex-1 bg-gray-800 rounded-xl border border-gray-700 overflow-hidden relative group">
                <img src="https://i.imgur.com/XDRksnO.png" alt="Dashboard" className="w-full h-full object-contain bg-gray-900" />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white font-medium text-lg">
                        Respuesta visual a los 3 KPIs: Ventas por categoría, Mapa geográfico y Tendencias.
                    </p>
                </div>
            </div>
        </div>
    );

    const ConclusionSlide = () => (
        <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 animate-fade-in bg-gradient-to-br from-[#003366] to-[#001a33] text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 max-w-4xl">
                <div className="inline-block p-4 bg-[#ffcc00]/10 rounded-full mb-8 animate-bounce-slow">
                    <CheckCircle size={64} className="text-[#ffcc00]" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-12">Conclusiones Finales</h1>

                <div className="grid gap-6 text-left">
                    {[
                        "Se logró consolidar una versión única de la verdad para Kent Foods.",
                        "El proceso ETL automatizado garantiza datos limpios y oportunos.",
                        "La solución es escalable y permite a la gerencia decisiones basadas en datos."
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0 font-bold text-white">
                                {i + 1}
                            </div>
                            <p className="text-xl text-gray-200">{item}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-16 text-blue-200 text-lg font-light tracking-widest uppercase">¡Muchas Gracias!</p>
            </div>
        </div>
    );


    // --- Helper Components ---

    const SectionHeader = ({ title, subtitle }) => (
        <div className="mb-8 border-b border-gray-700/50 pb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{title}</h2>
            <p className="text-gray-400 text-lg font-light">{subtitle}</p>
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
        <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col font-sans selection:bg-[#ffcc00] selection:text-black">
            <style>{`
                .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; opacity: 0; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {/* Mobile Header */}
            <header className="md:hidden bg-[#001a33] border-b border-blue-900/30 p-4 flex items-center justify-between sticky top-0 z-50">
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <PieChart className="text-[#ffcc00]" size={20} />
                    <span className="font-bold text-white tracking-wide">Kent Foods BI</span>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white transition-colors">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-[#001a33]/95 backdrop-blur-xl pt-16 animate-fade-in">
                    <nav className="p-4 space-y-1">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => { setCurrentSlide(index); setIsMenuOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentSlide === index
                                    ? 'bg-blue-600 text-white font-medium shadow-lg shadow-blue-900/50'
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
                <aside className="hidden md:flex w-72 bg-[#001a33] border-r border-blue-900/30 flex-col relative z-20 shadow-2xl">
                    <div className="p-6 border-b border-blue-900/30 bg-[#001529]">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider mb-8 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Volver al Hub
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg border border-blue-400/30">
                                <PieChart className="text-white" size={28} />
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-lg leading-tight">Kent Foods</h1>
                                <p className="text-xs text-blue-300 font-medium mt-1">BI & Analytics</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 overflow-y-auto space-y-1">
                        <p className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest mb-4 px-3 mt-2">Navegación</p>
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${currentSlide === index
                                    ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-900/50 font-medium'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <slide.icon size={18} className={`transition-colors ${currentSlide === index ? 'text-[#ffcc00]' : 'group-hover:text-blue-300'}`} />
                                <span className="relative z-10">{slide.title}</span>
                                {currentSlide === index && <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-100 -z-0" />}
                            </button>
                        ))}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 bg-[#001222] border-t border-blue-900/30">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffcc00] to-orange-500 flex items-center justify-center text-black font-bold shadow-lg">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Juan Díaz</p>
                                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Examen Transversal</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col overflow-hidden bg-gray-950 relative">
                    {/* Slide Render */}
                    <div key={currentSlide} className="flex-1 overflow-hidden relative">
                        {renderSlide()}
                    </div>

                    {/* Navigation Bar */}
                    <footer className="bg-[#001a33] border-t border-blue-900/30 p-4 shrink-0 z-30">
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
                                            ? 'bg-[#ffcc00] w-8'
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

export default KentFoodsETF;
