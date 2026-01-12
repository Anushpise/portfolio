import React from 'react';
import './UpcomingProjects.css';

const UpcomingProjects = () => {
    const items = [
        { id: 1, text: "AI" },
        { id: 2, text: "Asana" },
        { id: 3, text: "AWS" },
        { id: 4, text: "Cloud Computing" },
        { id: 5, text: "Computer Vision" },
        { id: 6, text: "Data Analysis" },
        { id: 7, text: ".Data Mining" },
        { id: 8, text: "Data Science" },
        { id: 9, text: "Docker" },
        { id: 10, text: "EDA" },
        { id: 11, text: "Kivy" },
        { id: 12, text: "Jira" },
        { id: 13, text: "PowerBI" },
        { id: 14, text: "Blockchain" },
        { id: 15, text: "Slack" }
    ];

    return (
        <section className="upcoming-section">
            <div style={{ background: 'white', width: '400px', textAlign: 'center', padding: '0.5rem', marginBottom: '2rem', clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}>
                <h2 style={{ color: 'black', margin: 0 }}>What are We Working on Next?</h2>
            </div>

            <div className="upcoming-table">
                <div className="upcoming-header-row">
                    Upcoming Projects
                </div>

                {items.map((item) => (
                    <div key={item.id} className="upcoming-cell">
                        <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>{item.id}.</span> {item.text}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpcomingProjects;
