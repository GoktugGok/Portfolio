import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            company: "Mfatech",
            role: t("Arka Uç Geliştirici", "Backend Developer"),
            period: "01/2025 - 07/2025",
            location: t("Uzaktan, Türkiye", "Remote, Türkiye"),
            description: t(
                "Şirkete stajyer olarak katıldıktan sonra, gösterdiğim performans ve katkılar sonucunda kısa süre içinde Backend Developer pozisyonuna terfi ettim.",
                "Joined the company as an intern and was quickly promoted to Backend Developer role based on my performance and contributions."
            ),
            projects: [
                {
                    name: "Pviser Project",
                    details: [
                        t("Eski Flask kod tabanı NestJS mimarisine dönüştürüldü.", "Transformed legacy Flask codebase to NestJS architecture."),
                        t("WebSockets kullanılarak gerçek zamanlı veri iletişimi uygulandı.", "Implemented real-time data communication using WebSockets."),
                        t("JWT tabanlı yetkilendirme ile güvenlik artırıldı.", "Enhanced security with JWT-based authentication."),
                        t("Daha iyi performans için PostgreSQL sorguları optimize edildi.", "Optimized PostgreSQL queries for better performance."),
                        t("GitLab üzerinden CI/CD süreçleri yönetildi.", "Managed CI/CD pipelines via GitLab."),
                        t("Agile/Scrum metodolojileri dahilinde çalışıldı.", "Worked within Agile/Scrum methodologies.")
                    ]
                }
            ]
        },
        {
            company: "EA Bilişim",
            role: t("Full Stack Geliştirici Stajyeri", "Full Stack Developer Intern"),
            period: "02/2021 - 10/2021",
            location: t("İzmir, Türkiye", "İzmir, Türkiye"),
            description: t(
                "Lise stajımı Full Stack geliştirici adayı olarak tamamladım.",
                "Completed high school internship as a full stack developer trainee."
            ),
            details: [
                t("B2B e-ticaret platformunda önemli sorumluluklar üstlenildi.", "Assumed key responsibilities on a B2B e-commerce platform."),
                t("Veritabanı bakımı ve içerik güncellemeleri yapıldı.", "Performed database maintenance and content updates."),
                t("Hem ön yüz hem de arka uç görevleri için destek sağlandı.", "Provided support for both frontend and backend tasks."),
                t("Gerçek dünya proje iş akışlarında deneyim kazanıldı.", "Gained experience in real-world project workflows.")
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header-centered"
                >
                    <span className="section-subtitle">{t("Kariyer Yolu", "Career Path")}</span>
                    <h2 className="section-title">{t("İş Deneyimi", "Work Experience")}</h2>
                </motion.div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-content glass-card">
                                <div className="date-badge">{exp.period}</div>
                                <h3 className="company-name">{exp.company}</h3>
                                <h4 className="role-title">{exp.role}</h4>

                                <div className="meta-info">
                                    <span><MapPin size={14} /> {exp.location}</span>
                                </div>

                                <p className="description">{exp.description}</p>

                                {exp.projects ? (
                                    <div className="project-details">
                                        {exp.projects.map(proj => (
                                            <div key={proj.name} className="project-item">
                                                <h5 className="project-name">{t("Ana Proje", "Major Project")}: {proj.name}</h5>
                                                <ul className="detail-list">
                                                    {proj.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <ul className="detail-list">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
