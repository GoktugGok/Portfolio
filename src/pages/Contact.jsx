import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header-centered"
                >
                    <span className="section-subtitle">{t("İletişime Geç", "Get In Touch")}</span>
                    <h2 className="section-title">{t("Birlikte Çalışalım", "Let's Work Together")}</h2>
                </motion.div>

                <div className="contact-wrapper">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-info-card glass-card"
                    >
                        <h3 className="card-title">{t("İletişim Bilgileri", "Contact Information")}</h3>
                        <p className="card-description">{t("İşbirlikleri veya sadece bir merhaba için ulaşmaktan çekinmeyin!", "Feel free to reach out for collaborations or just a friendly hello!")}</p>

                        <div className="contact-methods">
                            <a href="mailto:gokgoktug0@gmail.com" className="contact-method-item">
                                <div className="icon-box"><Mail size={22} /></div>
                                <div className="method-text">
                                    <span>{t("E-posta", "Email")}</span>
                                    <p>gokgoktug0@gmail.com</p>
                                </div>
                            </a>
                            <div className="contact-method-item">
                                <div className="icon-box"><MessageSquare size={22} /></div>
                                <div className="method-text">
                                    <span>{t("Sosyal Medya", "Social Media")}</span>
                                    <div className="social-links-grid">
                                        <a href="https://github.com/GoktugGok" target="_blank" rel="noopener noreferrer">GitHub</a>
                                        <a href="https://www.linkedin.com/in/göktuğ-gök-820503213/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="contact-form glass-card"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label>{t("Tam Adınız", "Full Name")}</label>
                            <input type="text" placeholder={t("Adınız Soyadınız", "Your Name")} />
                        </div>
                        <div className="form-group">
                            <label>{t("E-posta Adresiniz", "Email Address")}</label>
                            <input type="email" placeholder="email@example.com" />
                        </div>
                        <div className="form-group">
                            <label>{t("Mesajınız", "Message")}</label>
                            <textarea placeholder={t("Size nasıl yardımcı olabilirim?", "How can I help you?")}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            {t("Mesaj Gönder", "Send Message")} <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Göktuğ Gök. {t("Tutkuyla tasarlandı.", "Crafted with passion.")}</p>
            </footer>
        </section>
    );
};

export default Contact;
