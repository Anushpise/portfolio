import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>

            <div className="testimonials-grid">
                {[1, 2, 3].map((i) => (
                    <div className="testimonial-card" key={i}>
                        <img src={`https://images.unsplash.com/photo-155${i}00000000-placeholder?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`}
                            alt={`Testimonial ${i}`}
                            className="testimonial-img"
                            style={{ background: '#ccc' }}
                        /* Using placeholder logic since explicit URLs might fail. Reverting to simple visual blocks */
                        />
                        {/* Actual reliable placeholder */}
                        <div style={{ position: 'absolute', color: 'black' }}>Testimonial {i}</div>
                    </div>
                ))}
            </div>

            {/* Bottom grid row as per screenshot which seems to show multiple items */}
            <div className="testimonials-grid" style={{ marginTop: '2rem' }}>
                {[4, 5, 6].map((i) => (
                    <div className="testimonial-card" key={i}>
                        <div style={{ position: 'absolute', color: 'black' }}>Testimonial {i}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
