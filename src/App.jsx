import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppBtn from './components/ui/WhatsAppBtn';
import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import ProfessoresPage from './pages/ProfessoresPage';
import PlanosPage from './pages/PlanosPage';
import TesteNivelPage from './pages/TesteNivelPage';
import ContatoPage from './pages/ContatoPage';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
            case 'cursos': return <CursosPage />;
            case 'professores': return <ProfessoresPage />;
            case 'planos': return <PlanosPage />;
            case 'contato': return <ContatoPage />;
            case 'teste': return <TesteNivelPage />;
            default: return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="min-h-screen font-sans bg-white selection:bg-orange-100 selection:text-orange-600">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <main>
                {renderPage()}
            </main>

            <Footer setCurrentPage={setCurrentPage} />
            <WhatsAppBtn />
            <SpeedInsights />
        </div>
    );
};

export default App;
