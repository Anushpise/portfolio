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
import sttp from '../img/sttp.jpeg';
import tech1 from '../img/tech1.jpeg';
import tech2 from '../img/tech2.jpeg';
import tech3 from '../img/tech3.jpeg';
import tech4 from '../img/tech4.jpeg';
import lead1 from '../img/lead1.jpeg';
import lead2 from '../img/lead2.jpeg';
import lead3 from '../img/lead3.jpeg';
import lead4 from '../img/lead4.jpeg';
import skilltra from '../img/skilltra.jpeg';
import editorial from '../img/editorial.jpeg';
import advisory from '../img/advisory.jpeg';
import bookauth from '../img/bookauth.png';

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
            international

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
        gallery: [waorkshop1, workshop2, workshop3, seminar1, seminar2, { type: 'pdf', url: graphTheoryPdf, title: 'Seminar - Graph Theory' }]
    },
    "book-chapter": {
        title: "Book Chapters",
        heroImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Scholarly chapters contributed to edited volumes and reference books.",
        gallery: [{ type: 'pdf', url: graphTheoryPdf, title: 'Seminar - Graph Theory' }]
    },
    "book-author": {
        title: "Authored Books",
        heroImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Complete books authored or translated, covering specialized academic topics with ISBN identifiers 9789347046711 ",
        gallery: [bookauth],
        isDocument: true
    },

    // --- Services ---
    "tech-services": {
        title: "Tech Services",
        heroImage: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v617batch2-bb-01-technology_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c8fd066d1af2ba618986b41bb8e8236b",
        description: "Providing cutting-edge technological solutions, software development, WEBDEVELOPMENT ,APP DEVELOPMENT , GRAPHICS- UI& UX DESIGN .",
        gallery: [tech1, tech2, tech3, tech4
        ]
    },
    editorial: {
        title: "Editorial Services",
        heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "1. Research  paper 2. Turnitin support 3. Medical' Techno support",
        gallery: [editorial
        ]
    },
    "lead-articles": {
        title: "Lead Articles",
        heroImage: "https://static.vecteezy.com/system/resources/thumbnails/006/044/056/small_2x/lead-generation-finding-and-identifying-customers-for-your-business-products-or-services-photo.jpg",
        description: "Feature articles and opinion pieces on trending industry topics like 1. UPSC- GS-1 , CONTENT WRITING , BLOGGING .",
        gallery: [lead1, lead2, lead3, lead4
        ]
    },
    "skill-training": {
        title: "Skill Training",
        heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Workshops and training modules designed to enhance professional skills like COMMUNICATION Skill , Personality  Development",
        gallery: [skilltra]
    },
    advisory: {
        title: "Advisory Services",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Expert consultation and Counseling advice for educational and corporate entities.",
        gallery: [advisory
        ]
    },
    "browse-courses": {
        title: "Our Courses",
        heroImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "A catalog of our specialized courses available for enrollment.",
        gallery: ["https://tse4.mm.bing.net/th/id/OIP.mcDM32dcz8M_EliALCY1JAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-9-toon-19980-olj1720-2-entrepreneurship.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=f49936d2accfc6a12ec495e7d626b459"
       ,"https://thumbs.dreamstime.com/b/concept-automation-testing-cogwheels-represents-various-process-like-test-script-90426393.jpg" ," https://www.bing.com/th/id/OIP.fIy0Jn28nKKBH4659e27YwHaE7?w=238&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2", "data:image/webp;base64,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",]
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
    sttp: {
        title: "Short Term Training Programmes (STTP)",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Completion of various Short Term Training Programmes focused on skill enhancement and professional development in specialized domains.",
        gallery: [sttp]
    },
    "other-courses": {
        title: "Other Courses",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Additional academic and professional courses completed, broadening interdisciplinary knowledge and specialized skills.",
        gallery: [webinar1, webinar2, webinar3, webinar4, webinar5
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
    } else if (location.pathname === '/sttp') {
        key = 'sttp';
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
