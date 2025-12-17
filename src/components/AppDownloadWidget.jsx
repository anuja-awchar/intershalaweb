import React, { useState } from 'react';
import { FaStar, FaApple, FaGooglePlay, FaTimes } from 'react-icons/fa';
import './AppDownloadWidget.css';

const AppDownloadWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="app-download-widget">
      <div className="adw-header">Download the App!</div>
      <div className="adw-content">
        <button className="adw-close-btn" onClick={() => setIsVisible(false)}>
          <FaTimes />
        </button>

        <div className="adw-qr-side">
          <img
            className="adw-qr-image"
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=InternshalaApp"
            alt="QR Code"
          />
          <span className="adw-scan-text">Scan the QR</span>
        </div>

        <div className="adw-info-side">
          <div className="adw-stats-row">
            <div className="adw-stat-item">
              <div className="adw-stat-value">4.2 <FaStar /></div>
              <div className="adw-stat-label">39K Reviews</div>
            </div>
            <div className="adw-separator"></div>
            <div className="adw-stat-item">
              <div className="adw-stat-value">50L+ <span style={{ fontSize: 12 }}>⬇</span></div>
              <div className="adw-stat-label">Downloads</div>
            </div>
          </div>

          <div className="adw-store-icons">
            <span>Available on</span>
            <FaApple className="adw-store-icon" title="App Store" />
            <FaGooglePlay className="adw-store-icon" title="Play Store" style={{ color: '#00d09c' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadWidget;
