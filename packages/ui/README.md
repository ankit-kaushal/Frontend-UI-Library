# uilab

A modern React component library built with TypeScript, featuring beautiful, accessible, and customizable UI components.

## Installation

```bash
npm install uilab
# or
yarn add uilab
# or
pnpm add uilab
```

## Peer Dependencies

This library requires React 18+:

```bash
npm install react react-dom
```

## Quick Start

**With Modern Bundlers (Vite, Webpack 5, Next.js, etc.):**

CSS is automatically included when you import components! Just import and use:

```tsx
import { Button, Loader, Radio, RadioGroup, ThemeProvider } from 'uilab';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

**If CSS is not automatically loaded**, import it manually:

```tsx
import { Button } from 'uilab';
import 'uilab/styles.css'; // Only needed if bundler doesn't auto-include
```

## Components

### Button

A versatile button component with multiple variants, sizes, and color schemes.

```tsx
import { Button } from 'uilab';

<Button variant="primary" size="md" colorScheme="blue">
  Primary Button
</Button>

<Button variant="outline" size="lg" loading>
  Loading...
</Button>
```

**Props:**
- `variant`: `"primary" | "secondary" | "outline" | "link"`
- `size`: `"xs" | "sm" | "md" | "lg"`
- `colorScheme`: `"blue" | "green" | "red" | "yellow" | "purple" | "gray"`
- `disabled`: `boolean`
- `loading`: `boolean`
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`

### Loader

A flexible loading indicator with multiple variants.

```tsx
import { Loader } from 'uilab';

<Loader variant="spinner" size="md" />
<Loader variant="dots" size="lg" />
<Loader variant="pulse" isCentered />
```

**Props:**
- `variant`: `"spinner" | "dots" | "pulse"`
- `size`: `"xs" | "sm" | "md" | "lg"`
- `width`: `number` (optional)
- `height`: `number` (optional)
- `isCentered`: `boolean`

### Radio & RadioGroup

Radio button components with support for groups and custom styling.

```tsx
import { Radio, RadioGroup } from 'uilab';

<RadioGroup
  name="option"
  value={selected}
  onChange={(value) => setSelected(value)}
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

**Radio Props:**
- `name`: `string` (required)
- `value`: `string`
- `checked`: `boolean`
- `disabled`: `boolean`
- `label`: `string`
- `description`: `string`
- `size`: `"sm" | "md" | "lg"`
- `colorScheme`: `"blue" | "green" | "red" | "yellow" | "purple" | "gray"`

**RadioGroup Props:**
- `name`: `string` (required)
- `value`: `string`
- `options`: `Array<{ value: string; label?: string; description?: string; disabled?: boolean }>`
- `orientation`: `"horizontal" | "vertical"`

## Theme System

The library includes a comprehensive theme system with light, dark, and system preference support.

### ThemeProvider

Wrap your app with `ThemeProvider` to enable theme functionality:

```tsx
import { ThemeProvider, useTheme } from 'uilab';
import 'uilab/theme.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

### useTheme Hook

Access and control the theme in your components:

```tsx
import { useTheme } from 'uilab';

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}
```

### ThemeToggle Component

A ready-to-use theme toggle component:

```tsx
import { ThemeToggle } from 'uilab';

<ThemeToggle />
```

## Styling

**CSS is automatically included** when you import components (with modern bundlers like Vite, Webpack 5, Next.js, etc.). The library uses CSS variables for theming.

The bundled CSS includes:
- Theme CSS variables (light/dark mode support)
- Button styles
- Loader styles  
- Radio styles

All components automatically adapt to the current theme (light/dark) based on CSS variables.

**If you need to import CSS manually** (for older bundlers or specific setups):

```tsx
import 'uilab/styles.css';
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All components and their props are fully typed.

## License

MIT

