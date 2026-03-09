import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

// Importing local images from assets
import FocusImg from '../assets/projects/focusflow.png';
import ShoesImg from '../assets/projects/shoeshouse.png';
import PandoraImg from '../assets/projects/pandoraclone.png';
import CliQImg from '../assets/projects/cliq.png';
import PokedexImg from '../assets/projects/pokedex.png';

const Projects = () => {
    const { t } = useLanguage();
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    const projects = [
        {
            id: 1,
            title: 'CliQ',
            image: CliQImg,
            description: t(
                'Kendini ifade etmenin yeni yolu! Cliq ile fotoğraf paylaş, takipçilerinle etkileşime geç, arkadaşlarınla mesajlaş ve gönderilere beğeni/yorum yap. ',
                'A new way to express yourself! Share photos, interact with followers, chat with friends, and like/comment on posts with Cliq. '
            ),
            tag: t('Sosyal Medya', 'Social Media'),
            link: 'https://cliqq.up.railway.app'
        },
        {
            id: 2,
            title: 'Focus Flow',
            image: FocusImg,
            description: t(
                'Pomodoro zamanlayıcısı ve sezgisel görev yönetim sistemi içeren profesyonel bir verimlilik paketi.',
                'A professional productivity suite featuring a pomodoro timer and intuitive task management system.'
            ),
            tag: t('Verimlilik', 'Productivity'),
            link: 'https://focus-flow-ruddy-two.vercel.app'
        },
        {
            id: 3,
            title: 'Shoes House',
            image: ShoesImg,
            description: t(
                'Şık ve duyarlı bir alışveriş arayüzüne sahip premium ayakkabılar için modern e-ticaret platformu.',
                'Modern eCommerce platform for premium footwear with a sleek, responsive shopping interface.'
            ),
            tag: t('E-Ticaret', 'eCommerce'),
            link: 'https://shoesshop.up.railway.app'
        },

        {
            id: 4,
            title: 'Pandora Clone',
            image: PandoraImg,
            description: t(
                'Zarafet ve detaya odaklanan, Pandora\'dan ilham alan lüks bir mücevher e-ticaret deneyimi.',
                'A luxury jewelry eCommerce experience inspired by Pandora, focusing on elegance and detail.'
            ),
            tag: t('Lüks Perakende', 'Luxury Retail'),
            link: 'https://jewelry-e-commerce.up.railway.app'
        },
        {
            id: 5,
            title: 'Pokedex',
            image: PokedexImg,
            description: t(
                'Pokémon API ile çalışan, tüm Pokémonları görüntüleyip arama yapabileceğin, detaylı bilgilerine erişebileceğin modern bir Pokedex.',
                'A modern Pokedex powered by Pokémon API, where you can view all Pokémon, search, and access their detailed information.'
            ),
            tag: t('Pokémon API', 'Pokemon API'),
            link: 'https://pokedex-react-js-chi.vercel.app'
        },

    ];

    return (
        <section id="works" className="projects-section">
            <div className="container" style={{ maxWidth: '1400px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header-centered"
                >
                    <span className="section-subtitle">{t("Portfolyo", "Portfolio")}</span>
                    <h2 className="section-title">{t("Örnek Çalışmalar", "Case Studies")}</h2>
                </motion.div>

                <motion.div ref={carousel} className="projects-carousel" whileTap={{ cursor: "grabbing" }}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="carousel-inner"
                    >
                        {projects.map((project, index) => (
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={project.id}
                                className="project-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="project-img-container">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        draggable="false"
                                    />
                                    <div className="project-tag-badge">{project.tag}</div>
                                    <div className="project-overlay">
                                        <span className="view-text">{t("Projeyi İncele", "Preview Project")}</span>
                                        <ArrowUpRight size={28} />
                                    </div>
                                </div>
                                <div className="project-details-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-link-hint">{t("Canlı Siteyi Ziyaret Et", "Visit Live Site")} &rarr;</div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="carousel-hint">
                    <span className="hint-line"></span>
                    <span>{t("Basılı Tut & Kaydır", "Hold & Slide to Browse")}</span>
                    <span className="hint-line"></span>
                </div>
            </div>
        </section>
    );
};

export default Projects;
