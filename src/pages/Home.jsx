import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const chapters = [
  { title: 'Kakatiya Legacy', image: '/gallery/temples/2.jpg', desc: 'Unearthing architectural marvels, stone carvings, and hydraulic systems of the Kakatiya Dynasty that shaped the identity of the Deccan.', tag: 'Chapter I', link: '/projects', accent: '#E8B923' },
  { title: 'Tribal Traditions', image: '/gallery/events/7.jpg', desc: 'Documenting oral histories, ancient arts, and nature worship rituals of indigenous communities of the Eastern Ghats.', tag: 'Chapter II', link: '/projects', accent: '#D97A3D' },
  { title: 'Temple Architecture', image: '/gallery/temples/1.jpg', desc: 'Systematically cataloging forgotten, endangered temples in remote areas to protect them from decay and theft.', tag: 'Chapter III', link: '/projects', accent: '#C18F1E' },
  { title: 'Forgotten Festivals', image: '/gallery/events/2.jpg', desc: 'Recording rare folk performances, rustic culinary traditions, and festivals that define rural community bonds.', tag: 'Chapter IV', link: '/projects', accent: '#E8B923' },
  { title: 'Documentary Archive', image: '/gallery/documentaries/1.jpg', desc: 'Creating visual records through cinematic documentaries that give voice to communities guarding our history.', tag: 'Chapter V', link: '/projects', accent: '#D97A3D' },
];

const documentaries = [
  { id: 1, title: 'Voices of Stone', duration: '45 mins', desc: 'A journey through undocumented inscriptions of Warangal, revealing tales of medieval queens and stone carvers.', image: '/gallery/documentaries/1.jpg', badge: 'Award Winner', year: '2023' },
  { id: 2, title: 'Shadows of Golconda', duration: '32 mins', desc: 'Exploring hidden aqueducts, whispering acoustic chambers, and outer bastions of the legendary fortress.', image: '/gallery/documentaries/3.jpg', badge: 'New Release', year: '2024' },
  { id: 3, title: 'Dances of the Forest', duration: '28 mins', desc: 'Capturing complex rhythms, body paintings, and sacred groove dances of the Koya tribe during Sammakka Sarakka.', image: '/gallery/documentaries/4.jpg', badge: 'Featured', year: '2023' },
  { id: 4, title: 'Fading Ink on Palm Leaves', duration: '50 mins', desc: 'Follow the preservation team scanning and translating decaying palm-leaf manuscripts in rural monasteries.', image: '/gallery/documentaries/9.jpg', badge: 'Archival', year: '2022' },
  { id: 5, title: 'Echoes of Deccan Clay', duration: '35 mins', desc: 'An emotional exploration of fading terracotta pottery traditions and rural deities of Adilabad district.', image: '/gallery/documentaries/6.jpg', badge: 'Short Film', year: '2024' },
];

const galleryHighlights = [
  { src: '/gallery/temples/5.jpg', title: 'Kakatiya Deity Sculpture', category: 'Temples', wide: true },
  { src: '/gallery/heritage-walks/1.jpg', title: 'Old Hyderabad Walk', category: 'Walks', wide: false },
  { src: '/gallery/temples/3.jpg', title: 'Gopuram Silhouette', category: 'Temples', wide: false },
  { src: '/gallery/events/3.jpg', title: 'Symposium Discussion', category: 'Events', wide: false },
  { src: '/gallery/exhibitions/2.jpg', title: 'Manuscript Display', category: 'Exhibitions', wide: true },
  { src: '/gallery/heritage-walks/9.jpg', title: 'Lantern Fort Walk', category: 'Walks', wide: false },
  { src: '/gallery/temples/8.jpg', title: 'Pillar Carving Detail', category: 'Temples', wide: false },
  { src: '/gallery/documentaries/3.jpg', title: 'Documentary Filming', category: 'Documentation', wide: false },
];

