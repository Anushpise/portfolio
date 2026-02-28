import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features-section">
            <h2 className="feature-text text-1">Software that doesn't just Adopt - It Anticipate</h2>
            <h2 className="feature-text text-2">Unlocking Performance, Pixel by Pixel</h2>

            <div className="feature-bubble bubble-1">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80" alt="Anticipate Tech" />
            </div>
            <div className="feature-bubble bubble-2">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" alt="Pixel Performance" />
            </div>

            <h2 className="feature-text text-3"></h2>

            <div className="feature-bubble bubble-3">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" alt="Seamless Connection" />
            </div>
            <div className="feature-bubble bubble-4">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80" alt="Idea to Reality" />
            </div>

            <h2 className="feature-text text-4">Easiest Path from Idea to Implementation</h2>
        </section>
    );
};

export default Features;
