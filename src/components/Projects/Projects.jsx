import React from 'react';
import { ExternalLink, Globe, ShoppingBag, ArrowRight } from 'lucide-react';
import Layout from '../Layout/Layout';

const Projects = () => {
    const projects = [
        {
            title: 'Personal Portfolio',
            desc: 'Portafolio profesional con diseño futurista y stack moderno.',
            url: 'https://juandzmd.github.io/Portfolio',
            icon: Globe,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'border-blue-500/20'
        },
        {
            title: 'MYN Ecommerce',
            desc: 'Demo de tienda online para cafetería con carrito y pasarela.',
            url: 'https://juandzmd.github.io/MYN/',
            icon: ShoppingBag,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/20'
        }
    ];

    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">Proyectos Destacados</h1>
                <p className="text-slate-400 text-lg mb-12">Explora otros trabajos y desarrollos recientes.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5"
                        >
                            <div className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all">
                                <ExternalLink size={20} />
                            </div>

                            <div className={`w-16 h-16 rounded-2xl ${project.bg} ${project.border} border flex items-center justify-center mb-6`}>
                                <project.icon size={32} className={project.color} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                {project.desc}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-gold-400 transition-colors">
                                Ver Proyecto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
