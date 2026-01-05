# Uiplex - Theme System Guide

This guide explains how to implement theme switching in your application using the Uiplex theme system.

## Quick Start

### 1. Import Theme CSS

First, import the theme CSS variables in your main CSS file or component:

```css
@import 'uiplex/dist/theme.css';
```

Or if you're using a bundler that supports CSS imports:

```javascript
import 'uiplex/dist/theme.css';
```

### 2. Add ThemeScript (Next.js App Directory only)

For Next.js App Directory, add `ThemeScript` to your `layout.tsx` to prevent flash of light content in dark mode:

```tsx
// app/layout.tsx
import { ThemeScript, ThemeProvider } from 'uiplex';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeScript />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Important:** Add `suppressHydrationWarning` to both `<html>` and `<body>` tags to prevent hydration mismatches, as `ThemeScript` modifies the DOM before React hydrates.

**Note:** For other React apps (Create React App, Vite, etc.), you can skip this step - `ThemeProvider` will handle it automatically.

### 3. Wrap Your App with ThemeProvider

```tsx
import { ThemeProvider } from 'uiplex';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### 4. Add Theme Toggle

```tsx
import { ThemeToggle } from 'uiplex';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeToggle variant="dropdown" showLabel={true} />
    </header>
  );
}
```

## ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `"light" \| "dark" \| "system"` | `"system"` | Initial theme |
| `storageKey` | `string` | `"uiplex-theme"` | localStorage key for theme persistence |
| `children` | `ReactNode` | - | Your app content |

## ThemeToggle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"button" \| "dropdown"` | `"dropdown"` | Toggle style |
| `showLabel` | `boolean` | `true` | Show theme label |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Toggle size |
| `className` | `string` | `""` | Additional CSS classes |

## Usage Examples

### Basic Implementation

```tsx
import { ThemeProvider, ThemeToggle } from 'uiplex';
import 'uiplex/dist/theme.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My App
          </h1>
          <ThemeToggle />
        </header>
        <main className="p-4">
          {/* Your app content */}
        </main>
      </div>
    </ThemeProvider>
  );
}
```

### Custom Theme Toggle

```tsx
import { useTheme, ThemeToggle } from 'uiplex';

function CustomHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="flex justify-between items-center p-4">
        <h1>My App</h1>
        
        {/* Simple button toggle */}
        <ThemeToggle 
          variant="button" 
          showLabel={false} 
          size="sm" 
        />
        
        {/* Or custom implementation */}
        <div className="flex gap-2">
          <button
            onClick={() => setTheme('light')}
            className={`px-3 py-1 rounded ${
              theme === 'light' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`px-3 py-1 rounded ${
              theme === 'dark' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Dark
          </button>
        </div>
      </div>
    </header>
  );
}
```

### Programmatic Theme Control

```tsx
import { useTheme } from 'uiplex';

function ThemeControls() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="space-y-4">
      <div>
        <p>Current theme: {theme}</p>
        <p>Resolved theme: {resolvedTheme}</p>
      </div>
      
      <div className="flex gap-2">
        <button onClick={() => setTheme('light')}>
          Set Light
        </button>
        <button onClick={() => setTheme('dark')}>
          Set Dark
        </button>
        <button onClick={() => setTheme('system')}>
          Set System
        </button>
      </div>
    </div>
  );
}
```

## CSS Variables

The theme system provides these CSS variables that you can use in your own styles:

### Light Theme Variables
```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-tertiary: #9ca3af;
  --border-primary: #e5e7eb;
  --border-secondary: #d1d5db;
  --accent-primary: #3b82f6;
  --accent-secondary: #1d4ed8;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### Dark Theme Variables
```css
[data-theme="dark"] {
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  --border-primary: #374151;
  --border-secondary: #4b5563;
  --accent-primary: #60a5fa;
  --accent-secondary: #3b82f6;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.3);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3);
}
```

### Using CSS Variables

```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-sm);
}

.my-button {
  background-color: var(--accent-primary);
  color: white;
}

.my-button:hover {
  background-color: var(--accent-secondary);
}
```

## Integration with Tailwind CSS

If you're using Tailwind CSS, you can combine both systems:

```tsx
function MyComponent() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">My Title</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This text adapts to the theme
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Click me
      </button>
    </div>
  );
}
```

## Advanced Usage

### Custom Storage Key

```tsx
<ThemeProvider storageKey="my-app-theme-preference">
  <App />
</ThemeProvider>
```

### Multiple Theme Providers

You can have different theme contexts for different parts of your app:

```tsx
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="main-theme">
      <MainApp />
      <ThemeProvider defaultTheme="dark" storageKey="sidebar-theme">
        <Sidebar />
      </ThemeProvider>
    </ThemeProvider>
  );
}
```

### Server-Side Rendering (SSR)

For SSR applications, you might want to prevent hydration mismatches:

```tsx
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'uiplex';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

## Troubleshooting

### Theme Not Switching
- Make sure you've imported the theme CSS
- Check that your components are wrapped in `ThemeProvider`
- Verify that your CSS is using the theme variables

### Hydration Mismatch
- Use the SSR pattern above for Next.js or similar frameworks
- Ensure the initial theme matches between server and client

### Components Not Theming
- uiplex UI components automatically use theme variables
- For custom components, use the CSS variables listed above
- Check that your CSS selectors are correct

## Browser Support

The theme system works in all modern browsers that support:
- CSS Custom Properties (CSS Variables)
- `localStorage`
- `matchMedia` API

For older browsers, the components will fall back to their default light theme appearance.
