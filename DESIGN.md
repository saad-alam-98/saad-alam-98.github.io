---
name: Gameplay Scrapbook
description: Muhammad Saad Alam's warm, tactile game-development portfolio.
colors:
  bg: '#34312c'
  text: '#f9e7bf'
  accent: '#efb54f'
  accent-strong: '#c4492a'
  paper-ink: '#302719'
  paper: '#f9dda6'
  red-paper: '#b94026'
  player: '#283125'
  focus: '#2d8e94'
typography:
  display:
    fontFamily: 'Lobster, serif'
    fontSize: 'clamp(38px, 3.8vw, 59px)'
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: '-0.02em'
  wordmark:
    fontFamily: 'Lobster, serif'
    fontSize: 42px
    fontWeight: 400
    lineHeight: 0.9
  headline:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.08
  navigation:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 27px
    fontWeight: 600
  body:
    fontFamily: "'IBM Plex Sans', Arial, sans-serif"
    fontSize: 17px
    lineHeight: 1.5
  introduction:
    fontFamily: "'IBM Plex Sans', Arial, sans-serif"
    fontSize: 20px
    lineHeight: 1.4
  label:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 22px
    fontWeight: 800
rounded:
  poster-action: 40px
  mobile-menu: 5px
spacing:
  tight: 8px
  small: 12px
  medium: 22px
  large: 32px
components:
  button-primary:
    backgroundColor: '{colors.red-paper}'
    textColor: '{colors.text}'
  paper-sheet:
    textColor: '{colors.paper-ink}'
    padding: '35px 5.5% 62px'
  player-bar:
    backgroundColor: '{colors.player}'
    textColor: '{colors.text}'
    padding: '9px 12px'
  project-paper:
    textColor: '{colors.paper-ink}'
    padding: '38px 42px'
---

# Design System: Gameplay Scrapbook

## Overview

**Creative North Star: "Gameplay Scrapbook"**

A warm, tactile portfolio built around clipped photographs, layered parchment, torn red labels, expressive lettering, and real game footage. This system implements the user's approved scrapbook reference. It replaces the rejected flat, near-black engineering presentation; the previous Project Theatre mock is not visual authority.

Paper is a material surface beneath accessible HTML, not a screenshot containing the interface. The actual portrait, game imagery, links, and confirmed contributions remain factual. Generated paper and temple ornament provide atmosphere without inventing professional evidence.

**Key Characteristics:**

- Warm charcoal ground with cream, ochre, red, and restrained teal.
- Clipped portrait and layered parchment around playable game previews.
- Lobster identity lettering, Newsreader headings, IBM Plex Sans reading text.
- Top navigation and contribution summaries attached to their projects.
- Mobile posters remain still until the visitor requests playback.

## Colors

The palette pairs a subdued evening background with warm paper and vivid game imagery.

### Primary

- **Torn red:** selected game tabs, role label, Contact, and primary actions.
- **Ochre:** contribution labels, exploration links, and decorative ink.

### Secondary

- **Teal:** restrained ink flourish and clear keyboard focus.

### Neutral

- **Warm charcoal:** page ground, with the sourced paper texture.
- **Cream:** text against charcoal and paper borders around the player.
- **Brown ink:** readable text on parchment.
- **Deep olive:** player controls and poster backing.

**The Warm Ground Rule.** A dark theme means comfortable warm charcoal, not a pitch-black page; parchment surfaces belong to the approved system.

## Typography

Lobster is self-hosted and reserved for the name and wordmark. Newsreader is the serif voice for navigation, titles, and paper labels; its italic treatment gives the role and contribution strips their editorial character. IBM Plex Sans carries descriptions, controls, and longer reading.

The desktop name uses the display clamp, the wordmark is smaller, and project titles use the title scale. Introduction text is larger than project body text. At mobile width, the name becomes 36px, the role label 19px, and the introduction 15px with 1.4 line height. These are observed responsive values, not a global mandate to shrink all body copy.

**The Three Voices Rule.** Script identifies the person, serif organizes the work, and sans serif explains it. Do not restore Anton as the portfolio's headline voice.

## Layout

