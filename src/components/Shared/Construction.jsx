import React from 'react';
import { Construction, Hammer } from 'lucide-react';
import Layout from '../Layout/Layout';

const ConstructionPage = ({ title }) => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
                <div className="w-24 h-24 rounded-full bg-gold-500/10 flex items-center justify-center mb-8 border border-gold-500/20 shadow-2xl shadow-gold-500/10 animate-pulse">
                    <Hammer size={48} className="text-gold-400" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
                    {title || 'En Construcción'}
                </h1>
                <p className="text-slate-400 text-lg max-w-md mx-auto">
                    Estamos trabajando duro para traerte esta sección. <br />
                    Vuelve pronto para ver las novedades.
                </p>
            </div>
        </Layout>
    );
};

export default ConstructionPage;
