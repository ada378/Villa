import { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function Loader({ done }) {
  return (
    <div className={`loader-wrap${done ? ' hidden' : ''}`}>
      <div className="loader-inner">
        <img src="/assets/logo.png" alt="Ashutosh Building" className="loader-logo" />
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
        <span className="loader-text">Crafting Premium Spaces</span>
        <div className="loader-counter" id="loader-counter">0%</div>
      </div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="brand">
        <div className="brand-badge">
          <img src="/assets/logo.png" alt="Ashutosh Building" />
        </div>
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact" className="nav-cta">Book a Tour</NavLink>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-badge footer-badge">
            <img src="/assets/logo.png" alt="Ashutosh Building" />
          </div>
          <p>Transforming architectural visions into immersive premium experiences. Where luxury meets innovation.</p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#">VR Showcase Design</a>
          <a href="#">360° Video Production</a>
          <a href="#">Live Guided Tours</a>
          <a href="#">Luxury Presentations</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="#">info@ashutoshbuilding.com</a>
          <a href="#">+91 98765 43210</a>
          <a href="#">Mumbai, India</a>
          <Link to="/contact">Get in Touch →</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Ashutosh Building. All rights reserved.</span>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">LI</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  useEffect(() => {
    let count = 0;
    const el = document.getElementById('loader-counter');
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 4;
      if (count >= 100) { count = 100; clearInterval(interval); }
      if (el) el.textContent = count + '%';
    }, 120);
    const t = setTimeout(() => setLoaderDone(true), 2600);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <>
      <Loader done={loaderDone} />
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
