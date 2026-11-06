---
name: Project Theatre
description: Muhammad Saad Alam dark personal engineering portfolio.
colors:
  bg: '#0b0b0d'
  surface: '#171719'
  surface-raised: '#202023'
  text: '#f0eeea'
  muted: '#b5b1aa'
  accent: '#ef7667'
  accent-strong: '#e94d4f'
  line: '#39383a'
  overlay: '#000d'
typography:
  display:
    fontFamily: 'Anton, ''Arial Narrow'', sans-serif'
    fontSize: 'clamp(3.4rem, 5.3vw, 5.5rem)'
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: '0'
  headline:
    fontFamily: 'Anton, ''Arial Narrow'', sans-serif'
    fontSize: 'clamp(2.4rem,4.3vw,4rem)'
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: '0'
  title:
    fontFamily: 'Anton, ''Arial Narrow'', sans-serif'
    fontSize: 2.25rem
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: '''IBM Plex Sans'', Arial, sans-serif'
    fontSize: 16px
    lineHeight: 1.7
  label:
    fontFamily: '''IBM Plex Sans'', Arial, sans-serif'
    fontSize: .75rem
    lineHeight: 1.5
    letterSpacing: .07em
  size-01:
    fontSize: 16px
  size-02:
    fontSize: 'clamp(2.4rem,4.3vw,4rem)'
  size-03:
    fontSize: 2.25rem
  size-04:
    fontSize: .75rem
  size-05:
    fontSize: 2rem
  size-06:
    fontSize: .7rem
  size-07:
    fontSize: 1rem
  size-08:
    fontSize: 22px
  size-09:
    fontSize: 'clamp(2rem,4vw,4.7rem)'
  size-10:
    fontSize: .625rem
  size-11:
    fontSize: 'clamp(1.8rem,2.9vw,2.7rem)'
  size-12:
    fontSize: 'clamp(.875rem,1.25vw,1.15rem)'
  size-13:
    fontSize: 1.1rem
  size-14:
    fontSize: .6875rem
  size-15:
    fontSize: .875rem
  size-16:
    fontSize: 'clamp(2rem,3.7vw,3.7rem)'
  size-17:
    fontSize: 1.125rem
  size-18:
    fontSize: .8125rem
  size-19:
    fontSize: 2.5rem
  size-20:
    fontSize: .9375rem
  size-21:
    fontSize: 'clamp(3rem,5.2vw,5rem)'
  size-22:
    fontSize: 'clamp(2rem,3.4vw,3.2rem)'
  size-23:
    fontSize: 18px
  size-24:
    fontSize: 'clamp(1.8rem,2.8vw,3rem)'
  size-25:
    fontSize: 'clamp(3.5rem,6vw,6rem)'
  size-26:
    fontSize: 'clamp(1.4rem,2.7vw,2.6rem)'
  size-27:
    fontSize: 1.4rem
  size-28:
    fontSize: 4.7rem
  size-29:
    fontSize: 1.8rem
  size-30:
    fontSize: 4vw
  size-31:
    fontSize: 3.5rem
  size-32:
    fontSize: 2.2rem
  size-33:
    fontSize: 1.35rem
  size-34:
    fontSize: 3.4rem
  size-35:
    fontSize: 1.45rem
  size-36:
    fontSize: 'clamp(2.1rem,7.7vw,3.2rem)'
  size-37:
    fontSize: .5rem
  size-38:
    fontSize: 2.7rem
  size-39:
    fontSize: 'clamp(2.5rem,9.4vw,3.5rem)'
  size-40:
    fontSize: 2.1rem
  size-41:
    fontSize: 'clamp(3rem,12vw,4rem)'
  size-42:
    fontSize: 'clamp(1.1rem,5.7vw,1.65rem)'
  hero-tablet-max:
    fontSize: 4.5rem
  portrait-caption-mobile:
    fontSize: .5625rem
  hero-mobile-min:
    fontSize: 2.8rem
  game-card-title-min:
    fontSize: 1.6rem
