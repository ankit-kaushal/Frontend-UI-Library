# Component Page Template

This guide shows how to create a new component documentation page using the reusable components.

## Quick Start

```tsx
"use client";

import { YourComponent } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function YourComponentPage() {
  return (
    <ComponentPageLayout
      title="Your Component"
      description="A brief description of your component"
    >
      <DemoSection
        title="Basic Usage"
        code={`import { YourComponent } from 'uiplex';

<YourComponent prop="value" />`}
      >
        <YourComponent prop="value" />
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "prop",
                type: "string",
                default: "-",
                description: "Description of the prop",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
```

## Available Components

### ComponentPageLayout

The main wrapper component that provides consistent layout and styling.

**Props:**
- `title` (string): Component name
- `description` (string): Component description
- `children` (ReactNode): Page content

### DemoSection

A section that displays a demo with optional code example.

**Props:**
- `title` (string): Section title
- `children` (ReactNode): Demo content
- `code` (string, optional): Code example to display
- `language` (string, optional): Code language (default: "tsx")

### APISection

Displays API reference tables.

**Props:**
- `title` (string, optional): Section title (default: "API Reference")
- `tables` (array): Array of table objects
  - Each table can have:
    - `title` (string, optional): Table title
    - `data` (array): Array of prop objects
      - `prop` (string): Prop name
      - `type` (string): Prop type
      - `default` (string): Default value
      - `description` (string): Prop description

### APITable

A single API table component (used internally by APISection).

**Props:**
- `data` (array): Array of prop objects
- `title` (string, optional): Table title

## Styling

### Common Styles

All common styles are in `ComponentPageLayout.module.scss`. You can use these utility classes:

- `.demoGroup`: Horizontal flex layout with gap
- `.demoGroupVertical`: Vertical flex layout with gap
- `.demoGrid`: Grid layout for multiple demos

### Component-Specific Styles

Create a `page.module.scss` file in your component directory for component-specific styles only.

Example:
```scss
// Component-specific styles only
// Common styles are in ComponentPageLayout.module.scss

.myCustomLayout {
  display: flex;
  gap: 1rem;
}
```

## Examples

### Basic Page

```tsx
<ComponentPageLayout title="Button" description="A button component">
  <DemoSection title="Basic Usage" code={`<Button>Click me</Button>`}>
    <Button>Click me</Button>
  </DemoSection>
</ComponentPageLayout>
```

### Multiple Sections

```tsx
<ComponentPageLayout title="Button" description="A button component">
  <DemoSection title="Variants" code={...}>
    {/* Demo content */}
  </DemoSection>
  
  <DemoSection title="Sizes" code={...}>
    {/* Demo content */}
  </DemoSection>
  
  <APISection tables={[...]} />
</ComponentPageLayout>
```

### Multiple API Tables

```tsx
<APISection
  tables={[
    {
      title: "Component Props",
      data: [...]
    },
    {
      title: "ComponentGroup Props",
      data: [...]
    }
  ]}
/>
```

## Benefits

1. **Consistency**: All component pages have the same look and feel
2. **Maintainability**: Update styles in one place
3. **Speed**: Create new pages faster
4. **Type Safety**: TypeScript support for all props
5. **Responsive**: Built-in responsive design
