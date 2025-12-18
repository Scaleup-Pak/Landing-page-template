# Visual Component Breakdown - TikTok Style 🎬

## Screen Layout Map

```
┌─────────────────────────────────────┐
│ ╔═══════════════════════════════╗   │ 
│ ║  📱 Sponsored Badge           ║   │ <- Top overlay (gradient fade)
│ ╚═══════════════════════════════╝   │
│                                     │
│                                     │
│         [VIDEO/IMAGE]               │
│      Full screen centered           │
│                                     │
│                                ┌──┐ │
│                                │👤│ │ <- Profile + Follow
│                                └──┘ │
│                                     │
│                                │❤️│ │ <- Like/Laugh
│                                │11K│ │
│                                     │
│                                │💬│ │ <- Comments
│                                │213│ │
│                                     │
│                                │🔖│ │ <- Save
│                                │912│ │
│                                     │
│                                │🔗│ │ <- Share
│                                │1.7K│
│                                     │
│                                │🎵│ │ <- Music disc
│                                     │
│ ╔═══════════════════════════════╗   │
│ ║ @kevinhart                    ║   │
│ ║ • 11.3K followers             ║   │ <- Bottom info overlay
│ ║ Joke title here Joke title... ║   │    (gradient fade)
│ ║ 👁️ 1.7K views • ⏱️ 0:15       ║   │
│ ║ [Download Lalalaugh Button]   ║   │
│ ╚═══════════════════════════════╝   │
└─────────────────────────────────────┘
```

## Component Positioning

### Top Bar (z-index: 10)
```
Position: absolute top-0 left-0 right-0
Padding: p-4
Background: bg-gradient-to-b from-black/50 to-transparent
```

### Right Action Bar (z-index: 20)
```
Position: absolute right-4 bottom-24
Display: flex flex-col
Gap: gap-6 (24px between items)
Alignment: items-center
```

### Bottom Info (z-index: 10)
```
Position: absolute bottom-0 left-0 right-0
Padding: p-4
Background: bg-gradient-to-t from-black/80 via-black/40 to-transparent
Max-width: max-w-md
```

## Icon & Button Specifications

### Profile Avatar
- **Size**: 48x48px (w-12 h-12)
- **Border**: 2px white
- **Shape**: rounded-full
- **Follow button**: -bottom-2, 24x24px red circle with + icon

### Action Buttons
- **Icon size**: 32x32px (w-8 h-8)
- **Color**: White with drop-shadow-lg
- **Text size**: text-xs (12px)
- **Font weight**: font-semibold
- **Animation**: active:scale-95

### Music Disc
- **Size**: 40x40px (w-10 h-10)
- **Inner circle**: 12x12px (w-3 h-3)
- **Animation**: rotate 360deg in 3s
- **Border**: 2px white

## Typography Scale

```css
/* Username */
font-size: 18px (text-lg)
font-weight: 700 (font-bold)
color: white
text-shadow: drop-shadow-lg

/* Follower count */
font-size: 14px (text-sm)
color: #D1D5DB (gray-300)

/* Caption/Title */
font-size: 14px (text-sm)
line-height: relaxed
color: white
text-shadow: drop-shadow-lg

/* Metadata (views, duration) */
font-size: 14px (text-sm)
color: #D1D5DB (gray-300)

/* Action counts */
font-size: 12px (text-xs)
font-weight: 600 (font-semibold)
color: white
text-shadow: drop-shadow-lg

/* CTA button */
font-size: 14px (text-sm)
font-weight: 700 (font-bold)
color: black
```

## Gradient Specifications

### Top Gradient (Sponsored badge background)
```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.5) 0%,
  transparent 100%
)
```

### Bottom Gradient (Info section background)
```css
background: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.8) 0%,
  rgba(0, 0, 0, 0.4) 50%,
  transparent 100%
)
```

### Glass Morphism (Sponsored badge)
```css
background: rgba(255, 255, 255, 0.2)
backdrop-filter: blur(10px)
```