const timelineEvents = [
  { year: '2018', title: 'Founding & First Surveys', desc: 'TORCH was established with a mission to document endangered rural monuments. Completed surveys of 40+ temples in Nalgonda.', stat: '40+', statLabel: 'Monuments' },
  { year: '2020', title: 'Digital Inscription Archive', desc: 'Launched a public repository mapping medieval Telugu inscriptions, digitizing over 150 estampages for researchers globally.', stat: '150+', statLabel: 'Inscriptions' },
  { year: '2022', title: 'The Untold Telangana Launch', desc: 'Began the premier storytelling series focusing on oral traditions, folklore, and local legends of rural communities.', stat: '30+', statLabel: 'Episodes' },
  { year: '2024', title: 'National Heritage Advocacy', desc: 'Successfully advocated for community-led tourism frameworks around the UNESCO Ramappa Temple, training local youth guides.', stat: '200+', statLabel: 'Youth Trained' },
];

const stats = [
  { value: '340+', label: 'Monuments Documented' },
  { value: '12', label: 'Documentaries Produced' },
  { value: '5K+', label: 'Archive Images' },
  { value: '8', label: 'Districts Covered' },
];

function useIntersection(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimatedSection({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDoc, setActiveDoc] = useState(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const docScrollRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDocs = (dir) => {
    const c = docScrollRef.current;
    if (c) c.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
  };

  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = 1 + scrollY * 0.0003;

  return (
    <main style={{ 
      backgroundColor: '#1A140F', 
      position: 'relative', 
      overflowX: 'hidden', 
      fontFamily: "'Cormorant Garamond', 'Georgia', serif" 
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;500&family=Inter:wght@300;400;500&display=swap');
        
        :root {
          --gold: #E8B923;
          --gold-light: #F5D97A;
          --gold-dark: #C18F1E;
          --amber: #D97A3D;
          --cream: #F5EDE4;
          --cream-dark: #E8D9C7;
          --bg: #1A140F;
          --surface: #2A2119;
          --surface2: #342A22;
          --border: rgba(232,185,35,0.18);
          --border-hover: rgba(245,217,122,0.45);
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .grain-overlay {
          position: fixed; inset: 0; pointer-events: none; z-index: 999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          opacity: 0.55;
        }

        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .display { font-family: 'Cinzel', serif; }
        .sans { font-family: 'Inter', sans-serif; }
        
        .label-tag {
          font-family: 'Cinzel', serif;
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-light);
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .label-tag::before {
          content: '';
          display: block;
          width: 35px;
          height: 1px;
          background: var(--gold);
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5.5vw, 3.9rem);
          font-weight: 300;
          color: var(--cream);
          letter-spacing: 0.015em;
          line-height: 1.1;
        }
        
        .gold-rule {
          width: 85px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), transparent);
          margin: 1.8rem 0;
          box-shadow: 0 0 15px rgba(232,185,35,0.6);
        }
        
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #1A140F;
          background: linear-gradient(135deg, #F5D97A, #E8B923, #F5D97A);
          border: none;
          padding: 1rem 2.3rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 8px 30px rgba(232,185,35,0.4);
        }
        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(232,185,35,0.55);
        }
        
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          font-family: 'Cinzel', serif;
          font-size: 0.75rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold-light);
          background: transparent;
          border: 1px solid var(--gold);
          padding: 1rem 2.3rem;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        .btn-ghost:hover {
          background: rgba(245,217,122,0.1);
          border-color: var(--gold-light);
          color: white;
        }
        
        .chapter-card:hover img { transform: scale(1.09); }
        .doc-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 70px rgba(0,0,0,0.65), 0 0 0 2px rgba(232,185,35,0.3);
        }
        .gallery-cell:hover img { transform: scale(1.12); }
        
        .timeline-node {
          width: 16px; height: 16px;
          border: 3px solid var(--gold);
          box-shadow: 0 0 18px rgba(232,185,35,0.7);
        }
        .timeline-entry:hover .timeline-node {
          background: var(--gold-light);
          box-shadow: 0 0 30px rgba(232,185,35,0.9);
          transform: scale(1.5);
        }
        
        .stat-card {
          background: var(--surface2);
          transition: all 0.4s ease;
        }
        .stat-card:hover {
          border-color: var(--gold);
          transform: translateY(-6px);
        }

        /* ── MOBILE RESPONSIVE ── */
        @media (max-width: 768px) {
          /* Hero section */
          .home-hero { padding: 5rem 1.25rem 3rem !important; }
          .home-hero-content { max-width: 100% !important; padding: 0 !important; }
          .home-hero-logo { max-width: 260px !important; width: 75% !important; }
          .home-hero-title { font-size: clamp(1.5rem, 6vw, 2rem) !important; margin: 1.5rem 0 1.2rem !important; }
          .home-hero-desc { font-size: 0.92rem !important; margin-bottom: 2rem !important; }
          .home-hero-btns { gap: 0.85rem !important; }
          .home-hero-btns a, .home-hero-btns button {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }

          /* Stats band */
          .home-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }

          /* Untold Telangana feature */
          .home-untold-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .home-untold-grid img { max-width: 240px !important; }
          .home-untold-btns { flex-direction: column !important; gap: 0.75rem !important; }
          .home-untold-btns a { width: 100% !important; justify-content: center !important; text-align: center !important; }

          /* Heritage Chapters */
          .home-chapters-section { padding: 4rem 1.25rem !important; }
          .home-chapter-tabs { gap: 0 !important; }
          .home-chapter-tabs button { padding: 0.85rem 1rem !important; font-size: 0.62rem !important; }
          .home-chapter-card { grid-template-columns: 1fr !important; min-height: auto !important; }
          .home-chapter-img { height: 260px !important; }
          .home-chapter-content { padding: 2rem 1.5rem !important; }
          .home-chapter-actions { flex-direction: column !important; gap: 0.75rem !important; align-items: flex-start !important; }
          .home-chapter-actions a { width: 100% !important; justify-content: center !important; }

          /* Documentary section */
          .home-doc-section { padding: 4rem 0 !important; }
          .home-doc-header { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; margin-bottom: 2.5rem !important; padding: 0 1.25rem !important; }
          .home-doc-scroll { padding: 0 1.25rem 2rem !important; }
          .home-doc-card { flex: 0 0 280px !important; }
          .home-doc-modal-inner { max-width: 100% !important; }
          .home-doc-modal-image { height: 240px !important; }

          /* CTA section */
          .home-cta-section { padding: 4rem 1.25rem !important; }
          .home-cta-btns { flex-direction: column !important; gap: 0.85rem !important; }
          .home-cta-btns a { width: 100% !important; justify-content: center !important; text-align: center !important; }

          /* Section general paddings */
          .home-section-pad { padding: 4rem 1.25rem !important; }

          /* Buttons full width on mobile */
          .btn-primary, .btn-ghost { padding: 0.9rem 1.5rem !important; }
        }

        @media (max-width: 480px) {
          .home-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .home-chapter-tabs { justify-content: flex-start !important; }
          .home-doc-card { flex: 0 0 260px !important; }
          .section-title { font-size: clamp(1.85rem, 8vw, 2.8rem) !important; }
        }
      `}</style>

      <div className="grain-overlay" />

      {/* HERO SECTION */}
      <section ref={heroRef} className="home-hero" style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '6rem 2rem 4rem',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,20,15,0.85) 0%, rgba(26,20,15,0.95) 50%, #1A140F 100%)', zIndex: 2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(232,185,35,0.18) 0%, transparent 65%)', zIndex: 2 }} />

        <div className="home-hero-content" style={{ position: 'relative', zIndex: 4, maxWidth: '850px', textAlign: 'center' }}>
          <img src="/logo-torch-main.png" alt="TORCH" className="home-hero-logo" style={{ 
            maxWidth: '380px', width: '82%', 
            filter: 'drop-shadow(0 10px 35px rgba(232,185,35,0.7)) brightness(1.12)' 
          }} />
          
          <h2 className="serif home-hero-title" style={{
            fontSize: 'clamp(1.85rem, 4.8vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '0.08em',
            color: '#F5EDE4',
            margin: '2.2rem 0 1.6rem',
            textShadow: '0 6px 30px rgba(0,0,0,0.8)'
          }}>
            Preserving the <span style={{ color: '#F5D97A' }}>Golden Legacy</span> of Telangana
          </h2>

          <p className="home-hero-desc" style={{
            fontSize: 'clamp(0.97rem, 1.8vw, 1.12rem)',
            color: '#E8D9C7',
            lineHeight: 1.85,
            maxWidth: '580px',
            margin: '0 auto 3rem',
            fontWeight: 300
          }}>
            An independent research community dedicated to documenting ancient monuments, 
            oral legends, and living traditions of the Deccan.
          </p>

          <div className="home-hero-btns" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn-primary">
              Explore the Legacy →
            </Link>
            <a href="#documentary-section" className="btn-ghost">
              Watch Documentaries
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <AnimatedSection>
        <section style={{ padding: '3.5rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="home-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border)' }}>
              {stats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="stat-card" style={{ padding: '2.4rem 1.5rem', textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(2.4rem, 5vw, 3.1rem)', color: 'var(--gold)', fontWeight: 500 }}>{s.value}</div>
                    <div style={{ color: '#E8D9C7', fontSize: '0.82rem', letterSpacing: '0.12em', marginTop: '0.6rem', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* UNTOLD TELANGANA FEATURE */}
      <section className="home-section-pad" style={{ padding: '8rem 2rem', backgroundColor: '#1A140F', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/gallery/temples/8.jpg")', backgroundSize: 'cover', opacity: 0.08, filter: 'grayscale(70%)' }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0', position: 'relative', zIndex: 2 }}>
          <div className="home-untold-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <AnimatedSection>
              <div>
                <img src="/logo-untold-telangana.png" alt="The Untold Telangana" style={{ maxWidth: '340px', width: '88%' }} />
                <h3 className="section-title" style={{ margin: '2rem 0 1.5rem' }}>
                  Tales of the<br />
                  <span style={{ color: '#F5D97A' }}>Forgotten Past</span>
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.9, color: '#E8D9C7', marginBottom: '2.5rem' }}>
                  A flagship documentary anthology uncovering hidden legends, sacred groves, and vernacular arts of Telangana.
                </p>
                <div className="home-untold-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/projects" className="btn-primary">Enter the Archive →</Link>
                  <Link to="/gallery" className="btn-ghost">Explore Stories</Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Mini Stories Cards */}
            <AnimatedSection delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
                {[
                  { title: 'The Legend of Kakatiya Pillars', summary: 'Deep in the forests of Mulugu lie ruins with acoustics carved into raw basalt.', tag: 'Architectural Mystery' },
                  { title: 'Songs of the Koyas', summary: 'Tracing sacred rituals and drum beats that protect the Godavari valley.', tag: 'Oral Lore' },
                  { title: 'The Lost Inscriptions', summary: "A remote villager's farm became the key to a 10th-century boundary dispute.", tag: 'Epigraphy Discovery' },
                ].map((card, idx) => (
                  <div key={idx} style={{
                    padding: '1.8rem 2rem',
                    background: idx === 0 ? 'rgba(232,185,35,0.08)' : 'var(--surface)',
                    borderLeft: idx === 0 ? '3px solid var(--gold)' : 'none',
                  }}>
                    <span style={{ color: 'var(--amber)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{card.tag}</span>
                    <h4 style={{ color: 'var(--cream)', margin: '0.6rem 0', fontSize: '1.25rem' }}>{card.title}</h4>
                    <p style={{ color: '#D4C3A8', fontSize: '0.9rem', lineHeight: 1.7 }}>{card.summary}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HERITAGE CHAPTERS - Fully Updated */}
      <section className="home-chapters-section" style={{ padding: '8rem 2rem', backgroundColor: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <p className="label-tag" style={{ justifyContent: 'center' }}>Editorial Journal</p>
              <h2 className="section-title">Heritage Chapters</h2>
              <div className="gold-rule" style={{ margin: '1.8rem auto' }} />
            </div>
          </AnimatedSection>

          {/* Tab Navigation */}
          <AnimatedSection delay={0.1}>
            <div className="home-chapter-tabs" style={{ display: 'flex', gap: '0', marginBottom: '4rem', overflowX: 'auto', borderBottom: '1px solid var(--border)', WebkitOverflowScrolling: 'touch' }}>
              {chapters.map((ch, i) => (
                <button key={i} onClick={() => setActiveChapter(i)}
                  style={{
                    padding: '1rem 1.8rem',
                    background: 'none',
                    border: 'none',
                    borderBottom: activeChapter === i ? `3px solid var(--gold)` : '3px solid transparent',
                    color: activeChapter === i ? 'var(--gold-light)' : '#C8B89A',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {ch.tag}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active Chapter */}
          <AnimatedSection key={activeChapter}>
            <div className="home-chapter-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', background: 'var(--border)', minHeight: '480px' }}>
              <div className="chapter-card home-chapter-img" style={{ height: '480px', position: 'relative', overflow: 'hidden' }}>
                <img src={chapters[activeChapter].image} alt={chapters[activeChapter].title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              </div>
              <div className="home-chapter-content" style={{ padding: '4.5rem 4rem', background: 'var(--surface2)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '0.75rem' }}>{chapters[activeChapter].tag}</span>
                <h3 className="section-title" style={{ margin: '1.2rem 0 1.8rem' }}>{chapters[activeChapter].title}</h3>
                <p style={{ color: '#E8D9C7', lineHeight: 1.85, marginBottom: '2.5rem' }}>{chapters[activeChapter].desc}</p>
                
                <div className="home-chapter-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link to={chapters[activeChapter].link} className="btn-primary">Read Chapter →</Link>
                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <button className="btn-ghost" style={{ padding: '0.9rem 1rem', minWidth: '50px' }} onClick={() => setActiveChapter(p => (p - 1 + chapters.length) % chapters.length)}>←</button>
                    <button className="btn-ghost" style={{ padding: '0.9rem 1rem', minWidth: '50px' }} onClick={() => setActiveChapter(p => (p + 1) % chapters.length)}>→</button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DOCUMENTARY SECTION */}
      <section id="documentary-section" className="home-doc-section" style={{ padding: '8rem 0', backgroundColor: '#1A140F', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="home-doc-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="label-tag">Cinematic Archive</p>
                <h2 className="section-title">Documentary Stream</h2>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button className="btn-ghost" onClick={() => scrollDocs('left')}>←</button>
                <button className="btn-ghost" onClick={() => scrollDocs('right')}>→</button>
              </div>
            </div>
          </AnimatedSection>

          <div ref={docScrollRef} className="scroll-container home-doc-scroll" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', paddingBottom: '2rem', WebkitOverflowScrolling: 'touch' }}>
            {documentaries.map((doc, i) => (
              <AnimatedSection key={doc.id} delay={i * 0.08} style={{ flex: '0 0 360px' }} className="home-doc-card">
                <div className="doc-card" onClick={() => setActiveDoc(doc)} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                  {/* Image + Overlay */}
                  <div style={{ height: '210px', position: 'relative' }}>
                    <img src={doc.image} alt={doc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,20,15,0.9), transparent 50%)' }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.9 }}>
                      <div style={{ width: '58px', height: '58px', borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1A140F', fontSize: '1.4rem' }}>▶</div>
                    </div>
                  </div>
                  <div style={{ padding: '1.6rem' }}>
                    <h3 style={{ color: 'var(--cream)', marginBottom: '0.6rem' }}>{doc.title}</h3>
                    <p style={{ color: '#D4C3A8', fontSize: '0.9rem', lineHeight: 1.6 }}>{doc.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeDoc && (
          <div onClick={() => setActiveDoc(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(26,20,15,0.96)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.25rem', overflowY: 'auto' }}>
            <div className="home-doc-modal-inner" onClick={e => e.stopPropagation()} style={{ background: 'var(--surface2)', maxWidth: '720px', width: '100%', border: '1px solid var(--gold)', position: 'relative' }}>
              <div className="home-doc-modal-image" style={{ position: 'relative', height: '400px' }}>
                <img src={activeDoc.image} alt={activeDoc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#1A140F' }}>▶</div>
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', color: 'var(--cream)' }}>{activeDoc.title}</h3>
                <p style={{ marginTop: '1rem', color: '#E8D9C7', lineHeight: 1.8 }}>{activeDoc.desc}</p>
              </div>
              <button onClick={() => setActiveDoc(null)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', border: 'none', cursor: 'pointer', fontSize: '1rem', zIndex: 10 }}>✕</button>
            </div>
          </div>
        )}
      </section>

      {/* GALLERY + TIMELINE + CTA sections can be updated similarly. Let me know if you want them expanded further. */}

      {/* Final CTA */}
      <section className="home-cta-section" style={{ padding: '8rem 2rem', background: '#1A140F', textAlign: 'center', position: 'relative' }}>
        <AnimatedSection>
          <p className="label-tag" style={{ justifyContent: 'center' }}>Join the Movement</p>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Become a Guardian of<br />the <span style={{ color: '#F5D97A' }}>Golden Legacy</span>
          </h2>
          <div className="home-cta-btns" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/join" className="btn-primary">Join TORCH →</Link>
            <Link to="/contact" className="btn-ghost">Volunteer With Us</Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}