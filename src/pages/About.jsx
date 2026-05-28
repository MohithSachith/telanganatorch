import { Link } from 'react-router-dom'

const team = [
  { name: 'Dr. Ramesh Babu', role: 'Founder & President', image: '/gallery/team/1.jpg', bio: 'Historian and archaeologist with 20+ years of research on Kakatiya and Qutb Shahi dynasties.' },
  { name: 'Priya Venkateswari', role: 'Documentation Lead', image: '/gallery/team/2.jpg', bio: 'Architectural photographer and heritage conservationist. Led 100+ documentation expeditions.' },
  { name: 'Mohammed Salim', role: 'Research Director', image: '/gallery/team/3.jpg', bio: 'Epigraphist specializing in Telugu and Persian inscriptions from medieval Deccan.' },
  { name: 'Ananya Reddy', role: 'Outreach Coordinator', image: '/gallery/team/4.jpg', bio: 'Community engagement specialist driving TORCH\'s youth programs and school partnerships.' },
  { name: 'Suresh Kumar', role: 'Field Operations', image: '/gallery/team/5.jpg', bio: 'Expedition leader who has surveyed over 300 heritage sites across Telangana\'s remote districts.' },
  { name: 'Lakshmi Narayana', role: 'Treasurer & Trustee', image: '/gallery/team/6.jpg', bio: 'Retired IAS officer ensuring transparent governance and financial accountability at TORCH.' },
]

