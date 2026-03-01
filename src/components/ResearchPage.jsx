import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ResearchPage.css';
import agr1 from '../img/agr1.jpeg';
import agr2 from '../img/agr2.jpeg';
import agr3 from '../img/agr3.jpeg';
import agr4 from '../img/agr4.jpeg';
import agr5 from '../img/agr5.jpeg';
import agr6 from '../img/agr6.jpeg';

// Dummy Data Database
const researchData = {
    agriculture: {
        title: "Agriculture Research",
        heroImage: "https://img.freepik.com/premium-photo/microgridenabled-agricultural-research-background_987764-180127.jpg",
        description: "Exploring innovative solutions in smart farming, IoT-based monitoring, and sustainable agricultural practices. Our research focuses on enhancing crop yield, optimizing resource usage, and integrating modern technology with traditional farming methods.",
        gallery: [
            agr1, agr2, agr3, agr4, agr5, agr6
        ]
    },
    healthcare: {
        title: "Healthcare Research",
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Advancing medical technology through AI-driven diagnostics, patient data analysis, and telemedicine solutions. We aim to bridge the gap between technology and patient care.",
        gallery: [
            "https://tse3.mm.bing.net/th/id/OIP.IcqJ17W0BIKPZv4bMVsk3QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://cdn.expresshealthcare.in/wp-content/uploads/2020/03/05102127/COVER.jpg"
        ]
    },
    cse: {
        title: "Computer Science & Engineering",
        heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Deep diving into algorithms, software architecture, and system optimization. Our CSE research covers a broad spectrum from fundamental computing theories to applied software engineering.",
        gallery: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    ai: {
        title: "Artificial Intelligence",
        heroImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Pioneering the future with research in Machine Learning, Natural Language Processing, and Neural Networks. We explore how AI can solve complex real-world problems.",
        gallery: [
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://tse2.mm.bing.net/th/id/OIP.O09Yfj0Q5LEusFUku3tOyQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        ]
    },
    social: {
        title: "Social Activities",
        heroImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Commitment to social impact through community engagement, education, and empowerment initiatives. We believe in technology for the greater good.",
        gallery: [
            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    }
};

const ResearchPage = () => {
    const { sectorId } = useParams();
    const data = researchData[sectorId] || {
        title: "Research Area",
        heroImage: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Information about this research area is coming soon.",
        gallery: []
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [sectorId]);

    return (
        <section className="research-page">
            <div className="research-hero">
                <img src={data.heroImage} alt={data.title} />
                <h1 className="research-hero-title">{data.title}</h1>
            </div>

            <div className="research-content">
                <div className="research-desc">
                    {data.description}
                </div>

                <div className="research-gallery">
                    {data.gallery.map((img, idx) => (
                        <div key={idx} className="research-img-card">
                            <img src={img} alt={`${data.title} ${idx + 1}`} />
                        </div>
                    ))}
                    {data.gallery.length === 0 && <p>Gallery images coming soon...</p>}
                </div>
            </div>
        </section>
    );
};

export default ResearchPage;
