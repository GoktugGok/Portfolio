import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, BookOpen, Star, X, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Achievements.css';

const Achievements = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(null);

    const achievements = [
        {
            title: t("Django Eğitim Birinciliği", "Django Training First Place"),
            issuer: t("BTK Akademi / Yazılım Eğitim Programı", "BTK Academy / Software Training Program"),
            date: "2024",
            description: t(
                "Kapsamlı Python/Django eğitim programını tüm projeler ve sınavlar sonucunda birincilikle (First Place) tamamladım.",
                "Completed the comprehensive Python/Django training program with first place after all projects and exams."
            ),
            icon: <Trophy className="ach-icon highlight" size={32} />,
            tags: ["Python", "Django", "Backend", "Competition"],
            image: "/django-cert.png"
        },
        {
            title: t("C# Programlama Sertifikası", "C# Programming Certificate"),
            issuer: t("BTK Akademi", "BTK Academy"),
            date: "2024",
            description: t(
                "C# dili, Nesne Yönelimli Programlama (OOP) ve .NET mimarisi üzerine uzmanlık eğitimi.",
                "Specialized training on C# language, Object Oriented Programming (OOP) and .NET architecture."
            ),
            icon: <Award className="ach-icon" size={32} />,
            tags: ["C#", ".NET", "OOP"],
            image: "/csharp-cert.png"
        }
    ];

    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header-centered"
                >
                    <span className="section-subtitle">{t("Başarı Listesi", "Certifications & Achievements")}</span>
                    <h2 className="section-title">{t("Başarımlar & Tanınma", "Achievements & Recognition")}</h2>
                </motion.div>

                <div className="achievements-grid">
                    {achievements.map((ach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`achievement-card ${index === 0 ? 'featured' : ''}`}
                            onClick={() => setSelectedImage(ach.image)}
                        >
                            <div className="ach-icon-wrapper">
                                <div className="icon-main">{ach.icon}</div>
                                <div className="view-overlay">
                                    <Eye size={20} />
                                    <span>{t("GÖRÜNTÜLE", "VIEW")}</span>
                                </div>
                                {index === 0 && <motion.div
                                    className="winner-badge"
                                    initial={{ x: "-50%", scale: 1 }}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    style={{ left: "50%" }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    <Star size={12} fill="currentColor" /> #1 Rank
                                </motion.div>}
                            </div>

                            <div className="ach-content">
                                <div className="ach-header">
                                    <h3 className="ach-title">{ach.title}</h3>
                                    <span className="ach-date">{ach.date}</span>
                                </div>
                                <p className="ach-issuer">{ach.issuer}</p>
                                <p className="ach-description">{ach.description}</p>

                                <div className="ach-tags">
                                    {ach.tags.map(tag => (
                                        <span key={tag} className="ach-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="card-border-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="cert-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={() => setSelectedImage(null)}>
                                <X size={24} />
                            </button>
                            <img src={selectedImage} alt="Certificate Preview" className="cert-preview-img" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Achievements;
