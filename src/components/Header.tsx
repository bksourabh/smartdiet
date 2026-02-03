import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'guidelines', label: 'Guidelines', href: '#guidelines' },
    { id: 'diet-plans', label: 'Diet Plans', href: '#diet-plans' },
    { id: 'grocery', label: 'Grocery List', href: '#grocery' },
    { id: 'meal-prep', label: 'Meal Prep', href: '#meal-prep' },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" onClick={() => handleNavClick('home')}>
          <Leaf className="logo-icon" />
          <span className="logo-text">SmartDiet</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
