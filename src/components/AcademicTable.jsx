import React from 'react';
import './AcademicTable.css';

const AcademicTable = () => {
    const items = [
        { id: 1, text: "International Conference" },
        { id: 2, text: "National Conference" },
        { id: 3, text: "Scopus" },
        { id: 4, text: "Journal/UGC" },
        { id: 5, text: "Patent" },
        { id: 6, text: "Book Chapter" },
        { id: 7, text: "Book Translator" },
        { id: 8, text: "Copyright" },
        { id: 9, text: "FDP" },
        { id: 10, text: "STTP" },
        { id: 11, text: "Workshops" },
        { id: 12, text: "Intl. Seminar" },
        { id: 13, text: "Intl. Webinar" },
        { id: 14, text: "Nptel" },
        { id: 15, text: "EDU-Corporate Relations" }
    ];

    return (
        <section className="academic-section">
            <div className="academic-table">
                <div className="table-header">
                    {/* Empty left/right cols in header as per design, title in center */}
                    <div style={{ gridColumn: 2, textAlign: 'center', background: '#dcd0ff', padding: '1rem', color: 'black', fontWeight: 'bold' }}>Academic Excellence</div>
                </div>

                {items.map((item) => (
                    <div key={item.id} className="table-cell">
                        <span className="cell-number">{item.id}.</span>
                        {item.text}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AcademicTable;
