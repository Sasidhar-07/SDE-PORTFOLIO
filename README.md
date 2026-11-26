# Sasidhar — Living Systems Portfolio

A cinematic, interactive portfolio for Pannuru Sasidhar, built with Next.js, React and custom CSS/Canvas motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Experience notes

- Pointer-reactive particle atmosphere and portrait perspective
- Scroll-revealed editorial storytelling
- Animated, interactive product study panels for three projects
- Selectable capability layers
- Live Bengaluru clock and responsive navigation
- Reduced-motion support

The portrait and resume are included in `public/`. Project destinations and profile links are embedded in `app/page.tsx` and should be checked before publishing.

## Interactive Developer Universe
The portfolio is designed as a cinematic, character-led universe. Visitors choose one of five portal destinations. Sasidhar appears as an on-screen guide and explains each destination through readable dialogue and mission briefs (no voice-over). The project multiverse leads to the project showcase, skill nexus, research dimension, and contact mission.


## Roaming character update

The site now includes a persistent Sasidhar guide that moves between chapter positions as the visitor scrolls. His field-note bubble changes with the active chapter, and the five portal destinations orbit around the central portrait. The guide uses the supplied portrait with CSS movement and depth effects; it is a 2D portrait animation, not a fully rigged 3D character. A true cinematic walk cycle would require a separately prepared character rig or animation asset.

