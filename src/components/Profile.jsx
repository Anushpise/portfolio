import React from 'react';
import './Profile.css';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { SiGooglescholar, SiResearchgate, SiOrcid } from 'react-icons/si';

import profileImage from '../img/profile.png';

const Profile = () => {
    return (
        <section className="profile-section" id="about">
            <div className="profile-bottom-shape"></div>

            <div className="profile-left">
                <h3 className="profile-title">PROFILE</h3>
                <h1 className="profile-name">Ms. Anjali V.Pise</h1>

                <div className="profile-details">
                    <p><strong>Education:</strong> DCE, BE(CSE), MTech(CSE), ADMNCH</p>
                    <p><strong>Mail Id:</strong> anjalipise@avmp.com</p>
                    <p><strong>Contact No:</strong> +91-7083050233</p>
                    {/* <p><strong>Rapid Response Time:</strong> +GMT</p> */}
                    <p><strong>HQ:</strong> Wardha, Maharshtra, India, 442001</p>
                </div>

                <div className="profile-socials" style={{ marginTop: '2.5rem', display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <h4 style={{ margin: 0, color: '#aaa', fontSize: '0.9rem', marginRight: '0.5rem' }}>SOCIALS:</h4>
                    <a href="#" className="social-icon-link" title="LinkedIn"><FaLinkedin size={28} /></a>
                    <a href="#" className="social-icon-link" title="Google Scholar"><SiGooglescholar size={28} /></a>
                    <a href="#" className="social-icon-link" title="ResearchGate"><SiResearchgate size={28} /></a>
                    <a href="#" className="social-icon-link" title="GitHub"><FaGithub size={28} /></a>
                    <a href="#" className="social-icon-link" title="ORCID"><SiOrcid size={28} /></a>
                    <a href="#" className="social-icon-link" title="Web of Science"><FaGlobe size={28} /></a>
                    <a href="#" className="social-icon-link" title="Twitter"><FaTwitter size={28} /></a>
                    <a href="#" className="social-icon-link" title="WhatsApp"><FaWhatsapp size={28} /></a>
                </div>
            </div>

            <div className="profile-right">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Ms. Anjali V.Pise" className="profile-image" />
                </div>
            </div>
        </section>
    );
};

export default Profile;
