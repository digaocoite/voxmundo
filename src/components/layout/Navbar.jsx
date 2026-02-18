import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ASSETS } from '../../constants';
import LogoIcon from '../ui/LogoIcon';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Início', id: 'home' },
        { name: 'Cursos', id: 'cursos' },
        { name: 'Professores', id: 'professores' },
        { name: 'Planos', id: 'planos' },
        { name: 'Contato', id: 'contato' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
                        {ASSETS.logoImage ? (
                            <img src={ASSETS.logoImage} alt="VoxMundo" className="h-12 w-auto mr-3" />
                        ) : (
                            <LogoIcon className="w-11 h-11 mr-3 group-hover:scale-110 transition-transform" />
                        )}
                        <span className="text-2xl font-black tracking-tight">
                            <span className="text-orange-600">Vox</span>
                            <span className="text-blue-800">Mundo</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setCurrentPage(link.id)}
                                className={`text-sm font-semibold transition-colors ${currentPage === link.id ? 'text-orange-600' : 'text-slate-600 hover:text-orange-500'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage('teste')}
                            className="bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:bg-orange-700 transition-all transform hover:-translate-y-0.5"
                        >
                            Teste de Nível
                        </button>
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    setCurrentPage(link.id);
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setCurrentPage('teste');
                                setIsOpen(false);
                            }}
                            className="w-full mt-4 bg-orange-600 text-white py-4 rounded-xl font-bold text-center"
                        >
                            Fazer Teste de Nível
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
