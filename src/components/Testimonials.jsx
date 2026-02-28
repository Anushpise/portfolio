import React from 'react';
import './Testimonials.css';
import dsc1 from '../img/DSC_1.png';
import dsc2 from '../img/DSC_2.png';
import dsc3 from '../img/DSC_3.png';
import dsc4 from '../img/DSC_4.png';
import dsc5 from '../img/DSC_5.png';
import dsc6 from '../img/DSC_6.png';

const Testimonials = () => {
    const dscImages = [dsc1, dsc2, dsc3, dsc4, dsc5, dsc6];

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">Recognition & Highlights</h2>

            <div className="testimonials-grid">
                {dscImages.slice(0, 3).map((img, i) => (
                    <div className="testimonial-card" key={i}>
                        <img
                            src={img}
                            alt={`Recognition ${i + 1}`}
                            className="testimonial-img"
                        />
                    </div>
                ))}
            </div>

            <div className="testimonials-grid" style={{ marginTop: '2rem' }}>
                {dscImages.slice(3, 6).map((img, i) => (
                    <div className="testimonial-card" key={i + 3}>
                        <img
                            src={img}
                            alt={`Recognition ${i + 4}`}
                            className="testimonial-img"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
