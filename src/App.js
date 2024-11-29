import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isFading, setIsFading] = useState(false);

  const artworks = [
    { id: 1, title: 'Artwork 1', imageUrl: '/images/fordon.jpg', description: 'Beautiful artwork 1' },
  ];

  const switchTab = (tab) => {
    setIsFading(true); 
    setTimeout(() => {
      setActiveTab(tab); 
      setIsFading(false); 
    }, 300); 
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Portfolio - Konrad Kościecha</h1>
        <nav className="tabs">
          <button
            className={activeTab === 'about' ? 'tab active' : 'tab'}
            onClick={() => switchTab('about')}
          >
            O mnie
          </button>
          <button
            className={activeTab === 'works' ? 'tab active' : 'tab'}
            onClick={() => switchTab('works')}
          >
            Moje prace
          </button>
          <button
            className={activeTab === 'contact' ? 'tab active' : 'tab'}
            onClick={() => switchTab('contact')}
          >
            Kontakt
          </button>
        </nav>
      </header>
      <main className={isFading ? 'fade' : ''}>
        {activeTab === 'about' && (
          <section className="about">
            <h2>O mnie</h2>
            <p>
              Cześć! Nazywam się Konrad Kościecha. Zajmuję się grafiką komputerową i tworzę wyjątkowe prace.
              Poza tym studiuję informatykę, a potem planuję zostać programistą.
            </p>
          </section>
        )}
        {activeTab === 'contact' && (
          <section className="about">
            <h2>Kontakt</h2>
            <p>E-mail: k.kosciecha20@gmail.com</p>
          </section>
        )}
        {activeTab === 'works' && (
          <section className="gallery">
            <h2>Moje prace</h2>
            <div className="gallery-grid">
              {artworks.map((artwork) => (
                <div key={artwork.id} className="gallery-item">
                  <img src={artwork.imageUrl} alt={artwork.title} className="gallery-image" />
                  <h3 className="gallery-title">{artwork.title}</h3>
                  <p className="gallery-description">{artwork.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;