# Theme System Example

Here's a complete example of how to implement theme switching in your application:

## 1. Install the Library

```bash
npm install @tslb/ui
```

## 2. Basic Implementation

```tsx
// App.tsx
import { ThemeProvider, ThemeToggle, Button, Radio } from '@tslb/ui';
import '@tslb/ui/dist/theme.css';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                My App
              </h1>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-6">
              {/* Button Examples */}
              <section>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Buttons
                </h2>
                <div className="space-x-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </section>

              {/* Radio Examples */}
              <section>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Radio Buttons
                </h2>
                <div className="space-y-2">
                  <Radio name="example" value="option1" label="Option 1" />
                  <Radio name="example" value="option2" label="Option 2" />
                  <Radio name="example" value="option3" label="Option 3" />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## 3. Custom Theme Toggle

```tsx
// CustomThemeToggle.tsx
import { useTheme } from '@tslb/ui';

function CustomThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        Theme: {theme}
      </span>
      <div className="flex rounded-md shadow-sm">
        <button
          onClick={() => setTheme('light')}
          className={`px-3 py-1 text-sm font-medium rounded-l-md border ${
            theme === 'light'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-3 py-1 text-sm font-medium border-t border-b ${
            theme === 'dark'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`px-3 py-1 text-sm font-medium rounded-r-md border ${
            theme === 'system'
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          System
        </button>
      </div>
      {theme === 'system' && (
        <span className="text-xs text-gray-500">
          ({resolvedTheme})
        </span>
      )}
    </div>
  );
}
```

## 4. Using CSS Variables in Your Own Components

```css
/* styles.css */
.my-custom-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-sm);
}

.my-custom-button {
  background-color: var(--accent-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.my-custom-button:hover {
  background-color: var(--accent-secondary);
}
```

## 5. Integration with Tailwind CSS

```tsx
// TailwindExample.tsx
function TailwindExample() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          Tailwind + TSLB UI Theme
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Card Title</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This card uses Tailwind classes for theming.
            </p>
            <Button variant="primary">TSLB Button</Button>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Another Card</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Both Tailwind and TSLB UI components work together.
            </p>
            <Radio name="demo" value="yes" label="Yes, it works!" />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## 6. Server-Side Rendering (Next.js)

```tsx
// _app.tsx (Next.js)
import { ThemeProvider } from '@tslb/ui';
import '@tslb/ui/dist/theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

## 7. Programmatic Theme Control

```tsx
// ThemeController.tsx
import { useTheme } from '@tslb/ui';

function ThemeController() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    const themes = ['light', 'dark', 'system'] as const;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div className="space-y-4">
      <div className="text-sm">
        <p>Current theme: <strong>{theme}</strong></p>
        <p>Resolved theme: <strong>{resolvedTheme}</strong></p>
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme('light')}
          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded"
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="px-3 py-1 bg-gray-800 text-white rounded"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded"
        >
          System
        </button>
        <button
          onClick={cycleTheme}
          className="px-3 py-1 bg-green-100 text-green-800 rounded"
        >
          Cycle
        </button>
      </div>
    </div>
  );
}
```

This example shows how easy it is to implement theme switching in your application using the TSLB UI Library theme system!
