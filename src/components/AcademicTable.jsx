import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaFlag, FaMicroscope, FaBookOpen, FaLightbulb, FaBook, FaLanguage, FaCopyright, FaChalkboardTeacher, FaCertificate, FaUsers, FaUserGraduate, FaBroadcastTower, FaUniversity, FaHandshake } from 'react-icons/fa';
import './AcademicTable.css';

const AcademicTable = () => {
    const items = [
        { id: 1, text: "International Conference", icon: <FaGlobe />, link: "/publications/intl-conf" },
        { id: 2, text: "National Conference", icon: <FaFlag />, link: "/publications/conf" },
        { id: 3, text: "Scopus", icon: <FaMicroscope />, link: "/publications/scopus" },
        { id: 4, text: "Journal/UGC", icon: <FaBookOpen />, link: "/publications/journal" },
        { id: 5, text: "Patent", icon: <FaLightbulb />, link: "/publications/patent" },
        { id: 6, text: "Book Chapter", icon: <FaBook />, link: "/publications/book-chapter" },
        { id: 7, text: "Book Translator", icon: <FaLanguage />, link: "/publications/book-author" },
        { id: 8, text: "Copyright", icon: <FaCopyright />, link: "/publications/copyright" },
        { id: 9, text: "FDP", icon: <FaChalkboardTeacher />, link: "/fdp" },
        { id: 10, text: "STTP", icon: <FaCertificate />, link: "/sttp" },
        { id: 11, text: "Workshops", icon: <FaUsers />, link: "/publications/seminar" },
        { id: 12, text: "Intl. Seminar", icon: <FaUserGraduate />, link: "/publications/seminar" },
        { id: 13, text: "Intl. Webinar", icon: <FaBroadcastTower />, link: "#" },
        { id: 14, text: "Nptel", icon: <FaUniversity />, link: "#" },
        { id: 15, text: "EDU-Corporate Relations", icon: <FaHandshake />, link: "#" }
    ];

    return (
        <section className="academic-section">
            <div className="section-header">
                <h2 style={{ color: 'black', margin: 0 }}>Academic Excellence</h2>
            </div>

            <div className="academic-table">
                <div className="academic-header-row">
                    Publications & Achievements
                </div>

                {items.map((item) => (
                    <Link key={item.id} to={item.link} className="academic-cell" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div className="icon-container">
                                {item.icon}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', justifyContent: 'center' }}>
                                <span style={{ fontWeight: 'bold' }}>{item.id}.</span>
                                <span style={{ fontSize: '0.9rem' }}>{item.text}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AcademicTable;
