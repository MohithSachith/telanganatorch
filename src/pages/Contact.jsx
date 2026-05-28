import { useState } from 'react'

const faqs = [
  { q: 'How can I volunteer with TORCH?', a: 'Fill out the contact form selecting "Volunteer" and our team will reach out with current opportunities — heritage walks, documentation trips, or event support.' },
  { q: 'Do you accept heritage site tips or reports?', a: 'Absolutely! If you know of an endangered or undocumented site, please use the form. Our field team reviews every submission.' },
  { q: 'Can organizations partner with TORCH?', a: 'Yes. We actively collaborate with schools, universities, trusts, and government bodies. Write to us describing the potential collaboration.' },
  { q: 'Are donations tax-exempt?', a: 'TORCH is registered under the Indian Trusts Act and donations are eligible for 80G tax exemption. Receipts are issued within 3 working days.' },
]

const contactInfo = [
  { icon: '📍', label: 'Address', value: '12-3-456, Banjara Hills Road No. 12,\nHyderabad, Telangana 500034' },
  { icon: '✉️', label: 'Email', value: 'torch.heritage@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '⏰', label: 'Office Hours', value: 'Mon–Sat: 10:00 AM – 6:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const subjects = ['General Inquiry', 'Volunteer', 'Partnership', 'Report a Heritage Site', 'Media & Press', 'Donation Query']

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-cream)' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '3rem 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>Message Received!</h2>
          <p style={{ color: 'rgba(232, 220, 203, 0.65)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Thank you, <strong>{form.name}</strong>! We've received your message regarding <em>{form.subject}</em> and will respond to <strong>{form.email}</strong> within 2–3 business days.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: 'General Inquiry', message: '' }) }}
            className="btn-outline"
            id="contact-send-another-btn"
          >
            Send Another Message
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      <style>{`
        @media (max-width: 768px) {
          .contact-header { padding: 3.5rem 1.25rem 3rem !important; }
          .contact-main-section { padding: 3rem 1.25rem 4rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-map { height: 200px !important; }
          .contact-map p { font-size: 0.75rem !important; }
          .faq-question { font-size: 0.8rem !important; }
        }
        @media (max-width: 480px) {
          .contact-submit-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
      {/* Header */}
      <section className="contact-header" style={{
        padding: '5rem 2rem 4rem',
        background: 'linear-gradient(135deg, #0F0F0F 0%, #161616 100%)', borderBottom: '1px solid rgba(139, 94, 60, 0.15)',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 40px)`, backgroundSize: '55px 55px' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ color: 'var(--color-gold)', justifyContent: 'center', marginBottom: '1rem' }}>Reach Out</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--color-beige)', marginBottom: '1rem' }}>
            Contact TORCH
          </h1>
          <p style={{ color: 'rgba(232, 220, 203, 0.7)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            Whether you want to volunteer, report a site, or simply learn more — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="contact-main-section" style={{ padding: '5rem 2rem 6rem', backgroundColor: 'var(--color-cream)' }}>
        <div className="contact-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'contact-name', label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Your full name', required: true },
                { id: 'contact-email', label: 'Email Address *', key: 'email', type: 'email', placeholder: 'your@email.com', required: true },
              ].map(({ id, label, key, type, placeholder, required }) => (
                <div key={key}>
                  <label htmlFor={id} style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>{label}</label>
                  <input
                    id={id} type={type} placeholder={placeholder} required={required}
                    value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#141414', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px' }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>Subject *</label>
                <select
                  id="contact-subject"
                  required
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#141414', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px', cursor: 'pointer' }}
                >
                  {subjects.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(232, 220, 203, 0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem', fontWeight: 600 }}>Message *</label>
                <textarea
                  id="contact-message"
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  required
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid rgba(139, 94, 60, 0.25)', background: '#141414', fontSize: '0.9rem', color: 'var(--color-gold)', outline: 'none', borderRadius: '2px', resize: 'vertical' }}
                />
              </div>

              <button type="submit" id="contact-submit-btn" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem', fontSize: '0.9rem' }}>
                Send Message →
              </button>
            </form>
          </div>

          {/* Info + FAQ */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.25rem', background: '#141414', border: '1px solid rgba(139, 94, 60, 0.2)', borderRadius: '2px' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 600, margin: '0 0 0.25rem' }}>{label}</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(232, 220, 203, 0.7)', margin: 0, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ border: '1px solid rgba(139, 94, 60, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1rem', background: openFaq === i ? '#EDE3CC' : 'white',
                      border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      cursor: 'pointer', gap: '1rem', textAlign: 'left',
                    }}
                  >
                    <span className="faq-question" style={{ fontSize: '0.875rem', color: 'var(--color-gold)', fontWeight: 500, lineHeight: 1.4, flex: 1 }}>{q}</span>
                    <span style={{ color: 'var(--color-gold)', fontSize: '1rem', flexShrink: 0, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>▾</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1rem 1rem', background: '#EDE3CC' }}>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(232, 220, 203, 0.7)', lineHeight: 1.8, margin: 0 }}>{a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="contact-map" style={{
        height: '280px',
        backgroundImage: 'linear-gradient(rgba(15, 15, 15, 0.85), rgba(15, 15, 15, 0.85)), url("/gallery/heritage-walks/1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1.25rem',
        textAlign: 'center',
      }}>
        <p style={{ color: 'var(--color-gold)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, margin: 0 }}>Our Location</p>
        <p style={{ color: 'var(--color-beige)', fontSize: '1.1rem', fontFamily: 'var(--font-serif)', margin: 0 }}>Banjara Hills, Hyderabad, Telangana</p>
        <a
          href="https://maps.google.com/?q=Banjara+Hills+Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          id="open-maps-btn"
          className="btn-outline-light"
          style={{ fontSize: '0.75rem', padding: '0.5rem 1.25rem', marginTop: '0.5rem' }}
        >
          Open in Google Maps ↗
        </a>
      </section>
    </main>
  )
}
