import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import DietPlans from './components/DietPlans'
import GroceryList from './components/GroceryList'
import MealPrepTips from './components/MealPrepTips'
import Guidelines from './components/Guidelines'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState<string>('home')

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Guidelines />
        <DietPlans />
        <GroceryList />
        <MealPrepTips />
      </main>
      <Footer />
    </div>
  )
}

export default App
