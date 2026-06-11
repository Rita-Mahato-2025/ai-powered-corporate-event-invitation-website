# Product Requirement Document (PRD)

## Project Name: "Aurora" – Bespoke Corporate Invitation Engine
**Author:** Product Management / Design Engineering
**Version:** 1.1 (Optimized for Lovable / High-Performance Micro-interactions)

---

## 1. Product Objective & Vision
To create a high-end, high-conversion, single-page digital invitation that feels like a handcrafted, bespoke microsite for every invited corporation. The site leverages **Dynamic Identity** to pivot all content based on the user's initial input, using "Quiet Luxury" design aesthetics (dark modes, gold accents, smooth typography) paired with fluid, scroll-triggered animations.

---

## 2. Target Technical Stack
* **Core Framework:** Next.js (React) or Vite + React (Optimized for single-page load speeds)
* **Animation Engine:** GSAP (GreenSock) + ScrollTrigger for ultra-smooth vertical timeline animation
* **Smooth Scrolling:** Lenis Scroll or GSAP ScrollSmoother (Essential for luxury web feel)
* **Particle Effects:** HTML5 Canvas via `tsParticles` or lightweight custom canvas context
* **Styling:** Tailwind CSS + Framer Motion (for initial Gate entrance/exit states)

---

## 3. User Experience & Architecture Flow

### 3.1 The Gate (Entry Point)
- **Visuals:** Pure `#0B0B0B` (Rich Black) background, completely minimal. No navigation bars, no footers, no distracting text.
- **Interaction:** A single centered, elegant input box asking: *"Which company are you representing?"*
- **Action:** Upon hitting "Enter" or clicking the submit arrow, a seamless Framer Motion fade-out transition dissolves the gate.

### 3.2 The Reveal & Scroll Descent
- **The Pivot:** The background shifts into a deep gradient as a **Golden Particle Rain** (vertical light trails/shimmer curtain) begins to fall down the screen.
- **Personalization Engine:** The primary heading transitions from standard text into: **"[Company Name], You Are Cordially Invited."**
- **The Scroll:** The user is locked into a clean, single-page vertical scroll experience.

### 3.3 Section Breakdown (One-Pager)
1.  **Hero Section:** Dynamic personalized greeting, core event tagline, and immersive ambient gold animation.
2.  **Interactive Timeline:** A vertical scroll-bound timeline. As the user scrolls, photos of the premium venue fade/slide in from the left, while accompanying event details (Time, Dress Code, Agenda) slide in from the right.
3.  **Venue & Mapping:** A minimalist, custom-skinned Google Map preview element (Dark/Silver luxury skin) showcasing the physical location alongside dynamically changing ambient shots of the venue.
4.  **The RSVP Finale:** A highly polished, ultra-clean form asking:
    * Radio Toggle: *Will you be attending? [Yes / No]*
    * Conditional Input: *How many guests will you bring? (Max 5)*
    * **Action:** Submission fires a custom success micro-animation (e.g., a gold-bordered digital envelope sealing or opening).

---

## 4. Functional Requirements & Technical Specifications

| Feature ID | Feature Name | Technical Description | Priority |
| :--- | :--- | :--- | :--- |
| **FR-01** | Dynamic Injection | Global state hook (React Context) tracking `companyName`. Replaces `<span>` placeholders site-wide instantly upon entry. | P0 |
| **FR-02** | Luxury Scrolling | Integrate smooth-scrolling wrapper (e.g., Lenis) to eliminate native browser scroll-jank on both desktop and mobile tracks. | P0 |
| **FR-03** | Canvas Gold Rain | Lightweight HTML5 canvas rendering vertical falling golden lines with varying opacities, speeds, and subtle touch/cursor deflection. | P1 |
| **FR-04** | RSVP Capture | Client-side form tracking RSVP state. Form submissions should be caught by an isolated handler function (ready for future API wiring). | P0 |

---

## 5. Performance Guardrails & Edge-Case Architecture

### 5.1 Mobile GPU & Core Performance Guard
- **The Issue:** Complex canvas particle engines run simultaneously with scroll-animations, risking CPU spikes and choppy frame rates on mobile devices.
- **The Fix:** Implement an active asset throttle based on viewport matching:
    - **Desktop (>768px):** Spawn up to 150-200 active particles with trail lengths.
    - **Mobile (<768px):** Cap maximum active particles to 45. Disable complex cursor deflection math.
- **FPS Fail-Safe:** If the animation loop detects the site frame rate dropping below **45 FPS** for more than 3 continuous seconds, gracefully fade out the active canvas layer and replace it with a static, CSS