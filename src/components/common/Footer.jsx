import { Link } from 'react-router-dom'

const footerLinks = {
  Explore: [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About TORCH' },
    { to: '/projects', label: 'Our Projects' },
    { to: '/gallery', label: 'Gallery' },
  ],
  'Get Involved': [
    { to: '/join', label: 'Join Membership' },
    { to: '/contact', label: 'Contact Us' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F0F0F', borderTop: '1px solid rgba(139, 94, 60, 0.15)', color: 'rgba(232, 220, 203, 0.75)', fontFamily: 'var(--font-sans)' }}>
      <style>{`
        @media (max-width: 768px) {
          .footer-cta-strip { padding: 1rem 1.25rem !important; }
          .footer-cta-strip p { font-size: 0.78rem !important; }
          .footer-main { padding: 3rem 1.25rem 1.5rem !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 0.5rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-brand { grid-column: auto !important; }
        }
      `}</style>
      <div className="footer-main" style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo-torch-main.png"
                alt="TORCH"
                style={{ height: '36px', width: 'auto', display: 'block', marginBottom: '0.35rem' }}
              />
              <img
                src="/logo-torch-tagline.png"
                alt="Team Of Research On Culture & Heritage"
                style={{ height: '7px', width: 'auto', display: 'block', opacity: 0.6 }}
              />
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'rgba(232, 220, 203, 0.6)', marginBottom: '1.5rem' }}>
              Team of Research on Culture and Heritage — dedicated to documenting, preserving, and promoting Telangana's rich cultural legacy.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'Facebook', icon: 'f', href: '#' },
                { label: 'Instagram', icon: '◈', href: '#' },
                { label: 'YouTube', icon: '▶', href: '#' },
                { label: 'Twitter', icon: '𝕏', href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: '36px', height: '36px',
                  border: '1px solid rgba(201, 166, 107, 0.3)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(201, 166, 107, 0.7)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201, 166, 107, 0.15)'; e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(201, 166, 107, 0.3)'; e.currentTarget.style.color = 'rgba(201, 166, 107, 0.7)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} style={{
                      fontSize: '0.85rem',
                      color: 'rgba(232, 220, 203, 0.6)',
                      textDecoration: 'none',
                      transition: 'color 0.25s ease',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(232, 220, 203, 0.6)'}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact snippet */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '📍', text: 'Hyderabad, Telangana, India' },
                { icon: '✉️', text: 'torch.heritage@gmail.com' },
                { icon: '📞', text: '+91 98765 43210' },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.875rem', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.6)', lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          borderTop: '1px solid rgba(201, 166, 107, 0.15)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.4)', margin: 0 }}>
            © {new Date().getFullYear()} TORCH — Team of Research on Culture and Heritage. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(201, 166, 107, 0.5)', margin: 0, letterSpacing: '0.05em' }}>
            Preserving the past · Inspiring the future
          </p>
        </div>
      </div>
    </footer>
  )
}
