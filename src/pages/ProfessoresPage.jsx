import React from 'react';
import { ASSETS } from '../constants';

const ProfessoresPage = () => {
    const profs = [
        { name: "John Doe", spec: "Inglês Nativo", bio: "Especialista em preparação para IELTS e Business English com 10 anos de experiência.", xp: "10 anos" },
        { name: "Ana Garcia", spec: "Espanhol", bio: "Formada em Letras em Madri, Ana foca em conversação prática e cultura latina.", xp: "8 anos" },
        { name: "Ricardo Souza", spec: "Português", bio: "Especialista em PLE (Português Língua Estrangeira) focado em executivos e diplomatas.", xp: "15 anos" },
        { name: "Sarah Miller", spec: "Inglês Kids", bio: "Metodologia lúdica e interativa para crianças e adolescentes alcançarem a fluência natural.", xp: "6 anos" }
    ];

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-slate-900 mb-4">Conheça nosso Time</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">Professores certificados e apaixonados por ensinar. Do mundo para a sua tela.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {profs.map((p, i) => (
                        <div key={i} className="group bg-slate-50 rounded-[2.5rem] p-6 text-center border border-slate-100 hover:shadow-xl transition-all">
                            <div className="w-40 h-40 mx-auto rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img src={`${ASSETS.avatarBase}${p.name}`} alt={p.name} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{p.name}</h3>
                            <p className="text-orange-600 font-bold text-sm mb-4 uppercase tracking-widest">{p.spec}</p>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 px-4">{p.bio}</p>
                            <div className="pt-4 border-t border-slate-200">
                                <button className="w-full py-3 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition-all">
                                    Agendar com {p.name.split(' ')[0]}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfessoresPage;
