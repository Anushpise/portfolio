import React, { useState } from 'react';
import './AVMPProjects.css';
import { motion } from 'framer-motion';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';
import project5 from '../img/project5.png';
import project6 from '../img/project6.jpeg';
import project7 from '../img/project7.png';


const projectsData = [
    {
        id: 1,
        name: "Agriculture",
        image: project1,
        info: "The Agriculture App is a team project (AP & SK) built using Blockchain, Machine Learning, and IoT technologies to improve transparency and efficiency in the agricultural supply chain. The platform leverages smart contracts to automate agreements, payments, and compliance processes among farmers, distributors, retailers, and buyers. By ensuring secure, traceable, and tamper-proof transactions, the system reduces delays, minimizes fraud, eliminates unnecessary intermediaries, and promotes fair pricing. As a result, farmers receive timely payments, stakeholders gain real-time visibility into product movement and quality, and overall supply chain reliability and sustainability are significantly enhanced.."
    },
    {
        id: 2,
        name: "Cyber blog",
        image: project2,
        info: "The Cyber Blog is a web-based project developed to create an informative and engaging platform focused on cybersecurity awareness, emerging technologies, and digital safety practices. Built using modern frontend technologies, the platform provides well-structured articles, insights, and updates to help users stay informed about cyber threats, data protection, and online privacy. The project aims to promote cybersecurity knowledge in a clear and accessible manner while enhancing content management and web development skills. As a result, it serves as a reliable resource for readers and strengthens understanding of secure digital practices."
    },
    {
        id: 3,
        name: "Docter App",
        image: project3,
        info: "A Doctor App is a mobile or web application that connects patients with doctors for appointments, consultations, and health advice. It simplifies booking, keeps medical records organized, and helps users access healthcare anytime, anywhere"
    },
    {
        id: 4,
        name: "Digital Clock",
        image: project4,
        info: "The Digital Clock is a solo frontend project designed to provide a reliable, accurate, and user-friendly timekeeping solution suitable for personal, educational, and professional environments. It delivers precise real-time information through a clear digital display, incorporating essential features such as alarms and date tracking while ensuring simplicity, efficiency, and consistent performance. This project also strengthens core programming concepts and contributes to improved time management, punctuality, and overall productivity for users."
    },
    {
        id: 5,
        name: "LMS",
        image: project5,
        info: "The Learning Management System (LMS) is a web-based project designed to streamline and enhance the digital learning experience for students and educators. Developed using modern web technologies, the platform enables course management, content delivery, assignment submissions, and progress tracking within a centralized system. Its primary objective is to simplify academic administration, improve accessibility to learning resources, and support structured online education. The implementation of this system results in better organization, efficient communication, and an improved overall learning experience for both individuals and institutions."
    },
    {
        id: 6,
        name: "News Recommendation System",
        image: project6,
        info: "Our platform utilizes blockchain technology to store user preferences in a decentralized, encrypted ledger, ensuring absolute data privacy and ownership. Smart contracts automatically execute recommendation algorithms based on transparent, pre-defined rules, eliminating central authority manipulation. This system guarantees that news rankings are immutable and tamper-proof, fostering trust through verifiable content provenance. Users are empowered to curate their own feeds and earn tokens for high-quality engagement, creating a meritocratic and secure content ecosystem."
    },
    {
        id: 7,
        name: "News Recommendation System",
        image: project7,
        info: "Smart Village Control System :Guided by the Saansad Adarsh Gram Yojana (SAGY) initiative, this project implements a centralized digital control system to transform Dahegav into a model self-reliant village. It directly overcomes local infrastructure challenges by integrating real-time IoT monitoring for automated water distribution, smart street lighting, and efficient waste management. By digitizing administrative workflows, the system ensures transparent governance and data-driven resource allocation as envisioned by the Prime Minister's rural development goals. This tech-enabled framework serves as a scalable blueprint for holistic social and economic empowerment across rural India. platform utilizes blockchain technology to store user preferences in a decentralized, encrypted ledger, ensuring absolute data privacy and ownership. Smart contracts automatically execute recommendation algorithms based on transparent, pre-defined rules, eliminating central authority manipulation. This system guarantees that news rankings are immutable and tamper-proof, fostering trust through verifiable content provenance. Users are empowered to curate their own feeds and earn tokens for high-quality engagement, creating a meritocratic and secure content ecosystem."
    }

];

const ProjectCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="project-container">
            <h3 className="project-name">{project.name}</h3>
            <div
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={project.image} alt={project.name} className="project-img" />
                    </div>
                    <div className="flip-card-back">
                        <div className="project-info-container">
                            <p className="project-info">{project.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AVMPProjects = () => {
    return (
        <section className="avmp-projects">
            <div className="projects-header">
                <h1>AVMP Projects</h1>
                <p>Innovative solutions and research initiatives.</p>
            </div>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default AVMPProjects;
