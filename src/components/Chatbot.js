import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Merhaba! Size nasıl yardımcı olabilirim?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showMediaOptions, setShowMediaOptions] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleMediaUpload = (type) => {
    // Mobil cihaz kontrolü
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (type === 'camera' && !isMobile) {
      alert('Kamera özelliği sadece mobil cihazlarda kullanılabilir.');
      setShowMediaOptions(false);
      return;
    }
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    // Kamera için özel ayarlar
    if (type === 'camera' && isMobile) {
      // Farklı tarayıcılar için farklı capture değerleri
      try {
        input.capture = 'environment'; // Arka kamera
      } catch (e) {
        // Eğer environment desteklenmiyorsa
        input.capture = 'camera';
      }
    }
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Dosya boyutu kontrolü (5MB limit)
        if (file.size > 5 * 1024 * 1024) {
          alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
          return;
        }
        
        // Dosya tipi kontrolü
        if (!file.type.startsWith('image/')) {
          alert('Lütfen sadece resim dosyası seçin.');
          return;
        }
        
        const reader = new FileReader();
        reader.onload = (event) => {
          const newMessage = {
            id: messages.length + 1,
            text: '',
            sender: 'user',
            timestamp: new Date().toLocaleTimeString(),
            image: event.target.result
          };
          setMessages([...messages, newMessage]);
        };
        
        reader.onerror = () => {
          alert('Dosya okunurken bir hata oluştu.');
        };
        
        reader.readAsDataURL(file);
      }
    };
    
    // Hata yakalama
    input.onerror = () => {
      alert('Dosya seçilirken bir hata oluştu. Lütfen tekrar deneyin.');
    };
    
    // Input'u gizli olarak ekle ve tıkla
    input.style.display = 'none';
    document.body.appendChild(input);
    input.click();
    
    // Input'u temizle
    setTimeout(() => {
      document.body.removeChild(input);
    }, 1000);
    
    setShowMediaOptions(false);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.",
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        {/* Header */}
        <div className="chatbot-header">
          <button 
            className="chatbot-back"
            onClick={handleClose}
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          <h2>Hotel Assistant</h2>
          <button 
            className="chatbot-menu"
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Content */}
        <div className="chatbot-content">
          {/* Chatbot Window */}
          <div className="chatbot-window">
            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <div className="message-content">
                    {message.image && (
                      <div className="message-image">
                        <img src={message.image} alt="Uploaded" />
                      </div>
                    )}
                    {message.text && <p>{message.text}</p>}
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="chatbot-input">
              <button 
                className="chatbot-media-btn"
                onClick={() => setShowMediaOptions(!showMediaOptions)}
                aria-label="Add media"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"/>
                </svg>
              </button>
              
              {showMediaOptions && (
                <div className="media-options">
                  <button 
                    className="media-option"
                    onClick={() => handleMediaUpload('camera')}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12m-3.2 0a3.2 3.2 0 1 1 6.4 0a3.2 3.2 0 1 1 -6.4 0"/>
                      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                    </svg>
                    <span>Kamera</span>
                  </button>
                  <button 
                    className="media-option"
                    onClick={() => handleMediaUpload('gallery')}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
                    </svg>
                    <span>Galeri</span>
                  </button>
                </div>
              )}
              
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="chatbot-input-field"
              />
              <button 
                className="chatbot-send"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="chatbot-qr-section">
            <div className="qr-container">
              <div className="qr-code">
                <svg viewBox="0 0 200 200" fill="currentColor">
                  <rect x="10" y="10" width="20" height="20" fill="#000"/>
                  <rect x="40" y="10" width="20" height="20" fill="#000"/>
                  <rect x="70" y="10" width="20" height="20" fill="#000"/>
                  <rect x="100" y="10" width="20" height="20" fill="#000"/>
                  <rect x="130" y="10" width="20" height="20" fill="#000"/>
                  <rect x="160" y="10" width="20" height="20" fill="#000"/>
                  <rect x="10" y="40" width="20" height="20" fill="#000"/>
                  <rect x="40" y="40" width="20" height="20" fill="#fff"/>
                  <rect x="70" y="40" width="20" height="20" fill="#fff"/>
                  <rect x="100" y="40" width="20" height="20" fill="#000"/>
                  <rect x="130" y="40" width="20" height="20" fill="#fff"/>
                  <rect x="160" y="40" width="20" height="20" fill="#000"/>
                  <rect x="10" y="70" width="20" height="20" fill="#000"/>
                  <rect x="40" y="70" width="20" height="20" fill="#fff"/>
                  <rect x="70" y="70" width="20" height="20" fill="#000"/>
                  <rect x="100" y="70" width="20" height="20" fill="#fff"/>
                  <rect x="130" y="70" width="20" height="20" fill="#000"/>
                  <rect x="160" y="70" width="20" height="20" fill="#000"/>
                  <rect x="10" y="100" width="20" height="20" fill="#000"/>
                  <rect x="40" y="100" width="20" height="20" fill="#fff"/>
                  <rect x="70" y="100" width="20" height="20" fill="#fff"/>
                  <rect x="100" y="100" width="20" height="20" fill="#000"/>
                  <rect x="130" y="100" width="20" height="20" fill="#fff"/>
                  <rect x="160" y="100" width="20" height="20" fill="#000"/>
                  <rect x="10" y="130" width="20" height="20" fill="#000"/>
                  <rect x="40" y="130" width="20" height="20" fill="#000"/>
                  <rect x="70" y="130" width="20" height="20" fill="#000"/>
                  <rect x="100" y="130" width="20" height="20" fill="#000"/>
                  <rect x="130" y="130" width="20" height="20" fill="#000"/>
                  <rect x="160" y="130" width="20" height="20" fill="#000"/>
                  <rect x="10" y="160" width="20" height="20" fill="#000"/>
                  <rect x="40" y="160" width="20" height="20" fill="#fff"/>
                  <rect x="70" y="160" width="20" height="20" fill="#fff"/>
                  <rect x="100" y="160" width="20" height="20" fill="#000"/>
                  <rect x="130" y="160" width="20" height="20" fill="#fff"/>
                  <rect x="160" y="160" width="20" height="20" fill="#000"/>
                </svg>
              </div>
              <p className="qr-text">For the best experience, scan the QR code and switch to your phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
