import { useState } from 'react';

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero">
        <img
          className="page-hero-bg"
          src="/assets/WhatsApp Image 2026-07-27 at 2.17.19 PM.jpeg"
          alt=""
        />
        <div className="page-hero-content">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Get in Touch</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}>
            Let's Create Something<br /><em>Extraordinary</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="contact-split">
          {/* LEFT */}
          <div>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span>Contact Information</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Start Your<br /><em>Journey</em>
            </h2>
            <p className="section-desc" style={{ marginBottom: '48px' }}>
              Share your vision and we'll shape a tailored VR, 360°, or live tour experience that feels prestigious and unforgettable.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-val">info@ashutoshbuilding.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">☎</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-val">+91 98765 43210</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">◎</div>
              <div>
                <div className="contact-label">Studio</div>
                <div className="contact-val">Mumbai, Maharashtra, India</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">◷</div>
              <div>
                <div className="contact-label">Hours</div>
                <div className="contact-val">Mon – Sat, 9:00 AM – 7:00 PM</div>
              </div>
            </div>

            <div style={{ marginTop: '48px', padding: '32px', border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <div className="section-eyebrow" style={{ marginBottom: '16px' }}>
                <div className="eyebrow-line" />
                <span>Response Time</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                We respond to all inquiries within <strong style={{ color: 'var(--gold)' }}>24 hours</strong>. For urgent projects, call us directly for immediate assistance.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            {sent ? (
              <div style={{ padding: '60px 40px', border: '1px solid var(--border-bright)', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '20px' }}>◆</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, marginBottom: '12px' }}>
                  Proposal Received
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                  Thank you for reaching out. Our team will review your vision and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input placeholder="Your full name" required />
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number</label>
                    <input placeholder="+91 00000 00000" />
                  </div>
                  <div className="form-field">
                    <label>Company / Developer</label>
                    <input placeholder="Your company name" />
                  </div>
                </div>
                <div className="form-field">
                  <label>Project Type</label>
                  <select>
                    <option value="">Select a service</option>
                    <option>VR Showcase Design</option>
                    <option>360° Video Production</option>
                    <option>Live Tours & Events</option>
                    <option>Luxury Presentations</option>
                    <option>Architectural Photography</option>
                    <option>Brand Identity</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Budget Range</label>
                  <select>
                    <option value="">Select budget</option>
                    <option>₹1L – ₹5L</option>
                    <option>₹5L – ₹15L</option>
                    <option>₹15L – ₹50L</option>
                    <option>₹50L+</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Tell Us About Your Vision</label>
                  <textarea placeholder="Describe your project, timeline, and any specific requirements..." />
                </div>
                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem' }}>
                  Request a Proposal ◆
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
