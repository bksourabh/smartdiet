import { useState } from 'react'
import {
  ShoppingCart,
  Check,
  Egg,
  Milk,
  Wheat,
  Bean,
  Salad,
  Apple,
  Nut,
  Droplet,
  Package,
  ChevronDown
} from 'lucide-react'
import dietData from '../data/dietData.json'

const categoryIcons: { [key: string]: React.ReactNode } = {
  proteins: <Egg size={20} />,
  dairy: <Milk size={20} />,
  grains: <Wheat size={20} />,
  legumes: <Bean size={20} />,
  vegetables: <Salad size={20} />,
  fruits: <Apple size={20} />,
  nuts_seeds: <Nut size={20} />,
  condiments: <Droplet size={20} />,
  others: <Package size={20} />,
}

const categoryNames: { [key: string]: string } = {
  proteins: 'Proteins',
  dairy: 'Dairy',
  grains: 'Grains & Cereals',
  legumes: 'Legumes',
  vegetables: 'Vegetables',
  fruits: 'Fruits',
  nuts_seeds: 'Nuts & Seeds',
  condiments: 'Condiments & Spices',
  others: 'Others',
}

const GroceryList = () => {
  const { groceryList } = dietData
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(Object.keys(groceryList))
  )

  const toggleItem = (itemName: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(itemName)) {
      newChecked.delete(itemName)
    } else {
      newChecked.add(itemName)
    }
    setCheckedItems(newChecked)
  }

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const totalItems = Object.values(groceryList).flat().length
  const checkedCount = checkedItems.size
  const progress = (checkedCount / totalItems) * 100

  return (
    <section id="grocery" className="grocery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Shopping List</span>
          <h2 className="section-title">Weekly Groceries</h2>
          <p className="section-subtitle">
            Everything you need to prepare your weekly diet meals
          </p>
        </div>

        <div className="grocery-progress">
          <div className="progress-header">
            <ShoppingCart size={20} />
            <span>Shopping Progress</span>
            <span className="progress-count">{checkedCount} / {totalItems} items</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grocery-grid">
          {Object.entries(groceryList).map(([category, items]) => (
            <div key={category} className="grocery-category">
              <button
                className="category-header"
                onClick={() => toggleCategory(category)}
              >
                <div className="category-info">
                  <span className="category-icon">{categoryIcons[category]}</span>
                  <span className="category-name">{categoryNames[category]}</span>
                  <span className="category-count">{items.length} items</span>
                </div>
                <ChevronDown
                  className={`category-chevron ${expandedCategories.has(category) ? 'expanded' : ''}`}
                  size={20}
                />
              </button>

              {expandedCategories.has(category) && (
                <div className="category-items">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className={`grocery-item ${checkedItems.has(item.name) ? 'checked' : ''}`}
                      onClick={() => toggleItem(item.name)}
                    >
                      <div className="item-checkbox">
                        {checkedItems.has(item.name) && <Check size={14} />}
                      </div>
                      <div className="item-details">
                        <span className="item-name">{item.name}</span>
                        <span className="item-quantity">{item.quantity}</span>
                        {item.notes && (
                          <span className="item-notes">{item.notes}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grocery-actions">
          <button
            className="btn btn-secondary"
            onClick={() => setCheckedItems(new Set())}
          >
            Reset List
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              const allItems = Object.values(groceryList).flat().map(i => i.name)
              setCheckedItems(new Set(allItems))
            }}
          >
            Mark All Complete
          </button>
        </div>
      </div>
    </section>
  )
}

export default GroceryList
