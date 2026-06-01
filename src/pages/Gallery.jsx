import { useState } from 'react';
import { galleryCategories, galleryImages } from '../data/galleryData';

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightbox, setLightbox] = useState(null);

  // Quick Filter Categories
  const quickCategories = ['All', 'Stepped Wells', 'News', 'Medaram Jatara', 'Devunigutta', 'Heritage Walks'];

  // Filter images by both active category and search query
  const filtered = galleryImages.filter(img => {
    const matchesCategory = active === 'All' || img.category === active;
    const matchesSearch = searchQuery.trim() === '' || 
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      img.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          .gallery-header h1 { font-size: clamp(1.8rem, 7vw, 2.8rem) !important; }
          .gallery-filters { top: 60px !important; }
          .gallery-filter-container { padding: 0.8rem 1rem !important; }
          .filter-divider { display: none !important; }
          .gallery-grid-section { padding: 2rem 1rem 4rem !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .gallery-img { height: 180px !important; }
          .gallery-lightbox-nav { flex-wrap: wrap !important; gap: 0.5rem !important; }
          .gallery-lightbox-nav button { flex: 1 1 auto !important; min-width: 80px !important; padding: 0.6rem 1rem !important; font-size: 0.82rem !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-img { height: 220px !important; }
          .gallery-lightbox-inner { width: 98% !important; }
          .gallery-header h1 { font-size: clamp(1.6rem, 9vw, 2.4rem) !important; }
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

      {/* ADVANCED FILTER & SEARCH PANEL */}
      <section className="gallery-filters" style={{ 
        backgroundColor: '#2A2119', 
        borderBottom: '1px solid rgba(232,185,35,0.3)', 
        position: 'sticky', 
        top: '64px', 
        zIndex: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <div className="gallery-filter-container" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0.8rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Left: Quick Filter Pills & Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', flex: '1 1 auto' }}>
            {/* Quick Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {quickCategories.map(cat => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActive(cat);
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      background: isActive ? '#E8B923' : 'rgba(232,185,35,0.08)',
                      border: '1px solid rgba(232,185,35,0.3)',
                      color: isActive ? '#1A140F' : '#E8D9C7',
                      fontSize: '0.78rem',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      fontWeight: isActive ? 600 : 500,
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Divider on desktop */}
            <div className="filter-divider" style={{
              width: '1px',
              height: '24px',
              backgroundColor: 'rgba(232,185,35,0.25)',
              display: 'block'
            }} />

            {/* Dropdown Select */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <select
                value={quickCategories.includes(active) ? '' : active}
                onChange={(e) => {
                  if (e.target.value) {
                    setActive(e.target.value);
                  }
                }}
                style={{
                  padding: '0.5rem 2.2rem 0.5rem 0.8rem',
                  backgroundColor: '#1A140F',
                  border: '1px solid rgba(232,185,35,0.4)',
                  color: quickCategories.includes(active) ? '#E8D9C7' : '#F5D97A',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  outline: 'none',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-sans)',
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%23E8B923\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem top 50%',
                  backgroundSize: '1.1rem',
                  minWidth: '180px'
                }}
              >
                <option value="" disabled style={{ color: 'rgba(232,220,203,0.4)' }}>
                  {quickCategories.includes(active) ? 'Select Other Project' : active}
                </option>
                {galleryCategories
                  .filter(cat => !quickCategories.includes(cat))
                  .map(cat => (
                    <option key={cat} value={cat} style={{ backgroundColor: '#2A2119', color: '#E8D9C7' }}>
                      {cat}
                    </option>
                  ))
                }
              </select>
              
              {/* Reset selection helper if active is in dropdown */}
              {!quickCategories.includes(active) && (
                <button
                  onClick={() => setActive('All')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#E8B923',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    textDecoration: 'underline',
                    padding: 0
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Right: Search Input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '280px', flex: '1 1 auto' }}>
            <input 
              type="text" 
              placeholder="Search by title or project..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 2.2rem 0.5rem 0.8rem',
                backgroundColor: '#1A140F',
                border: '1px solid rgba(232,185,35,0.4)',
                color: '#FAF8F5',
                borderRadius: '4px',
                fontSize: '0.8rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                boxSizing: 'border-box'
              }}
            />
            {/* Search Icon */}
            <span style={{
              position: 'absolute',
              right: '25px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(232,185,35,0.5)',
              pointerEvents: 'none',
              fontSize: '0.85rem'
            }}>
              🔍
            </span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#E8B923',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  padding: 0
                }}
              >
                ✕
              </button>
            )}
          </div>
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

          {filtered.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '6rem 2rem',
              border: '1px dashed rgba(232,185,35,0.25)',
              borderRadius: '8px',
              backgroundColor: '#2A2119',
              color: '#E8D9C7',
            }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#F5D97A', fontFamily: 'var(--font-serif)' }}>No Images Found</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Try adjusting your search query or filter categories.</p>
              <button 
                onClick={() => { setActive('All'); setSearchQuery(''); }}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.6rem 1.5rem',
                  backgroundColor: '#E8B923',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#1A140F',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Clear all filters
              </button>
            </div>
          ) : (
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
                    loading="lazy"
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
          )}
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