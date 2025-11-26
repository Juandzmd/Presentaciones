import React from 'react';
import { Home, User, Folder, FileText, Settings, LogOut, Shield } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Inicio', path: '/' },
        { icon: User, label: 'Perfil', path: '/profile' },
        { icon: Folder, label: 'Proyectos', path: '/projects' },
        { icon: FileText, label: 'Documentos', path: '/docs' },
        { icon: Settings, label: 'Ajustes', path: '/settings' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-20 bg-slate-950/80 backdrop-blur-xl border-r border-white/5 flex flex-col items-center py-8 z-50">
            {/* Logo */}
            <div className="mb-12">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20">
                    <Shield size={20} className="text-slate-950" />
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-6 w-full px-4">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`group relative p-3 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                                    ? 'bg-gold-500/10 text-gold-400'
                                    : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'
                                }`}
                            title={item.label}
                        >
                            <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />

                            {/* Tooltip */}
                            <span className="absolute left-full ml-4 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                                {item.label}
                            </span>

                            {/* Active Indicator */}
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gold-500 rounded-r-full" />
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Logout */}
            <button className="p-3 text-slate-500 hover:text-red-400 transition-colors mt-auto">
                <LogOut size={22} />
            </button>
        </aside>
    );
};

export default Sidebar;
