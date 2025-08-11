import React from 'react';
import './QRCode.css';

const QRCode = () => {
  return (
    <div className="qr-section">
      <div className="qr-container">
        <div className="qr-code">
          {/* QR kod simülasyonu - gerçek QR kod için qrcode.react kullanılabilir */}
          <div className="qr-pattern">
            <div className="qr-corner top-left"></div>
            <div className="qr-corner top-right"></div>
            <div className="qr-corner bottom-left"></div>
            <div className="qr-dots">
              {Array.from({ length: 25 }, (_, i) => (
                <div key={i} className={`qr-dot ${Math.random() > 0.5 ? 'filled' : ''}`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="qr-text">
          For the best experience, scan the QR code and switch to your phone
        </div>
      </div>
    </div>
  );
};

export default QRCode; 