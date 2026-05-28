import { useState } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === active);

  const currentIdx = lightbox !== null 
    ? filtered.findIndex(img => img.id === lightbox.id) 
    : -1;

  const prev = () => {
    if (currentIdx > 0) setLightbox(filtered[currentIdx - 1]);
  };
  const next = () => {
    if (currentIdx < filtered.length - 1) setLightbox(filtered[currentIdx + 1]);
  };

  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#1A140F' }}>
      <style>{`
        @media (max-width: 768px) {
          .gallery-header { padding: 3.5rem 1.25rem 3rem !important; }
          .gallery-header h1 { font-size: clamp(2rem, 8vw, 3rem) !important; }
          .gallery-filters { top: 60px !important; }
          .gallery-filter-bar { padding: 0 1.25rem !important; }
          .gallery-filter-bar button { padding: 0.9rem 1.1rem !important; font-size: 0.75rem !important; }
          .gallery-grid-section { padding: 2rem 1.25rem 4rem !important; }
          .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important; gap: 1rem !important; }
          .gallery-img { height: 220px !important; }
          .gallery-lightbox-nav button { padding: 0.6rem 1.2rem !important; font-size: 0.85rem !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-img { height: 200px !important; }
          .gallery-lightbox-inner { width: 98% !important; }
        }
      `}</style>
      {/* HEADER - More Golden & Dramatic */}
      <section className="gallery-header" style={{
        padding: '5.5rem 2rem 4.5rem',
        background: 'linear-gradient(135deg, #2A2119 0%, #1A140F 100%)',
        borderBottom: '2px solid #E8B923',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: `repeating-linear-gradient(45deg, #E8B923 0, #E8B923 3px, transparent 0, transparent 60px)`,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ 
            color: '#F5D97A', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase', 
            fontSize: '0.78rem',
            marginBottom: '1rem'
          }}>
            Visual Archive
          </p>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.6rem, 6vw, 4rem)', 
            color: '#F5EDE4',
            marginBottom: '1rem',
            textShadow: '0 8px 30px rgba(232,185,35,0.3)'
          }}>
            GOLDEN <span style={{ color: '#E8B923' }}>LEGACY</span> GALLERY
          </h1>
          <p style={{ 
            color: '#E8D9C7', 
            maxWidth: '520px', 
            margin: '0 auto', 
            lineHeight: 1.8,
            fontSize: '1.05rem'
          }}>
            Timeless moments captured in stone, light, and living tradition.
          </p>
        </div>
      </section>

      {/* FILTERS - Rich Gold */}
      <section className="gallery-filters" style={{ 
        backgroundColor: '#2A2119', 
        borderBottom: '1px solid rgba(232,185,35,0.3)', 
        position: 'sticky', 
        top: '64px', 
        zIndex: 40 
      }}>
        <div className="gallery-filter-bar" style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 2rem', 
          display: 'flex', 
          gap: 0, 
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}>
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '1.1rem 1.4rem',
                background: 'none', 
                border: 'none',
                borderBottom: active === cat ? '3px solid #E8B923' : '3px solid transparent',
                color: active === cat ? '#F5D97A' : 'rgba(232,220,203,0.65)',
                fontSize: '0.82rem', 
                letterSpacing: '0.1em', 
                textTransform: 'uppercase',
                cursor: 'pointer', 
                fontWeight: active === cat ? 600 : 500,
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID - Fixed Height + Golden Touch */}
      <section className="gallery-grid-section" style={{ padding: '3.5rem 2rem 7rem', backgroundColor: '#1A140F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ 
            fontSize: '0.85rem', 
            color: '#E8D9C7', 
            marginBottom: '2rem',
            letterSpacing: '0.05em'
          }}>
            {filtered.length} image{filtered.length !== 1 ? 's' : ''} • {active}
          </p>

          <div className="gallery-grid masonry-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.4rem',
          }}>
            {filtered.map(img => (
              <div
                key={img.id}
                className="masonry-item"
                onClick={() => setLightbox(img)}
                style={{ 
                  cursor: 'pointer', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '8px',
                  border: '1px solid rgba(232,185,35,0.25)',
                  background: '#2A2119',
                  transition: 'all 0.4s ease'
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img"
                  style={{
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                
                {/* Rich Golden Overlay */}
                <div className="gallery-overlay" style={{
                  position: 'absolute', 
                  inset: 0,
                  background: 'linear-gradient(transparent, rgba(26,20,15,0.92))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.6rem 1.4rem',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }}>
                  <p style={{ 
                    color: '#F5EDE4', 
                    fontSize: '1.15rem', 
                    fontWeight: 500,
                    marginBottom: '0.3rem'
                  }}>
                    {img.title}
                  </p>
                  <p style={{ 
                    color: '#E8B923', 
                    fontSize: '0.78rem', 
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}>
                    {img.category}
                  </p>
                </div>

                <style>{`
                  .masonry-item:hover img {
                    transform: scale(1.08);
                  }
                  .masonry-item:hover .gallery-overlay {
                    opacity: 1;
                  }
                `}</style>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX - More Luxurious & Golden */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', 
            inset: 0, 
            zIndex: 1000,
            background: 'rgba(15,8,3,0.97)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
          }}
          onClick={() => setLightbox(null)}
        >
          <div onClick={e => e.stopPropagation()} className="gallery-lightbox-inner" style={{ 
            maxWidth: '860px', 
            width: '92%', 
            textAlign: 'center' 
          }}>
            <div style={{
              background: '#2A2119',
              border: '2px solid #E8B923',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '1.5rem',
              boxShadow: '0 25px 70px rgba(232,185,35,0.2)',
            }}>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <h3 style={{ 
              fontFamily: 'var(--font-serif)', 
              color: '#F5D97A', 
              fontSize: '1.45rem', 
              marginBottom: '0.4rem' 
            }}>
              {lightbox.title}
            </h3>
            <p style={{ 
              color: '#E8B923', 
              fontSize: '0.85rem', 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              {lightbox.category}
            </p>

            <div className="gallery-lightbox-nav" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <button onClick={prev} disabled={currentIdx === 0} style={{
                padding: '0.7rem 1.6rem',
                background: 'rgba(232,185,35,0.1)',
                border: '1px solid #E8B923',
                color: '#F5D97A',
                cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
                opacity: currentIdx === 0 ? 0.4 : 1,
                borderRadius: '4px'
              }}>← Prev</button>

              <button onClick={() => setLightbox(null)} style={{
                padding: '0.7rem 1.8rem',
                background: 'transparent',
                border: '1px solid rgba(245,217,122,0.5)',
                color: '#F5EDE4',
                cursor: 'pointer',
                borderRadius: '4px'
              }}>Close</button>

              <button onClick={next} disabled={currentIdx === filtered.length - 1} style={{
                padding: '0.7rem 1.6rem',
                background: 'rgba(232,185,35,0.1)',
                border: '1px solid #E8B923',
                color: '#F5D97A',
                cursor: currentIdx === filtered.length - 1 ? 'not-allowed' : 'pointer',
                opacity: currentIdx === filtered.length - 1 ? 0.4 : 1,
                borderRadius: '4px'
              }}>Next →</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}