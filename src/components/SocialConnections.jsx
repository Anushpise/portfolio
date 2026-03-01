import React from 'react';
import './SocialConnections.css';
import lila from '../img/lila.png';
import DSC_0159 from '../img/DSC_0159.jpg';
import DSC_0108 from '../img/DSC_0108.jpg';
import DSC_0751 from '../img/DSC_0751.jpg';
const SocialConnections = () => {
    return (
        <section className="social-section">
            <div className="social-badge">
                <img src={lila} alt="" />
            </div>

            <h2 className="social-title">A Decade of Meaningful Social Connections</h2>

            <div className="gallery">
                <div className="gallery-item">
                    {/* Placeholder image 1 */}
                    <img src={DSC_0159} alt="Social 1" className="gallery-img" />
                </div>
                <div className="gallery-item">
                    {/* Placeholder image 2 */}
                    <img src={DSC_0108} alt="Social 2" className="gallery-img" />
                </div>
                <div className="gallery-item">
                    {/* Placeholder image 3 */}
                    <img src={DSC_0751} alt="Social 3" className="gallery-img" />
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