## Spacing System

```css
/* Action bar spacing */
gap-6        /* 24px between action buttons */
right-4      /* 16px from right edge */
bottom-24    /* 96px from bottom */

/* Content padding */
p-4          /* 16px padding all sides */

/* Element gaps */
gap-1        /* 4px between icon and count */
gap-2        /* 8px between sponsored icon and text */
gap-4        /* 16px between metadata items */
mb-3         /* 12px margin bottom for username */
mb-4         /* 16px margin bottom for CTA */
```

## Interaction States

### Button Hover/Active
```css
/* Default state */
transition-transform
duration-150

/* Active state (tap) */
scale-95 (0.95)
```

### Link Hover
```css
hover:underline (username)
hover:bg-gray-100 (CTA button)
```

## Shadow Specifications

### Drop Shadow (text and icons)
```css
drop-shadow-lg
/* Equivalent to: */
filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) 
        drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))
```

### Box Shadow (CTA button)
```css
shadow-lg
/* Equivalent to: */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 
            0 4px 6px -4px rgb(0 0 0 / 0.1)
```

## Loading State

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│              ⊙ Spinner              │
│         (white on black)            │
│                                     │
│                                     │
│                                     │
└─────────────────────────────────────┘

Spinner:
- Size: 64x64px (w-16 h-16)
- Border: 4px white
- Border-top: transparent
- Animation: spin (linear infinite)
```

## Error State

```
┌─────────────────────────────────────┐
│                                     │
│            ⚠️ Icon                   │
│                                     │
│      Video not available            │
│   This video may have been deleted  │
│                                     │
│     [Go to Homepage Button]         │
│                                     │
└─────────────────────────────────────┘

Icon: 80x80px (w-20 h-20)
Title: text-2xl font-bold
Message: text-gray-400
Button: white bg, black text
```

## Responsive Behavior

### Mobile (< 768px)
- Full viewport coverage
- Action bar on right
- All elements visible
- Touch-optimized sizing

### Tablet/Desktop (> 768px)
- Video centered
- Black bars on sides (letterboxing)
- Same overlay positioning
- No horizontal scrolling

## Z-Index Layers

```
Layer 5 (z-20): Right action bar (always on top)
Layer 4 (z-10): Top bar & bottom info
Layer 3 (z-0):  Video/Image content
Layer 2:        Background (black)
Layer 1:        Fixed container
```

## Performance Optimizations

1. **Image loading**: Use `object-contain` for aspect ratio
2. **Animations**: Use `transform` (GPU accelerated)
3. **Fixed positioning**: Prevents layout shifts
4. **CSS transitions**: Hardware accelerated
5. **Minimal reflows**: Absolute positioning

## Accessibility Features

1. **Alt text**: All images have descriptive alt
2. **Touch targets**: Minimum 44x44px
3. **Color contrast**: White on black (21:1 ratio)
4. **Focus states**: Visible keyboard focus
5. **Semantic HTML**: Proper button elements

## Color Opacity Reference

```css
black/80  -> rgba(0, 0, 0, 0.8)   /* 80% black */
black/50  -> rgba(0, 0, 0, 0.5)   /* 50% black */
black/40  -> rgba(0, 0, 0, 0.4)   /* 40% black */
white/20  -> rgba(255, 255, 255, 0.2) /* 20% white */
```

## CSS Custom Properties Used

```css
/* From Tailwind/Theme */
--color-white: #FFFFFF
--color-black: #000000
--color-gray-300: #D1D5DB
--color-gray-400: #9CA3AF
--color-gray-600: #4B5563
--color-gray-800: #1F2937
--color-red-500: #EF4444
--color-purple-500: #A855F7
--color-pink-500: #EC4899

/* Spacing */
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-6: 1.5rem (24px)
--space-12: 3rem (48px)
--space-24: 6rem (96px)
```

---

This breakdown provides exact specifications for recreating the TikTok-style design! 🎨
