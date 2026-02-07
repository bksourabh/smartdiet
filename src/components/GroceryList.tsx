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
  ChevronDown,
  FileDown,
  Share2,
  StickyNote
} from 'lucide-react'
import { jsPDF } from 'jspdf'
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
  const [isExporting, setIsExporting] = useState(false)

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

  // Generate plain text grocery list
  const generateGroceryText = () => {
    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    let text = `SmartDiet - Weekly Grocery List\n`
    text += `Generated: ${date}\n`
    text += `${'='.repeat(40)}\n\n`

    Object.entries(groceryList).forEach(([category, items]) => {
      text += `${categoryNames[category].toUpperCase()}\n`
      text += `${'-'.repeat(30)}\n`
      items.forEach((item) => {
        const checkbox = checkedItems.has(item.name) ? '[x]' : '[ ]'
        text += `${checkbox} ${item.name}\n`
        text += `    Qty: ${item.quantity}\n`
        if (item.notes) {
          text += `    Note: ${item.notes}\n`
        }
      })
      text += '\n'
    })

    text += `${'='.repeat(40)}\n`
    text += `Total Items: ${totalItems}\n`
    text += `Completed: ${checkedCount}/${totalItems}\n`

    return text
  }

  // Export to PDF
  const exportToPDF = () => {
    setIsExporting(true)

    try {
      const doc = new jsPDF()
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const margin = 20
      let yPosition = margin

      // Helper function to add new page if needed
      const checkPageBreak = (height: number) => {
        if (yPosition + height > pageHeight - margin) {
          doc.addPage()
          yPosition = margin
          return true
        }
        return false
      }

      // Title
      doc.setFillColor(16, 185, 129)
      doc.rect(0, 0, pageWidth, 40, 'F')

      doc.setTextColor(255, 255, 255)
      doc.setFontSize(24)
      doc.setFont('helvetica', 'bold')
      doc.text('SmartDiet', margin, 25)

      doc.setFontSize(12)
      doc.setFont('helvetica', 'normal')
      doc.text('Weekly Grocery List', margin, 35)

      // Date
      const date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      doc.setFontSize(10)
      doc.text(date, pageWidth - margin - doc.getTextWidth(date), 35)

      yPosition = 55

      // Progress summary
      doc.setTextColor(100, 100, 100)
      doc.setFontSize(11)
      doc.text(`Progress: ${checkedCount} of ${totalItems} items (${Math.round(progress)}%)`, margin, yPosition)
      yPosition += 15

      // Categories and items
      Object.entries(groceryList).forEach(([category, items]) => {
        checkPageBreak(25)

        // Category header
        doc.setFillColor(241, 245, 249)
        doc.roundedRect(margin - 5, yPosition - 5, pageWidth - 2 * margin + 10, 12, 2, 2, 'F')

        doc.setTextColor(30, 41, 59)
        doc.setFontSize(12)
        doc.setFont('helvetica', 'bold')
        doc.text(categoryNames[category], margin, yPosition + 3)

        doc.setFontSize(9)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(100, 116, 139)
        const itemCount = `${items.length} items`
        doc.text(itemCount, pageWidth - margin - doc.getTextWidth(itemCount), yPosition + 3)

        yPosition += 15

        // Items
        items.forEach((item) => {
          checkPageBreak(18)

          const isChecked = checkedItems.has(item.name)

          // Checkbox
          doc.setDrawColor(203, 213, 225)
          doc.setLineWidth(0.5)
          doc.roundedRect(margin, yPosition - 3, 4, 4, 0.5, 0.5, 'S')

          if (isChecked) {
            doc.setFillColor(16, 185, 129)
            doc.roundedRect(margin, yPosition - 3, 4, 4, 0.5, 0.5, 'F')
            doc.setTextColor(255, 255, 255)
            doc.setFontSize(8)
            doc.text('✓', margin + 0.8, yPosition + 0.5)
          }

          // Item name
          doc.setFontSize(10)
          doc.setFont('helvetica', isChecked ? 'normal' : 'bold')
          doc.setTextColor(isChecked ? 148 : 30, isChecked ? 163 : 41, isChecked ? 184 : 59)
          doc.text(item.name, margin + 8, yPosition)

          // Quantity
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(16, 185, 129)
          doc.setFontSize(9)
          doc.text(item.quantity, margin + 8, yPosition + 5)

          // Notes (if any)
          if (item.notes) {
            doc.setTextColor(148, 163, 184)
            doc.setFontSize(8)
            doc.setFont('helvetica', 'italic')
            const noteText = item.notes.length > 60 ? item.notes.substring(0, 57) + '...' : item.notes
            doc.text(noteText, margin + 8, yPosition + 10)
            yPosition += 5
          }

          yPosition += 12
        })

        yPosition += 5
      })

      // Footer
      checkPageBreak(20)
      yPosition = pageHeight - 15
      doc.setDrawColor(226, 232, 240)
      doc.setLineWidth(0.5)
      doc.line(margin, yPosition - 5, pageWidth - margin, yPosition - 5)

      doc.setTextColor(148, 163, 184)
      doc.setFontSize(8)
      doc.setFont('helvetica', 'normal')
      doc.text('Generated by SmartDiet - Your Personalized Nutrition Companion', margin, yPosition)

      // Save the PDF
      doc.save('SmartDiet-Grocery-List.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  // Share to iOS Notes / Native Share
  const shareToNotes = async () => {
    const text = generateGroceryText()

    // Check if Web Share API is available (works on iOS Safari)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SmartDiet Grocery List',
          text: text,
        })
      } catch (error) {
        // User cancelled or share failed
        if ((error as Error).name !== 'AbortError') {
          console.error('Share failed:', error)
          fallbackCopyToClipboard(text)
        }
      }
    } else {
      // Fallback for browsers without Web Share API
      fallbackCopyToClipboard(text)
    }
  }

  // Fallback: Copy to clipboard
  const fallbackCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Grocery list copied to clipboard! You can now paste it into Notes or any other app.')
    } catch (error) {
      console.error('Clipboard write failed:', error)
      // Final fallback: show text in a prompt
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand('copy')
        alert('Grocery list copied to clipboard!')
      } catch {
        alert('Could not copy to clipboard. Please try again.')
      }
      document.body.removeChild(textArea)
    }
  }

  // Check if device supports native share (likely iOS/mobile)
  const supportsNativeShare = typeof navigator.share === 'function'

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

        {/* Export Actions */}
        <div className="export-actions">
          <button
            className="btn btn-export"
            onClick={exportToPDF}
            disabled={isExporting}
          >
            <FileDown size={18} />
            {isExporting ? 'Generating...' : 'Export PDF'}
          </button>
          <button
            className="btn btn-export btn-notes"
            onClick={shareToNotes}
          >
            {supportsNativeShare ? (
              <>
                <Share2 size={18} />
                Share / Add to Notes
              </>
            ) : (
              <>
                <StickyNote size={18} />
                Copy to Clipboard
              </>
            )}
          </button>
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
