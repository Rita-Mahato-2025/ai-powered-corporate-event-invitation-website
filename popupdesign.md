Use the uploaded image as the visual reference and provide the following prompt to your coding LLM:

---

# Build a Luxury Event RSVP Landing Experience

Create a **full-screen luxury RSVP entry page** inspired by the reference image.

This is not a standard website.

This should feel like entering an exclusive invitation-only gala, luxury wedding reception, executive celebration, or premium hospitality event.

The user should immediately feel:

* Exclusive
* Welcomed
* Elegant
* Celebrated
* Luxurious
* High-end

The page acts as a **gate screen / welcome portal** before entering the main event website.

---

# Overall Experience

Design a cinematic landing experience.

Imagine:

* Four Seasons private event
* Luxury destination wedding
* Apple VIP gala
* Dior launch event
* Ritz Carlton ballroom
* Aman luxury celebration

The page should feel immersive and magical.

---

# Layout

Single fullscreen viewport.

```css
height: 100vh;
width: 100vw;
overflow: hidden;
position: relative;
```

No scrolling.

Everything centered.

---

# Background Image

Use the supplied image as the background.

Requirements:

```css
background-size: cover;
background-position: center;
background-repeat: no-repeat;
```

Add a subtle zoom effect.

Example:

```css
scale: 1.05;
```

Animate slowly:

```text
Scale 1.05 → 1.1 over 20s
Repeat infinitely
```

Very subtle.

---

# Background Overlay

Add a luxury overlay.

Layer:

```css
background:
linear-gradient(
rgba(0,0,0,0.20),
rgba(0,0,0,0.35)
);
```

This improves text readability.

---

# Ballroom Atmosphere Effects

Create an immersive environment.

---

## Floating Dust Particles

Tiny particles floating slowly.

Color:

```css
#F5DFA5
```

Opacity:

```css
0.1–0.4
```

Movement:

```text
Slow upward drift
Gentle horizontal movement
Random fade
```

---

## Light Sparkles

Occasional luxury sparkles.

Should resemble:

* Crystal reflections
* Chandelier reflections
* Disco ball reflections

Not glitter spam.

Not excessive.

Very elegant.

---

## Lens Bloom

Add soft bloom around bright areas.

Particularly:

* Ceiling lights
* Stage lights
* Mirror ball

---

# Ceiling Projection

The ceiling contains:

```text
JOIN US
```

Do not cover it completely.

Allow it to remain visible behind the modal.

This helps establish the event atmosphere.

---

# Main Modal

Place a luxury invitation modal at center.

Size:

```css
width: 650px;
max-width: 90vw;
```

---

## Modal Style

Background:

```css
rgba(255,255,255,0.95)
```

Border:

```css
1px solid rgba(201,162,39,0.3)
```

Radius:

```css
24px
```

Shadow:

```css
0 40px 120px rgba(0,0,0,0.35)
```

Backdrop:

```css
backdrop-filter: blur(20px)
```

---

# Modal Entrance Animation

On page load:

```text
Opacity: 0 → 1
Scale: 0.9 → 1
Y: 30px → 0
Duration: 0.8s
```

Smooth luxury motion.

---

# Modal Content

Center aligned.

Padding:

```css
48px
```

---

# Welcome Message

Text:

```text
Please let us know your company name
```

Typography:

```css
font-size: 22px;
font-weight: 400;
```

Color:

```css
#2A2A2A
```

Spacing:

```css
margin-bottom: 32px;
```

---

# Input Field

Large premium input.

Height:

```css
60px;
```

Radius:

```css
12px;
```

Border:

```css
2px solid #C9A227;
```

Background:

```css
#FFFFFF;
```

Padding:

```css
0 20px;
```

Font:

```css
18px;
```

---

# Input Focus State

On focus:

```css
border-color: #D4AF37;
```

Add glow:

```css
box-shadow:
0 0 0 4px rgba(212,175,55,0.15);
```

Transition:

```css
0.3s ease;
```

---

# Placeholder

Elegant placeholder:

```text
Enter company name
```

Color:

```css
#A5A5A5
```

---

# Submit Button

Centered below input.

Width:

```css
220px;
```

Height:

```css
58px;
```

Radius:

```css
12px;
```

Background:

Luxury gold gradient.

```css
linear-gradient(
135deg,
#DCC07A,
#C9A227,
#E8D7A5
)
```

Text:

```css
color: white;
font-size: 20px;
font-weight: 500;
```

---

# Button Hover

Create a premium hover.

```text
TranslateY(-2px)
```

Increase glow.

```css
box-shadow:
0 10px 30px rgba(212,175,55,0.4);
```

---

# Button Press

```text
Scale 0.98
```

---

# Optional Secondary Text

Below button:

```text
Your invitation will be personalized for your organization.
```

Small elegant typography.

---

# Typography

Headings:

```text
Playfair Display
Cormorant Garamond
Canela
```

Body:

```text
Inter
SF Pro
Manrope
```

Preferred combination:

```text
Playfair Display + Inter
```

---

# Color System

Luxury palette:

```css
Gold:
#D4AF37
#C9A227
#F0D98A

Cream:
#FFFDF8

Dark:
#1B1B1B

Text:
#2A2A2A
```

---

# Micro Interactions

Input:

* smooth focus animation
* luxury glow

Button:

* shimmer sweep effect
* hover glow
* subtle depth

Modal:

* floating animation

```text
translateY(0px → -4px → 0px)
duration 8s
```

Very subtle.

---

# Responsiveness

Desktop:

```text
Centered luxury modal
```

Tablet:

```text
Modal width 90%
```

Mobile:

```text
Modal width 92%
Padding reduced
Button full width
```

Maintain elegance.

---

# Accessibility

* Visible focus states
* Keyboard navigation
* ARIA labels
* High contrast text
* Screen reader friendly

---

# Technical Stack

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
React Three Fiber
```

---

# Component Structure

```text
LuxuryWelcomePage
 ├─ BallroomBackground
 ├─ FloatingParticles
 ├─ LightReflections
 ├─ WelcomeModal
 │   ├─ Title
 │   ├─ CompanyInput
 │   ├─ SubmitButton
 │   └─ HelperText
 └─ AmbientEffects
```

---

# Final Visual Goal

The finished page should look like a luxury invitation portal that appears before entering an exclusive event website. It should feel as if the guest has received a VIP invitation and is being welcomed into a premium, high-end experience. The atmosphere should combine warm gold accents, elegant typography, crystal-light reflections, soft ballroom lighting, and refined motion design, creating a cinematic first impression rather than a standard form page.
