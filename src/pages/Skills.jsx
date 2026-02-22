import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, ShieldCheck, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t("Diller", "Languages"),
            icon: <Code2 size={24} />,
            skills: [
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" }
            ],
            color: "rgba(255, 159, 28, 0.2)"
        },
        {
            title: t("Ön Yüz", "Frontend"),
            icon: <Layout size={24} />,
            skills: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
            ],
            color: "rgba(97, 218, 251, 0.2)"
        },
        {
            title: t("Arka Uç", "Backend"),
            icon: <Server size={24} />,
            skills: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
                { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
                { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
            ],
            color: "rgba(224, 35, 78, 0.2)"
        },
        {
            title: t("Veritabanı", "Database"),
            icon: <Database size={24} />,
            skills: [
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
            ],
            color: "rgba(51, 103, 145, 0.2)"
        },
        {
            title: t("Güvenlik & Yetki", "Security & Auth"),
            icon: <ShieldCheck size={24} />,
            skills: [
                { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
                { name: "CORS", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006541.png" }
            ],
            color: "rgba(76, 175, 80, 0.2)"
        },
        {
            title: t("Araçlar", "Tools"),
            icon: <Wrench size={24} />,
            skills: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
            ],
            color: "rgba(156, 39, 176, 0.2)"
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header-centered"
                >
                    <span className="section-subtitle">{t("Teknik Yetenekler", "Technical Stack")}</span>
                    <h2 className="section-title">{t("Yetenekler & Uzmanlık", "Skills & Expertise")}</h2>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="skill-card-v2"
                            style={{ "--card-accent": category.color }}
                        >
                            <div className="card-top">
                                <div className="category-icon-box">
                                    {category.icon}
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>

                            <motion.div
                                className="skill-tags-v2"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-tag-v2"
                                        variants={{
                                            hidden: { opacity: 0, x: -10 },
                                            show: { opacity: 1, x: 0 }
                                        }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        animate={{
                                            y: [0, -3, 0],
                                        }}
                                        transition={{
                                            y: {
                                                duration: 2 + Math.random(),
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.2
                                            }
                                        }}
                                    >
                                        <img src={skill.icon} alt={skill.name} className="skill-mini-icon" />
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
