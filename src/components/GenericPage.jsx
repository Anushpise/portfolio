import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ResearchPage.css'; // Reusing the same CSS for consistency

// Comprehensive Dummy Data
const contentData = {
    // --- Publications ---
    scopus: {
        title: "Scopus Publications",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our high-impact research papers indexed in Scopus, demonstrating our contribution to global scientific discourse.",
        gallery: [
            "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    },
    journal: {
        title: "Journal Articles",
        heroImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Articles published in prestigious national and international journals covering a wide range of academic disciplines.",
        gallery: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    ugc: {
        title: "UGC-Care Listed",
        heroImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Research recognized by the University Grants Commission (UGC) for its quality and academic integrity.",
        gallery: []
    },
    elsevier: {
        title: "Elsevier Publications",
        heroImage: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Contributions to Elsevier journals, known for their rigorous peer-review process and scientific excellence.",
        gallery: []
    },
    conf: {
        title: "Startups & Conferences",
        heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Insights and findings presented at key startup summits and academic conferences.",
        gallery: ["https://images.unsplash.com/photo-1515169067750-d51a73e33018?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    "intl-conf": {
        title: "International Conferences",
        heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Papers presented on the global stage, fostering international collaboration and knowledge exchange.",
        gallery: ["https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    patent: {
        title: "Patents",
        heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Patented innovations and intellectual property developed through our cutting-edge research.",
        gallery: ["https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    copyright: {
        title: "Copyrights",
        heroImage: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Protected creative and intellectual works.",
        gallery: []
    },
    seminar: {
        title: "Seminars & Workshops",
        heroImage: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Interactive sessions organized or attended to share knowledge and skill development.",
        gallery: ["https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    "book-chapter": {
        title: "Book Chapters",
        heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Scholarly chapters contributed to edited volumes and reference books.",
        gallery: []
    },
    "book-author": {
        title: "Authored Books",
        heroImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Complete books authored or translated, covering specialized academic topics.",
        gallery: ["https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },

    // --- Services ---
    "tech-services": {
        title: "Tech Services",
        heroImage: "https://images.unsplash.com/photo-1531297461136-82lw9f2p0922?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Providing cutting-edge technological solutions, software development, and IT consultancy.",
        gallery: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    editorial: {
        title: "Editorial Services",
        heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Professional editing, proofreading, and content review services for academic and commercial publications.",
        gallery: []
    },
    "lead-articles": {
        title: "Lead Articles",
        heroImage: "https://images.unsplash.com/photo-1585241645927-c7a8e5843c70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Feature articles and opinion pieces on trending industry topics.",
        gallery: []
    },
    "skill-training": {
        title: "Skill Training",
        heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Workshops and training modules designed to enhance professional skills.",
        gallery: ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },
    advisory: {
        title: "Advisory Services",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Expert consultation and strategic advice for educational and corporate entities.",
        gallery: []
    },
    "browse-courses": {
        title: "Our Courses",
        heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "A catalog of our specialized courses available for enrollment.",
        gallery: ["https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"]
    },

    // --- Certifications ---
    certifications: {
        title: "Certifications",
        heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Professional certifications and credentials achieved.",
        gallery: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ]
    }
};

const GenericPage = () => {
    const { id } = useParams();
    const location = useLocation();

    // Determine which key to use. 
    // If route is /certifications, we use 'certifications' key.
    // If route is /publications/:id, we use id.

    let key = id;
    if (location.pathname === '/certifications') {
        key = 'certifications';
    }

    const data = contentData[key] || {
        title: "Details Coming Soon",
        heroImage: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "The content for this section is currently being updated.",
        gallery: []
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [key]);

    return (
        <section className="research-page"> {/* Reusing Generic/Research CSS class */}
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
                    {data.gallery.length === 0 && <p className="text-gray-400">Gallery images coming soon...</p>}
                </div>
            </div>
        </section>
    );
};

export default GenericPage;
