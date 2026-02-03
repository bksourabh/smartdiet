# SmartDiet - Personalized Weekly Diet Plans

A professional, responsive diet planning website built with React and TypeScript. Features customized weekly meal plans, interactive grocery lists, and comprehensive meal prep tips.

## Features

- **5 Weekly Diet Plans** - Carefully curated meal plans for different weight loss goals
- **Interactive Grocery List** - Checkable shopping list with progress tracking
- **Meal Prep Tips** - Comprehensive guides for efficient meal preparation
- **Diet Guidelines** - Essential rules and morning routine recommendations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface with smooth animations

## Diet Plans Included

1. **Weight Loss Plan - Phase 1** (Target: 61 kg, Expected loss: 1 kg/week)
2. **Balanced Nutrition Plan** (Maintenance)
3. **65 KG Target Plan**
4. **Steady Loss Plan** (Target: 63.2 kg, Expected loss: 700 gms/week)
5. **Maintenance Plan** (Target: 58.2 kg)

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
├── dietrawdata/          # Original diet chart images
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

## License

This project is for personal use. Diet plans are customized recommendations - please consult a healthcare professional before starting any new diet program.

---

Made with care for a healthier you.
