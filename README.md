# VeoGrowth LinkedIn Banner

A professional LinkedIn banner design for VeoGrowth, built with React, Tailwind CSS, and Vite. Features a dark, modern aesthetic with company logos and high-quality PNG export functionality.

![Banner Preview](https://github.com/Dmitry556/veogrowth-banner/blob/main/preview.png?raw=true)

## Features

- **Perfect LinkedIn Dimensions**: 1584 × 396px (personal profile banner)
- **High-Quality Export**: Built-in PNG export at 3x resolution
- **Modern Design**: Dark theme with teal accent colors
- **Company Logo Wall**: 10 major company logos (Apple, Google, Microsoft, Amazon, Meta, Netflix, Tesla, HubSpot, Adobe, IBM)
- **Responsive Typography**: Montserrat, Space Grotesk, and Inter fonts
- **Grid Background**: Subtle grid pattern for depth
- **Safe Zone Aware**: Designed around LinkedIn's profile picture overlay zones

## Design Specifications

### Canvas
- **Size**: 1584 × 396 px
- **Background**: `#0a0a0a` (near black)

### Color Palette

| Purpose | Color | Value |
|---------|-------|-------|
| Background | Near Black | `#0a0a0a` |
| Primary Accent | Teal | `#2DD4BF` |
| Dark Accent | Deep Teal | `#0D6E5A` |
| Primary Text | White | `#ffffff` |
| Secondary Text | 70% White | `rgba(255,255,255,0.7)` |
| Muted Text | 80% White | `rgba(255,255,255,0.8)` |

### Typography

**VeoGrowth Logo**
- Font: Montserrat
- Weight: 600 (semibold)
- Size: 18px
- Letter Spacing: 0.28em
- Transform: Uppercase
- Color: `rgba(255,255,255,0.8)`

**Main Headline**
- Font: Space Grotesk
- Weight: 600
- Size: 90px
- Letter Spacing: -3px
- Line Height: 1.1
- Color: White with teal accent

**Subheading**
- Font: Inter
- Weight: 600
- Size: 24px
- Letter Spacing: 0.15em
- Transform: Uppercase
- Color: White with teal accent

**Logo Section Label**
- Font: Inter
- Weight: 500
- Size: 18px
- Letter Spacing: 1px
- Color: `rgba(255,255,255,0.7)`

### Layout Elements

**Grid Pattern**
- Cell Size: 60px × 60px
- Line Color: `rgba(255,255,255,0.08)`
- Line Width: 1px

**Teal Glow**
- Type: Radial gradient
- Position: 80% horizontal, 50% vertical
- Color: `rgba(45, 212, 191, 0.06)` → transparent
- Spread: 60%

**Logo Section Background**
- Gradient: `linear-gradient(135deg, rgba(10,10,10,0.98), rgba(10,10,10,0.85))`
- Size: 420px × 240px
- Position: Top-left corner

**Bottom Accent Line**
- Width: 60% of banner width
- Height: 3px
- Gradient: `transparent → #2DD4BF → #0D6E5A`

**Company Logos**
- Grid: 5 columns × 2 rows
- Gap: 8px vertical, 16px horizontal
- Size: 56px × 56px
- Filter: `invert(1) opacity(0.7)`

## LinkedIn Safe Zones

LinkedIn overlays profile pictures on banners, creating "dead zones":

- **Desktop**: ~300×300px circle, bottom-left
- **Mobile**: ~400×400px circle, more centered-left

This design keeps all critical content in the **right two-thirds** of the banner to avoid the profile picture overlay.

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dmitry556/veogrowth-banner.git
cd veogrowth-banner

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173` (or next available port).

### Development

```bash
# Run dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

### Viewing the Banner
1. Run `npm run dev`
2. Open `http://localhost:5173` in your browser
3. The banner displays at full size (1584×396px)
4. Scroll horizontally if your screen is smaller

### Exporting for LinkedIn

**Method 1: Export Button (Recommended)**
1. Click **"Export PNG (High Quality)"** button in top-right
2. Downloads as `linkedin-banner.png` at 3x resolution
3. Upload directly to LinkedIn

**Method 2: Browser DevTools Screenshot**
1. Right-click on the banner → "Inspect"
2. In DevTools, right-click the banner element
3. Select "Capture node screenshot"
4. Saves exact dimensions at Retina resolution

**Method 3: Manual Screenshot (MacBook)**
1. Zoom browser to ~90% so banner fits on screen
2. Use `Cmd + Shift + 4` and drag to capture banner area
3. Retina display captures at 2x resolution (~2851×713px)

### File Size Optimization

LinkedIn's limit is **8MB**. This banner exports at ~2-4MB, well under the limit.

If you need to reduce size:
```bash
# Using ImageMagick
convert linkedin-banner.png -quality 95 -resize 1584x396 optimized.png

# Using pngquant
pngquant --quality=90-100 linkedin-banner.png
```

## Project Structure

```
veogrowth-banner/
├── src/
│   ├── App.jsx          # Main banner component
│   ├── index.css        # Global styles + Tailwind imports
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS with Tailwind plugin
```

## Customization

### Changing Colors

Edit `src/App.jsx` and update these values:

```javascript
// Background
backgroundColor: '#0a0a0a'

// Primary accent (teal)
color: '#2DD4BF'

// Dark accent
background: '... #0D6E5A'
```

### Updating Company Logos

Edit the `logos` array in `src/App.jsx`:

```javascript
const logos = [
  { name: 'YourCompany', url: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/yourlogo.svg' },
  // Add more...
];
```

Find logos at [Simple Icons](https://simpleicons.org/).

### Changing Text

Update the headline and subheading in `src/App.jsx`:

```jsx
<h1>
  Your headline here.<br/>
  <span style={{ color: '#2DD4BF' }}>Accent text.</span>
</h1>
<p>
  Your subheading. <span style={{ color: '#2DD4BF' }}>60 Days.</span>
</p>
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first CSS
- **html2canvas** - High-quality PNG export
- **Google Fonts** - Montserrat, Space Grotesk, Inter
- **Simple Icons** - Company logo SVGs

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT License - feel free to use for your own LinkedIn banners!

## Credits

Built by [Dmitry Pinchuk](https://github.com/Dmitry556) with [Claude Code](https://claude.com/claude-code)

---

**Need help?** Open an issue or contact dmitry@veogrowth.com
