# Uilab - React Component Library Monorepo

A monorepo containing a React component library built with TypeScript and a Next.js documentation site with a scalable development workflow.

## Structure

```
Frontend-UI-Library/
├─ packages/
│  └─ ui/                    # React component library bundled with tsup
│     └─ src/
│        ├─ Button/          # Component folder structure
│        │  ├─ Button.tsx    # Component implementation
│        │  ├─ Button.css    # Component styles
│        │  └─ index.ts      # Component exports
│        └─ index.ts         # Main library exports
├─ apps/
│  └─ docs/                  # Next.js app to showcase components
│     ├─ src/
│     │  ├─ app/             # Next.js 14 app directory
│     │  └─ components/      # Component documentation pages
│     └─ tsconfig.json       # TypeScript config with path aliases
├─ scripts/
│  └─ dev.sh                 # Custom development script with fswatch
└─ package.json              # Root package with workspace scripts
```

## Features

- **UI Package**: TypeScript + React components bundled with tsup
- **Documentation**: Next.js 14 app with modern styling
- **Monorepo**: npm workspaces for efficient package management
- **Multiple Development Modes**: Concurrent builds, watch modes, and file watching
- **Component-Level CSS**: Each component imports its own styles
- **TypeScript Path Aliases**: Direct source imports during development
- **Scalable Architecture**: Organized component folder structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+
- fswatch (for custom development script): `brew install fswatch`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the UI package:
```bash
npm run build
```

3. Start development:
```bash
# Full development (recommended)
npm run dev

# UI package only (watch mode)
npm run dev:ui

# Docs only
npm run dev:docs

# Custom development script (alternative)
./scripts/dev.sh
```

## Development Workflow

### Available Development Scripts

| Script | Description | Use Case |
|--------|-------------|----------|
| `npm run dev` | Runs both UI package + docs server concurrently | **Full development** - working on both components and docs |
| `npm run dev:ui` | Runs only UI package in watch mode | **Component development** - working on UI components only |
| `npm run dev:docs` | Runs only docs server | **Documentation work** - working on docs only |
| `./scripts/dev.sh` | Uses fswatch to auto-rebuild UI package | **Alternative approach** - different file watching method |

### Recommended Workflow

1. **For general development**: `npm run dev` (both UI and docs)
2. **For UI component work**: `npm run dev:ui` (just the UI package)
3. **For docs work**: `npm run dev:docs` (just the docs)
4. **For custom file watching**: `./scripts/dev.sh` (in separate terminal)

## Component Architecture

### Component Structure

Each component follows a dedicated folder structure:

```
packages/ui/src/ComponentName/
├─ ComponentName.tsx    # Component implementation
├─ ComponentName.css    # Component styles (plain CSS)
└─ index.ts            # Component exports
```

### Styling Strategy

- **Component-Level CSS**: Each component imports its own CSS file
- **Plain CSS**: No SCSS modules for better library consumption
- **CSS Classes**: BEM-like naming convention (e.g., `ui-button--primary`)
- **Automatic Bundling**: Next.js handles CSS imports via `transpilePackages`

### TypeScript Configuration

The docs app uses TypeScript path aliases for direct source imports:

```json
{
  "paths": {
    "@uilab/ui": ["../../packages/ui/src"]
  }
}
```

This enables:
- Direct imports from source during development
- Faster feedback loop
- No need to rebuild for every change

## UI Package (`packages/ui`)

The UI package contains React components built with TypeScript and bundled using tsup.

**Available Scripts:**
- `npm run build` - Build the library (CJS + ESM + types)
- `npm run dev` - Watch mode for development
- `npm run clean` - Clean build artifacts
- `npm run type-check` - Type checking

### Adding New Components

1. Create component folder: `packages/ui/src/ComponentName/`
2. Add component files:
   - `ComponentName.tsx` - Component implementation
   - `ComponentName.css` - Component styles
   - `index.ts` - Component exports
3. Export from `packages/ui/src/index.ts`
4. Add documentation page in `apps/docs/src/app/components/`
5. Update overview page in `apps/docs/src/app/page.tsx`

## Docs App (`apps/docs`)

A Next.js 14 application that showcases the UI components.

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

**Features:**
- Component documentation pages
- Interactive examples
- API reference tables
- Responsive design
- TypeScript path aliases for UI package imports
- Dark/Light theme toggle with system preference support

## Building for Production

```bash
# Build all packages
npm run build

# Build specific package
npm run build --workspace=@uilab/ui
```

## Theme System

The documentation site and UI components include a comprehensive theme system with:

- **Light Theme**: Clean, bright interface for daytime use
- **Dark Theme**: Easy on the eyes for low-light environments  
- **System Theme**: Automatically follows your OS preference (default)
- **Persistent Storage**: Remembers your theme choice
- **Smooth Transitions**: Elegant theme switching animations
- **Component-Level Theming**: All UI components automatically adapt to the current theme

### Theme Features

**Documentation Site:**
- Theme toggle in the top navigation bar
- Dropdown with Light, Dark, and System options
- Real-time theme switching
- Responsive design that works in all themes

**UI Components:**
- Button, Radio, and Loader components support theming
- CSS variables ensure consistent theming across all components
- Fallback colors for environments without theme variables
- Automatic adaptation to light/dark themes

### For Library Consumers

The theme system is available for consumers of the library. See the [Theme Guide](packages/ui/THEME_GUIDE.md) for detailed implementation instructions.

**Quick Start:**
```tsx
import { ThemeProvider, ThemeToggle } from '@uilab/ui';
import '@uilab/ui/dist/theme.css';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

The theme toggle is located in the top navigation bar and provides a dropdown with all three options.

## Technologies Used

- **UI Package**: TypeScript, React, tsup, plain CSS
- **Docs App**: Next.js 14, TypeScript, CSS modules
- **Monorepo**: npm workspaces
- **Development**: concurrently, fswatch
- **Styling**: Plain CSS with component-level imports
- **Theme System**: CSS variables with React context