spacing:
  compact: 12px
  inline: 18px
  gutter-mobile: 18px
  gutter-tablet: 24px
  gutter-compact-desktop: 32px
  gutter-desktop: 48px
  section-mobile: 54px
  section-tablet: 68px
  section-desktop: 92px
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.bg}'
    padding: 12px 19px
  button-primary-hover:
    backgroundColor: '{colors.text}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.text}'
    padding: 12px 0
  filter-selected:
    backgroundColor: transparent
    textColor: '{colors.text}'
    padding: 12px 0
  navigation-dock:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.text}'
  video-dialog:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.text}'
    padding: 24px
---

# Design System: Project Theatre

## Overview

**Creative North Star: “Project Theatre”**

A personal introduction and portrait open this dark engineering portfolio. Condensed display typography, warm-white reading text, and controlled coral accents frame Saad?s existing professional content. Work follows the introduction, with the Tollan artwork retained as a Selected Work feature rather than the face of the website.

The user subsequently rejected the Tollan-led opening and requested the earlier personal introduction. That direct request supersedes the banner-first comp. The dark visual system remains, while the original introduction, portrait, headline, actions, and metadata now occupy the hero.

**Key Characteristics:**

- Compact masthead and personal introduction with portrait.
- A responsive games grid leads the work, with Tollan?s artwork inside its card.
- Open, ruled project and company-led career rows.
- Fixed bottom navigation, mobile shortcuts, and expandable menu.
- Preserved professional content, destinations, and supplied imagery.

## Colors

### Primary

Soft coral (accent) carries links, action surfaces, focus rings, and text emphasis. Strong red-coral (accent-strong) supplies punctuation and navigation/filter underlines. Primary action hover uses warm white. These accents form one controlled palette.

### Neutral

Matte black (bg) is the continuous stage and dock background. Charcoal (surface) supports About, project art, expanded navigation, and dialog. Warm white (text) carries primary content; warm gray (muted) supports reading and metadata. Charcoal rules (line) organize entries. The stylesheet also declares surface-raised as a reserved neutral, currently without a component assignment.

**The Dark Stage Rule.** Retain the intentional dark palette in every system preference. The source declares color-scheme: dark; no alternate light palette is implemented.

## Typography

Anton with Arial Narrow/sans-serif fallback supplies condensed uppercase display, section headings, and project titles. IBM Plex Sans with Arial/sans-serif fallback supplies body copy, navigation, controls, and the bold wordmark. Both are self-hosted WOFF2 files with OFL licenses in src/assets/fonts. Newsreader is not used.

Frontmatter defines reusable roles plus size-only entries for every observed CSS font-size declaration. These entries record the real component and responsive vocabulary; they do not assign a common family or weight to every size. Source selectors remain authoritative for assignments. The inventory includes the small hidden wordmark-code declaration without promoting it to a visible role.

Regular Anton headings use near-zero tracking. Dock labels use strong uppercase sans serif. The hero uses its three authored headline lines beside the portrait on desktop. Mobile begins with name and compact portrait, followed by the headline, introduction, actions, and metadata. Coral punctuation replaces the earlier italic serif emphasis. Reading copy commonly uses leading between 1.8 and 1.9, with long descriptions constrained to approximately 70–75ch where defined.

**The Condensed Voice Rule.** Use Anton for major headings and project names; retain IBM Plex Sans for reading and interface text. Uppercase presentation does not authorize rewriting strings.

## Layout

The centered shell caps at 1600px with desktop gutters (48px). Gutters become 32px at 1200px, 24px at 900px, and 18px at 600px. Section padding follows the desktop, tablet, and mobile roles in frontmatter. Wide refinement begins at 1700px.

The compact masthead is 65px high, becoming 64px on mobile. A shallow headline band precedes the edge-to-edge original Tollan image stage. Its preserved source is 1000 × 600; the stage uses a responsive cover crop. An attached caption places the contribution summary beside the title with a coral divider, then stacks them without the divider on mobile. The work reel scrolls horizontally at tablet and mobile widths.

