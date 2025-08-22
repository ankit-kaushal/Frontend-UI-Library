# TSLB UI Library - React Component Library Monorepo

A monorepo containing a React component library built with TypeScript and a Next.js documentation site.

## Structure

```
my-library/
├─ packages/
│  └─ ui/       # React component library bundled with tsup
├─ apps/
│  └─ docs/     # Next.js app to showcase components
└─ package.json
```

## Features

- **UI Package**: TypeScript + React components bundled with tsup
- **Documentation**: Next.js 14 app with SCSS modules
- **Monorepo**: npm workspaces for efficient package management
- **Watch Mode**: Automatic rebuilding when UI components change
- **TypeScript**: Full type safety across the entire project

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the UI package:
```bash
npm run build
```

3. Start the development server:
```bash
# Start docs app only
npm run dev

# Start with watch mode (recommended for development)
npm run dev:watch
```

## Development

### UI Package (`packages/ui`)

The UI package contains React components built with TypeScript and bundled using tsup.

**Available Scripts:**
- `npm run build` - Build the library (CJS + ESM + types)
- `npm run dev` - Watch mode for development
- `npm run clean` - Clean build artifacts
- `npm run type-check` - Type checking

**Current Components:**
- `Button` - A versatile button component with multiple variants and sizes

### Docs App (`apps/docs`)

A Next.js 14 application that showcases the UI components.

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Watch Mode

For the best development experience, use the watch mode:

```bash
npm run dev:watch
```

This will:
1. Start the UI package in watch mode (automatically rebuilds on changes)
2. Start the docs app in development mode
3. Any changes to UI components will be automatically reflected in the docs app

## Adding New Components

1. Create your component in `packages/ui/src/`
2. Export it from `packages/ui/src/index.ts`
3. The component will be automatically available in the docs app

## Building for Production

```bash
# Build all packages
npm run build

# Build specific package
npm run build --workspace=@tslb/ui
```

## Technologies Used

- **UI Package**: TypeScript, React, tsup
- **Docs App**: Next.js 14, TypeScript, SCSS modules
- **Monorepo**: npm workspaces
- **Styling**: SCSS modules

## License

MIT