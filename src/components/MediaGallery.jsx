import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MediaGallery.css';

// Import all gallery images
import dsc1 from '../img/DSC_1.png';
import dsc2 from '../img/DSC_2.png';
import dsc3 from '../img/DSC_3.png';
import dsc4 from '../img/DSC_4.png';
import dsc5 from '../img/DSC_5.png';
import dsc6 from '../img/DSC_6.png';
import dscReal1 from '../img/DSC_0062.jpg';
import dscReal2 from '../img/DSC_0071.jpg';
import dscReal3 from '../img/DSC_0080.jpg';
import dscReal4 from '../img/DSC_0085.jpg';
import dscReal5 from '../img/DSC_0108.jpg';
import dscReal6 from '../img/DSC_0125.jpg';
import dscReal7 from '../img/DSC_0127.jpg';
import dscReal8 from '../img/DSC_0149.jpg';
import dscReal9 from '../img/DSC_0151.jpg';
import dscReal10 from '../img/DSC_0159.jpg';
import dscReal11 from '../img/DSC_0160.jpg';
import dscReal12 from '../img/DSC_0166.jpg';
import dscReal13 from '../img/DSC_0223.jpg';
import dscReal14 from '../img/DSC_0238.jpg';
import dscReal15 from '../img/DSC_0266.jpg';
import dscReal16 from '../img/DSC_0323.jpg';
import dscReal17 from '../img/DSC_0751.jpg';
import dscReal18 from '../img/DSC_0782.jpg';
import dscReal19 from '../img/DSC_0785.jpg';
import g1 from '../img/g1.jpeg';
import g2 from '../img/g2.jpeg';
import g3 from '../img/g3.jpeg';
import g4 from '../img/g4.jpeg';
import g5 from '../img/g5.jpeg';
import g6 from '../img/g6.jpeg';
import g7 from '../img/g7.jpeg';
import g8 from '../img/g8.jpeg';
import g9 from '../img/g9.jpeg';
import g10 from '../img/g10.jpeg';
import g11 from '../img/g11.jpeg';
import g12 from '../img/g12.jpeg';
import g13 from '../img/g13.jpeg';
import g14 from '../img/g14.jpeg';
import g15 from '../img/g15.jpeg';
import g16 from '../img/g16.jpeg';
import g17 from '../img/g17.jpeg';
import g18 from '../img/g18.jpeg';
import g19 from '../img/g19.jpeg';
import g20 from '../img/g20.jpeg';
import g21 from '../img/g21.jpeg';
import g22 from '../img/g22.jpeg';
import g23 from '../img/g23.jpeg';
import g24 from '../img/g24.jpeg';
import g25 from '../img/g25.jpeg';
import g26 from '../img/g26.jpeg';
import g27 from '../img/g27.jpeg';
import g28 from '../img/g28.jpeg';
import g29 from '../img/g29.jpeg';
import g30 from '../img/g30.jpeg';
import g31 from '../img/g31.jpeg';
import g32 from '../img/g32.jpeg';


const galleryImages = [
    { src: dsc1, title: "Achievement 1" },
    { src: dsc2, title: "Achievement 2" },
    { src: dsc3, title: "Achievement 3" },
    { src: dsc4, title: "Achievement 4" },
    { src: dsc5, title: "Achievement 5" },
    { src: dsc6, title: "Achievement 6" },
    { src: dscReal1, title: "Event Highlight" },
    { src: dscReal2, title: "Event Highlight" },
    { src: dscReal3, title: "Event Highlight" },
    { src: dscReal4, title: "Event Highlight" },
    { src: dscReal5, title: "Event Highlight" },
    { src: dscReal6, title: "Event Highlight" },
    { src: dscReal7, title: "Event Highlight" },
    { src: dscReal8, title: "Event Highlight" },
    { src: dscReal9, title: "Event Highlight" },
    { src: dscReal10, title: "Event Highlight" },
    { src: dscReal11, title: "Event Highlight" },
    { src: dscReal12, title: "Event Highlight" },
    { src: dscReal13, title: "Event Highlight" },
    { src: dscReal14, title: "Event Highlight" },
    { src: dscReal15, title: "Event Highlight" },
    { src: dscReal16, title: "Event Highlight" },
    { src: dscReal17, title: "Event Highlight" },
    { src: dscReal18, title: "Event Highlight" },
    { src: dscReal19, title: "Event Highlight" },
    { src: g1, title: "Event Highlight" },
    { src: g2, title: "Event Highlight" },
    { src: g3, title: "Event Highlight" },
    { src: g4, title: "Event Highlight" },
    { src: g5, title: "Event Highlight" },
    { src: g6, title: "Event Highlight" },
    { src: g7, title: "Event Highlight" },
    { src: g8, title: "Event Highlight" },
    { src: g9, title: "Event Highlight" },
    { src: g10, title: "Event Highlight" },
    { src: g11, title: "Event Highlight" },
    { src: g12, title: "Event Highlight" },
    { src: g13, title: "Event Highlight" },
    { src: g14, title: "Event Highlight" },
    { src: g15, title: "Event Highlight" },
    { src: g16, title: "Event Highlight" },
    { src: g17, title: "Event Highlight" },
    { src: g18, title: "Event Highlight" },
    { src: g19, title: "Event Highlight" },
    { src: g20, title: "Event Highlight" },
    { src: g21, title: "Event Highlight" },
    { src: g22, title: "Event Highlight" },
    { src: g23, title: "Event Highlight" },
    { src: g24, title: "Event Highlight" },
    { src: g25, title: "Event Highlight" },
    { src: g26, title: "Event Highlight" },
    { src: g27, title: "Event Highlight" },
    { src: g28, title: "Event Highlight" },
    { src: g29, title: "Event Highlight" },
    { src: g30, title: "Event Highlight" },
    { src: g31, title: "Event Highlight" },
    { src: g32, title: "Event Highlight" },
];

const IMAGES_PER_PAGE = 8;

const MediaGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + IMAGES_PER_PAGE);
    };

    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };

    return (
        <section className="media-gallery-page">
            <div className="gallery-header">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Media Gallery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    A collection of our journey, events, and milestones.
                </motion.p>
            </div>

            <div className="gallery-grid">
                {galleryImages.slice(0, visibleCount).map((img, index) => (
                    <motion.div
                        className="gallery-item"
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImg(img.src)}
                    >
                        {!loadedImages[index] && (
                            <div className="image-skeleton">
                                <div className="spinner"></div>
                            </div>
                        )}
                        <img
                            src={img.src}
                            alt={img.title}
                            loading="lazy"
                            onLoad={() => handleImageLoad(index)}
                            style={{ opacity: loadedImages[index] ? 1 : 0 }}
                        />
                        <div className="gallery-overlay">
                            <span>View Image</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {visibleCount < galleryImages.length && (
                <div className="load-more-container">
                    <button className="load-more-btn" onClick={handleLoadMore}>
                        Load More Images
                    </button>
                    <p className="gallery-stats">
                        Showing {visibleCount} of {galleryImages.length} images
                    </p>
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.img
                            src={selectedImg}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        />
                        <div className="close-lightbox">×</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MediaGallery;
