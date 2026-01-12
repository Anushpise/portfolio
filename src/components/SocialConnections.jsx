import React from 'react';
import './SocialConnections.css';

const SocialConnections = () => {
    return (
        <section className="social-section">
            <div className="social-badge">
                Lila Poonawalla Foundation<br />Established 1995
            </div>

            <h2 className="social-title">A Decade of Meaningful Social Connections</h2>

            <div className="gallery">
                <div className="gallery-item">
                    {/* Placeholder image 1 */}
                    <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Social 1" className="gallery-img" />
                </div>
                <div className="gallery-item">
                    {/* Placeholder image 2 */}
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Social 2" className="gallery-img" />
                </div>
                <div className="gallery-item">
                    {/* Placeholder image 3 */}
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Social 3" className="gallery-img" />
                </div>
            </div>

            <div className="social-footer">
                <h3>10+ Years of Social Connection</h3>
                <p>"Sustained Social Connection Participation Spanning More than Decade"</p>
                <p>LG2K17 Award and Scholarship Nominee</p>
            </div>
        </section>
    );
};

export default SocialConnections;