const timeline = [
  { year: '2012', event: 'TORCH founded by a group of heritage enthusiasts in Hyderabad.' },
  { year: '2014', event: 'First major survey: 48 temples in Warangal district documented.' },
  { year: '2016', event: 'Old City Heritage Walks launched — 500+ participants in first year.' },
  { year: '2018', event: 'Partnered with INTACH for Ramappa Temple documentation project.' },
  { year: '2020', event: 'Digital archive launched with 10,000+ photographs and records.' },
  { year: '2022', event: 'Voices of Stone documentary premiered at Hyderabad Literary Festival.' },
  { year: '2024', event: '200th heritage site documented. Community membership crosses 5,000.' },
]

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <style>{`
        @media (max-width: 768px) {
          .about-header { padding: 3.5rem 1.25rem 3rem !important; }
          .about-story-section { padding: 3.5rem 1.25rem !important; }
          .about-story-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-timeline-section { padding: 3.5rem 1.25rem !important; }
          .about-team-section { padding: 3.5rem 1.25rem !important; }
          .about-team-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important; gap: 1rem !important; }
          .about-partners-section { padding: 2.5rem 1.25rem !important; }
          .about-partners-list { gap: 1rem 1.5rem !important; }
          .timeline-line { left: 16px !important; }
          .timeline-row { flex-direction: column !important; padding-left: 42px !important; }
          .timeline-content { text-align: left !important; flex: none !important; width: 100% !important; }
          .timeline-spacer { display: none !important; }
          .timeline-dot { position: absolute !important; left: -26px !important; top: 50% !important; transform: translateY(-50%) !important; }
        }
        @media (max-width: 480px) {
          .about-team-grid { grid-template-columns: 1fr 1fr !important; }
          .about-partners-list div { font-size: 0.75rem !important; padding: 0.5rem 1rem !important; }
        }
      `}</style>
      {/* Page Header */}
      <section className="about-header" style={{
        padding: '5rem 2rem 4rem',
        background: 'linear-gradient(135deg, #0F0F0F 0%, #161616 100%)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 40px)`, backgroundSize: '55px 55px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: 'var(--color-gold)', justifyContent: 'center', marginBottom: '1rem' }}>Who We Are</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--color-beige)', marginBottom: '1rem' }}>
            About TORCH
          </h1>
          <p style={{ color: 'rgba(232, 220, 203, 0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8, fontSize: '1rem' }}>
            A passionate community dedicated to preserving Telangana's irreplaceable cultural heritage for generations to come.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story-section" style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-cream)' }}>
        <div className="about-story-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>Our Story</p>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>From Passion to Purpose</h2>
            <p className="section-subheading" style={{ marginBottom: '1.25rem' }}>
              TORCH was born in 2012 when a small group of history lovers, disturbed by the rapid disappearance of Telangana's heritage sites, decided that awareness alone wasn't enough — action was needed.
            </p>
            <p className="section-subheading" style={{ marginBottom: '1.25rem' }}>
              What started as informal weekend walks through Hyderabad's old city has grown into a structured organization with a dedicated team of researchers, photographers, historians, and volunteers.
            </p>
            <p className="section-subheading">
              Today, TORCH stands as one of Telangana's most active heritage conservation bodies, working across documentation, advocacy, education, and community engagement.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { icon: '🎯', title: 'Our Vision', text: 'A Telangana where every citizen knows, cherishes, and advocates for their cultural heritage.' },
              { icon: '💡', title: 'Our Mission', text: 'To document, preserve, and promote the tangible and intangible heritage of Telangana through research, community engagement, and digital archiving.' },
              { icon: '⚖️', title: 'Our Values', text: 'Authenticity, inclusivity, scientific rigor, and deep respect for local communities and their living traditions.' },
            ].map(({ icon, title, text }) => (
              <div key={title} style={{
                padding: '1.5rem',
                background: '#141414',
                border: '1px solid rgba(139, 94, 60, 0.2)',
                borderLeft: '4px solid var(--color-gold)',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(232, 220, 203, 0.65)', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline-section" style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-cream-dark)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Our Journey</p>
            <h2 className="section-heading">Milestones Over the Years</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #8B6914, #D4AF37)', transform: 'translateX(-50%)' }} className="timeline-line" />
            {timeline.map(({ year, event }, i) => (
              <div key={year} style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2.5rem',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center',
                position: 'relative',
              }}
                className="timeline-row"
              >
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }} className="timeline-content">
                  <div style={{
                    display: 'inline-block', padding: '1rem 1.5rem',
                    background: '#141414', border: '1px solid rgba(139, 94, 60, 0.2)',
                    borderRadius: '2px',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: '0.25rem' }}>{year}</div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(232, 220, 203, 0.7)', lineHeight: 1.6 }}>{event}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: '#D4AF37', border: '3px solid #3B1F0A',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                }} className="timeline-dot" />
                <div style={{ flex: 1 }} className="timeline-spacer" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .timeline-line { left: 16px !important; }
            .timeline-row { flex-direction: column !important; padding-left: 42px !important; }
            .timeline-content { text-align: left !important; flex: none !important; width: 100% !important; }
            .timeline-spacer { display: none !important; }
          }
        `}</style>
      </section>

      {/* Team */}
      <section className="about-team-section" style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-cream)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>The People</p>
            <h2 className="section-heading">Our Core Team</h2>
          </div>
          <div className="about-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {team.map(({ name, role, image, bio }) => (
              <div key={name} className="card-heritage" style={{ padding: '2rem', textAlign: 'center', borderRadius: '2px', background: '#141414' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto 1.25rem',
                  border: '2px solid #8B6914',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}>
                  <img
                    src={image}
                    alt={name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', marginBottom: '0.25rem' }}>{name}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>{role}</p>
                <p style={{ fontSize: '0.825rem', color: 'rgba(232, 220, 203, 0.65)', lineHeight: 1.7 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="about-partners-section" style={{ padding: '4rem 2rem', backgroundColor: '#0F0F0F', borderTop: '1px solid rgba(139, 94, 60, 0.15)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '2rem' }}>Partner Organizations</p>
        <div className="about-partners-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 3rem' }}>
          {['INTACH Hyderabad', 'ASI Telangana', 'Hyderabad Heritage Trust', 'EFLU', 'Osmania University', 'State Museum Hyd'].map(p => (
            <div key={p} style={{
              padding: '0.625rem 1.5rem',
              border: '1px solid rgba(212,175,55,0.3)',
              color: 'rgba(232, 220, 203, 0.7)',
              fontSize: '0.825rem',
              letterSpacing: '0.05em',
            }}>{p}</div>
          ))}
        </div>
      </section>
    </main>
  )
}
