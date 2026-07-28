import { useState, useEffect } from 'react';
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
  { tag: 'Residential', name: 'Skyline Residence', location: 'Mumbai, Maharashtra', year: '2024', area: '4,200 sq ft', desc: 'A high-end residential VR experience with dramatic light-filled interiors, panoramic city views, and bespoke material finishes crafted for discerning buyers.', img: allImages[0], tall: true },
  { tag: 'Hospitality', name: 'Harbor Boutique Hotel', location: 'Goa, India', year: '2024', area: '18,000 sq ft', desc: 'A cinematic walkthrough for a luxury hospitality destination — immersive storytelling that transports guests before arrival.', img: allImages[3] },
  { tag: 'Commercial', name: 'Monarch Studio', location: 'Pune, Maharashtra', year: '2023', area: '6,800 sq ft', desc: 'A premium architectural presentation designed for private investors and design showcases with interactive floor plans.', img: allImages[6] },
  { tag: 'Luxury Villa', name: 'Vista Pavilion', location: 'Lonavala, Maharashtra', year: '2024', area: '9,500 sq ft', desc: 'An experiential 360° prototype built to impress before the physical build is complete — sold out pre-launch.', img: allImages[9], wide: true },
  { tag: 'Interior', name: 'Amber Penthouse', location: 'Delhi NCR', year: '2023', area: '3,100 sq ft', desc: 'Editorial-quality interior showcase with spatial audio and curated material storytelling for ultra-luxury buyers.', img: allImages[12] },
  { tag: 'Mixed Use', name: 'Crown Tower', location: 'Hyderabad, Telangana', year: '2024', area: '32,000 sq ft', desc: 'A landmark mixed-use development presented through a multi-floor immersive tour with live guided sessions.', img: allImages[15], tall: true },
  { tag: 'Residential', name: 'Pearl Heights', location: 'Bangalore, Karnataka', year: '2023', area: '5,600 sq ft', desc: 'Luxury residential towers with a bespoke VR showcase that drove 80% pre-sales within the first month of launch.', img: allImages[18] },
  { tag: 'Commercial', name: 'Sapphire Complex', location: 'Ahmedabad, Gujarat', year: '2024', area: '12,400 sq ft', desc: 'A polished corporate experience for investors and stakeholders with full visual storytelling.', img: allImages[21] },
  { tag: 'Hospitality', name: 'The Grand Atrium', location: 'Jaipur, Rajasthan', year: '2024', area: '21,500 sq ft', desc: 'A high-impact hospitality experience designed for pre-launch engagement and luxury positioning.', img: allImages[24], wide: true },
  { tag: 'Interior', name: 'Ivory Suite', location: 'Mumbai, Maharashtra', year: '2023', area: '2,800 sq ft', desc: 'An intimate interior concept with layered lighting and premium finishes rendered as an immersive experience.', img: allImages[27] },
  { tag: 'Luxury Villa', name: 'Emerald Estate', location: 'Alibaug, Maharashtra', year: '2024', area: '11,200 sq ft', desc: 'A villa experience designed to feel private, luxurious, and cinematic from first glance.', img: allImages[30] },
  { tag: 'Residential', name: 'Onyx Towers', location: 'Noida, Uttar Pradesh', year: '2024', area: '7,900 sq ft', desc: 'A multi-residence storytelling experience crafted to highlight lifestyle, scale, and aspiration.', img: allImages[33], tall: true },
  { tag: 'Commercial', name: 'Platinum Hub', location: 'Chennai, Tamil Nadu', year: '2023', area: '14,600 sq ft', desc: 'A business-focused showcase designed for executive presentations and client-facing walkthroughs.', img: allImages[36] },
  { tag: 'Interior', name: 'Velvet Loft', location: 'Delhi NCR', year: '2023', area: '3,600 sq ft', desc: 'An editorial interior concept that balances calm luxury with architectural drama.', img: allImages[39] },
  { tag: 'Hospitality', name: 'Azure Resort', location: 'Kochi, Kerala', year: '2024', area: '25,000 sq ft', desc: 'A resort experience that blends hospitality storytelling with immersive digital presentation.', img: allImages[42] },
];

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  return (
    <>
      <div className="drawer-backdrop open" onClick={onClose} />
      <aside className="drawer-panel fullscreen open">
        <button className="drawer-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="drawer-img-wrap">
          <img src={project.img} alt={project.name} className="drawer-main-img" />
          <div className="drawer-img-overlay">
            <span className="drawer-tag">{project.tag}</span>
          </div>
        </div>
        <div className="drawer-body">
          <div className="drawer-eyebrow">
            <div className="eyebrow-line" />
            <span>{project.tag}</span>
          </div>
          <h2 className="drawer-title">{project.name}</h2>
          <p className="drawer-desc">{project.desc}</p>
          <div className="drawer-meta">
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Location</span>
              <span className="drawer-meta-val">{project.location}</span>
            </div>
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Year</span>
              <span className="drawer-meta-val">{project.year}</span>
            </div>
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Area</span>
              <span className="drawer-meta-val">{project.area}</span>
            </div>
            <div className="drawer-meta-item">
              <span className="drawer-meta-label">Type</span>
              <span className="drawer-meta-val">{project.tag}</span>
            </div>
          </div>
          <div className="drawer-video-wrap">
            <div className="drawer-video-label">
              <span className="live-dot" />
              <span>Live Walkthrough Preview</span>
            </div>
            <video autoPlay loop muted playsInline className="drawer-video" poster={project.img}>
              <source src={videos[0]} type="video/mp4" />
            </video>
          </div>
          <div className="drawer-actions">
            <Link to="/contact" className="btn-gold" onClick={onClose}>Book a Private Tour</Link>
            <Link to="/projects" className="btn-outline" onClick={onClose}>Back to Portfolio</Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

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

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* MASONRY PROJECTS */}
      <section className="section">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-card${p.tall ? ' tall' : ''}${p.wide ? ' wide' : ''}`}
              onClick={() => setSelectedProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(p)}
            >
              <img src={p.img} alt={p.name} loading={i > 4 ? 'lazy' : 'eager'} />
              <div className="project-overlay">
                <div className="project-tag">{p.tag}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-view-hint">Click for details ◆</div>
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
