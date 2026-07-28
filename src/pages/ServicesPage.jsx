import { Link } from 'react-router-dom';

const serviceImages = [
  '/assets/WhatsApp Image 2026-07-27 at 2.17.10 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.15 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.16 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.17 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.18 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.19 PM.jpeg',
];

const services = [
  {
    num: '01',
    icon: '◈',
    title: 'VR Showcase Design',
    desc: 'Custom immersive experiences tailored to your architecture, interiors, and brand identity. We craft every detail to feel cinematic and premium.',
    features: ['Custom 3D environments', 'Brand-aligned aesthetics', 'Multi-device delivery', 'Interactive hotspots'],
    img: serviceImages[0],
  },
  {
    num: '02',
    icon: '◎',
    title: '360° Video Production',
    desc: 'Premium visual storytelling with cinematic sequences, smooth motion design, and spatial audio that transports viewers into the space.',
    features: ['8K 360° capture', 'Cinematic color grading', 'Spatial audio design', 'Web & VR headset ready'],
    img: serviceImages[1],
  },
  {
    num: '03',
    icon: '◉',
    title: 'Live Tours & Events',
    desc: 'Host private or public walkthroughs with direct interaction, guided narration, and real-time Q&A for high-value client engagement.',
    features: ['Real-time guided tours', 'Multi-user sessions', 'Live Q&A integration', 'Recording & replay'],
    img: serviceImages[2],
  },
  {
    num: '04',
    icon: '⬡',
    title: 'Luxury Presentations',
    desc: 'Bespoke digital presentations for investors, buyers, and media — combining architectural renders, video, and interactive storytelling.',
    features: ['Investor-grade decks', 'Interactive floor plans', 'Branded microsites', 'Print-ready exports'],
    img: serviceImages[3],
  },
  {
    num: '05',
    icon: '◇',
    title: 'Architectural Photography',
    desc: 'Editorial-quality photography that captures the soul of your spaces — from construction milestones to finished luxury interiors.',
    features: ['HDR photography', 'Drone aerial shots', 'Interior styling', 'Post-production retouching'],
    img: serviceImages[4],
  },
  {
    num: '06',
    icon: '△',
    title: 'Brand Identity',
    desc: 'Complete visual identity systems for architectural firms and real estate developers — logos, typography, color systems, and brand guidelines.',
    features: ['Logo & mark design', 'Brand guidelines', 'Marketing collateral', 'Digital asset library'],
    img: serviceImages[5],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={serviceImages[0]} alt="" />
        <div className="page-hero-content">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>What We Do</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}>
            Premium <em>Services</em><br />for Luxury Spaces
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <span className="service-num">{s.num}</span>
              <div className="service-icon">{s.icon}</div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
              <ul style={{ marginTop: '20px', paddingLeft: 0, listStyle: 'none', display: 'grid', gap: '8px' }}>
                {s.features.map((f) => (
                  <li key={f} style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>◆</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE IMAGES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Our Work in Action</span>
          </div>
          <h2 className="section-title">See the <em>Difference</em></h2>
        </div>
        <div className="gallery-masonry">
          {serviceImages.map((src, i) => (
            <div key={i} className={`gallery-item${i === 0 || i === 3 ? ' tall' : ''}`}>
              <img src={src} alt={`Service showcase ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <div className="testimonial-section">
        <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          <div className="eyebrow-line" />
          <span>Start Today</span>
          <div className="eyebrow-line" />
        </div>
        <p className="testimonial-quote">
          "Every service we offer is designed with one goal — to make your architecture feel extraordinary."
        </p>
        <div style={{ marginTop: '36px' }}>
          <Link to="/contact" className="btn-gold">Request a Proposal</Link>
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
