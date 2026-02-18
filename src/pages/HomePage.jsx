import React from 'react';
import { ArrowRight, Zap, ChevronRight, Users, Star, Award, MessageCircle, CheckCircle, Globe } from 'lucide-react';
import { ASSETS } from '../constants';

const HomePage = ({ setCurrentPage }) => {
    return (
        <div className="pt-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-in fade-in slide-in-from-left duration-700">
                            <span className="inline-block py-1 px-4 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                🌍 Global Language Academy
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
                                Fale com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-700">Mundo.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                                Aulas online de Inglês, Espanhol e Português para estrangeiros. Metodologia focada em conversação real com turmas reduzidas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setCurrentPage('teste')}
                                    className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 shadow-xl shadow-orange-600/20 transition-all flex items-center justify-center"
                                >
                                    Fazer teste gratuito
                                    <ArrowRight size={20} className="ml-2" />
                                </button>
                                <button
                                    onClick={() => setCurrentPage('contato')}
                                    className="px-8 py-4 bg-white text-blue-800 border-2 border-blue-800 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                                >
                                    Agendar experimental
                                </button>
                            </div>
                            <div className="mt-10 flex items-center space-x-6">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200">
                                            <img src={`${ASSETS.avatarBase}${i + 10}`} alt="aluno" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-slate-500">
                                    <span className="font-bold text-slate-900">+500 alunos</span> felizes
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block relative animate-in zoom-in duration-1000">
                            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
                                <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden group">
                                    <img
                                        src={ASSETS.heroStudent}
                                        alt="Estudantes VoxMundo"
                                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce">
                                        <Zap className="text-orange-500" size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* O QUE OFERECEMOS */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Escolha o seu idioma</h2>
                        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Inglês Online', desc: 'Foco em carreira, viagens e proficiência. Do básico ao avançado.', icon: '🇬🇧', color: 'border-blue-100 bg-blue-50/30' },
                            { title: 'Espanhol Online', desc: 'Comunicação prática, fluência e imersão na cultura hispânica.', icon: '🇪🇸', color: 'border-orange-100 bg-orange-50/30' },
                            { title: 'Português', desc: 'Português para estrangeiros com foco em cultura brasileira e negócios.', icon: '🇧🇷', color: 'border-purple-100 bg-purple-50/30' }
                        ].map((course, idx) => (
                            <div key={idx} className={`p-8 rounded-3xl border-2 ${course.color} hover:shadow-2xl transition-all group hover:-translate-y-2 cursor-pointer`}>
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{course.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">{course.desc}</p>
                                <button onClick={() => setCurrentPage('cursos')} className="text-orange-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                                    Ver detalhes <ChevronRight size={20} className="ml-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODALIDADES */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Como você <br /><span className="text-orange-500">prefere aprender?</span></h2>

                            <div className="space-y-6">
                                {[
                                    { title: 'Turmas Reduzidas', text: 'Grupos de no máximo 6 pessoas para garantir sua participação.', icon: <Users size={24} /> },
                                    { title: 'Aulas VIP', text: 'Foco 100% nas suas necessidades e objetivos específicos.', icon: <Star size={24} /> },
                                    { title: 'Preparação para Exames', text: 'Foco total em certificações como TOEFL, IELTS e DELE.', icon: <Award size={24} /> },
                                    { title: 'Conversação Intensiva', text: 'Perfeito para quem já tem base e quer destravar a fala.', icon: <MessageCircle size={24} /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
                                        <div className="bg-orange-600 p-3 rounded-xl mr-4 text-white">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-800 rounded-[3rem] overflow-hidden border-8 border-slate-800 shadow-2xl rotate-2">
                                <img src={ASSETS.classroom} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="aula" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-orange-600 p-6 rounded-3xl shadow-xl max-w-[200px] -rotate-3">
                                <p className="font-black text-2xl mb-1">100%</p>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Aulas ao vivo com interação real</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTE DE NIVELAMENTO CTA */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-blue-900/10 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-blue-100">
                            <Globe size={120} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 relative">Descubra seu nível em minutos</h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto relative">
                            Nosso algoritmo inteligente avalia suas competências de forma rápida e indica o melhor ponto de partida para sua jornada.
                        </p>
                        <button
                            onClick={() => setCurrentPage('teste')}
                            className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all hover:scale-105 shadow-xl shadow-blue-700/30 relative"
                        >
                            Começar Teste Agora
                        </button>
                        <div className="mt-8 flex justify-center space-x-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center"><CheckCircle size={14} className="mr-1 text-green-500" /> Grátis</span>
                            <span className="flex items-center"><CheckCircle size={14} className="mr-1 text-green-500" /> Resultado Imediato</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* DEPOIMENTOS */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">O que nossos alunos dizem</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Carlos Mendes", country: "EUA", text: "Graças às aulas focadas em Business English da VoxMundo, consegui minha promoção na multinacional onde trabalho.", role: "Gerente de Projetos" },
                            { name: "Elena Schmidt", country: "Alemanha", text: "O curso de Português é incrível! Em apenas 3 meses já consigo me comunicar fluentemente com meus amigos brasileiros.", role: "Arquiteta" },
                            { name: "Mariana Silva", country: "Espanha", text: "As turmas pequenas fazem toda a diferença. O professor consegue dar atenção individual a cada dúvida.", role: "Estudante" }
                        ].map((dep, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-orange-200 transition-colors">
                                <div className="flex text-orange-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-700 italic mb-8 leading-relaxed">"{dep.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-slate-200 rounded-full mr-4 overflow-hidden">
                                        <img src={`${ASSETS.avatarBase}${dep.name}`} alt={dep.name} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">{dep.name}</h5>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider">{dep.role} • {dep.country}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-20 bg-orange-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Pronto para começar?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setCurrentPage('teste')}
                            className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all"
                        >
                            Fazer Teste de Nível
                        </button>
                        <a
                            href="https://wa.me/5500000000000"
                            className="bg-blue-800 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-900 transition-all flex items-center justify-center"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
