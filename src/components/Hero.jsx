import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-left-overlay"></div>

            <div className="hero-content">
                <div className="academics-strip">
                    <h2 className="hero-title">Academics</h2>
                </div>

                <div className="hero-list">
                    <span className="hero-item">1.Research Interest</span>
                    <span className="hero-item">2. Academic Excellence</span>
                    <span className="hero-item">3. Skill Up Series</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
