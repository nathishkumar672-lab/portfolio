# Design System & Style Guide

## 🎨 Color Palette

### Primary Colors
```
Background:     #0a0a0a (Deep Black)
Text Primary:   #e5e5e5 (Light Gray)
Text Secondary: #a1a1a1 (Medium Gray)
```

### Accent Colors
```
Primary:   #6366f1 (Indigo)
Secondary: #a855f7 (Purple)
Accent:    #ec4899 (Pink)
```

### Gradient Combinations

**Project Card 1 (E-Commerce)**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Purple to Deep Purple */
```

**Project Card 2 (Finance)**
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
/* Light Purple to Rose */
```

**Project Card 3 (AI Chat)**
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
/* Sky Blue to Cyan */
```

**Primary Button**
```css
background: linear-gradient(135deg, var(--primary), var(--secondary));
/* Indigo to Purple */
```

**Gradient Text (Hero)**
```css
background: linear-gradient(to right, #6366f1, #a855f7, #ec4899);
/* Indigo → Purple → Pink with animation */
```

### Glass Effect
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
```

## 📏 Typography

### Font Family
```
Primary: 'Outfit', sans-serif
Weights: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)
```

### Font Sizes
```
Hero Heading:     4.5rem (72px)  - Desktop
                  2.5rem (40px)  - Tablet
                  2rem (32px)    - Mobile

Section Title:    2.5rem (40px)  - Desktop
                  2rem (32px)    - Tablet
                  1.8rem (29px)  - Mobile

Body Text:        1rem (16px)
Large Body:       1.25rem (20px)
Small Text:       0.9rem (14px)
```

## 🎭 Effects & Animations

### Transitions
```css
--transition: all 0.3s ease;
```

### Hover Effects
- **Cards**: Scale up + Border glow
- **Buttons**: Translate Y(-2px) + Shadow
- **Links**: Color change + Gap increase

### Animations

**Fade In**
```css
opacity: 0 → 1
transform: translateY(20px) → translateY(0)
duration: 0.8s
```

**Shimmer (Project Cards)**
```css
Moving gradient overlay
duration: 3s
iteration: infinite
staggered delays: 0s, 1s, 2s
```

**Gradient Shine (Hero Text)**
```css
background-position: 0% → 200%
duration: 5s
iteration: infinite
```

**Scroll Progress**
```css
width: 0% → 100% (based on scroll)
gradient: indigo → purple → pink
height: 3px
```

**Button Ripple**
```css
Circle expands from center on hover
size: 0px → 300px
background: rgba(255, 255, 255, 0.2)
```

**Spinner (Loading)**
```css
border-radius: 50%
rotation: 0deg → 360deg
duration: 0.8s
iteration: infinite
```

## 📐 Spacing & Layout

### Container
```
Max Width: 1200px
Padding: 0 2rem (Desktop)
         0 1rem (Mobile)
```

### Sections
```
Padding: 8rem 0 (Hero, Work, Contact)
         5rem 0 (Smaller sections)
```

### Grid
```css
Projects: repeat(auto-fit, minmax(300px, 1fr))
Gap: 2rem
```

### Border Radius
```
Cards:   20px
Inputs:  10px
Buttons: 50px (pill shape)
```

## 🎯 Component Specs

### Navbar
```
Position: fixed, top: 0
Height: auto (padding: 1.5rem)
Background: transparent → rgba(10, 10, 10, 0.8) on scroll
Backdrop: blur(10px)
Border: 1px solid rgba(255, 255, 255, 0.1) (bottom)
```

### Project Cards
```
Background: Glass effect
Border: 1px solid rgba(255, 255, 255, 0.1)
Hover Border: var(--primary)
Shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3) on hover
Transform: translateY(-10px) on hover
Transition: 0.3s ease
```

### Contact Form
```
Background: Glass effect
Padding: 3rem (Desktop), 2rem (Mobile)
Border: 1px solid rgba(255, 255, 255, 0.1)
Inputs Background: rgba(0, 0, 0, 0.3)
Focus Border: var(--primary)
```

### Buttons

**Primary**
```
Background: linear-gradient(135deg, #6366f1, #a855f7)
Color: #ffffff
Padding: 1rem 2rem
Border-radius: 50px
```

**Secondary**
```
Background: #ffffff
Color: #000000
Padding: 1rem 2rem
Border-radius: 50px
```

**Ghost**
```
Background: transparent
Color: #ffffff
Border: 1px solid rgba(255, 255, 255, 0.1)
Padding: 1rem 2rem
Border-radius: 50px
```

## 📱 Responsive Breakpoints

```
Desktop:      1200px+
Tablet:       768px - 968px
Mobile:       < 768px
Small Mobile: < 480px
```

### Key Changes per Breakpoint

**968px and below**
- Hero heading: 3.5rem
- Section titles: 2rem
- Contact: Single column

**768px and below**
- Mobile menu activated
- Hero heading: 2.5rem
- Hero body: 1rem
- Projects: Single column
- Footer: Stacked layout

**480px and below**
- Hero heading: 2rem
- Container padding: 1rem
- Form padding: 2rem

## 🎪 Icons

Library: **Remix Icon**
CDN: https://cdn.jsdelivr.net/npm/remixicon@3.5.0

Used Icons:
- `ri-menu-line` - Mobile menu open
- `ri-close-line` - Mobile menu close
- `ri-send-plane-fill` - Send button
- `ri-arrow-right-up-line` - Project links
- `ri-mail-line` - Email icon
- `ri-map-pin-line` - Location icon
- `ri-twitter-line` - Social media
- `ri-github-line` - Social media
- `ri-linkedin-line` - Social media

## ⚡ Performance Notes

- Fonts preconnected to googleapis.com
- CSS custom properties for easy theming
- Hardware-accelerated transforms
- Debounced scroll events
- Minimal JavaScript overhead
- Vite for fast bundling

## 🎨 Design Principles

1. **Dark First**: Optimized for dark mode
2. **Gradients**: Used sparingly for accent
3. **Glass Effects**: Modern, premium feel
4. **Micro-interactions**: Engaging but subtle
5. **Smooth**: All transitions are eased
6. **Accessible**: High contrast ratios
7. **Fast**: Optimized animations

---

**Pro Tip**: All colors use CSS variables, so you can easily theme the entire site by changing the `:root` values!
