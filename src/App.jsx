import React from 'react'
import logo from './assets/logo.png'

function App() {
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
            <li><a href="#home" className="nav-link">Accueil</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#formations" className="nav-link">Formations IA</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <button className="btn-primary">Parlons de votre projet</button>
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
            <button className="glass-card" style={{ padding: '0.8rem 2rem', borderRadius: '50px', border: '1px solid var(--glass-border)' }}>
              Voir nos formations
            </button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="section about">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
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
            <div className="glass-card" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, var(--glass-bg), hsla(25, 100%, 55%, 0.1))' }}>
              <img src={logo} alt="Branding" style={{ width: '60%', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Nos <span className="text-gradient">Services</span> Expertise</h2>
            <p style={{ color: 'var(--text-muted)' }}>Des solutions sur mesure pour votre transformation digitale.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌐</div>
              <h3>Web Professionnel</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Sites vitrines, E-commerce et Blogs optimisés pour le SEO et la performance.
              </p>
            </div>
            <div className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3>Apps Web & IA</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Développement d'applications intelligentes (Gestion, Réservation, Streaming).
              </p>
            </div>
            <div className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3>Automatisation</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                Mise en place de Chatbots et d'automatisation marketing boostés par l'IA.
              </p>
            </div>
            <div className="glass-card">
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
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Notre <span className="text-gradient">Portfolio</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Découvrez quelques-uns de nos projets récents.</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item animate-fade">
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
            <div className="portfolio-item animate-fade" style={{ animationDelay: '0.2s' }}>
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
            <div className="portfolio-item animate-fade" style={{ animationDelay: '0.4s' }}>
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
      <section id="formations" className="section cta">
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '5rem', background: 'var(--gradient-brand)', color: 'white' }}>
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
      <footer id="contact" className="section footer" style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
            <div>
              <div className="logo-wrapper" style={{ marginBottom: '1.5rem' }}>
                <img src={logo} alt="223 TECH Logo" className="logo-icon" />
                <span>223 <span className="text-gradient">TECH</span></span>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                Votre partenaire technologique au Mali pour l'ère de l'intelligence artificielle.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#formations">Formations</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.5rem' }}>Contact</h4>
              <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>contact@223tech.com</li>
                <li>Bamako, Mali</li>
                <li>+223 XX XX XX XX</li>
              </ul>
            </div>
            <div>
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
    </div>
  )
}

export default App
