import React, { useState } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import logo from "../img/logo.png.png";
import cvPdf from "../pdf/Anjali_Pise_Resume.pdf";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Navigation Data Structure
    const navItems = [
        { title: "Home", link: "/" },
        { title: "About Me", link: "/#about" },
        {
            title: "Academics",
            link: "#academics",
            dropdown: [
                // {
                //     title: "Education Details",
                //     link: "#education",
                //     nested: [
                //         { title: "DCSE", link: "#dcse" },
                //         { title: "BTech (CSE)", link: "#btech" },
                //         { title: "MTech (CSE)", link: "#mtech" },
                //         { title: "ADCNMH (Pursuing)", link: "#adcnmh" }
                //     ]
                // },
                // { title: "CV", link: cvPdf, target: "_blank" },
                { title: "Work Experience", link: "/experience" },
                { title: "--- Academics Subcontent ---", link: "#", isHeader: true },
                {
                    title: "Research Interest Sector",
                    link: "#research",
                    nested: [
                        { title: "Agriculture", link: "/research/agriculture" },
                        { title: "HealthCare", link: "/research/healthcare" },
                        { title: "CSE", link: "/research/cse" },
                        { title: "AI", link: "/research/ai" },
                        { title: "Social activities", link: "/research/social" }
                    ]
                },
                {
                    title: "Publications",
                    link: "#publications",
                    nested: [
                        { title: "Scopus", link: "/publications/scopus" },
                        { title: "Journal", link: "/publications/journal" },
                        { title: "UGC-Care", link: "/publications/ugc" },
                        { title: "Elsevier", link: "/publications/elsevier" },
                        { title: "Startups/Conference", link: "/publications/conf" },
                        { title: "International Conference", link: "/publications/intl-conf" },
                        { title: "Patent", link: "/publications/patent" },
                        { title: "Copyright", link: "/publications/copyright" },
                        { title: "Seminar/Workshop", link: "/publications/seminar" },
                        { title: "Book Chapter", link: "/publications/book-chapter" },
                        { title: "Book Author/Translator", link: "/publications/book-author" }
                    ]
                },
                { title: "NPTEL/Mooc", link: "/nptel" },
                { title: "FDP's", link: "/fdp" },
                { title: "STTP's", link: "/sttp" },
                { title: "Other Courses", link: "/other-courses" },
                { title: "Presentation", link: "/presentation" },
                { title: "Certifications", link: "/certifications" }
            ]
        },
        { title: "AVMP Projects", link: "/avmp-projects" },
        {
            title: "AVMP WORKING SECTOR",
            link: "#working-sector",
            dropdown: [
                { title: "OUR SERVICES", link: "#", isHeader: true },
                { title: "Tech Services", link: "/services/tech-services" },
                { title: "Editorial Services", link: "/services/editorial" },
                { title: "Lead Articles", link: "/services/lead-articles" },
                { title: "Skill Training", link: "/services/skill-training" },
                { title: "Advisory Services", link: "/services/advisory" },
                { title: "Browse Our Courses", link: "/services/browse-courses" }
            ]
        },
        { title: "Media Gallery", link: "/gallery" }
    ];

    return (
        <header className="header">
            <div className="header-left-shape"></div>

            <div className="logo-container">
                {/* Animated Logo */}
                <motion.img
                    src={logo}
                    alt="logo"
                    className="zoom-img"
                    animate={{
                        scale: [1, 1.4, 1.4, 1],
                        rotate: [0, 0, 0, 0, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.25, 0.5, 0.75, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                />
            </div>
            <div className="header-right-shape"></div>

            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                ☰
            </div>

            <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                {navItems.map((item, index) => (
                    <div key={index} className="nav-item">
                        <a href={item.link} className="nav-link">{item.title}</a>

                        {item.dropdown && (
                            <div className="dropdown-menu">
                                {item.dropdown.map((subItem, subIndex) => (
                                    <div key={subIndex} className={`dropdown-item ${subItem.nested ? 'has-nested' : ''} ${subItem.isHeader ? 'menu-header' : ''}`}>
                                        <a href={subItem.link} target={subItem.target} rel={subItem.target === "_blank" ? "noopener noreferrer" : undefined}>
                                            {subItem.title}
                                            {subItem.nested && <span className="arrow">▸</span>}
                                        </a>

                                        {subItem.nested && (
                                            <div className="nested-level">
                                                {subItem.nested.map((nestedItem, nestedIndex) => (
                                                    <a key={nestedIndex} href={nestedItem.link} className="nested-item">
                                                        {nestedItem.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
