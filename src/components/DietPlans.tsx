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
  Scale,
  TrendingDown,
  TrendingUp,
  Minus,
  Phone
} from 'lucide-react'
import dietData from '../data/dietData.json'

const mealOrder = ['breakfast', 'lunch', 'tea', 'dinner'] as const
type MealType = (typeof mealOrder)[number]

const mealIcons: Record<MealType, React.ReactNode> = {
  breakfast: <Coffee size={18} />,
  lunch: <Sun size={18} />,
  tea: <Sunset size={18} />,
  dinner: <Moon size={18} />,
}

const formatWeekOf = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

const progressIcon = (progress: string) => {
  const p = progress.toLowerCase()
  if (p.startsWith('gain')) return <TrendingUp size={14} />
  if (p.startsWith('no')) return <Minus size={14} />
  return <TrendingDown size={14} />
}

const DietPlans = () => {
  const { weeklyDietPlans } = dietData
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)

  const currentPlan = weeklyDietPlans[selectedPlanIndex]
  const currentDay = currentPlan.days[selectedDayIndex]

  // Charts often start or end mid-week, so a day may list only some meals.
  const dayMeals = mealOrder.flatMap((mealType) => {
    const meal = currentDay.meals[mealType]
    return meal ? [{ mealType, meal }] : []
  })

  const totalCalories = dayMeals.reduce((sum, { meal }) => sum + (meal.calories || 0), 0)

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
              {currentPlan.weekOf && (
                <span className="plan-tag">
                  <Calendar size={14} />
                  Week of {formatWeekOf(currentPlan.weekOf)}
                </span>
              )}
              {currentPlan.weight && (
                <span className="plan-tag">
                  <Scale size={14} />
                  Weigh-in: {currentPlan.weight}
                </span>
              )}
              {currentPlan.progress && (
                <span className="plan-tag loss">
                  {progressIcon(currentPlan.progress)}
                  {currentPlan.progress}
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
            {dayMeals.map(({ mealType, meal }) => (
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
