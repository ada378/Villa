import { Link } from 'react-router-dom';

const allImages = [
  '/assets/WhatsApp Image 2026-07-27 at 2.16.29 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.29 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.30 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.31 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.32 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.32 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.33 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.33 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.34 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.34 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.37 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.38 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.38 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.39 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.40 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.40 PM (2).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.40 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.41 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.42 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.43 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.43 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.47 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.47 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.48 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.48 PM (2).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.48 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.49 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.49 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.50 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.50 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.55 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.57 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.59 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.10 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.10 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.15 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.16 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.16 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.17 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.17 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.18 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.18 PM (2).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.18 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.19 PM (1).jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.17.19 PM.jpeg',
];

const videos = [
  '/assets/WhatsApp Video 2026-07-27 at 2.17.20 PM.mp4',
  '/assets/WhatsApp Video 2026-07-27 at 2.17.20 PM (1).mp4',
];

const projects = [
  { tag: 'Residential', name: 'Skyline Residence', img: allImages[0], tall: true },
  { tag: 'Hospitality', name: 'Harbor Boutique Hotel', img: allImages[3] },
  { tag: 'Commercial', name: 'Monarch Studio', img: allImages[6] },
  { tag: 'Luxury Villa', name: 'Vista Pavilion', img: allImages[9], wide: true },
  { tag: 'Interior', name: 'Amber Penthouse', img: allImages[12] },
  { tag: 'Mixed Use', name: 'Crown Tower', img: allImages[15], tall: true },
  { tag: 'Residential', name: 'Pearl Heights', img: allImages[18] },
  { tag: 'Commercial', name: 'Sapphire Complex', img: allImages[21] },
  { tag: 'Hospitality', name: 'The Grand Atrium', img: allImages[24], wide: true },
  { tag: 'Interior', name: 'Ivory Suite', img: allImages[27] },
  { tag: 'Luxury Villa', name: 'Emerald Estate', img: allImages[30] },
  { tag: 'Residential', name: 'Onyx Towers', img: allImages[33], tall: true },
  { tag: 'Commercial', name: 'Platinum Hub', img: allImages[36] },
  { tag: 'Interior', name: 'Velvet Loft', img: allImages[39] },
  { tag: 'Hospitality', name: 'Azure Resort', img: allImages[42] },
];

function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={allImages[10]} alt="" />
        <div className="page-hero-content">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Our Portfolio</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}>
            Premium <em>Projects</em><br />Across India
          </h1>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">120+</span>
          <span className="stat-label">Projects Delivered</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">45+</span>
          <span className="stat-label">Cities Covered</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">₹500Cr+</span>
          <span className="stat-label">Properties Showcased</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">5★</span>
          <span className="stat-label">Average Rating</span>
        </div>
      </div>

      {/* MASONRY PROJECTS */}
      <section className="section">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card${p.tall ? ' tall' : ''}${p.wide ? ' wide' : ''}`}>
              <img src={p.img} alt={p.name} loading={i > 4 ? 'lazy' : 'eager'} />
              <div className="project-overlay">
                <div className="project-tag">{p.tag}</div>
                <div className="project-name">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Video Walkthroughs</span>
          </div>
          <h2 className="section-title">Cinematic <em>Tours</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {videos.map((src, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg3)' }}>
              <video
                autoPlay loop muted playsInline
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              >
                <source src={src} type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)'
              }}>
                <div className="project-tag">Video Tour {i + 1}</div>
                <div className="project-name">Immersive Walkthrough</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REMAINING GALLERY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>More Work</span>
          </div>
          <h2 className="section-title">Full <em>Gallery</em></h2>
        </div>
        <div className="gallery-masonry">
          {allImages.slice(20).map((src, i) => (
            <div key={i} className="gallery-item">
              <img src={src} alt={`Project detail ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <div className="testimonial-section">
        <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          <div className="eyebrow-line" />
          <span>Start Your Project</span>
          <div className="eyebrow-line" />
        </div>
        <p className="testimonial-quote">
          "Have a vision? Let's turn it into an experience your clients will never forget."
        </p>
        <div style={{ marginTop: '36px' }}>
          <Link to="/contact" className="btn-gold">Discuss Your Project</Link>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
