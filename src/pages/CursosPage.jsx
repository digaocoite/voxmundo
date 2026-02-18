import React from 'react';
import { ASSETS } from '../constants';

const CursosPage = () => {
    const cursos = [
        {
            id: 'ingles',
            name: 'Inglês',
            levels: 'A1 ao C2',
            focus: 'Carreira, Viagem e Conversação',
            duration: '4 a 12 meses por nível',
            price: 'R$ 250,00 /mês',
            img: ASSETS.courseEnglish,
            color: 'blue'
        },
        {
            id: 'espanhol',
            name: 'Espanhol',
            levels: 'A1 ao B2',
            focus: 'Cultura, Trabalho e Fluência',
            duration: '6 meses por nível',
            price: 'R$ 230,00 /mês',
            img: ASSETS.courseSpanish,
            color: 'orange'
        },
        {
            id: 'portugues',
            name: 'Português',
            levels: 'Básico ao Avançado',
            focus: 'Estrangeiros e Business',
            duration: '6 meses por nível',
            price: 'R$ 280,00 /mês',
            img: ASSETS.coursePortuguese,
            color: 'purple'
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-4">Nossos Cursos</h1>
                    <p className="text-xl text-slate-600">Encontre a jornada ideal para o seu perfil e objetivos.</p>
                </div>

                <div className="grid gap-12">
                    {cursos.map((c) => (
                        <div key={c.id} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12">
                            <div className={`w-full md:w-1/3 aspect-video md:aspect-square rounded-[2rem] flex items-center justify-center overflow-hidden ${c.color === 'blue' ? 'bg-blue-100' :
                                    c.color === 'orange' ? 'bg-orange-100' :
                                        'bg-purple-100'
                                }`}>
                                <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                <div className={`font-bold uppercase tracking-widest text-sm mb-2 ${c.color === 'blue' ? 'text-blue-600' :
                                        c.color === 'orange' ? 'text-orange-600' :
                                            'text-purple-600'
                                    }`}>{c.name} Global</div>
                                <h2 className="text-4xl font-black text-slate-900 mb-6">Curso de {c.name} Online</h2>

                                <div className="grid grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Níveis</p>
                                        <p className="text-slate-900 font-bold">{c.levels}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Duração Média</p>
                                        <p className="text-slate-900 font-bold">{c.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Foco Principal</p>
                                        <p className="text-slate-900 font-bold">{c.focus}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">A partir de</p>
                                        <p className="text-orange-600 font-black text-xl">{c.price}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all">
                                        Matricular-se Agora
                                    </button>
                                    <button className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-all">
                                        Baixar Ementa Completa
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CursosPage;
