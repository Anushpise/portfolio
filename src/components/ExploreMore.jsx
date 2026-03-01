import React from 'react';
import './ExploreMore.css';
import hqlocation from '../img/hqlocation.png';
import cvPdf from '../pdf/Anjali_Pise_Resume.pdf';

const ExploreMore = () => {
    return (
        <section className="explore-section">
            <h2 className="explore-title">Explore More</h2>

            <button className="download-cv-btn" onClick={() => window.open(cvPdf, '_blank')}>Download CV</button>

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

            <div className="explore-footer-content">
                <div className="contact-form-container">
                    <h3>Stay Connected With Us</h3>
                    <form
                        className="contact-form"
                        action="https://formspree.io/f/maqdzolo"
                        method="POST"
                    >
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>

                <div className="location-map-container">
                    <h3>Our HQ Location</h3>
                    <div className="dummy-map">
                        <img src={hqlocation} alt="HQ Map Location" />
                        <div className="map-overlay">
                            <p>Wardha, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                This website has been professionally designed and developed by Anjali Pise, with full content ownership and
                credit acknowledged to the client.
            </div>
        </section>
    );
};

export default ExploreMore;
