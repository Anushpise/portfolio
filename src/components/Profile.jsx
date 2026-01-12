import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <section className="profile-section" id="about">
            <div className="profile-bottom-shape"></div>

            <div className="profile-left">
                <h3 className="profile-title">PROFILE</h3>
                <h1 className="profile-name">Ms. Anjali V.Pise</h1>

                <div className="profile-details">
                    <p><strong>Education:</strong> DCE, BE(CSE), MTech(CSE), ADMNCH</p>
                    <p><strong>Mail Id:</strong> [Email Placeholder]</p>
                    <p><strong>Contact No:</strong> +91-7083050233</p>
                    <p><strong>Rapid Response Time:</strong> +GMT</p>
                    <p><strong>HQ:</strong> Wardha, Maharshtra, India, 442001</p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <p><strong>Logo add:</strong> linkedin, google scholar, research gate, github, orchid, wos, twitter, whatsapp</p>
                </div>
            </div>

            <div className="profile-right">
                <div className="profile-image-container">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ms. Anjali V.Pise" className="profile-image" />
                </div>
            </div>
        </section>
    );
};

export default Profile;
