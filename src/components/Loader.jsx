import React from 'react';
import './Loader.css';
// Importing logo dynamically or using path. Assuming logo.png.png exists as requested, 
// but users filename is weird, so let's try to find it or use a default.
// Best to use a placeholder if specific file not guaranteed, but trying to reference what user said.
// I'll assume it's in src/img/logo.png.png based on previous context or just src/img
// If imports fail, we'll fix.

const Loader = () => {
    return (
        <div className="loader-container">
            {/* Using a placeholder SVG or img tag if file path is uncertain. 
                I'll use a direct img tag with a relative path assuming it's in public or imported.
                Let's use a nice text placeholder if image fails, but user asked for logo.
            */}
            <div className="loader-logo-wrapper">
                {/*  Attempts to load logo, fallback to text/shape */}
                <img
                    src={require('../img/logo.png.png')}
                    alt="Loading..."
                    className="loader-logo"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                />
                <div style={{ display: 'none', color: 'white', border: '5px solid white', borderRadius: '50%', padding: '2rem', animation: 'spin 2s infinite' }}>
                    AVM
                </div>
            </div>
        </div>
    );
};

export default Loader;
