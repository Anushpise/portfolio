import React from 'react';
import './WorkingSector.css';

const WorkingSector = () => {
    const items = [
        { id: 1, text: "Agriculture Research" },
        { id: 2, text: "Research & Analysis" },
        { id: 3, text: "Content Writing (Tech, UPSC, GK, Moral Story)" },
        { id: 4, text: "24/7 Turnitin Support" },
        { id: 5, text: "STEM Classes" },
        { id: 6, text: "Workshops" },
        { id: 7, text: "Graphics" },
        { id: 8, text: "Seminars" },
        { id: 9, text: "Projects" },
        { id: 10, text: "Consultation" },
        { id: 11, text: "Counselling" },
        { id: 12, text: "Online/Onsite Trainings" },
        { id: 13, text: "Webinars" },
        { id: 14, text: "Omnichannel Marketing" },
        { id: 15, text: "UI/UX designing" }
    ];

    return (
        <section className="working-section">
            <h2 className="working-title">Working Sector</h2>

            <div className="working-table">
                <div className="working-header">
                    <div style={{ gridColumn: 2, textAlign: 'center', background: '#dcd0ff', padding: '1rem', color: 'black', fontWeight: 'bold' }}>Working Sector</div>
                </div>

                {items.map((item) => (
                    <div key={item.id} className="working-cell">
                        <span className="cell-number" style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>{item.id}.</span>
                        {item.text}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkingSector;
