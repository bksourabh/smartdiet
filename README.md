# SmartDiet - Personalized Weekly Diet Plans

A professional, responsive diet planning website built with React and TypeScript. Features customized weekly meal plans, interactive grocery lists, and comprehensive meal prep tips.

## Features

- **14 Weekly Diet Plans** - Every weekly chart from June to August 2025, in date order
- **Interactive Grocery List** - Checkable shopping list with progress tracking
- **Meal Prep Tips** - Comprehensive guides for efficient meal preparation
- **Diet Guidelines** - Essential rules and morning routine recommendations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface with smooth animations

## Diet Plans Included

Transcribed from the dated charts in `dietrawdata/` (filename `PHOTO-<date>.JPG`). Days with blank cells on the chart list only the meals shown; calorie figures are rough estimates, not from the charts.

1. **Rice, Quinoa & Chicken** - week of 2025-06-24 (weigh-in 65 kg)
2. **Avocado Toast & Grilled Chicken** - week of 2025-06-27
3. **Egg & Cottage Cheese Breakfasts** - week of 2025-07-01 (weigh-in 64.2 kg, Gained 200 gms)
4. **Boiled Eggs & Chicken Salad** - week of 2025-07-04 (weigh-in 63.9 kg, Lost 500 gms)
5. **Rice, Rajma & Dal** - week of 2025-07-08 (weigh-in 63.2 kg, Lost 700 gms)
6. **Greek Yogurt & Muesli** - week of 2025-07-11
7. **Egg Whites & Rajma** - week of 2025-07-18 (weigh-in 63 kg, No loss)
8. **Cottage Cheese & Edamame** - week of 2025-07-22
9. **Quinoa Salads & Smoothies** - week of 2025-07-29 (weigh-in 62 kg)
10. **Egg Whites & Bone Broth** - week of 2025-08-05 (weigh-in 61 kg, Lost 1 kg)
11. **Chicken Salad & Egg Whites** - week of 2025-08-08
12. **Rice, Chicken & Soup** - week of 2025-08-16 (weigh-in 58.1 kg, Loss)
13. **Chicken & Mushrooms** - week of 2025-08-19 (weigh-in 58.2 kg)
14. **Chicken Breast & Quinoa** - week of 2025-08-22

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons
- **CSS3** - Modern styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/smartdiet.git

# Navigate to the project
cd smartdiet

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages deployment. Push to the `main` branch to trigger automatic deployment.

### Manual Deployment

1. Build the project: `npm run build`
2. The `dist` folder contains the static files
3. Deploy to any static hosting service

## Project Structure

```
smartdiet/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Guidelines.tsx
│   │   ├── DietPlans.tsx
│   │   ├── GroceryList.tsx
│   │   ├── MealPrepTips.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── dietData.json
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── dietrawdata/          # Original diet chart images (one dated JPG per week)
├── .github/workflows/    # GitHub Actions for deployment
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Diet Data

All diet information is stored in `src/data/dietData.json` including:
- Weekly diet plans with meals and calorie counts
- Abbreviations legend
- General guidelines
- Morning routine
- Complete grocery list with quantities
- Meal prep tips

## Contact for Recipes

- **Ashu**: 9818059235 / 9654059235
- **Geetali**: 9818059235 (weeks 8 and 12)

## License

This project is for personal use. Diet plans are customized recommendations - please consult a healthcare professional before starting any new diet program.

---

Made with care for a healthier you.
