import React from 'react';
import { CheckCircle } from 'lucide-react';

const PlanosPage = () => (
    <div className="pt-32 pb-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black text-slate-900 mb-4">Nossos Planos</h1>
                <p className="text-xl text-slate-600">A fluência que cabe no seu tempo e no seu bolso.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Turma */}
                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-6 py-2 bg-slate-100 text-slate-600 font-bold text-xs uppercase rounded-bl-2xl">Mais Popular</div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Turmas Flex</h3>
                    <p className="text-slate-500 mb-8">Grupos de 4 a 6 pessoas com interação constante.</p>

                    <div className="text-5xl font-black text-blue-700 mb-10">R$ 249<span className="text-lg text-slate-400 font-medium">/mês</span></div>

                    <ul className="space-y-4 mb-10">
                        {[
                            "2 aulas por semana ao vivo",
                            "Material didático digital incluso",
                            "Acesso à plataforma de exercícios",
                            "Suporte via WhatsApp",
                            "Certificado de conclusão"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center text-slate-700 font-medium">
                                <CheckCircle size={18} className="text-green-500 mr-3 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-5 bg-blue-700 text-white rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20">
                        Escolher Plano Turma
                    </button>
                </div>

                {/* Particular */}
                <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative">
                    <div className="absolute top-0 right-0 px-6 py-2 bg-orange-600 text-white font-bold text-xs uppercase rounded-bl-2xl">Exclusivo</div>
                    <h3 className="text-3xl font-black text-white mb-2">Particular (VIP)</h3>
                    <p className="text-slate-400 mb-8">100% de foco no seu ritmo e objetivos específicos.</p>

                    <div className="text-5xl font-black text-orange-500 mb-10">R$ 499<span className="text-lg text-slate-500 font-medium">/mês</span></div>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Horários flexíveis semanais",
                            "Plano de estudos personalizado",
                            "Foco total em conversação",
                            "Preparação para exames inclusa",
                            "Mentoria de carreira internacional"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center text-slate-300 font-medium">
                                <CheckCircle size={18} className="text-orange-500 mr-3 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/40">
                        Escolher Plano VIP
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default PlanosPage;
