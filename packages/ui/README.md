# uiplex

A modern React component library built with TypeScript, featuring beautiful, accessible, and customizable UI components.

🌐 **Documentation & Live Examples:** [https://uiplex.ankitkaushal.in/](https://uiplex.ankitkaushal.in/)

## Installation

```bash
npm install uiplex
# or
yarn add uiplex
# or
pnpm add uiplex
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
import { Button, Loader, Radio, RadioGroup, Select, ThemeProvider } from 'uiplex';

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
import { Button } from 'uiplex';
import 'uiplex/styles.css'; // Only needed if bundler doesn't auto-include
```

## Components

### Button

A versatile button component with multiple variants, sizes, and color schemes.

```tsx
import { Button } from 'uiplex';

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
import { Loader } from 'uiplex';

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
import { Radio, RadioGroup } from 'uiplex';

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

### Text

Typography component with sizes, weights, colors, and alignment options.

```tsx
import { Text } from 'uiplex';

<Text size="lg" weight="bold" color="primary">
  Heading Text
</Text>

<Text size="md" align="center">
  Centered text
</Text>
```

**Props:**
- `size`: `"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"`
- `weight`: `"normal" | "medium" | "semibold" | "bold"`
- `color`: `"primary" | "secondary" | "success" | "error" | "warning" | "info"`
- `align`: `"left" | "center" | "right" | "justify"`
- `as`: `"p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"`

### Box

A versatile container component that serves as a building block for layouts.

```tsx
import { Box } from 'uiplex';

<Box padding="md" margin="lg" borderRadius="md" bg="primary">
  Content here
</Box>
```

**Props:**
- `padding`: `string | number`
- `margin`: `string | number`
- `width`: `string | number`
- `height`: `string | number`
- `bg`: `string`
- `borderRadius`: `string | number`
- All standard HTML div props

### Flex

A flexible layout component built on CSS Flexbox.

```tsx
import { Flex } from 'uiplex';

<Flex direction="row" align="center" justify="space-between" gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>
```

**Props:**
- `direction`: `"row" | "column" | "row-reverse" | "column-reverse"`
- `align`: `"flex-start" | "flex-end" | "center" | "stretch" | "baseline"`
- `justify`: `"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"`
- `wrap`: `"nowrap" | "wrap" | "wrap-reverse"`
- `gap`: `string | number`
- All standard HTML div props

### Grid

CSS Grid layout component for two-dimensional layouts.

```tsx
import { Grid } from 'uiplex';

<Grid columns={3} gap="md" rows="auto">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>
```

**Props:**
- `columns`: `number | string`
- `rows`: `number | string`
- `gap`: `string | number`
- All standard HTML div props

### Modal

Modal dialog component for overlays and popups.

```tsx
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure } from 'uiplex';

function MyComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modal content goes here
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

**Modal Props:**
- `isOpen`: `boolean`
- `onClose`: `() => void`
- `size`: `"xs" | "sm" | "md" | "lg" | "xl" | "full"`
- `closeOnOverlayClick`: `boolean`
- `closeOnEsc`: `boolean`

### Input

Form input component with validation support.

```tsx
import { Input, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

<FormControl isInvalid={hasError}>
  <FormLabel>Email</FormLabel>
  <Input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <FormErrorMessage>Email is required</FormErrorMessage>
</FormControl>
```

**Input Props:**
- `size`: `"sm" | "md" | "lg"`
- `variant`: `"outline" | "filled" | "flushed" | "unstyled"`
- `isInvalid`: `boolean`
- `isDisabled`: `boolean`
- `isReadOnly`: `boolean`
- All standard HTML input props

### Textarea

Multi-line text input component.

