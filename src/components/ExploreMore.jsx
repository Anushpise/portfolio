import React from 'react';
import './ExploreMore.css';

const ExploreMore = () => {
    return (
        <section className="explore-section">
            <h2 className="explore-title">Explore More</h2>

            <button className="download-cv-btn">Download CV</button>

            <div className="stats-container">
                <div className="stat-item">
                    <span className="stat-number">200+</span>
                    <span className="stat-label">Students & Trainee</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">90+</span>
                    <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">300+</span>
                    <span className="stat-label">Meetings</span>
                </div>
            </div>

            <div className="footer-links">
                <div>Our HQ Location</div>
                <div>Graph</div>
                <div>Stay Connected With Us( Form )</div>
            </div>

            <div className="footer-bottom">
                Designed and Developed by Ms. Anjali Pise, Made love (heart) by India(flag), All Copyrights and Content Reserved
            </div>
        </section>
    );
};

export default ExploreMore;
