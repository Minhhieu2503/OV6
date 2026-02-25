import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-sm font-medium text-[#EAEAEA]/80 hover:text-[#F5F5F5] hover:bg-white/5 transition-all duration-300"
            title="Switch Language"
        >
            <Globe className="w-4 h-4" strokeWidth={1} />
            <span className="text-[13px] uppercase tracking-wider">{i18n.language === 'en' ? 'EN' : 'VI'}</span>
        </button>
    );
};

export default LanguageSwitcher;
