import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

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

const gallerySections = [
  {
    label: 'Residential',
    images: allImages.slice(0, 9),
  },
  {
    label: 'Interior & Living',
    images: allImages.slice(9, 18),
  },
  {
    label: 'Commercial & Hospitality',
    images: allImages.slice(18, 27),
  },
  {
    label: 'Luxury Villas & Exteriors',
    images: allImages.slice(27),
  },
];

const projectData = [
  { tag: 'Residential', name: 'Skyline Residence', location: 'Mumbai, Maharashtra', year: '2024', area: '4,200 sq ft', desc: 'A high-end residential VR experience with dramatic light-filled interiors, panoramic city views, and bespoke material finishes crafted for discerning buyers.', img: allImages[0], tall: true },
  { tag: 'Hospitality', name: 'Harbor Boutique Hotel', location: 'Goa, India', year: '2024', area: '18,000 sq ft', desc: 'A cinematic walkthrough for a luxury hospitality destination — immersive storytelling that transports guests before arrival.', img: allImages[3] },
  { tag: 'Commercial', name: 'Monarch Studio', location: 'Pune, Maharashtra', year: '2023', area: '6,800 sq ft', desc: 'A premium architectural presentation designed for private investors and design showcases with interactive floor plans.', img: allImages[6] },
  { tag: 'Luxury Villa', name: 'Vista Pavilion', location: 'Lonavala, Maharashtra', year: '2024', area: '9,500 sq ft', desc: 'An experiential 360° prototype built to impress before the physical build is complete — sold out pre-launch.', img: allImages[9], wide: true },
  { tag: 'Interior', name: 'Amber Penthouse', location: 'Delhi NCR', year: '2023', area: '3,100 sq ft', desc: 'Editorial-quality interior showcase with spatial audio and curated material storytelling for ultra-luxury buyers.', img: allImages[12] },
  { tag: 'Mixed Use', name: 'Crown Tower', location: 'Hyderabad, Telangana', year: '2024', area: '32,000 sq ft', desc: 'A landmark mixed-use development presented through a multi-floor immersive tour with live guided sessions.', img: allImages[15], tall: true },
  { tag: 'Residential', name: 'Pearl Heights', location: 'Bangalore, Karnataka', year: '2023', area: '5,600 sq ft', desc: 'Luxury residential towers with a bespoke VR showcase that drove 80% pre-sales within the first month of launch.', img: allImages[18] },
];

const galleryProjects = allImages.map((img, i) => ({
  img,
  tag: ['Residential', 'Interior', 'Commercial', 'Hospitality', 'Luxury Villa'][i % 5],
  name: ['Skyline Residence', 'Amber Penthouse', 'Monarch Studio', 'Harbor Hotel', 'Vista Pavilion'][i % 5],
  location: ['Mumbai', 'Delhi NCR', 'Pune', 'Goa', 'Lonavala'][i % 5],
  year: i % 2 === 0 ? '2024' : '2023',
  area: `${2000 + i * 300} sq ft`,
  desc: 'A premium architectural experience crafted with cinematic precision, immersive storytelling, and luxury-first design sensibility.',
}));

