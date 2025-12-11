import React, { useState, useEffect } from 'react';
import {
    Shield, AlertTriangle, Terminal, Activity, Lock, Server, FileText,
    Database, CheckCircle, Car, Menu, X, ArrowLeft, Video, ChevronLeft,
    ChevronRight, Home, Target, Search, Bug, Settings, HelpCircle, Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TuAutoETF = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Slides data
    const slides = [
        { id: 'portada', title: 'Portada', icon: Home },
        { id: 'analisis', title: 'Análisis del Caso', icon: Search },
        { id: 'activos', title: 'Activos Críticos', icon: Database },
        { id: 'vulnerabilidades', title: 'Vulnerabilidades', icon: Bug },
        { id: 'demo', title: 'Demostración', icon: Video },
        { id: 'owasp', title: 'Política OWASP', icon: Shield },
        { id: 'conclusiones', title: 'Conclusiones', icon: CheckCircle },
        { id: 'preguntas', title: 'Preguntas', icon: HelpCircle }
    ];

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                setCurrentSlide(prev => Math.max(prev - 1, 0));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

    // --- SLIDE COMPONENTS ---

    const Portada = () => (
        <div
            className="relative h-full flex flex-col justify-center items-center text-center p-6 md:p-12"
            style={{
                backgroundImage: 'url(https://i.imgur.com/ljV9B8c.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 max-w-4xl animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 mb-6">
                    <Shield className="text-red-400" size={18} />
                    <span className="text-red-300 text-sm font-medium">Evaluación Final Transversal</span>
                </div>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-light">Proyecto de Ciberseguridad</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                    Caso: <span className="text-red-500">TU AUTO</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8">Automotora con presencia web en crecimiento</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto text-left mt-12">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Alumno</p>
                        <p className="text-white font-semibold">Juan Salvador Diaz Modinger</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Docente</p>
                        <p className="text-white font-semibold">Jonathan Alejandro Lopez Acevedo</p>
                    </div>
                </div>

                <p className="text-gray-500 mt-10 text-sm">11 de Diciembre, 2025</p>
            </div>
        </div>
    );

    const AnalisisCaso = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">1. Análisis del Caso</h2>
            <div className="w-20 h-1 bg-red-500 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-500/10 rounded-lg">
                                <Car className="text-red-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">El Cliente</h3>
                        </div>
                        <p className="text-gray-300">Automotora con presencia web en crecimiento, buscando expandir su infraestructura digital.</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-orange-500/10 rounded-lg">
                                <AlertTriangle className="text-orange-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Incidencias Reportadas</h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">•</span>
                                Ataques web recurrentes confirmados
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">•</span>
                                Exfiltración de información sensible
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">•</span>
                                Inyección de código malicioso en producción
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Server className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Infraestructura Auditada</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900/50 rounded-lg p-4">
                                <p className="text-gray-500 text-xs uppercase">Sistema Operativo</p>
                                <p className="text-white font-mono font-semibold">Linux</p>
                            </div>
                            <div className="bg-gray-900/50 rounded-lg p-4">
                                <p className="text-gray-500 text-xs uppercase">Servidor Web</p>
                                <p className="text-white font-mono font-semibold">Nginx</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl p-6 border border-red-500/30">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                                <Settings className="text-red-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Nuevo Requerimiento</h3>
                        </div>
                        <p className="text-gray-300">
                            Desarrollo de <span className="text-red-400 font-semibold">App de Leasing</span> con integración mandatoria de metodología <span className="text-red-400 font-semibold">DevSecOps</span>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const ActivosCriticos = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Levantamiento de Activos</h2>
            <div className="w-20 h-1 bg-red-500 mb-8" />

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700">Activo</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700">Objetivo CIA</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider border-b border-gray-700">Riesgo Detectado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        <tr className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <Server className="text-blue-400" size={20} />
                                    <span className="text-white font-medium">Servidor Web</span>
                                </div>
                            </td>
                            <td className="px-6 py-5">
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                                    Disponibilidad
                                </span>
                            </td>
                            <td className="px-6 py-5 text-gray-300">
                                <span className="text-orange-400 font-semibold">Alto:</span> Exposición a DDoS y Defacement
                            </td>
                        </tr>
                        <tr className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <Database className="text-yellow-400" size={20} />
                                    <span className="text-white font-medium">Base de Datos Clientes</span>
                                </div>
                            </td>
                            <td className="px-6 py-5">
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                                    Confidencialidad
                                </span>
                            </td>
                            <td className="px-6 py-5 text-gray-300">
                                <span className="text-red-400 font-semibold">Crítico:</span> Vulnerable a Inyección SQL
                            </td>
                        </tr>
                        <tr className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-purple-400" size={20} />
                                    <span className="text-white font-medium">Código Fuente</span>
                                </div>
                            </td>
                            <td className="px-6 py-5">
                                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                                    Integridad
                                </span>
                            </td>
                            <td className="px-6 py-5 text-gray-300">
                                <span className="text-red-400 font-semibold">Crítico:</span> Modificación no autorizada
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

    const Vulnerabilidades = () => (
        <div
            className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in relative"
            style={{
                backgroundImage: 'url(https://i.imgur.com/iURu8zJ.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gray-900/90" />
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">2. Gestión de Vulnerabilidades</h2>
                <div className="w-20 h-1 bg-red-500 mb-4" />
                <p className="text-gray-400 mb-8">Resultados confirmados mediante auditoría técnica sobre el servidor objetivo.</p>

                <div className="space-y-4">
                    {/* CVE-2011-2523 */}
                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border-l-4 border-red-500 hover:bg-gray-800 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs font-bold rounded border border-red-800">
                                CRÍTICA
                            </span>
                            <span className="text-gray-500 text-sm">Puerto 21</span>
                            <span className="font-mono text-gray-400 text-sm">CVE-2011-2523</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">vsftpd 2.3.4 Backdoor</h3>
                        <p className="text-gray-300 text-sm">Permite acceso administrativo inmediato mediante backdoor en el código fuente.</p>
                    </div>

                    {/* Samba */}
                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border-l-4 border-orange-500 hover:bg-gray-800 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="px-2 py-1 bg-orange-900/50 text-orange-400 text-xs font-bold rounded border border-orange-800">
                                ALTA
                            </span>
                            <span className="text-gray-500 text-sm">Puerto 445</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Samba User Map Script</h3>
                        <p className="text-gray-300 text-sm">Ejecución remota de comandos no autorizados.</p>
                    </div>

                    {/* PHP CGI */}
                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border-l-4 border-yellow-500 hover:bg-gray-800 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="px-2 py-1 bg-yellow-900/50 text-yellow-400 text-xs font-bold rounded border border-yellow-800">
                                MEDIA
                            </span>
                            <span className="text-gray-500 text-sm">Puerto 80</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">PHP CGI Injection</h3>
                        <p className="text-gray-300 text-sm">Compromiso de la aplicación web mediante inyección.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const Demostracion = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">3. Demostración Técnica</h2>
            <div className="w-20 h-1 bg-red-500 mb-4" />
            <p className="text-gray-400 mb-8">
                Explotación controlada de vulnerabilidad <span className="text-red-400 font-mono">vsftpd 2.3.4</span> para obtención de acceso Root.
            </p>

            <div className="max-w-4xl mx-auto">
                <div className="relative rounded-xl overflow-hidden border-2 border-red-500/30 shadow-2xl shadow-red-500/10">
                    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                        <Video size={16} className="text-red-400" />
                        <span className="text-gray-400 text-sm font-mono">demo_vsftpd_exploit.mp4</span>
                    </div>
                    <div className="aspect-video bg-gray-900 flex flex-col items-center justify-center p-8">
                        <Video size={64} className="text-gray-600 mb-4" />
                        <p className="text-gray-500 text-center">Video de demostración</p>
                        <p className="text-gray-600 text-sm text-center mt-2">
                            Reemplazar con el archivo de video correspondiente
                        </p>
                        {/* Uncomment and update src when video is available
                        <video controls className="w-full h-full">
                            <source src="ruta_de_tu_video.mp4" type="video/mp4" />
                            Tu navegador no soporta video HTML5.
                        </video>
                        */}
                    </div>
                </div>
                <p className="text-gray-500 text-sm text-center mt-4">
                    Evidencia de compromiso total del sistema.
                </p>
            </div>
        </div>
    );

    const PoliticaOWASP = () => (
        <div className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">4. Política de Seguridad OWASP</h2>
            <div className="w-20 h-1 bg-red-500 mb-4" />
            <p className="text-gray-400 mb-8">Ciclo de implementación para el nuevo aplicativo:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                        <Target className="text-red-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Análisis</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Modelado de amenazas y definición estricta de requisitos de autenticación.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                        <Settings className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Diseño</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Principio de mínimo privilegio y validación de arquitectura de datos.
                    </p>
                </div>

                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                        <Terminal className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Codificación</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Implementación de <span className="text-green-400 font-mono">Prepared Statements</span> contra SQL Injection y <span className="text-green-400 font-mono">Output Encoding</span> contra XSS.
                    </p>
                </div>
            </div>
        </div>
    );

    const Conclusiones = () => (
        <div
            className="h-full overflow-y-auto p-6 md:p-12 animate-fade-in relative"
            style={{
                backgroundImage: 'url(https://i.imgur.com/EAI75ue.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-gray-900/90" />
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">5. Conclusiones</h2>
                <div className="w-20 h-1 bg-red-500 mb-8" />

                <div className="space-y-4 max-w-3xl">
                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border border-gray-700 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-red-500/10 rounded-lg">
                                <AlertTriangle className="text-red-400" size={20} />
                            </div>
                            <p className="text-gray-300">
                                La infraestructura actual presenta un nivel de riesgo <span className="text-red-400 font-bold">INACEPTABLE</span>.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border border-gray-700 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-orange-500/10 rounded-lg">
                                <Terminal className="text-orange-400" size={20} />
                            </div>
                            <p className="text-gray-300">
                                Se demostró técnicamente la capacidad de obtener <span className="text-orange-400 font-bold">control total Root</span> en tiempo reducido.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border border-gray-700 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-yellow-500/10 rounded-lg">
                                <Lock className="text-yellow-400" size={20} />
                            </div>
                            <p className="text-gray-300">
                                <span className="text-yellow-400 font-bold">Solución Inmediata:</span> Actualizar servicios FTP y Samba, bloquear puertos críticos en el perímetro.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-800/80 backdrop-blur rounded-xl p-5 border border-gray-700 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Shield className="text-blue-400" size={20} />
                            </div>
                            <p className="text-gray-300">
                                <span className="text-blue-400 font-bold">Largo Plazo:</span> Implementar Gobierno de Seguridad y desarrollo seguro para prevenir futuros vectores de ataque.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <CheckCircle className="mx-auto text-green-400 mb-3" size={32} />
                    <p className="text-green-400 text-xl font-bold">Plan de mitigación listo para despliegue.</p>
                </div>
            </div>
        </div>
    );

    const Preguntas = () => (
        <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 animate-fade-in">
            <HelpCircle size={80} className="text-red-500/50 mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">¿Preguntas?</h1>
            <p className="text-gray-400 text-xl mb-12">Gracias por su atención.</p>

            <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700">
                    <Shield className="text-red-400" size={20} />
                    <span className="text-gray-400">Corporación Security LTDA</span>
                </div>
            </div>
        </div>
    );

    const renderSlide = () => {
        switch (currentSlide) {
            case 0: return <Portada />;
            case 1: return <AnalisisCaso />;
            case 2: return <ActivosCriticos />;
            case 3: return <Vulnerabilidades />;
            case 4: return <Demostracion />;
            case 5: return <PoliticaOWASP />;
            case 6: return <Conclusiones />;
            case 7: return <Preguntas />;
            default: return <Portada />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
            {/* Custom styles */}
            <style>{`
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }
                .animate-slide-up {
                    animation: slideUp 0.5s ease-out both;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* Mobile Header */}
            <header className="md:hidden bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between sticky top-0 z-50">
                <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <Shield className="text-red-500" size={20} />
                    <span className="font-bold text-white">TU AUTO</span>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white transition-colors">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-sm pt-16">
                    <nav className="p-4 space-y-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => { setCurrentSlide(index); setIsMenuOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${currentSlide === index
                                        ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                                        : 'text-gray-400 hover:bg-gray-800'
                                    }`}
                            >
                                <slide.icon size={18} />
                                <span>{slide.title}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            )}

            <div className="flex flex-1 overflow-hidden">
                {/* Desktop Sidebar */}
                <aside className="hidden md:flex w-72 bg-gray-900 border-r border-gray-800 flex-col">
                    <div className="p-6 border-b border-gray-800">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mb-6 group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Volver al Hub
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                                <Shield className="text-red-500" size={28} />
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-lg">TU AUTO</h1>
                                <p className="text-xs text-gray-500">Evaluación Transversal</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 overflow-y-auto">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">Secciones</p>
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 ${currentSlide === index
                                        ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <slide.icon size={18} />
                                <span className="font-medium">{slide.title}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                JD
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Juan Diaz</p>
                                <p className="text-xs text-gray-500">ASY6131 • Dic 2025</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 flex flex-col overflow-hidden bg-gray-950">
                    {/* Slide Content */}
                    <div key={currentSlide} className="flex-1 overflow-hidden">
                        {renderSlide()}
                    </div>

                    {/* Navigation Footer */}
                    <footer className="bg-gray-900 border-t border-gray-800 p-4">
                        <div className="flex items-center justify-between max-w-4xl mx-auto">
                            <button
                                onClick={prevSlide}
                                disabled={currentSlide === 0}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentSlide === 0
                                        ? 'text-gray-600 cursor-not-allowed'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                <ChevronLeft size={20} />
                                <span className="hidden sm:inline">Anterior</span>
                            </button>

                            <div className="flex items-center gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                                                ? 'bg-red-500 w-6'
                                                : 'bg-gray-600 hover:bg-gray-500'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                disabled={currentSlide === slides.length - 1}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentSlide === slides.length - 1
                                        ? 'text-gray-600 cursor-not-allowed'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                    }`}
                            >
                                <span className="hidden sm:inline">Siguiente</span>
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default TuAutoETF;
