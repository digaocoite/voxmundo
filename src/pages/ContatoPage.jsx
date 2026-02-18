import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContatoPage = () => (
    <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Vamos conversar? <br /><span className="text-orange-500">Sua fluência espera.</span></h1>
                    <p className="text-xl text-slate-600 mb-12">Estamos prontos para tirar todas as suas dúvidas e ajudar você a escolher o melhor caminho.</p>

                    <div className="space-y-8">
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mr-6">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">E-mail</h4>
                                <p className="text-slate-500">contato@voxmundo.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mr-6">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">WhatsApp</h4>
                                <p className="text-slate-500">+55 (11) 9999-9999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl">
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nome</label>
                                <input type="text" className="w-full p-4 rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-orange-500" placeholder="Seu nome" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Idioma</label>
                                <select className="w-full p-4 rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-orange-500 bg-white">
                                    <option>Inglês</option>
                                    <option>Espanhol</option>
                                    <option>Português</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Assunto</label>
                            <input type="text" className="w-full p-4 rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-orange-500" placeholder="Como podemos ajudar?" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mensagem</label>
                            <textarea className="w-full p-4 rounded-xl border-0 shadow-sm focus:ring-2 focus:ring-orange-500 h-32" placeholder="Escreva aqui sua dúvida..."></textarea>
                        </div>
                        <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContatoPage;
