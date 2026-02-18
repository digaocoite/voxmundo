import { useState } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

const TesteNivelPage = () => {
    const [step, setStep] = useState(0);

    const questions = [
        { q: "Qual o seu objetivo principal ao aprender um novo idioma?", options: ["Viagens", "Trabalho", "Fluência Acadêmica", "Hobby"] },
        { q: "Qual o seu nível atual de conhecimento (autodeclaração)?", options: ["Zero (Nunca estudei)", "Básico (Entendo palavras soltas)", "Intermediário (Me viro)", "Avançado (Quero perfeição)"] },
        { q: "Quanto tempo por semana você pretende dedicar?", options: ["2 horas", "4-6 horas", "Imersão total (+10h)"] }
    ];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-2xl mx-auto px-4">
                <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl">
                    {step < questions.length ? (
                        <div className="animate-in fade-in slide-in-from-bottom duration-500">
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Passo {step + 1} de {questions.length}</span>
                                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-500 transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                                </div>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 mb-8 leading-tight">{questions[step].q}</h2>
                            <div className="space-y-4">
                                {questions[step].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setStep(step + 1)}
                                        className="w-full p-5 text-left bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-700 hover:border-orange-500 hover:text-orange-600 transition-all flex justify-between items-center"
                                    >
                                        {opt}
                                        <ChevronRight size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Quase lá!</h2>
                            <p className="text-slate-600 mb-10">Para receber seu resultado detalhado e um plano de estudos personalizado, preencha seus dados:</p>

                            <form className="space-y-4 text-left">
                                <input type="text" placeholder="Seu Nome Completo" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <input type="email" placeholder="Seu melhor e-mail" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                <button
                                    type="button"
                                    className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all"
                                >
                                    Ver Meu Resultado Grátis
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TesteNivelPage;
