import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { lang, toggleLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('Ana Sayfa', 'Home'), to: 'home' },
        { name: t('Deneyim', 'Experience'), to: 'experience' },
        { name: t('Başarılar', 'Achievements'), to: 'achievements' },
        { name: t('Yetenekler', 'Skills'), to: 'skills' },
        { name: t('Projeler', 'Works'), to: 'works' },
        { name: t('İletişim', 'Contact'), to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="navbar-container container">
                <Link to="home" smooth={true} duration={500} className="logo-box">
                    <span className="logo-text">GG</span>
                </Link>

                <div className="nav-right-section">
                    <ul className="nav-menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                    activeClass="active"
                                    className="nav-link"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="lang-toggle-wrapper">
                        <button
                            className="lang-btn"
                            onClick={toggleLanguage}
                        >
                            <span className={lang === 'TR' ? 'active' : ''}>TR</span>
                            <span className="separator">/</span>
                            <span className={lang === 'EN' ? 'active' : ''}>EN</span>
                        </button>
                    </div>

                    <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-lang-toggle">
                            <button
                                className="lang-btn"
                                onClick={toggleLanguage}
                            >
                                <span className={lang === 'TR' ? 'active' : ''}>TR</span>
                                <span className="separator">/</span>
                                <span className={lang === 'EN' ? 'active' : ''}>EN</span>
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="mobile-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
