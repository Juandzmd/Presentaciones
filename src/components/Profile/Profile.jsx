import React from 'react';
import { User, Mail, MapPin, Briefcase, Code, Terminal, Cpu } from 'lucide-react';
import Layout from '../Layout/Layout';

const Profile = () => {
    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Header Card */}
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 border border-white/10 p-8 md:p-12 mb-8">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-1 shadow-2xl shadow-gold-500/20">
                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                                <span className="text-4xl font-bold text-gold-500">JD</span>
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">Juan Salvador Díaz Modinger</h1>
                            <p className="text-xl text-gold-400 font-medium mb-4">Developer & AI Prompt Manager</p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-2 bg-slate-950/50 px-3 py-1.5 rounded-full border border-white/5">
                                    <MapPin size={14} /> Santiago, Chile
                                </div>
                                <div className="flex items-center gap-2 bg-slate-950/50 px-3 py-1.5 rounded-full border border-white/5">
                                    <Mail size={14} /> juandzmd@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Me */}
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-3">
                            <User className="text-gold-400" size={24} /> Sobre Mí
                        </h2>
                        <p className="text-slate-300 leading-relaxed">
                            Ingeniero de Software apasionado por la intersección entre el desarrollo frontend de alto impacto y la Inteligencia Artificial.
                            Especializado en crear experiencias digitales inmersivas y seguras, combinando diseño premium con arquitectura robusta.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-3">
                            <Cpu className="text-gold-400" size={24} /> Stack Tecnológico
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'AI Prompting', 'Cybersecurity', 'UI/UX Design'].map((skill) => (
                                <span key={skill} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-slate-300 text-sm hover:border-gold-500/30 hover:text-gold-400 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
