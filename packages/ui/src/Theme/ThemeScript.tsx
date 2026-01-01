import React from "react";

/**
 * ThemeScript - Blocking script to prevent flash of light content in dark mode
 *
 * Add this component to your Next.js layout.tsx file before the ThemeProvider.
 * Make sure to add `suppressHydrationWarning` to both `<html>` and `<body>` tags
 * to prevent hydration mismatches.
 *
 * @example
 * ```tsx
 * import { ThemeScript, ThemeProvider } from 'uilab';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html suppressHydrationWarning>
 *       <body suppressHydrationWarning>
 *         <ThemeScript />
 *         <ThemeProvider>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export const ThemeScript: React.FC<{
  storageKey?: string;
  defaultTheme?: "light" | "dark" | "system";
}> = ({ storageKey = "uilab-theme", defaultTheme = "system" }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Disable transitions immediately to prevent flash
              var noTransitionStyle = document.createElement('style');
              noTransitionStyle.textContent = '* { transition: none !important; }';
              document.head.appendChild(noTransitionStyle);
              
              var theme = localStorage.getItem('${storageKey}') || '${defaultTheme}';
              var resolvedTheme = theme;
              
              if (theme === 'system') {
                resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              }
              
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(resolvedTheme);
              document.documentElement.setAttribute('data-theme', resolvedTheme);
              
              // Set initial background color to prevent flash - use !important
              if (resolvedTheme === 'dark') {
                var darkStyle = document.createElement('style');
                darkStyle.textContent = 'html, body { background-color: #111827 !important; color: #f9fafb !important; }';
                document.head.appendChild(darkStyle);
              }
              
              // Re-enable transitions after a short delay
              setTimeout(function() {
                noTransitionStyle.remove();
              }, 100);
            } catch (e) {
              document.documentElement.classList.add('light');
              document.documentElement.setAttribute('data-theme', 'light');
            }
          })();
        `,
      }}
    />
  );
};
