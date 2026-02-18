import React from 'react';
import { Instagram, Linkedin, Facebook, Mail, Phone, Clock } from 'lucide-react';
import { ASSETS } from '../../constants';
import LogoIcon from '../ui/LogoIcon';

const Footer = ({ setCurrentPage }) => (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center mb-6">
                        {ASSETS.logoImage ? (
                            <img src={ASSETS.logoImage} alt="VoxMundo" className="h-8 w-auto mr-2" />
                        ) : (
                            <LogoIcon className="w-8 h-8 mr-2" />
                        )}
                        <span className="text-xl font-black tracking-tight">VoxMundo</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                        Conectando culturas através do ensino moderno de idiomas. Sua jornada para a fluência começa aqui.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-orange-400 uppercase text-xs tracking-widest">Links Rápidos</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Início</button></li>
                        <li><button onClick={() => setCurrentPage('cursos')} className="hover:text-white transition-colors">Nossos Cursos</button></li>
                        <li><button onClick={() => setCurrentPage('professores')} className="hover:text-white transition-colors">Professores</button></li>
                        <li><button onClick={() => setCurrentPage('planos')} className="hover:text-white transition-colors">Planos e Preços</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-orange-400 uppercase text-xs tracking-widest">Suporte</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><button onClick={() => setCurrentPage('teste')} className="hover:text-white transition-colors">Teste de Nivelamento</button></li>
                        <li><button onClick={() => setCurrentPage('contato')} className="hover:text-white transition-colors">Fale Conosco</button></li>
                        <li><a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-orange-400 uppercase text-xs tracking-widest">Contato</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start">
                            <Mail size={16} className="mr-3 mt-1 text-orange-500" />
                            <span>contato@voxmundo.com</span>
                        </li>
                        <li className="flex items-start">
                            <Phone size={16} className="mr-3 mt-1 text-orange-500" />
                            <span>+55 (11) 9999-9999</span>
                        </li>
                        <li className="flex items-start">
                            <Clock size={16} className="mr-3 mt-1 text-orange-500" />
                            <span>Seg - Sex: 08h às 21h</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} VoxMundo. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
