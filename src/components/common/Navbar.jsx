import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/donate', label: 'Donate' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Navbar is solid dark on all pages except Home (where it fades in on scroll)
  const isDark = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        fontFamily: 'var(--font-sans)',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: isDark ? '#0F0F0F' : 'transparent',
        borderBottom: isDark ? '1px solid rgba(139, 94, 60, 0.15)' : '1px solid transparent',
        boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isDark ? '68px' : '88px',
          transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/logo-torch-main.png"
            alt="TORCH"
            style={{
              height: isDark ? '34px' : '44px',
              width: 'auto',
              display: 'block',
              transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <div style={{
            width: '1px',
            height: isDark ? '24px' : '30px',
            backgroundColor: 'rgba(201, 166, 107, 0.3)',
            transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: isDark ? '0.95rem' : '1.15rem',
              fontWeight: 600,
              color: 'var(--color-gold)',
              letterSpacing: '0.12em',
              lineHeight: 1.1,
              transition: 'font-size 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>TORCH</div>
            <div style={{
              fontSize: isDark ? '0.55rem' : '0.65rem',
              letterSpacing: '0.08em',
              color: 'rgba(232, 220, 203, 0.65)',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              transition: 'font-size 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>Untold Stories</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="desktop-nav">
          {navLinks.map(({ to, label }) => {
            const isDonate = to === '/donate'
            return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  padding: isDonate ? '0.5rem 1.25rem' : '0.5rem 1rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: isDonate ? 600 : 500,
                  color: isActive ? 'var(--color-gold)' : isDonate ? 'var(--color-gold)' : 'rgba(232, 220, 203, 0.85)',
                  textDecoration: 'none',
                  border: isDonate ? '1px solid var(--color-gold)' : 'none',
                  borderBottom: !isDonate && isActive ? '1px solid var(--color-gold)' : !isDonate ? '1px solid transparent' : undefined,
                  borderRadius: isDonate ? '2px' : '0',
                  marginLeft: isDonate ? '1rem' : '0',
                  transition: 'all 0.3s ease',
                  background: isDonate ? 'rgba(201, 166, 107, 0.08)' : 'transparent',
                })}
                onMouseEnter={e => {
                  if (to !== '/donate') e.currentTarget.style.color = 'var(--color-gold)'
                  else {
                    e.currentTarget.style.background = 'var(--color-gold)'
                    e.currentTarget.style.color = '#0F0F0F'
                  }
                }}
                onMouseLeave={e => {
                  if (to !== '/donate') {
                    // Check if it is active using path
                    const active = pathname === to || (to === '/' && pathname === '/')
                    e.currentTarget.style.color = active ? 'var(--color-gold)' : 'rgba(232, 220, 203, 0.85)'
                  } else {
                    e.currentTarget.style.background = 'rgba(201, 166, 107, 0.08)'
                    e.currentTarget.style.color = 'var(--color-gold)'
                  }
                }}
              >
                {label}
              </NavLink>
            )
          })}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              backgroundColor: 'var(--color-gold)',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        maxHeight: menuOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        background: '#0F0F0F',
        borderTop: menuOpen ? '1px solid rgba(201, 166, 107, 0.15)' : 'none',
      }}>
        <div style={{ padding: '1rem 2rem 1.5rem' }}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: isActive ? 'var(--color-gold)' : 'rgba(232, 220, 203, 0.8)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201, 166, 107, 0.08)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
