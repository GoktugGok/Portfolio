import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-image-wrapper"
                >
                    <div className="image-frame">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Developer Portrait" />
                    </div>
                    <div className="experience-badge">
                        <span className="years">5+</span>
                        <span className="label">Years of Experience</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="about-content"
                >
                    <h2 className="section-title">ABOUT ME</h2>
                    <h3 className="section-subtitle">SOFTWARE DEVELOPER & <br /> UI/UX ENTHUSIAST</h3>

                    <p className="about-text">
                        I'm Gokhan, a dedicated software developer with a passion for building robust, scalable applications. My journey started with a curiosity for how things work, and evolved into a career of solving complex problems through code.
                    </p>
                    <p className="about-text">
                        I specialize in both frontend and backend technologies, ensuring seamless user experiences and efficient data handling. I believe in clean code, continuous learning, and the power of technology to transform ideas into reality.
                    </p>

                    <div className="about-stats">
                        <div className="stat">
                            <span className="num">20+</span>
                            <span className="desc">Projects Completed</span>
                        </div>
                        <div className="stat">
                            <span className="num">100%</span>
                            <span className="desc">Client Satisfaction</span>
                        </div>
                    </div>

                    <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Let's Talk
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
