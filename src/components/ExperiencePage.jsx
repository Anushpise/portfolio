import React, { useEffect } from 'react';
import './ExperiencePage.css';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: "HR Cluster Head",
        company: "NTPLWorld IT Company",
        location: "Remote – New Delhi, India",
        period: "Aug 2023 – Dec 2023",
        description: "Led multi-domain operations across Human Resource Management, Sales, and Marketing functions. Worked closely with HR Executives, Regional Directors, and the Asia Business Head to ensure operational excellence and strategic growth.",
        responsibilities: [
            "Conducted extensive research and analytical study for MH-27 State operations.",
            "Supervised operations across 43 cities, managing 8 intern teams.",
            "Led recruitment strategies, onboarding processes, and organizational implementation.",
            "Designed and delivered specialized training programs in Omni-Channel Marketing.",
            "Managed CRM systems, client acquisition, and sales strategy development.",
            "Provided detailed reports and analytical feedback to Regional Directors of MH-27 and BH-10 states.",
            "Maintained strict confidentiality and professional ethics across operations."
        ],
        icon: "💼"
    },
    {
        title: "Human Resources Intern",
        company: "NTPLWorld IT Company",
        location: "Remote",
        period: "Aug 2023 – Sep 2023",
        description: "Gained hands-on exposure to HRM systems and recruitment lifecycle management.",
        responsibilities: [
            "Created and managed job profiles based on structured Job Descriptions.",
            "Posted vacancies across multiple recruitment platforms.",
            "Conducted 20+ interviews, shortlisted, and hired eligible candidates.",
            "Developed and redesigned HR training modules.",
            "Delivered HRM training sessions for administrative teams."
        ],
        icon: "🌱"
    },
    {
        title: "Assistant Professor",
        company: "Agnihotri College of Education, Bapuji Wadi",
        location: "Wardha, Maharashtra",
        period: "Sep 2021 – Dec 2021",
        description: "Served as a faculty member responsible for academic delivery and curriculum development under RTMNU guidelines.",
        responsibilities: [
            "Conducted lectures on RTMNU-prescribed subjects.",
            "Designed course structures, practical modules, and examination papers.",
            "Supervised examinations as Examination Incharge.",
            "Participated in “Awareness Program on Activity Based Learning” with RTMNU.",
            "Attended Faculty Development Program on Research Methodology.",
            "Fostered an open and interactive learning environment for students."
        ],
        icon: "🎓"
    },
    {
        title: "Scholar",
        company: "Lila Poonawalla Foundation – India",
        location: "Wardha, Maharashtra",
        period: "Jun 2017 – May 2020",
        description: "Selected scholar trained under distinguished professionals through structured development programs and leadership initiatives.",
        responsibilities: [
            "Participated in expert-led training sessions and interdisciplinary seminars.",
            "Presented at academic and professional forums.",
            "Recognized as “Best Performer” by the training panel.",
            "Awarded the prestigious title “Gem of LPF” for outstanding performance and commitment."
        ],
        icon: "🌟"
    }
];

const ExperiencePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="experience-page">
            <div className="experience-hero">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Work Experience
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    A journey of professional growth, leadership, and academic excellence.
                </motion.p>
            </div>

            <div className="timeline-container">
                {experienceData.map((exp, index) => (
                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="timeline-dot">{exp.icon}</div>
                        <div className="timeline-content">
                            <span className="exp-period">{exp.period}</span>
                            <h2>{exp.title}</h2>
                            <h3 className="exp-company">{exp.company}</h3>
                            <span className="exp-location">{exp.location}</span>
                            <p className="exp-desc">{exp.description}</p>
                            <ul className="exp-list">
                                {exp.responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperiencePage;
