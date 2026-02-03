import {
  Calendar,
  Drumstick,
  Salad,
  Cookie,
  Sunrise,
  Package,
  Lightbulb,
  ChefHat
} from 'lucide-react'
import dietData from '../data/dietData.json'

const iconMap: { [key: string]: React.ReactNode } = {
  calendar: <Calendar size={28} />,
  drumstick: <Drumstick size={28} />,
  salad: <Salad size={28} />,
  snack: <Cookie size={28} />,
  sunrise: <Sunrise size={28} />,
  box: <Package size={28} />,
}

const MealPrepTips = () => {
  const { mealPrepTips } = dietData

  return (
    <section id="meal-prep" className="meal-prep-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Preparation Guide</span>
          <h2 className="section-title">Meal Prep Tips</h2>
          <p className="section-subtitle">
            Save time and stay on track with these meal preparation strategies
          </p>
        </div>

        <div className="tips-intro">
          <ChefHat size={40} />
          <div className="intro-content">
            <h3>Why Meal Prep Matters</h3>
            <p>
              Successful dieting starts with preparation. By dedicating a few hours
              each week to meal prep, you ensure healthy options are always available,
              reduce decision fatigue, and stay consistent with your nutrition goals.
            </p>
          </div>
        </div>

        <div className="tips-grid">
          {mealPrepTips.map((tip, index) => (
            <div key={index} className="tip-card">
              <div className="tip-header">
                <div className="tip-icon">
                  {iconMap[tip.icon] || <Lightbulb size={28} />}
                </div>
                <div className="tip-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <h3 className="tip-title">{tip.title}</h3>
              <p className="tip-description">{tip.description}</p>
              <ul className="tip-list">
                {tip.tips.map((item, i) => (
                  <li key={i} className="tip-item">
                    <span className="tip-bullet"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="prep-reminder">
          <Lightbulb size={24} />
          <div className="reminder-content">
            <h4>Pro Tip</h4>
            <p>
              Start small! If meal prepping for the entire week feels overwhelming,
              begin by preparing just 2-3 days at a time. As you build the habit,
              gradually extend your prep to cover the full week.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MealPrepTips