```tsx
import { Textarea } from 'uiplex';

<Textarea
  placeholder="Enter your message"
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

**Props:**
- `size`: `"sm" | "md" | "lg"`
- `variant`: `"outline" | "filled" | "flushed" | "unstyled"`
- `isInvalid`: `boolean`
- `isDisabled`: `boolean`
- All standard HTML textarea props

### Select

Custom dropdown select component with single and multi-select modes, search functionality, and validation support.

```tsx
import { Select, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

// Single select
<Select
  placeholder="Select an option"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  value={value}
  onChange={(value) => setValue(value)}
/>

// Multi-select
<Select
  mode="multiple"
  placeholder="Select multiple options"
  options={options}
  value={values}
  onChange={(values) => setValues(values)}
/>

// With search
<Select
  searchable
  placeholder="Search and select..."
  options={options}
/>

// With FormControl
<FormControl isInvalid={hasError}>
  <FormLabel>Country</FormLabel>
  <Select
    placeholder="Select a country"
    options={countries}
    value={country}
    onChange={(value) => setCountry(value)}
  />
  <FormErrorMessage>Country is required</FormErrorMessage>
</FormControl>
```

**Select Props:**
- `size`: `"sm" | "md" | "lg"`
- `variant`: `"outline" | "filled" | "unstyled"`
- `mode`: `"single" | "multiple"` (default: `"single"`)
- `searchable`: `boolean` (default: `false`)
- `allowClear`: `boolean` (default: `false`)
- `options`: `SelectOption[]` - Array of option objects
- `value`: `string | number | (string | number)[]` - Controlled value
- `defaultValue`: `string | number | (string | number)[]` - Default value (uncontrolled)
- `onChange`: `(value) => void` - Callback when value changes
- `placeholder`: `string` (default: `"Select..."`)
- `width`: `string | number` - Width of the select component
- `isInvalid`: `boolean`
- `isDisabled`: `boolean`
- `isReadOnly`: `boolean`

**SelectOption:**
- `value`: `string | number` - Option value
- `label`: `string` - Option display text
- `disabled`: `boolean` - Whether the option is disabled

### Link

Link component with multiple variants and color schemes.

```tsx
import { Link } from 'uiplex';

<Link href="/about" variant="primary" size="md">
  Learn More
</Link>
```

**Props:**
- `variant`: `"primary" | "secondary" | "underline"`
- `size`: `"sm" | "md" | "lg"`
- `colorScheme`: `"blue" | "green" | "red" | "yellow" | "purple" | "gray"`
- All standard HTML anchor props

### IconButton

Button component specifically designed for icons.

```tsx
import { IconButton } from 'uiplex';
import { Mail } from 'feather-icons-react';

<IconButton
  icon={<Mail size={18} />}
  variant="primary"
  size="md"
  aria-label="Send email"
/>
```

**Props:**
- `icon`: `ReactNode` (required)
- `variant`: `"primary" | "secondary" | "outline" | "ghost"`
- `size`: `"sm" | "md" | "lg"`
- `colorScheme`: `"blue" | "green" | "red" | "yellow" | "purple" | "gray"`
- `disabled`: `boolean`
- `aria-label`: `string` (required for accessibility)

### CircularProgress

Circular progress indicator for loading states and progress values.

```tsx
import { CircularProgress, CircularProgressLabel } from 'uiplex';

<CircularProgress value={75} size={64}>
  <CircularProgressLabel>75%</CircularProgressLabel>
</CircularProgress>

<CircularProgress isIndeterminate size={48} />
```

**Props:**
- `value`: `number` (0-100)
- `min`: `number`
- `max`: `number`
- `size`: `number | string`
- `thickness`: `number`
- `color`: `string`
- `trackColor`: `string`
- `isIndeterminate`: `boolean`

### Tooltip

Contextual information displayed on hover.

```tsx
import { Tooltip } from 'uiplex';

<Tooltip label="This is a helpful tooltip" placement="top" width={200}>
  <Button>Hover me</Button>
</Tooltip>
```

**Props:**
- `label`: `string` (required)
- `placement`: `"top" | "bottom" | "left" | "right"`
- `width`: `string | number` (for wrapping long text)
- `isOpen`: `boolean` (controlled)
- `defaultIsOpen`: `boolean`
- `closeOnClick`: `boolean`

### Popover

Floating content container with positioning and triggers.

```tsx
import { Popover, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverCloseButton } from 'uiplex';

<Popover
  content={
    <PopoverContent>
      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>Popover content</PopoverBody>
      <PopoverFooter>
        <PopoverCloseButton onClose={handleClose} />
      </PopoverFooter>
    </PopoverContent>
  }
  placement="bottom"
  trigger="click"
>
  <Button>Open Popover</Button>
</Popover>
```

**Props:**
- `content`: `ReactNode` (required)
- `placement`: `"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"`
- `trigger`: `"click" | "hover"`
- `isOpen`: `boolean` (controlled)
- `defaultIsOpen`: `boolean`
- `closeOnBlur`: `boolean`
- `showArrow`: `boolean`

### Toast

Toast notifications for displaying temporary messages.

```tsx
import { Toast, ToastContainerGlobal } from 'uiplex';

// Add ToastContainerGlobal to your root layout
<ToastContainerGlobal />

// Use Toast static methods
Toast.success("Operation completed!");
Toast.error("Something went wrong");
Toast.warning("Please check your input");
Toast.info("New update available");

// With options
Toast.success({
  title: "Success!",
  description: "Your changes have been saved.",
  duration: 3000
});
```

**Toast Methods:**
- `Toast.success(messageOrOptions, options?)`
- `Toast.error(messageOrOptions, options?)`
- `Toast.warning(messageOrOptions, options?)`
- `Toast.info(messageOrOptions, options?)`
- `Toast.close(id)`
- `Toast.closeAll()`

### FormControl, FormLabel, FormErrorMessage

Form control components for building accessible forms.

```tsx
import { FormControl, FormLabel, FormErrorMessage } from 'uiplex';

<FormControl isInvalid={hasError} isRequired>
  <FormLabel>Username</FormLabel>
  <Input value={username} onChange={handleChange} />
  <FormErrorMessage>Username is required</FormErrorMessage>
</FormControl>
```

**FormControl Props:**
- `isInvalid`: `boolean`
- `isDisabled`: `boolean`
- `isRequired`: `boolean`

## Hooks

### useDisclosure

Hook for managing open/close state (useful for modals, popovers, etc.).

```tsx
import { useDisclosure } from 'uiplex';

function MyComponent() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      {isOpen && <Modal onClose={onClose}>Content</Modal>}
    </>
  );
}
```

### useOutsideClick

Hook for detecting clicks outside an element.

```tsx
import { useOutsideClick } from 'uiplex';

