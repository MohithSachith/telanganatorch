import { useState } from 'react'

const impact = [
  { emoji: '📍', label: 'Heritage Sites Documented', value: '200+' },
  { emoji: '🚶', label: 'Heritage Walks Conducted', value: '50+' },
  { emoji: '👥', label: 'Community Members Reached', value: '5,000+' },
  { emoji: '📚', label: 'Years of Active Service', value: '12+' },
]

const howToHelp = [
  {
    icon: '🏦',
    title: 'Bank Transfer',
    desc: 'Contact us and we will share our registered trust bank account details for a direct transfer.',
  },
  {
    icon: '🤝',
    title: 'In-Kind Support',
    desc: 'Donate equipment, books, archival materials, or sponsor a specific field documentation trip.',
  },
  {
    icon: '🧑‍💼',
    title: 'Corporate CSR',
    desc: 'Partner with TORCH under your organisation\'s CSR mandate. We issue 80G receipts for all donations.',
  },
  {
    icon: '📣',
    title: 'Spread the Word',
    desc: 'Share our work with your network. Awareness is just as powerful as financial support.',
  },
]

export default function Donate() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Individual', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-cream)' }}>
        <div style={{ textAlign: 'center', maxWidth: '520px', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🙏</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
            Thank You, {form.name}!
          </h2>
          <p style={{ color: 'rgba(232, 220, 203, 0.65)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.95rem' }}>
            We've received your message and truly appreciate your willingness to support TORCH.
            Our team will get in touch with you at <strong style={{ color: 'rgba(232, 220, 203, 0.7)' }}>{form.email}</strong> within
            2–3 working days with all the details.
          </p>
          <div style={{
            padding: '1.25rem 1.5rem',
            background: '#141414',
            border: '1px solid rgba(139, 94, 60, 0.2)',
            borderLeft: '4px solid #D4AF37',
            marginBottom: '2rem',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '0.825rem', color: 'rgba(232, 220, 203, 0.7)', margin: 0, lineHeight: 1.8 }}>
              💡 <strong>Note:</strong> TORCH is a registered trust. All donations are eligible for
              tax exemption under <strong>Section 80G</strong> of the Income Tax Act.
              Official receipts are issued for every donation.
            </p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', type: 'Individual', message: '' }) }}
            className="btn-outline"
            id="donate-again-btn"
          >
            Submit Another Enquiry
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <style>{`
        @media (max-width: 768px) {
          .donate-header { padding: 3.5rem 1.25rem 3rem !important; }
          .donate-impact-section { padding: 2rem 1.25rem !important; }
          .donate-impact-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .donate-help-section { padding: 3rem 1.25rem !important; }
          .donate-help-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
          .donate-form-section { padding: 3rem 1.25rem 4rem !important; }
          .donate-form-inner { padding: 1.5rem !important; }
          .donate-form-inner button[type="submit"] { font-size: 0.82rem !important; }
        }
        @media (max-width: 480px) {
          .donate-impact-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .donate-help-grid { grid-template-columns: 1fr !important; }
          .donate-impact-value { font-size: 1.6rem !important; }
          .donate-form-section .section-subheading { font-size: 0.88rem !important; }
        }
      `}</style>

      {/* Header */}
      <section className="donate-header" style={{
        padding: '5rem 2rem 4rem',
        background: 'linear-gradient(135deg, #0F0F0F 0%, #161616 100%)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 40px)`, backgroundSize: '55px 55px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: 'var(--color-gold)', justifyContent: 'center', marginBottom: '1rem' }}>Support Our Mission</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--color-beige)', marginBottom: '1rem' }}>
            Be a Guardian of Heritage
          </h1>
          <p style={{ color: 'rgba(232, 220, 203, 0.75)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.9, fontSize: '1rem' }}>
            Your support — big or small — keeps TORCH's fieldwork, documentation, and community programs alive.
            Reach out to us and our team will personally guide you through the process.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="donate-impact-section" style={{ backgroundColor: '#8B6914', padding: '3rem 2rem' }}>
        <div className="donate-impact-grid" style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem', textAlign: 'center',
        }}>
          {impact.map(({ emoji, label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{emoji}</div>
              <div className="donate-impact-value" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-beige)', fontWeight: 700, marginBottom: '0.25rem' }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How You Can Help */}
      <section className="donate-help-section" style={{ padding: '5rem 2rem', backgroundColor: 'var(--color-cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Ways to Contribute</p>
            <h2 className="section-heading">How You Can Help</h2>
          </div>
          <div className="donate-help-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {howToHelp.map(({ icon, title, desc }) => (
              <div key={title} style={{
                padding: '1.75rem',
                background: '#141414',
                border: '1px solid rgba(139, 94, 60, 0.2)',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '2px',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.825rem', color: 'rgba(232, 220, 203, 0.65)', lineHeight: 1.75, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="donate-form-section" style={{ padding: '5rem 2rem 6rem', backgroundColor: 'var(--color-cream-dark)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Get in Touch</p>
            <h2 className="section-heading">Express Your Interest</h2>
            <p className="section-subheading" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              Leave your details below and our team will contact you with donation options, bank details, and a 80G receipt process.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="donate-form-inner"
            style={{
              background: '#141414',
              border: '1px solid rgba(139, 94, 60, 0.2)',
              padding: '2.5rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {/* Name */}
            <div>
              <label htmlFor="donor-name" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>
                Full Name *
              </label>
              <input
                id="donor-name"
                type="text"
                placeholder="Your full name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#121212', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px' }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="donor-email" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>
                Email Address *
              </label>
              <input
                id="donor-email"
                type="email"
                placeholder="your@email.com"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#121212', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px' }}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="donor-phone" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>
                Phone Number
              </label>
              <input
                id="donor-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#121212', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px' }}
              />
            </div>

            {/* Type */}
            <div>
              <label htmlFor="donor-type" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>
                I am donating as
              </label>
              <select
                id="donor-type"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#121212', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px', cursor: 'pointer' }}
              >
                <option>Individual</option>
                <option>Organisation / Company (CSR)</option>
                <option>Trust / Foundation</option>
                <option>In-Kind (Equipment / Materials)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="donor-message" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>
                Message / Questions (optional)
              </label>
              <textarea
                id="donor-message"
                rows={4}
                placeholder="Any specific project you'd like to support, or questions for our team..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#121212', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px', resize: 'vertical' }}
              />
            </div>

            {/* Info note */}
            <div style={{ padding: '1rem', background: 'var(--color-cream)', border: '1px solid rgba(139, 94, 60, 0.2)', borderRadius: '2px' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', margin: 0, lineHeight: 1.8 }}>
                ℹ️ By submitting this form, you're expressing interest in supporting TORCH.
                Our team will reach out to you with bank transfer details and donation process.
                <strong> No payment is collected through this form.</strong>
              </p>
            </div>

            <button
              type="submit"
              id="donate-submit-btn"
              className="btn-primary"
              style={{ justifyContent: 'center', padding: '1rem', fontSize: '0.9rem' }}
            >
              🔦 Send My Interest →
            </button>

            <p style={{ fontSize: '0.75rem', color: 'rgba(232, 220, 203, 0.45)', textAlign: 'center', lineHeight: 1.6, margin: 0 }}>
              TORCH is registered under the Indian Trusts Act · 80G tax exemption available
            </p>
          </form>
        </div>
      </section>

    </main>
  )
}
