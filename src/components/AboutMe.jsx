import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="aboutme-section">
            {/* White strip for title to match design aesthetic possibility */}
            <div style={{ background: 'white', width: '200px', textAlign: 'center', padding: '0.5rem', marginBottom: '2rem', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}>
                <h2 style={{ color: 'black', margin: 0 }}>About me</h2>
            </div>

            <div className="aboutme-right-overlay"></div>

            <div className="aboutme-content">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team" className="aboutme-image" />
            </div>

            <div className="decided-para">
                As a bona fide quintessence of versatility, my professional footprint spans the crucial intersection of Development, Academia (Professor/Researcher), Oratory, Writing, Counselling, and Consulting, my professional life sees me seamlessly powered by an insatiable appetite for knowledge and skill application. I am a decisive front-runner, bringing a laser focus and unflagging passion to every undertaking, consistently proving to be a highly effective linchpin and team player. My cognitive framework embodies a duality of purpose: I am the coach who mentors while simultaneously remaining the student who learns from the ground up. My professional compass is guided by uncompromising standards rooted in human values, vision, and wisdom, ensuring I always champion the high road and support the right cause. I uphold the belief that quality is the name of the game be it in character or competency and view my time as a non-renewable asset. At my core, I am an entrepreneurial spirit. While my resume is merely a list of roles, my life is an unrelenting pursuit of mastery. I operate under the conviction that we must grant equal credence to the novice's first step and the veteran's vast experience, for we are all perpetual students, gaining new insights with every break of dawn.
            </div>
        </section>
    );
};

export default AboutMe;
