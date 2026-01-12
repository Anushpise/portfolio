import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ResearchPage.css';

// Dummy Data Database
const researchData = {
    agriculture: {
        title: "Agriculture Research",
        heroImage: "https://images.unsplash.com/photo-1625246333195-098e98e579ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Exploring innovative solutions in smart farming, IoT-based monitoring, and sustainable agricultural practices. Our research focuses on enhancing crop yield, optimizing resource usage, and integrating modern technology with traditional farming methods.",
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    healthcare: {
        title: "Healthcare Research",
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Advancing medical technology through AI-driven diagnostics, patient data analysis, and telemedicine solutions. We aim to bridge the gap between technology and patient care.",
        gallery: [
            "https://images.unsplash.com/photo-1579684385180-1eacd8859268?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516549655169-df83a0050c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
            "https://images.unsplash.com/photo-1535378437337-12d40c16324c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
