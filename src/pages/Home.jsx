import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowRight, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
    const { t, lang } = useLanguage();  // ✅ language değil, lang!

    // Dil değişimini izle
    useEffect(() => {
        console.log('Home component - lang from context:', lang);
    }, [lang]);

    const techStack = [
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'C#', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ];

    // ✅ CV yolunu lang'a göre belirle (TR/EN)
    const cvPath = lang === 'TR' ? '/GoktugGok-CV-TR.pdf' : '/GoktugGok-CV-EN.pdf';
    const downloadFileName = lang === 'TR' ? 'GoktugGok-CV-TR.pdf' : 'GoktugGok-CV-EN.pdf';

    console.log('Current lang:', lang, 'CV:', downloadFileName);

    return (
        <section id="home" className="home-section">
            <div className="container hero-center-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-main-wrapper"
                >
                    <div className="hero-badge">
                        <span className="pulse-dot"></span>
                        {t("Yeni projelere hazır", "Ready for new projects")}
                    </div>

                    <h1 className="hero-name-big ">Göktuğ<br /><span className="accent-text">Gök</span></h1>

                    <div className="hero-terminal-wrapper">
                        <div className="terminal-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="terminal-body">
                            <span className="terminal-prompt">$</span>
                            <motion.span
                                className="terminal-text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                focus --area <span className="terminal-highlight">Full-Stack Development</span>
                            </motion.span>
                        </div>
                    </div>

                    <div className="hero-role-wrapper">
                        <span className="hero-role-tag">Software Developer</span>
                    </div>

                    <p className="hero-bio">
                        {t(
                            <>Modern teknolojilerle ölçeklenebilir <span className="highlight">arka uç</span> çözümleri ve etkileyici <span className="highlight">ön yüz</span> deneyimleri geliştiriyorum.</>,
                            <>I develop scalable <span className="highlight">backend</span> solutions and impressive <span className="highlight">frontend</span> experiences using modern technologies.</>
                        )}
                    </p>

                    <div className="hero-actions">
                        <Link
                            to="works"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="btn btn-primary btn-with-icon"
                        >
                            {t("Projelerimi İncele", "View My Projects")} <ArrowRight size={18} />
                        </Link>

                        <a
                            href={cvPath}
                            download={downloadFileName}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-with-icon"
                        >
                            {t("CV İndir", "Download CV")} <FileDown size={18} />
                        </a>

                        <div className="hero-socials">
                            <a href="https://github.com/GoktugGok" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/göktuğ-gök-820503213/" target="_blank" rel="noopener noreferrer" className="social-icon-btn"><Linkedin size={20} /></a>
                            <a href="mailto:gokgoktug0@gmail.com" className="social-icon-btn"><Mail size={20} /></a>
                        </div>
                    </div>

                    <motion.div
                        className="tech-logos-container"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.8
                                }
                            }
                        }}
                    >
                        <p className="tech-stack-title">{t("Kullandığım Teknolojiler", "Technologies I Use")}</p>
                        <div className="tech-logos-grid">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className="tech-logo-item"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.1,
                                        backgroundColor: "rgba(255, 159, 28, 0.15)",
                                        borderColor: "var(--accent)"
                                    }}
                                    animate={{
                                        y: [0, -5, 0],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2
                                        }
                                    }}
                                    title={tech.name}
                                >
                                    <img src={tech.url} alt={tech.name} className="tech-icon-img" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;