# Theme System Documentation

## Overview
The portfolio now features a beautiful light/dark theme toggle system with smooth animations and stunning visual effects.

## Features

### 🎨 Theme Toggle Button
- **Location**: Fixed top-right corner (top-8, right-8)
- **Animation**: Smooth rotation and scale effects
- **Icons**: Animated sun (light mode) and moon (dark mode)
- **Interaction**: Hover scale, tap feedback

### 🌈 Color Schemes

#### Light Theme (Professional Blue & Green)
- Background: Gradient from blue-50 via white to green-50
- Primary gradient: Blue → Indigo → Blue (`from-blue-600 via-indigo-600 to-blue-700`)
- Secondary gradient: Emerald → Green → Teal (used in hover states)
- Form container: Gradient background with blue and green tints
- Form inputs: Pure white with colorful borders (blue, indigo, emerald)
- Focus states: Colored shadows matching each input (blue, indigo, emerald)
- Service buttons: Blue borders, blue→indigo→emerald gradient on selection
- Decorative dots: Blue, indigo, and emerald gradient
- Text: Black for maximum readability and contrast
- Labels: Bold black text
- Paragraph text: Black with semibold weight
- Footer links: Each link has unique hover color (blue, indigo, emerald, green)

#### Dark Theme (Modern & Eye-Friendly)
- Background: Gradient from slate-900 via slate-800 to slate-900
- Primary gradient: Cyan → Blue → Purple (`from-cyan-400 via-blue-400 to-purple-500`)
- Form container: Gradient slate background with cyan border glow
- Form inputs: Slate-700 with semi-transparency
- Focus states: Colorful glowing shadows (cyan, blue, purple)
- Service buttons: Slate borders, cyan→blue→purple gradient on selection
- Decorative dots: Cyan, blue, and purple gradient
- Text: Light gray/white for excellent readability
- Labels: Colorful accents (cyan, blue, pink, purple)
- Footer links: Each link has unique hover color (cyan, blue, purple, pink)

### ✨ Visual Enhancements

#### Animated Backgrounds
- **Light Mode**: Three floating gradient orbs (orange/pink, teal/cyan, amber/rose)
- **Dark Mode**: Blue/purple gradient orbs
- Continuous movement and scaling animations
- Heavy blur effects for depth and atmosphere

#### Form Styling
- **Light Mode**: Gradient background (white/orange/teal) with glass-morphism
- **Dark Mode**: Dark glass-morphism with subtle transparency
- Colorful gradient borders (orange-200 border)
- Individual input focus colors with matching shadows
- Smooth color transitions on all interactions
- Enhanced 3D shadows

#### Interactive Elements
- **Service buttons**: 
  - Unselected: Orange borders with white background, gradient hover effect
  - Selected: Full orange→pink→teal gradient with shadow
- **Submit button**: Orange→pink→teal gradient with teal→cyan→blue overlay on hover
- **Decorative dots**: Animated with orange/pink/teal gradient, pulsing effect
- **Footer links**: Each link has unique hover color for playful interaction
- All elements have lift animations on hover

#### Typography
- **Main heading**: Orange→pink→teal gradient for "your idea"
- **Arrow**: Orange color in light mode (matches theme)
- **Labels**: Bold, darker text for better readability
- **Body text**: Medium weight for enhanced contrast
- Smooth color transitions between themes

## Implementation

### Context Provider
```jsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Using Theme Hook
```jsx
import { useTheme } from '../context/ThemeContext'

const { theme, toggleTheme } = useTheme()
```

### Persistence
- Theme preference saved to localStorage
- Respects system preference on first visit
- Persists across page reloads

## Tailwind Configuration
- Dark mode: `class` strategy
- Custom background colors
- Extended color palette for gradients
- Smooth transitions enabled globally

## Browser Support
- Modern browsers with CSS backdrop-filter support
- Graceful degradation for older browsers
- Respects prefers-color-scheme media query
