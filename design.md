Use the image as the primary visual reference and give your coding LLM a prompt like this:

---

# Build a Premium Executive Event Invitation Landing Page

Create a **single-page, vertically scrollable luxury event invitation website** inspired by the provided reference image.

The design should feel like:

* Apple executive event invitation
* Luxury gala experience
* Premium hospitality brand
* High-end corporate summit
* Cinematic and immersive
* Sophisticated, elegant, and futuristic

Avoid looking like a generic conference website.

---

# Design Style

## Overall Mood

The page should evoke:

* Exclusivity
* Prestige
* Innovation
* Luxury
* Invitation-only experience

Visual references:

* Apple launch event
* Luxury hotel gala
* Rolls Royce website
* Aman Resorts
* Four Seasons luxury events
* Golden award ceremonies

---

# Color Palette

Primary Background:

```css
#07090C
#0B0E12
#10141B
```

Gold Colors:

```css
#D4AF37
#C9A227
#F4D06F
#FFE7A3
```

Accent Glow:

```css
rgba(212,175,55,0.25)
rgba(255,220,120,0.3)
```

Text:

```css
#FFFFFF
#E8D7A5
#C9B26D
```

---

# Layout Structure

Create a **single vertical scrolling page**.

Content width:

```css
max-width: 1200px;
margin: auto;
padding: 40px;
```

Spacing between sections:

```css
80px to 120px
```

Everything should feel spacious and luxurious.

---

# Background Effects

## Golden Particle Rain (Most Important)

The entire page should have animated golden particle rain.

Particles should:

* Fall from top to bottom
* Have varying sizes
* Glow softly
* Move at different speeds
* Create depth

Think:

"Golden Matrix Rain"

but elegant and luxurious.

Not techy.

Not hacker-like.

Use:

* Canvas animation
* Three.js particles
* Framer Motion particles
* GSAP particles

Preferred:

```javascript
requestAnimationFrame
canvas layer
```

Particle behavior:

```text
Tiny gold dots
Small streaks
Occasional sparkle bursts
Slow drifting particles
```

Opacity:

```css
0.1 - 0.8
```

Layering:

```text
Layer 1 = far background
Layer 2 = mid particles
Layer 3 = bright foreground sparkles
```

---

# Additional Background Effects

Add:

### Floating Dust

Tiny floating gold dust particles.

### Soft Vignette

Dark corners.

### Luxury Glow

Subtle gold radial glow behind sections.

Example:

```css
radial-gradient(
circle,
rgba(212,175,55,0.08),
transparent 70%
)
```

---

# Hero Section

At top of page.

Centered.

Structure:

```text
[Invitation Line]

AN EVENING OF FUTURE VISION

Luxury Divider
```

Small text:

```text
[Client Name], You Are Cordially Invited.
```

Typography:

Invitation Line:

```css
font-size: 18px
letter-spacing: 3px
```

Main Heading:

```css
font-size: clamp(48px, 7vw, 92px)
font-weight: 300
letter-spacing: 2px
```

Gold gradient text.

Add subtle shimmer animation.

---

# Luxury Divider

Under heading.

Use:

```text
──── ✦ ────
```

or custom SVG divider.

Gold glow.

---

# Timeline Cards Section

Create a vertical sequence of luxury cards.

Cards alternate image and text blocks.

Each card:

```css
height: 320px
border-radius: 24px
overflow: hidden
```

Glass-dark container.

---

## Card Style

Background:

```css
rgba(15,15,18,0.8)
```

Border:

```css
1px solid rgba(212,175,55,0.2)
```

Shadow:

```css
0 10px 40px rgba(0,0,0,0.5)
```

Hover:

```css
translateY(-6px)
```

and

```css
gold glow increase
```

---

# Event Agenda Cards

Create these sections:

---

## 1. Guest Arrival & Opening

Layout:

```text
Image Left
Content Right
```

Image:

