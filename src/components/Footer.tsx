import { Leaf, Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <Leaf className="logo-icon" />
              <span>SmartDiet</span>
            </a>
            <p className="footer-description">
              Your personalized nutrition companion for a healthier lifestyle.
              Achieve your weight goals with our curated diet plans.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#guidelines">Guidelines</a></li>
              <li><a href="#diet-plans">Diet Plans</a></li>
              <li><a href="#grocery">Grocery List</a></li>
              <li><a href="#meal-prep">Meal Prep Tips</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Recipe Contact</h4>
            <ul>
              <li>
                <Phone size={16} />
                <span>Ashu: 9818059235</span>
              </li>
              <li>
                <Phone size={16} />
                <span>Ashu: 9654059235</span>
              </li>
              <li>
                <Mail size={16} />
                <span>recipes@smartdiet.com</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          <div className="footer-disclaimer">
            <h4>Disclaimer</h4>
            <p>
              These diet plans are personalized recommendations. Please consult
              a healthcare professional before starting any new diet program.
              Individual results may vary.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} SmartDiet. Made with <Heart size={14} className="heart-icon" /> for a healthier you.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