function MyComponent() {
  const ref = useRef(null);
  
  useOutsideClick({
    refs: [ref],
    handler: () => {
      // Handle outside click
    }
  });
  
  return <div ref={ref}>Content</div>;
}
```

## Theme System

The library includes a comprehensive theme system with light, dark, and system preference support.

### ThemeProvider

Wrap your app with `ThemeProvider` to enable theme functionality:

```tsx
import { ThemeProvider, useTheme } from 'uiplex';
import 'uiplex/theme.css';

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
import { useTheme } from 'uiplex';

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
import { ThemeToggle } from 'uiplex';

<ThemeToggle />
```

## Styling

**CSS is automatically included** when you import components (with modern bundlers like Vite, Webpack 5, Next.js, etc.). The library uses CSS variables for theming.

The bundled CSS includes:
- Theme CSS variables (light/dark mode support)
- Button, Loader, Radio styles
- Text, Box, Flex, Grid layout styles
- Modal, Input, Textarea, Select, FormControl styles
- Link, IconButton, CircularProgress styles
- Tooltip, Toast, Popover styles

All components automatically adapt to the current theme (light/dark) based on CSS variables.

**If you need to import CSS manually** (for older bundlers or specific setups):

```tsx
import 'uiplex/styles.css';
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All components and their props are fully typed.

## License

MIT