The personal introduction precedes the game-card grid. Tollan, El Patr?n and Narcos lead the default grid; Saudi Plus and the kids? game project follow the game catalogue as the final two project entries. Profile text sits beside the portrait on larger screens; mobile uses a compact portrait/caption block. Career entries lead with company names. Game cards combine contained artwork (250px high), title, description, technology labels, and existing actions. Tollan?s contributions and hub link belong to its own card. Default All work shows six cards including Tollan; expansion shows all twenty games. Category filters preserve the original nineteen-game dataset, with Tollan shown in All work. Skills are horizontal typographic rows, stacking on mobile. Contact remains an open typographic section.

**The Dock Clearance Rule.** Reserve document space beneath content for fixed navigation (100px desktop, 84px mobile). The dock includes safe-area padding. Keep footer content and controls clear of it.

## Elevation & Depth

There are no decorative shadows. Dark tonal surfaces, image scale, thin rules, and spacing establish hierarchy. The dock is opaque. The native video dialog uses a charcoal surface, border, and near-black translucent backdrop.

## Shapes

Artwork, controls, panels, and dialog use square geometry. No reusable rounded scale is implemented. The tiny status dot is the isolated circular detail. Rows have thin rules; filters use two-pixel selected underlines; dock and reel selection uses narrow coral lines. Preserve original images while adapting their presentation.

## Components

### Masthead and bottom navigation

The masthead combines bold sans-serif identity, name, and underlined CV action. On mobile the name hides, a square menu button appears, and the bottom dock shows Work, Projects, and Contact shortcuts. The full menu expands upward above the dock. Preserve its accessible name, expanded state, controlled region, Escape handling, and close-on-navigation behavior. Current sections receive aria-current="location" and a coral underline.

### Game catalogue

Tollan is a peer of the other games in the responsive three/two/one-column catalogue. Its original image, date label, description, contributions, technologies and play-hub action stay together in one card. Other cards retain their artwork, text, store links and gameplay dialogs. Saudi Plus and the kids? game project appear after the games.

### Actions and filters

Coral primary actions use matte-black text, minimum height (48px), and warm-white hover feedback. Secondary actions use warm-white text and a muted bottom rule, becoming coral on hover. Coral text actions gain an underline. Directional icons move two pixels. Disabled buttons reduce opacity (.55).

Project filters use plain buttons with aria-pressed, warm-white selected text, and a strong coral bottom rule. Preserve the live count, filtering, expansion, and video triggers. Technology labels remain plain text rather than pills.

### Open rows and contact

Selected-work and career rows set large condensed titles against supporting content. Catalogue rows retain contained original artwork and square gameplay controls. Skill rows pair title/description with a wrapping text list. Contact uses a large condensed heading with coral emphasis, prominent email, copying status, and ruled social links.

### Dialog, focus, and motion

The native video dialog caps at 900px with viewport margins (16px), maximum height (85dvh), a square close control, 16:9 player, and fallback link. Preserve keyboard and modal behavior.

Keyboard focus uses a coral two-pixel outline offset by six pixels; the skip link becomes visible on focus. Stage reveal lasts 1000ms. Reduced-motion mode removes smooth scrolling, image reveal, and directional icon movement. It removes underline transitions while retaining inactive/active transforms, preventing false selected states.

Review evidence belongs in the review artifacts. This document does not claim full WCAG certification or a full deterministic phase pass. The automated plate gate remains open: preserving the supplied 1000px Tollan artwork takes precedence over generating a 1536px replacement. Manual fidelity review assesses the approved composition using original imagery.

## Do's and Don'ts

### Do:

- **Do** treat src/index.css as the actual token and responsive behavior authority.
- **Do** preserve every professional string, project, skill, link, and interaction.
- **Do** keep work imagery prominent, captions attached, and secondary content in open ruled rows.
- **Do** retain dock clearance, visible focus, accessible states, and reduced-motion behavior.

### Don't:

- **Don't** restore the rejected light paper palette or put client game artwork ahead of the owner?s introduction.
- **Don't** add rounded card grids, decorative shadows, glass effects, or a filled contact panel.
- **Don't** regenerate supplied artwork to satisfy a plate-size expectation.
- **Don't** rewrite preserved labels or describe an open gate as an automatic pass.