Luxury reception desk.

Text:

```text
Guest Arrival & Opening
```

Include:

* Welcome drinks
* VIP registration
* Executive networking

---

## 2. Morning Business Sessions

Image:

Futuristic keynote stage.

Text:

```text
Morning Business Sessions
```

Include:

* Keynote presentation
* Future strategy
* Innovation discussions

---

## 3. Networking Lunch

Image:

Luxury dining hall.

Text:

```text
Networking Lunch
```

Include:

* Curated dining
* Industry leaders
* Informal networking

---

## 4. Afternoon Program

Image:

Purple-lit conference stage.

Text:

```text
Afternoon Program
```

Include:

* Product showcases
* Leadership panels
* Vision presentations

---

## 5. Awards & Recognition Ceremony

Image:

Luxury ballroom.

Text:

```text
Awards & Recognition Ceremony
```

Include:

* Recognition awards
* Executive speeches
* Celebration

---

# Card Animation

When card enters viewport:

```text
Fade Up
Scale 0.95 → 1
Opacity 0 → 1
```

Use:

```javascript
Framer Motion
```

or

```javascript
GSAP ScrollTrigger
```

Stagger reveal.

---

# Event Location Section

Center aligned.

Heading:

```text
EVENT LOCATION
```

Add luxury divider.

---

## Map Card

Large horizontal card.

Ratio:

```css
16:9
```

Map style:

```text
Dark charcoal background
Gold roads
Gold location pin
```

Not Google Maps UI.

Create custom luxury map design.

---

## Venue Name

Large elegant typography.

Example:

```text
Taj Lake Palace
Udaipur, India
```

Font size:

```css
56px
```

Gold gradient.

Subtle glow.

---

# RSVP Section

Centered.

---

## Heading

```text
WILL YOU JOIN US?
```

Subheading:

```text
[Client Name] RSVP
```

---

## RSVP Form

Fields:

```text
Name
Email
```

Style:

Luxury dark inputs.

```css
height: 56px
border-radius: 12px
```

Gold border.

On focus:

```css
gold glow
```

---

## Checkboxes

Options:

```text
Confirm Presence
Guest Count
Additional Needs
```

Custom gold checkbox design.

---

## CTA Button

Text:

```text
CONFIRM PRESENCE
```

Style:

Luxury gold outline.

Hover:

```css
background gold
text dark
```

Add glow.

---

# Typography

Use luxury serif.

Preferred:

```html
Cormorant Garamond
Playfair Display
Canela
```

Body:

```html
Inter
SF Pro
Manrope
```

Combination:

```text
Headings → Cormorant Garamond
Body → Inter
```

---

# Scroll Experience

Make scrolling cinematic.

Add:

### Parallax

Background particles move slower.

### Reveal Effects

Each section fades in.

### Gold Light Sweep

Occasionally animate a subtle gold highlight passing over cards.

### Sparkle Bursts

Tiny sparkle effects near card corners.

---

# Glassmorphism

Cards should use:

```css
backdrop-filter: blur(20px);
```

and

```css
rgba(15,15,20,0.7)
```

---

# Responsiveness

Desktop:

```text
2-column cards
```

Tablet:

```text
slightly stacked
```

Mobile:

```text
fully stacked
```

Images on top.

Text below.

Maintain luxury feel.

---

# Technical Requirements

Use:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
```

Optional:

```text
GSAP
Three.js
React Three Fiber
```

Component structure:

```text
HeroSection
ParticleRain
AgendaTimeline
AgendaCard
LocationSection
LuxuryMap
RSVPSection
FooterGlow
```

---

# Quality Requirements

The final result should feel like:

* Apple executive invitation
* Luxury event microsite
* Premium interactive experience
* Cinematic scrolling story
* Gold particle rain masterpiece

The page should immediately communicate exclusivity, elegance, prestige, and future-focused innovation while maintaining a clean Apple-level design aesthetic.
