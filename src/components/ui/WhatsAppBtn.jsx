import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBtn = () => (
    <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
    >
        <MessageCircle size={32} fill="white" />
    </a>
);

export default WhatsAppBtn;
