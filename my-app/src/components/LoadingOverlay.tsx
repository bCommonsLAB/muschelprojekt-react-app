import React from 'react';

const LoadingOverlay: React.FC = () => {
    return (
        <div id="loading-overlay">
            <div id="loading-indicator">
                <p>Die Datei wird hochgeladen und transkribiert...</p>
                <div className="spinner"></div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
