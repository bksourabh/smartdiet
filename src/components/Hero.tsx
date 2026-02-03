import { ChevronDown, Target, TrendingDown, Apple } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <Apple size={16} />
          <span>Personalized Nutrition</span>
        </div>
        <h1 className="hero-title">
          Your Journey to a<br />
          <span className="gradient-text">Healthier You</span>
        </h1>
        <p className="hero-subtitle">
          Customized weekly diet plans designed for sustainable weight loss
          and optimal nutrition. Start your transformation today.
        </p>
        <div className="hero-stats">
          <div className="stat-card">
            <Target className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">5</span>
              <span className="stat-label">Diet Plans</span>
            </div>
          </div>
          <div className="stat-card">
            <TrendingDown className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">1kg</span>
              <span className="stat-label">Weekly Loss</span>
            </div>
          </div>
          <div className="stat-card">
            <Apple className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">50+</span>
              <span className="stat-label">Ingredients</span>
            </div>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#diet-plans" className="btn btn-primary">
            View Diet Plans
          </a>
          <a href="#guidelines" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
      <a href="#guidelines" className="scroll-indicator">
        <ChevronDown className="scroll-icon" />
      </a>
    </section>
  )
}

export default Hero
