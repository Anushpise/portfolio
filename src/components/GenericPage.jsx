import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { isMotionComponent, motion } from 'framer-motion';
import './ResearchPage.css'; // Reusing the same CSS for consistency
import nptel1 from '../img/nptel1.png';
import nptel2 from '../img/nptel2.jpeg';
import scoup from '../img/scoup.png';
import waorkshop1 from '../img/waorkshop1.jpg';
import workshop2 from '../img/workshop2.png';
import workshop3 from '../img/workshop3.jpeg';
import international from '../img/international.jpg';
import patentImg from '../img/patent.png';
import fdp1 from '../img/fdp1.jpeg';
import fdp2 from '../img/fdp2.jpg';
import fdp3 from '../img/fdp3.jpeg';
import fdp4 from '../img/fdp4.png';
import fdp5 from '../img/fdp5.png';
import fdp6 from '../img/fdp6.png';
import fdp7 from '../img/fdp7.png';
import fdp8 from '../img/fdp8.png';
import webinar1 from '../img/webinar1.jpeg';
import webinar2 from '../img/webinar2.jpeg';
import webinar3 from '../img/webinar3.jpeg';
import webinar4 from '../img/webinar4.png';
import webinar5 from '../img/webinar5.png';
import seminar1 from '../img/seminar1.png';
import seminar2 from '../img/seminar2.jpeg';
import skillup1 from '../img/skillup1.png';
import skillup2 from '../img/skillup2.png';
import skillup3 from '../img/skillup3.png';
import skillup4 from '../img/skillup4.png';
import skillup5 from '../img/skillup5.png';
import skillup6 from '../img/skillup6.png';
import skillup7 from '../img/skillup7.jpeg';
import skillup8 from '../img/skillup8.jpeg';
import skillup9 from '../img/skillup9.jpeg';
import skillup10 from '../img/skillup10.jpeg';
import startup from '../img/startup.png';
import graphTheoryPdf from '../pdf/Seminar - Graph Theory.pdf';
import jdmsc from '../pdf/1.jdmsc-2518(2).pdf';
import radicalevolution from '../pdf/RadicalEvolution4 Scopus Published PAper.pdf';
// Comprehensive Dummy Data
const contentData = {
    // --- Publications ---
    scopus: {
        title: "Scopus Publications",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our high-impact research papers indexed in Scopus, demonstrating our contribution to global scientific discourse.",
        gallery: [
            scoup, { type: 'pdf', url: jdmsc, title: 'jdmsc' }, { type: 'pdf', url: radicalevolution, title: 'Radical Evolution' }

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
        gallery: [startup]
    },
    "intl-conf": {
        title: "International Conferences",
        heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Papers presented on the global stage, fostering international collaboration and knowledge exchange.",
        gallery: [
            international,
            { type: 'pdf', url: graphTheoryPdf, title: 'Seminar - Graph Theory' }
        ]
    },
    patent: {
        title: "Patents",
        heroImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Patented innovations and intellectual property developed through our cutting-edge research.",
        gallery: [patentImg],
        isDocument: true // Flag to use contain instead of cover
    },
    copyright: {
        title: "Copyrights",
        heroImage: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Protected creative and intellectual works.",
        gallery: []
    },
    seminar: {
        title: "Seminars & Workshops",
        heroImage: "https://media.istockphoto.com/id/1286694373/photo/social-network-concept.jpg?s=1024x1024&w=is&k=20&c=rmfAPxVWShqirEegs6s_1QoNu37BsJa2kPtPT9AbVeU=",
        description: "Interactive sessions organized or attended to share knowledge and skill development.",
        gallery: [waorkshop1, workshop2, workshop3, seminar1, seminar2]
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
        heroImage: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v617batch2-bb-01-technology_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8fd066d1af2ba618986b41bb8e8236b",
        description: "Providing cutting-edge technological solutions, software development, and IT consultancy.",
        gallery: ["https://tse4.mm.bing.net/th/id/OIP.FLh7q_lRy_WsYu-nrtbkSwHaET?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://wallpaperaccess.com/full/9396705.jpg"
        ]
    },
    editorial: {
        title: "Editorial Services",
        heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Professional editing, proofreading, and content review services for academic and commercial publications.",
        gallery: ["https://tse1.mm.bing.net/th/id/OIP.DWAu1YjpJo_KMD-Uq67sGAHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.6&o=7&rm=3s",
            "https://images.squarespace-cdn.com/content/v1/5abe9a0e31d4df912d120015/1694715032710-YURX2SBCQ7F0QDE93VYB/nsightworks-homepage-banner-2500px.jpeg"
        ]
    },
    "lead-articles": {
        title: "Lead Articles",
        heroImage: "https://static.vecteezy.com/system/resources/thumbnails/006/044/056/small_2x/lead-generation-finding-and-identifying-customers-for-your-business-products-or-services-photo.jpg",
        description: "Feature articles and opinion pieces on trending industry topics.",
        gallery: ["https://tse4.mm.bing.net/th/id/OIP.yE5O5RxwA7eZu0aIDCh-WwHaEK?pid=ImgDet&w=201&h=113&c=7&dpr=1.6&o=7&rm=3",
            "https://th.bing.com/th/id/OIP.UhtZ0He3MPq-GvynjnNtfwHaEo?w=300&h=188&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3"
        ]
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
        gallery: ["https://th.bing.com/th/id/OIP.t2hql9HK2_l6jZxek_Z0cQHaEz?w=248&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
            "https://th.bing.com/th/id/OIP.gj28Kmz3VDPkjX4iGIDy7QHaG3?w=195&h=181&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3"
        ]
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
            skillup1, skillup2, skillup3, skillup4, skillup5, skillup6, skillup7, skillup8, skillup9, skillup10,

        ]
    },
    nptel: {
        title: "NPTEL/MOOC Courses",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Successfully completed various NPTEL and MOOC certification courses, enhancing expertise in critical domains.",
        gallery: [nptel1, nptel2]
    },
    fdp: {
        title: "Faculty Development Programmes (FDP)",
        heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Participation in various Faculty Development Programmes to stay updated with the latest educational methodologies and technological advancements.",
        gallery: [fdp1, fdp2, fdp3, fdp4, fdp5, fdp6, fdp7, fdp8]
    },
    "other-courses": {
        title: "Other Courses",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Additional academic and professional courses completed, broadening interdisciplinary knowledge and specialized skills.",
        gallery: ["https://static.vecteezy.com/system/resources/thumbnails/026/170/316/small_2x/words-training-courses-composed-of-wooden-dices-photo.jpg",
            "https://th.bing.com/th/id/OIP.qrjuXk3OIhZM3bUImEihZAHaE7?w=267&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3"
        ]
    },
    "presentation": {
        title: "Presentation",
        heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Showcasing key presentations delivered at seminars, workshops, and academic forums.",
        gallery: ["https://th.bing.com/th/id/OIF.urJoF96rVTedN7hjPmLCEg?w=254&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
            { type: 'pdf', url: graphTheoryPdf, title: 'Seminar - Graph Theory' }
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
    } else if (location.pathname === '/nptel') {
        key = 'nptel';
    } else if (location.pathname === '/fdp') {
        key = 'fdp';
    } else if (location.pathname === '/other-courses') {
        key = 'other-courses';
    } else if (location.pathname === '/presentation') {
        key = 'presentation';
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
                    {data.gallery.map((item, idx) => {
                        const isPdf = typeof item === 'object' && item.type === 'pdf';
                        const imgSrc = isPdf ? 'https://cdn-icons-png.flaticon.com/512/337/337946.png' : item;

                        return (
                            <div
                                key={idx}
                                className={`research-img-card ${data.isDocument ? 'document-card' : ''} ${isPdf ? 'pdf-card' : ''}`}
                                onClick={isPdf ? () => window.open(item.url, '_blank') : null}
                                style={isPdf ? { cursor: 'pointer' } : {}}
                            >
                                <motion.img
                                    src={imgSrc}
                                    alt={`${data.title} ${idx + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    style={data.isDocument ? { objectFit: 'contain', height: '100%', width: '100%' } : {}}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                />
                                {isPdf && <div className="pdf-label">{item.title}</div>}
                            </div>
                        );
                    })}
                    {data.gallery.length === 0 && <p className="text-gray-400">Gallery images coming soon...</p>}
                </div>
            </div>
        </section>
    );
};

export default GenericPage;
