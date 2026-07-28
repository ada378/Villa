const images = [
  '/assets/WhatsApp Image 2026-07-27 at 2.16.43 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.47 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.48 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.49 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.50 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.55 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.57 PM.jpeg',
  '/assets/WhatsApp Image 2026-07-27 at 2.16.59 PM.jpeg',
];

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img className="page-hero-bg" src={images[0]} alt="" />
        <div className="page-hero-content">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Our Story</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}>
            Crafting Immersive<br /><em>Architectural Worlds</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img className="about-img-main" src={images[1]} alt="Our studio" />
            <img className="about-img-accent" src={images[2]} alt="Detail" />
          </div>
          <div>
            <div className="section-eyebrow">
              <div className="eyebrow-line" />
              <span>Who We Are</span>
            </div>
            <h2 className="section-title">Architecture<br /><em>Reimagined</em></h2>
            <div className="about-gold-line" />
            <p className="section-desc">
              We blend spatial design, cinematic storytelling, and smart digital presentation to elevate architecture into an experience people feel before they even step inside. With over 15 years of expertise, we've redefined how luxury spaces are presented and sold.
            </p>
            <div className="about-features" style={{ marginTop: '32px' }}>
              <div className="about-feat">
                <span className="feat-num">01</span>
                <div>
                  <div className="feat-title">Vision</div>
                  <div className="feat-desc">Luxury-first digital environments with a premium, editorial look that commands attention and drives desire.</div>
                </div>
              </div>
              <div className="about-feat">
                <span className="feat-num">02</span>
                <div>
                  <div className="feat-title">Process</div>
                  <div className="feat-desc">Concept, storytelling, 360° production, and seamless delivery for web, screens, and live events.</div>
                </div>
              </div>
              <div className="about-feat">
                <span className="feat-num">03</span>
                <div>
                  <div className="feat-title">Outcome</div>
                  <div className="feat-desc">Higher emotional engagement, stronger brand perception, and memorable client journeys that convert.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / VALUES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span>Our Work</span>
          </div>
          <h2 className="section-title">Behind the <em>Scenes</em></h2>
        </div>
        <div className="gallery-masonry">
          {images.map((src, i) => (
            <div key={i} className={`gallery-item${i === 1 || i === 6 ? ' tall' : ''}`}>
              <img src={src} alt={`Behind the scenes ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <div className="testimonial-section">
        <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '28px' }}>
          <div className="eyebrow-line" />
          <span>Our Mission</span>
          <div className="eyebrow-line" />
        </div>
        <p className="testimonial-quote">
          "To make every architectural vision tangible, emotional, and unforgettable — before a single brick is laid."
        </p>
        <span className="testimonial-author">— Ashutosh, Founder & Creative Director</span>
      </div>
    </>
  );
}

export default AboutPage;
