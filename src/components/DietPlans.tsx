import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Coffee,
  Sun,
  Sunset,
  Moon,
  Flame,
  Target,
  Phone
} from 'lucide-react'
import dietData from '../data/dietData.json'

const mealIcons: { [key: string]: React.ReactNode } = {
  breakfast: <Coffee size={18} />,
  lunch: <Sun size={18} />,
  tea: <Sunset size={18} />,
  dinner: <Moon size={18} />,
}

const DietPlans = () => {
  const { weeklyDietPlans } = dietData
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)

  const currentPlan = weeklyDietPlans[selectedPlanIndex]
  const currentDay = currentPlan.days[selectedDayIndex]

  const totalCalories = Object.values(currentDay.meals).reduce(
    (sum, meal) => sum + (meal.calories || 0),
    0
  )

  const handlePrevPlan = () => {
    setSelectedPlanIndex((prev) =>
      prev === 0 ? weeklyDietPlans.length - 1 : prev - 1
    )
    setSelectedDayIndex(0)
  }

  const handleNextPlan = () => {
    setSelectedPlanIndex((prev) =>
      prev === weeklyDietPlans.length - 1 ? 0 : prev + 1
    )
    setSelectedDayIndex(0)
  }

  return (
    <section id="diet-plans" className="diet-plans-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Weekly Schedules</span>
          <h2 className="section-title">Diet Plans</h2>
          <p className="section-subtitle">
            Choose from our carefully crafted diet plans tailored for different goals
          </p>
        </div>

        <div className="plan-selector">
          <button className="plan-nav-btn" onClick={handlePrevPlan}>
            <ChevronLeft size={24} />
          </button>

          <div className="plan-info">
            <h3 className="plan-name">{currentPlan.name}</h3>
            <div className="plan-meta">
              {currentPlan.targetWeight && (
                <span className="plan-tag">
                  <Target size={14} />
                  Target: {currentPlan.targetWeight}
                </span>
              )}
              {currentPlan.expectedLoss && (
                <span className="plan-tag loss">
                  <Flame size={14} />
                  {currentPlan.expectedLoss}
                </span>
              )}
              {currentPlan.recipeContact && (
                <span className="plan-tag contact">
                  <Phone size={14} />
                  {currentPlan.recipeContact}
                </span>
              )}
            </div>
          </div>

          <button className="plan-nav-btn" onClick={handleNextPlan}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="plan-indicators">
          {weeklyDietPlans.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === selectedPlanIndex ? 'active' : ''}`}
              onClick={() => {
                setSelectedPlanIndex(index)
                setSelectedDayIndex(0)
              }}
            />
          ))}
        </div>

        <div className="day-selector">
          {currentPlan.days.map((day, index) => (
            <button
              key={day.day}
              className={`day-btn ${index === selectedDayIndex ? 'active' : ''}`}
              onClick={() => setSelectedDayIndex(index)}
            >
              <Calendar size={16} />
              <span>{day.day.substring(0, 3)}</span>
            </button>
          ))}
        </div>

        <div className="diet-card">
          <div className="diet-card-header">
            <h4>{currentDay.day}</h4>
            <div className="calorie-badge">
              <Flame size={18} />
              <span>{totalCalories} kcal</span>
            </div>
          </div>

          <div className="meals-grid">
            {Object.entries(currentDay.meals).map(([mealType, meal]) => (
              <div key={mealType} className={`meal-card ${mealType}`}>
                <div className="meal-header">
                  <div className="meal-icon">{mealIcons[mealType]}</div>
                  <div className="meal-info">
                    <h5 className="meal-type">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h5>
                    <span className="meal-time">{meal.time}</span>
                  </div>
                  <span className="meal-calories">{meal.calories} kcal</span>
                </div>
                <ul className="meal-items">
                  {meal.items.map((item, index) => (
                    <li key={index} className="meal-item">
                      <span className="item-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {currentPlan.specialNotes && (
          <div className="special-notes">
            <span className="notes-label">Note:</span>
            {currentPlan.specialNotes}
          </div>
        )}
      </div>
    </section>
  )
}

export default DietPlans