The header sits in normal document flow above the content. Desktop Home, Projects, About, Resume, and Contact links occupy its right side. The main opening is bounded by a 1536px container with 24px outer padding and a 36:64 introduction/game-sheet split. The introduction pairs a clipped portrait with name, role, and short description.

At 900px and below the opening becomes stacked. Between 701px and 900px the portrait and introduction remain a horizontal group. At 700px and below the navigation becomes a button-controlled menu, the compact portrait and biography remain paired, and the game sheet follows underneath. Four game tabs remain available without sideways page scrolling.

Project sheets use an artwork/content split on desktop and a single column on mobile. In the all-work view, the first project sheet precedes the catalogue controls visually. Resume and contact access remain outside the media interaction.

## Elevation & Depth

Depth comes from actual paper-stack artwork plus soft offset shadows. A small rotation distinguishes loose sheets and photos without rotating reading passages excessively. Paper clips use metallic geometric linework with a small cast shadow.

- **Game sheet:** `drop-shadow(0 13px 10px #17130f60)`.
- **Portrait:** `drop-shadow(0 9px 10px #17130f70)`.
- **Project sheet:** `drop-shadow(0 8px 8px #18130f50)`.
- **Clip:** `drop-shadow(3px 5px 2px #1d170d80)`.

**The Material Depth Rule.** Shadows support the photographed paper and clip materials; they are not generic floating UI-card decoration.

## Shapes

Use the shipped paper-stack and red-paper rasters for organic edges. Contribution strips reuse the red-paper silhouette with an ochre filter. Do not substitute CSS polygons or uniformly rounded panels for the torn paper. The media region remains rectangular and readable; its controls are real buttons, not baked into the material.

The real portrait is cropped within its paper frame and treated with sepia, reduced saturation, and contrast. Decorative temple art stays separate from real project artwork. Poster play actions may use a rounded capsule; that functional control does not replace the paper shape language.

## Components

### Navigation

Lobster wordmark on the left, Newsreader links on the right. Home has a parchment backing; Contact uses the red strip. Links have a restrained tilt on hover. Mobile uses a named menu button, visible focus, and an expandable navigation area.

### Game tabs and player

Paper tabs select the game and expose selected state through ARIA. Arrow keys, Home, and End move between tabs. A red strip identifies the current game; inactive tabs use warm paper. Hover lift is a short 200ms transition, disabled under reduced motion.

Desktop previews load when visible and begin muted. The visible selected player may rotate after 30 seconds; hovering the sheet holds rotation, and the explicit playback/sound controls pause it until re-enabled. Mobile loads a player only after a tap and does not rotate games automatically. Players remain mounted after use to preserve their position; inactive or offscreen players pause. Keep the source link and fallback outside the iframe.

### Contribution labels

An ochre torn strip introduces the specific contribution summary. The label is attached to real project detail; it is not an invented eyebrow preceding every heading. Dark text must stay on the light paper's interior, away from darker torn edges.

### Project sheets

Wide parchment surfaces frame actual project artwork, titles, confirmed contribution copy, technologies, and links. Use the existing catalogue filters and expansion affordance. Generated illustrative artwork must not replace authentic screenshots as evidence of shipped work.

### Controls and focus

Keyboard focus uses a teal outline with an offset. Text selection uses ochre with dark ink. Player controls have clear accessible names and disabled sound controls before player readiness. Preserve native video controls and external fallback links.

## Do's and Don'ts

### Do:

- **Do** use the approved scrapbook image as the visual reference and actual code as token evidence.
- **Do** preserve real portraits, real game assets, and confirmed contribution claims.
- **Do** keep paper texture behind readable HTML and controls.
- **Do** keep CV, project details, and contact reachable without playing a video.
- **Do** respect mobile tap-to-play and reduced-motion preferences.

### Don't:

- **Don't** return to the rejected pitch-black engineering dashboard or fixed bottom dock.
- **Don't** replace the paper materials with flat rounded rectangles.
- **Don't** use decorative image text in place of accessible headings or navigation.
- **Don't** canonize legacy eyebrow labels or obsolete Anton rules as part of this system.

The old PRODUCT.md composition language and any earlier Project Theatre review artifacts are superseded by the user's latest approved reference for this redesign. They are not silently rewritten here, and this design document makes no automatic build-phase or accessibility-certification claim.
