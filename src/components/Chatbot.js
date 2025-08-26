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
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleMediaUpload = (type) => {
    console.log('handleMediaUpload called with type:', type);
    
    // Mobil cihaz kontrolü
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    console.log('Is mobile device:', isMobile);
    
    // Kamera kontrolü
    if (type === 'camera' && !isMobile) {
      alert('Kamera özelliği sadece mobil cihazlarda kullanılabilir.');
      setShowMediaOptions(false);
      return;
    }
    
    // Input elementini oluştur
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    // Kamera için capture özelliği
    if (type === 'camera' && isMobile) {
      input.capture = 'environment';
      console.log('Camera capture enabled');
    }
    
    // Dosya seçildiğinde
    input.addEventListener('change', function(event) {
      console.log('File input change event triggered');
      const selectedFile = event.target.files[0];
      
      if (selectedFile) {
        console.log('File selected:', selectedFile.name, 'Size:', selectedFile.size);
        
        // Dosya boyutu kontrolü (10MB)
        if (selectedFile.size > 10 * 1024 * 1024) {
          alert('Dosya boyutu 10MB\'dan küçük olmalıdır.');
          return;
        }
        
        // Dosya tipi kontrolü
        if (!selectedFile.type.startsWith('image/')) {
          alert('Lütfen sadece resim dosyası seçin.');
          return;
        }
        
        // FileReader ile dosyayı oku
        const reader = new FileReader();
        
        reader.onload = function(e) {
          console.log('File read successfully');
          const imageData = e.target.result;
          
          // Seçilen resmi state'e kaydet
          setSelectedImage(imageData);
          setImageDescription('');
          setInputMessage('');
          console.log('Image selected and ready for description');
        };
        
        reader.onerror = function(error) {
          console.error('FileReader error:', error);
          alert('Dosya okunurken bir hata oluştu.');
        };
        
        // Dosyayı base64 formatında oku
        reader.readAsDataURL(selectedFile);
      } else {
        console.log('No file selected');
      }
    });
    
    // Input'u DOM'a ekle ve tıkla
    document.body.appendChild(input);
    input.click();
    console.log('File input clicked');
    
    // Input'u temizle
    setTimeout(() => {
      if (input.parentNode) {
        input.parentNode.removeChild(input);
      }
    }, 5000);
    
    setShowMediaOptions(false);
  };

  const handleSendMessage = () => {
    // Resim seçiliyse (açıklama olsun veya olmasın) veya sadece metin varsa gönder
    if (selectedImage || inputMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: selectedImage ? imageDescription : inputMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
        image: selectedImage || null
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setSelectedImage(null);
      setImageDescription('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
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

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageDescription('');
  };

  const isSendDisabled = () => {
    // Resim varsa her zaman gönderilebilir (açıklama olsun veya olmasın)
    if (selectedImage) {
      return false;
    }
    // Resim yoksa sadece metin varsa gönderilebilir
    return !inputMessage.trim();
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

            {/* Selected Image Preview */}
            {selectedImage && (
              <div className="selected-image-preview">
                <div className="image-preview-container">
                  <img src={selectedImage} alt="Selected" />
                  <button 
                    className="remove-image-btn"
                    onClick={handleRemoveImage}
                    aria-label="Remove image"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>
                <div className="image-description-container">
                  <textarea
                    placeholder="Bu resim hakkında ne sormak istiyorsunuz?"
                    value={imageDescription}
                    onChange={(e) => setImageDescription(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="image-description-input"
                    rows="2"
                  />
                </div>
              </div>
            )}

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
              
              {!selectedImage && (
                <input
                  type="text"
                  placeholder="Mesajınızı yazın..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="chatbot-input-field"
                />
              )}
              <button 
                className="chatbot-send"
                onClick={handleSendMessage}
                disabled={isSendDisabled()}
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
                {/* Geçici QR Kod - Mobil Test İçin */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '2px solid #000'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '10px'
                  }}>
                    MOBİL TEST
                  </div>
                  <div style={{
                    fontSize: '10px',
                    textAlign: 'center',
                    wordBreak: 'break-all',
                    lineHeight: '1.2'
                  }}>
                    http://192.168.1.120:3000
                  </div>
                  <div style={{
                    fontSize: '8px',
                    textAlign: 'center',
                    marginTop: '10px',
                    color: '#666'
                  }}>
                    Bu adresi mobilde açın
                  </div>
                </div>
              </div>
              <p className="qr-text">Mobil test için yukarıdaki adresi telefonunuzda açın</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
