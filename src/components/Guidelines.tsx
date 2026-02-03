import {
  Apple,
  Salad,
  Footprints,
  Droplets,
  Clock,
  Ban,
  Utensils,
  Cookie
} from 'lucide-react'
import dietData from '../data/dietData.json'

const iconMap: { [key: string]: React.ReactNode } = {
  'Eat 2 fruits per day': <Apple size={24} />,
  'Have salad and fresh lime soda before lunch and dinner': <Salad size={24} />,
  'Eat with a teaspoon or fork (mindful eating)': <Utensils size={24} />,
  'No second helping': <Ban size={24} />,
  'No salt after dinner': <Ban size={24} />,
  'Walk 10,000 steps daily': <Footprints size={24} />,
  'Drink 4-6 glasses of water daily': <Droplets size={24} />,
  'No sugar': <Ban size={24} />,
  'Post 7 PM: Papaya + 2 pieces dark chocolate (72% Lindt preferred)': <Cookie size={24} />,
}

const Guidelines = () => {
  const { generalGuidelines, morningRoutine, abbreviations } = dietData

  return (
    <section id="guidelines" className="guidelines-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Essential Rules</span>
          <h2 className="section-title">Diet Guidelines</h2>
          <p className="section-subtitle">
            Follow these guidelines consistently for the best results
          </p>
        </div>

        <div className="guidelines-grid">
          <div className="guidelines-card morning-routine">
            <div className="card-header">
              <Clock className="card-icon" />
              <h3>Morning Routine</h3>
            </div>
            <p className="card-description">{morningRoutine.description}</p>
            <ul className="morning-items">
              {morningRoutine.items.map((item, index) => (
                <li key={index} className="morning-item">
                  <span className="item-bullet"></span>
                  {item}
                </li>
              ))}
            </ul>
            {morningRoutine.optional && (
              <div className="optional-items">
                <span className="optional-label">Optional:</span>
                {morningRoutine.optional.join(', ')}
              </div>
            )}
          </div>

          <div className="guidelines-list-card">
            <h3>Daily Guidelines</h3>
            <div className="guidelines-list">
              {generalGuidelines.map((guideline, index) => (
                <div key={index} className="guideline-item">
                  <div className="guideline-icon">
                    {iconMap[guideline] || <Apple size={24} />}
                  </div>
                  <span className="guideline-text">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="abbreviations-card">
          <h3>Quick Reference</h3>
          <p className="abbreviations-subtitle">Understanding the abbreviations used in diet plans</p>
          <div className="abbreviations-grid">
            {Object.entries(abbreviations).map(([abbr, full]) => (
              <div key={abbr} className="abbreviation-item">
                <span className="abbr-code">{abbr}</span>
                <span className="abbr-meaning">{full}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guidelines
