import React, { useState, useEffect } from 'react'
import logo from './assets/logo.png'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Reveal Animations Logic
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Active Section Tracking (for Nav)
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('header, section');
    sections.forEach(sec => sectionObserver.observe(sec));

    // 3. Back to Top Visibility
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo-wrapper">
            <img src={logo} alt="223 TECH Logo" className="logo-icon" />
            <span>223 <span className="text-gradient">TECH</span></span>
          </div>
          <ul className="nav-links">
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Accueil</a></li>
            <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a></li>
            <li><a href="#formations" className={`nav-link ${activeSection === 'formations' ? 'active' : ''}`}>Formations IA</a></li>
            <li><a href="#portfolio" className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
          </ul>
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Parlons de votre projet
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="section hero">
        <div className="container animate-fade" style={{ textAlign: 'center', paddingTop: '4rem' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>
            L'Innovation Digitale <br />
            propulsée par <span className="text-gradient">l'IA au Mali</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            Devenir une référence en Afrique dans la création de solutions digitales basées sur l'Intelligence Artificielle. Nous aidons les entreprises à se transformer et à gagner du temps.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary">Découvrir nos solutions</button>
            <button className="btn-secondary">
              Voir nos formations
            </button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="section about reveal">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Notre <span className="text-gradient">Mission</span></h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                Chez 223 TECH, nous croyons que le futur de l'entreprise est lié à sa capacité d'adopter les outils de demain.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '8px', background: 'var(--glass-bg)', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</div>
                  Aider les entreprises à créer des outils modernes.
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '8px', background: 'var(--glass-bg)', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</div>
                  Optimiser les workflows grâce à l’IA.
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '8px', background: 'var(--glass-bg)', borderRadius: '50%', color: 'var(--color-primary)' }}>✓</div>
                  Former la nouvelle génération de talents.
                </li>
              </ul>
            </div>
            <div className="glass-card reveal" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, var(--glass-bg), hsla(25, 100%, 55%, 0.1))', transitionDelay: '0.4s' }}>
              <img src={logo} alt="Branding" style={{ width: '60%', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services reveal" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
            <h2 style={{ fontSize: '3rem' }}>Nos <span className="text-gradient">Services</span> Expertise</h2>
            <p style={{ color: 'var(--text-muted)' }}>Des solutions sur mesure pour votre transformation digitale.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
              <h3>Web Professionnel</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Sites vitrines, E-commerce et Blogs optimisés pour le SEO et la performance.
              </p>
            </div>
            <div className="glass-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3>Apps Web & IA</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Développement d'applications intelligentes (Gestion, Réservation, Streaming).
              </p>
            </div>
            <div className="glass-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3>Automatisation</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Mise en place de Chatbots et d'automatisation marketing boostés par l'IA.
              </p>
            </div>
            <div className="glass-card reveal" style={{ transitionDelay: '0.4s' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
              <h3>Formations IA</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Apprenez à maîtriser ChatGPT, la création de contenu et les images par IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio reveal">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="reveal">
            <h2 style={{ fontSize: '3rem' }}>Notre <span className="text-gradient">Portfolio</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Découvrez quelques-uns de nos projets récents.</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item reveal" style={{ transitionDelay: '0.1s' }}>
              <div 
                style={{ 
                  width: '100%', height: '100%', 
                  background: 'linear-gradient(45deg, #FF5722, #9C27B0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem'
                }}
              >
                🛒
              </div>
              <div className="portfolio-overlay">
                <h3>Sama Market</h3>
                <p>E-commerce Intelligent pour artisans locaux.</p>
              </div>
            </div>
            <div className="portfolio-item reveal" style={{ transitionDelay: '0.2s' }}>
              <div 
                style={{ 
                  width: '100%', height: '100%', 
                  background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem'
                }}
              >
                🏥
              </div>
              <div className="portfolio-overlay">
                <h3>Mali Santé</h3>
                <p>Plateforme de prise de rendez-vous médicaux.</p>
              </div>
            </div>
            <div className="portfolio-item reveal" style={{ transitionDelay: '0.3s' }}>
              <div 
                style={{ 
                  width: '100%', height: '100%', 
                  background: 'linear-gradient(45deg, #4CAF50, #8BC34A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem'
                }}
              >
                📊
              </div>
              <div className="portfolio-overlay">
                <h3>IA Dash</h3>
                <p>Outil d'automatisation de reporting par IA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training / CTA Section */}
      <section id="formations" className="section cta reveal">
        <div className="container">
          <div className="glass-card reveal" style={{ textAlign: 'center', padding: '5rem', background: 'var(--gradient-brand)', color: 'white' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Prêt à passer au niveau supérieur ?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
              Rejoignez nos sessions de formation et maîtrisez les outils qui redéfinissent le monde.
            </p>
            <button style={{ background: 'white', color: 'var(--color-secondary)', padding: '1rem 3rem', borderRadius: '50px', fontWeight: '800', fontSize: '1.1rem' }}>
              Voir le programme
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="section footer reveal" style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            <div className="reveal">
              <div className="logo-wrapper" style={{ marginBottom: '1.5rem' }}>
                <img src={logo} alt="223 TECH Logo" className="logo-icon" />
                <span>223 <span className="text-gradient">TECH</span></span>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                Votre partenaire technologique au Mali pour l'ère de l'intelligence artificielle.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.1s' }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#formations">Formations</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Contact</h4>
              <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="mailto:223techmali@gmail.com" style={{ color: 'inherit' }}>223techmali@gmail.com</a></li>
                <li>Bamako, Mali</li>
                <li><a href="tel:+22369565497" style={{ color: 'inherit' }}>+223 69 56 54 97</a></li>
                <li><a href="https://wa.me/22369565497" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', fontWeight: 'bold' }}>WhatsApp Direct →</a></li>
              </ul>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.3s' }}>
              <h4 style={{ marginBottom: '1.5rem' }}>Suivez-nous</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="glass-card" style={{ padding: '10px', borderRadius: '50%' }}>In</div>
                <div className="glass-card" style={{ padding: '10px', borderRadius: '50%' }}>X</div>
                <div className="glass-card" style={{ padding: '10px', borderRadius: '50%' }}>Fb</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} 223 TECH. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div className={`back-to-top ${showBackToTop ? 'visible' : ''}`} onClick={scrollToTop}>
        ↑
      </div>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/22369565497" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Discutez avec nous sur WhatsApp"
      >
        💬
      </a>
    </div>
  )
}

export default App