// ── DRAWER PANEL ──
function Drawer({ item, onClose }) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [item]);

  return (
    <>
      <div className={`drawer-backdrop${item ? ' open' : ''}`} onClick={onClose} />
      <aside className={`drawer-panel fullscreen${item ? ' open' : ''}`}>
        {item && (
          <>
            <button className="drawer-close" onClick={onClose} aria-label="Close">✕</button>

            {/* Main image */}
            <div className="drawer-img-wrap">
              <img src={item.img} alt={item.name} className="drawer-main-img" />
              <div className="drawer-img-overlay">
                <span className="drawer-tag">{item.tag}</span>
              </div>
            </div>

            {/* Details */}
            <div className="drawer-body">
              <div className="drawer-eyebrow">
                <div className="eyebrow-line" />
                <span>{item.tag}</span>
              </div>
              <h2 className="drawer-title">{item.name}</h2>
              <p className="drawer-desc">{item.desc}</p>

              <div className="drawer-meta">
                <div className="drawer-meta-item">
                  <span className="drawer-meta-label">Location</span>
                  <span className="drawer-meta-val">{item.location}</span>
                </div>
                <div className="drawer-meta-item">
                  <span className="drawer-meta-label">Year</span>
                  <span className="drawer-meta-val">{item.year}</span>
                </div>
                <div className="drawer-meta-item">
                  <span className="drawer-meta-label">Area</span>
                  <span className="drawer-meta-val">{item.area}</span>
                </div>
                <div className="drawer-meta-item">
                  <span className="drawer-meta-label">Type</span>
                  <span className="drawer-meta-val">{item.tag}</span>
                </div>
              </div>

              {/* Live video inside drawer */}
              <div className="drawer-video-wrap">
                <div className="drawer-video-label">
                  <span className="live-dot" />
                  <span>Live Walkthrough Preview</span>
                </div>
                <video
                  key={item.img}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="drawer-video"
                  poster={item.img}
                >
                  <source src={videos[0]} type="video/mp4" />
                </video>
              </div>

              <div className="drawer-actions">
                <Link to="/contact" className="btn-gold" onClick={onClose}>Book a Private Tour</Link>
                <Link to="/projects" className="btn-outline" onClick={onClose}>View All Projects</Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

function HomePage() {
  const [drawerItem, setDrawerItem] = useState(null);
  const ambientRef = useRef(null);

  useEffect(() => {
    if (!ambientRef.current) return;
    const orbs = ambientRef.current.querySelectorAll('.orb');
    gsap.to(orbs, {
      x: (i) => (i % 2 === 0 ? 30 : -30),
      y: (i) => (i % 2 === 0 ? -20 : 20),
      scale: (i) => (i % 2 === 0 ? 1.08 : 1.15),
      duration: 5 + Math.random() * 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4,
    });
  }, []);

  return (
    <>
      <Drawer item={drawerItem} onClose={() => setDrawerItem(null)} />

      {/* ── HERO ── */}
      <section className="hero-section">
        <video
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster={allImages[0]}
          ref={el => { if (el) el.playbackRate = 0.45; }}
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-ambient" ref={ambientRef}>
          <div className="orb" style={{ width: '220px', height: '220px', left: '8%', top: '12%', background: 'radial-gradient(circle, rgba(231,183,193,0.26), transparent 70%)' }} />
          <div className="orb" style={{ width: '320px', height: '320px', right: '6%', bottom: '10%', background: 'radial-gradient(circle, rgba(163,59,75,0.25), transparent 72%)' }} />
          <div className="orb" style={{ width: '140px', height: '140px', left: '44%', top: '20%', background: 'radial-gradient(circle, rgba(255,255,255,0.16), transparent 70%)' }} />
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="eyebrow-line" />
            <span>Premium Architectural Experiences</span>
          </div>
          <h1 className="hero-title">
            Step Inside<br /><em>Before It's Built.</em>
          </h1>
          <p className="hero-sub">
            Ashutosh Building transforms real estate, hospitality, and luxury spaces into cinematic immersive worlds — with premium 360° storytelling, live walkthroughs, and tailored digital showcases.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-gold">Explore Projects</Link>
            <Link to="/contact" className="btn-outline">Book a Private Tour</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">120+</span>
          <span className="stat-label">Premium Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">15+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">98%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">24/7</span>
          <span className="stat-label">Live Preview Access</span>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img className="about-img-main" src={allImages[2]} alt="Luxury architecture" />
            <img className="about-img-accent" src={allImages[5]} alt="Interior detail" />
          </div>
          <div>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="section-title">
              Architecture as<br /><em>an Experience</em>
            </h2>
            <div className="about-gold-line" />
            <p className="section-desc">
              We blend spatial design, cinematic storytelling, and smart digital presentation to elevate architecture into an experience people feel before they even step inside.
            </p>
            <div className="about-features">
              <div className="about-feat">
                <span className="feat-num">01</span>
                <div>
                  <div className="feat-title">Luxury-First Design</div>
                  <div className="feat-desc">Premium digital environments with an editorial, cinematic look that commands attention.</div>
                </div>
              </div>
              <div className="about-feat">
                <span className="feat-num">02</span>
                <div>
                  <div className="feat-title">Immersive Storytelling</div>
                  <div className="feat-desc">360° production, seamless delivery for web, screens, and live presentations.</div>
                </div>
              </div>
              <div className="about-feat">
                <span className="feat-num">03</span>
                <div>
                  <div className="feat-title">Premium Conversion</div>
                  <div className="feat-desc">Higher emotional engagement, stronger brand perception, and memorable client journeys.</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '36px' }}>
              <Link to="/about" className="btn-outline">Discover Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">Our <em>Services</em></h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-num">01</span>
            <div className="service-icon">◈</div>
            <div className="service-title">VR Showcase Design</div>
            <p className="service-desc">Custom immersive experiences tailored to your architecture, interiors, and brand identity.</p>
          </div>
          <div className="service-card">
            <span className="service-num">02</span>
            <div className="service-icon">◎</div>
            <div className="service-title">360° Video Production</div>
            <p className="service-desc">Premium visual storytelling with cinematic sequences and smooth motion design.</p>
          </div>
          <div className="service-card">
            <span className="service-num">03</span>
            <div className="service-icon">◉</div>
            <div className="service-title">Live Tours & Events</div>
            <p className="service-desc">Host private or public walkthroughs with direct interaction and guided narration.</p>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS (clickable) ── */}
      <section className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Our <em>Projects</em></h2>
        </div>
        <div className="projects-grid">
          {projectData.map((p, i) => (
            <div
              key={i}
              className={`project-card${p.tall ? ' tall' : ''}${p.wide ? ' wide' : ''}`}
              onClick={() => setDrawerItem(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setDrawerItem(p)}
            >
              <img src={p.img} alt={p.name} loading={i > 3 ? 'lazy' : 'eager'} />
              <div className="project-overlay">
                <div className="project-tag">{p.tag}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-view-hint">Click to explore ◆</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/projects" className="btn-gold">View All Projects</Link>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="video-section">
        <video autoPlay loop muted playsInline>
          <source src={videos[1]} type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="video-content">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />
            <span>Immersive Experience</span>
            <div className="eyebrow-line" />
          </div>
          <h2>Feel the Space<br /><em>Before You Enter</em></h2>
          <p>Our cinematic 360° productions bring architectural visions to life with unmatched detail and luxury presentation.</p>
          <Link to="/contact" className="btn-gold">Start Your Project</Link>
        </div>
      </section>

      {/* ── PROJECTS CTA ── */}
      <section className="section section-compact">
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="section-title">Explore the full <em>project gallery</em></h2>
          <p className="section-desc">The complete image-rich portfolio now lives on the projects page so the home page remains elegant, focused, and conversion-driven.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to="/projects" className="btn-gold">See Full Gallery</Link>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <div className="testimonial-section">
        <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          <div className="eyebrow-line" />
          <span>Client Words</span>
          <div className="eyebrow-line" />
        </div>
        <p className="testimonial-quote">
          "Ashutosh Building transformed our vision into a breathtaking immersive experience. Our clients were sold before the foundation was even laid."
        </p>
        <span className="testimonial-author">— Rajiv Mehta, Director · Prestige Developers</span>
      </div>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
          <div className="eyebrow-line" />
          <span>Ready to Begin?</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '20px auto 16px' }}>
          Let's Design Your<br /><em>Premium Experience</em>
        </h2>
        <p className="section-desc" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
          Share your vision and we'll shape a tailored VR, 360°, or live tour experience that feels prestigious and unforgettable.
        </p>
        <Link to="/contact" className="btn-gold">Request a Proposal</Link>
      </section>
    </>
  );
}

export default HomePage;
