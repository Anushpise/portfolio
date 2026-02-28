import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaMicroscope, FaPenNib, FaShieldAlt, FaUsers, FaPalette, FaChalkboardTeacher, FaProjectDiagram, FaInfoCircle, FaHandsHelping, FaLaptopCode, FaVideo, FaBullhorn, FaObjectGroup } from 'react-icons/fa';
import './WorkingSector.css';

const WorkingSector = () => {
    const items = [
        { id: 1, text: "Agriculture Research", icon: <FaLeaf />, link: "/research/agriculture" },
        { id: 2, text: "Research & Analysis", icon: <FaMicroscope />, link: "/research/healthcare" },
        { id: 3, text: "Content Writing", icon: <FaPenNib />, link: "/services/editorial" },
        { id: 4, text: "Turnitin Support", icon: <FaShieldAlt />, link: "/services/tech-services" },
        { id: 5, text: "STEM Classes", icon: <FaChalkboardTeacher />, link: "/services/browse-courses" },
        { id: 6, text: "Workshops", icon: <FaUsers />, link: "/services/skill-training" },
        { id: 7, text: "Graphics", icon: <FaPalette />, link: "/services/lead-articles" },
        { id: 8, text: "Seminars", icon: <FaChalkboardTeacher />, link: "/publications/seminar" },
        { id: 9, text: "Projects", icon: <FaProjectDiagram />, link: "/projects" },
        { id: 10, text: "Consultation", icon: <FaInfoCircle />, link: "/services/advisory" },
        { id: 11, text: "Counselling", icon: <FaHandsHelping />, link: "/services/advisory" },
        { id: 12, text: "Online Trainings", icon: <FaLaptopCode />, link: "/services/skill-training" },
        { id: 13, text: "Webinars", icon: <FaVideo />, link: "/services/browse-courses" },
        { id: 14, text: "Omnichannel Marketing", icon: <FaBullhorn />, link: "/services/tech-services" },
        { id: 15, text: "UI/UX designing", icon: <FaObjectGroup />, link: "/services/tech-services" }
    ];

    return (
        <section className="working-section">
            <div className="section-header">
                <h2 style={{ color: 'black', margin: 0 }}>Working Sector</h2>
            </div>

            <div className="working-table">
                <div className="working-header-row">
                    Our Services
                </div>

                {items.map((item) => (
                    <Link key={item.id} to={item.link} className="working-cell" style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default WorkingSector;
