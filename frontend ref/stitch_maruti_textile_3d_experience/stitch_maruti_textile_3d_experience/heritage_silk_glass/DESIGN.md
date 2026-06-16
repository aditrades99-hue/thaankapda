---
name: Heritage Silk & Glass
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#584141'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#002d2c'
  on-tertiary: '#ffffff'
  tertiary-container: '#004543'
  on-tertiary-container: '#77b2af'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#b1eeea'
  tertiary-fixed-dim: '#95d1ce'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#084f4d'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
  royal-maroon: '#800020'
  muted-gold: '#D4AF37'
  emerald-deep: '#004B49'
  navy-heritage: '#002344'
  silk-white: '#F9F8F5'
  glass-fill: rgba(255, 255, 255, 0.7)
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality is **Regal, Timeless, and Bespoke**. This design system bridges the gap between Kathmandu’s rich textile heritage and a modern, high-end digital shopping experience. It targets discerning boutique owners and individual retail clients who value quality and tradition.

The visual style is a fusion of **Minimalism** and **Glassmorphism**. It utilizes expansive white space to let high-resolution fabric textures breathe, while employing frosted glass layers to create a sense of depth and modern sophistication. The emotional response should be one of immediate trust, luxury, and "tactile" digital elegance.

## Colors
The palette is rooted in traditional luxury. **Royal Maroon** serves as the primary brand anchor, used for key actions and headers. **Muted Gold** is used sparingly for accents, borders, and premium highlights. **Emerald Deep** and **Navy Heritage** provide depth for secondary sections or hover states.

**Silk White** is the primary background color, providing a warm, organic alternative to pure white. The design defaults to a **light mode** to maintain a clean, airy boutique feel, though it utilizes deep-colored sections (Maroon or Navy) to create high-contrast visual breaks.

## Typography
The typography system relies on a high-contrast pairing: **Bodoni Moda** for headlines to evoke the feel of a luxury fashion editorial, and **Hanken Grotesk** for body copy to ensure modern legibility and professionalism.

Large display type should be used for hero sections, often overlapping background images of textiles. Labels and secondary navigation use uppercase tracking to enhance the premium, "architectural" feel of the layout.

## Layout & Spacing
The layout follows a **fixed grid** approach on desktop (12 columns) to maintain a controlled, gallery-like composition. On mobile, it transitions to a fluid single-column flow with generous vertical padding to prevent a cluttered appearance.

The "Section Gap" (120px) is intentionally large to create a rhythmic "breath" between different fabric collections and brand stories. Elements often utilize asymmetrical positioning to mimic the drape of fabric.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering**. 
- **Glassmorphism:** Navigation bars and conversion cards use a 20px backdrop blur with a semi-transparent Silk White fill.
- **Shadows:** Use extremely soft, large-radius shadows (`blur: 40px`, `opacity: 4%`) in the primary Maroon or Navy tint to make cards feel like they are floating slightly above a silk surface.
- **Layers:** Overlap high-quality "cut-out" fabric PNGs over structural text elements to create a 3D collage effect.

## Shapes
The design system uses **Soft (0.25rem)** roundedness. While luxury often leans sharp, a slight rounding reflects the softness of textiles. 

Buttons and input fields should remain fairly structured, but large image containers and glass cards may use `rounded-lg` (0.5rem) to feel more approachable. Circular elements are reserved strictly for the WhatsApp floating action button and decorative "Quality Seal" badges.

## Components
- **Buttons:** Primary buttons are solid Royal Maroon with Gold text, using a subtle "shimmer" hover effect. The secondary "WhatsApp" button uses a Muted Gold outline or a glass background with a prominent brand icon.
- **Cards (Fabric Showcase):** Large, vertical cards with minimal borders. The fabric name appears in Bodoni Moda upon hover, using a glassmorphic overlay that slides up from the bottom.
- **Input Fields:** Minimalist "Underline" style inputs for a cleaner look, using Muted Gold for the focus state.
- **Floating Action Button (FAB):** A fixed WhatsApp button in the bottom right, using a Emerald Green to Maroon gradient, signifying the direct line to the "Empire."
- **Navigation:** A centered, glassmorphic floating header that shrinks on scroll.
- **Chips/Tags:** Used for fabric types (e.g., "Handloom", "Pure Silk"). Small, uppercase Hanken Grotesk text inside a thin Gold border.