# About Component Animations

## Overview
The About component features scroll-triggered animations using GSAP ScrollTrigger and Framer Motion, creating an engaging reveal effect as users scroll down the page.

## Libraries Used
- **GSAP with ScrollTrigger** - For scroll-based animations
- **Framer Motion** - For declarative animations and interactions
- **useInView Hook** - For viewport detection

## Animation Details

### Scroll-Triggered Animations (GSAP)

1. **Title Animation**
   - Triggers when title enters viewport (80% from top)
   - Slides up from 100px below with fade-in
   - Duration: 1s with power3.out easing
   - Reverses when scrolling back up

2. **Service Cards Stagger**
   - Triggers when cards container enters viewport
   - Each card slides up 80px with fade-in
   - Staggered by 0.2s for cascading effect
   - Duration: 0.8s with power2.out easing

### Header Section

**Social Links**
- Container uses stagger children animation
- Each link fades in and slides up (20px)
- Hover: Lifts up 3px and scales to 1.05
- Horizontal lines grow from 0 to 4rem width

**Email Link**
- Scales to 1.05 on hover
- Smooth transition

### Main Content Section

**Left Column (Title Area)**
- Slides in from left (-50px) with fade
- Duration: 0.8s, delay: 0.3s
- "MY SERVICES ?" label slides in separately
- Horizontal line grows from 0 to 2rem

**Right Column (Description)**
- Slides in from right (50px) with fade
- Duration: 0.8s, delay: 0.5s
- Description text fades up (delay: 0.7s)
- "ALL SERVICE" button:
  - Fades up (delay: 0.9s)
  - Scales to 1.05 on hover
  - Scales to 0.95 on tap

### Scroll Down Indicator

- Fades in from left with delay
- Line grows from 0 to 5rem
- Arrow button bounces continuously (10px up/down)
- Scales to 1.1 on hover
- Infinite loop: 1.5s duration

### Service Cards

**Card Entrance**
- Each card: opacity 0 → 1, y: 50 → 0, scale: 0.9 → 1
- Staggered delays: 1.2s + (index × 0.2s)
- Duration: 0.6s with easeOut

**Card Hover Effects**
- Lifts up 10px
- Scales to 1.02
- Smooth 0.3s transition
- Border color changes (non-primary cards)

**Icon Animation**
- Rotates 360° on hover
- Scales to 1.2
- Duration: 0.5s

**Title Text**
- Fades in after card entrance
- Staggered with card animation

**"READ MORE" Link**
- Slides right 5px on hover
- Arrow continuously animates (0 → 5px → 0)
- Infinite loop: 1.5s duration

## Animation Timing Sequence

```
Scroll into view:
0.0s  - Header container starts
0.1s  - Social links stagger begins
0.3s  - Left column (title) slides in
0.3s  - Horizontal lines start growing
0.5s  - Right column slides in
0.7s  - Description text appears
0.9s  - "ALL SERVICE" button appears
1.0s  - Scroll indicator appears
1.2s  - First service card appears
1.4s  - Second service card appears
1.6s  - Third service card appears
```

## Scroll Trigger Configuration

```javascript
scrollTrigger: {
  trigger: element,
  start: 'top 80%',      // Animation starts when element is 80% from top
  end: 'bottom 20%',     // Animation ends when element is 20% from bottom
  toggleActions: 'play none none reverse'  // Play on enter, reverse on leave
}
```

## Performance Optimizations

- **useInView Hook**: Only animates when section is visible
- **once: true option**: Prevents re-animation on scroll (can be changed)
- **GSAP Context**: Proper cleanup on unmount
- **Hardware Acceleration**: Uses transform and opacity
- **Stagger Optimization**: Reduces layout thrashing

## Interactive States

### Hover Effects
- Social links: Lift and scale
- Email: Scale
- Service button: Scale
- Service cards: Lift and scale
- Card icons: Rotate and scale
- "READ MORE" links: Slide right

### Continuous Animations
- Scroll down arrow: Bouncing
- Arrow icons in cards: Sliding left-right

## Customization Examples

### Change Card Entrance Speed
```jsx
transition={{
  duration: 0.4,  // Faster
  delay: 1.2 + index * 0.15,  // Tighter stagger
}}
```

### Disable Scroll Reversal
```javascript
toggleActions: 'play none none none'  // Don't reverse
```

### Change Hover Lift Amount
```jsx
whileHover={{
  y: -15,  // Lift higher
  scale: 1.05,  // Scale more
}}
```

### Add Card Rotation on Hover
```jsx
whileHover={{
  y: -10,
  scale: 1.02,
  rotate: 2,  // Add slight rotation
}}
```

## Accessibility Notes

- Animations respect `prefers-reduced-motion`
- All interactive elements maintain keyboard focus
- Hover states have sufficient contrast
- Animation durations are reasonable (< 1s for most)
