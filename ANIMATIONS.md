# Hero Component Animations

## Libraries Used
- **GSAP** - For complex timeline animations and continuous effects
- **Framer Motion** - For declarative React animations and interactions

## Animation Details

### GSAP Animations

1. **Title Text Stagger**
   - Elements fade in and slide up from bottom
   - Staggered timing for dramatic effect
   - Duration: 1s with 0.2s stagger

2. **Profile Image**
   - Scales from 0.8 to 1
   - Rotates from -10deg to 0deg
   - Bouncy entrance with back.out easing
   - Duration: 1.2s with 0.3s delay

3. **Wavy Line Rotation**
   - Continuous 360° rotation
   - Infinite loop animation
   - Duration: 3s linear

### Framer Motion Animations

#### Background Elements
- **Gradient Blob**: Scales from 0 with fade-in (1.5s)
- **Diagonal Lines**: Scale vertically with staggered delays

#### Header
- **Logo**: Slides in from left with fade (0.6s)
- **Navigation Items**: 
  - Fade and slide down
  - Individual stagger per item
  - Hover effect: lifts up 5px

#### Main Content

1. **Wave Emoji (👋)**
   - Scales from 0 with rotation
   - Spring animation for bounce
   - Delay: 0.5s

2. **Title Text**
   - "Hello!" slides in from left (delay: 0.6s)
   - "I'm Madhu" slides in from left (delay: 0.8s)
   - Separate animations for emphasis

3. **Product Designer Section**
   - Line grows from 0 to 4rem width
   - Spark icon rotates continuously (360° every 2s)

4. **Description Text**
   - Fades in with upward slide
   - Delay: 1.2s

5. **Feature List**
   - Each item slides in from left
   - Staggered by 0.1s intervals
   - Starts at delay: 1.5s

6. **CTA Buttons**
   - Fade and slide up together
   - "Let's Talk" button: Scale on hover/tap
   - "Download CV" link: Lifts on hover

#### Image Section

1. **Profile Image**
   - GSAP handles entrance animation
   - Hover: Scales to 1.05 and rotates 2°
   - Smooth transition

2. **"Hello" Badge**
   - Scales from 0 with rotation (-180° to 0°)
   - Spring bounce effect
   - Hover: Scales to 1.1 and rotates 5°
   - Delay: 1.5s

3. **Decorative Line**
   - Scales vertically from 0
   - Delay: 1s

## Performance Optimizations

- Used `useRef` for GSAP targets to avoid re-renders
- GSAP context cleanup on unmount
- Framer Motion's optimized transform animations
- Hardware-accelerated properties (transform, opacity)

## Interaction States

- **Hover Effects**: Buttons, links, and images respond to hover
- **Tap Effects**: Buttons have tap feedback
- **Continuous Animations**: Spark icon and wavy line rotate infinitely

## Timing Sequence

```
0.0s  - Logo appears
0.2s  - Nav items start appearing
0.3s  - Image starts animating (GSAP)
0.5s  - Wave emoji pops in
0.6s  - "Hello!" appears
0.8s  - "I'm Madhu" appears
1.0s  - Decorative elements appear
1.2s  - Description text fades in
1.4s  - Feature list starts
1.5s  - "Hello" badge pops in
1.8s  - CTA buttons appear
```

## Customization

To adjust animations, modify:
- **Duration**: Change `duration` values
- **Delays**: Adjust `delay` values
- **Easing**: Change `ease` or `type` properties
- **Stagger**: Modify stagger intervals

Example:
```jsx
// Faster animation
transition={{ duration: 0.3, delay: 0.5 }}

// Different easing
transition={{ ease: 'easeInOut' }}

// Spring animation
transition={{ type: 'spring', bounce: 0.5 }}
```
