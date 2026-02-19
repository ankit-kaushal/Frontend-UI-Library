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

CSS is automatically included when you import components! Just import and use:

```tsx
import { Button, ThemeProvider } from 'uiplex';

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
import 'uiplex/styles.css'; // Only needed if bundler doesn't auto-include
```

## Components

### Button

Versatile button component with multiple variants, sizes, and color schemes.

```tsx
import { Button } from 'uiplex';

<Button variant="primary" size="md" colorScheme="blue">
  Primary Button
</Button>
```

**Key Props:** `variant`, `size`, `colorScheme`, `disabled`, `loading`, `leftIcon`, `rightIcon`

### Loader

Flexible loading indicator with multiple variants.

```tsx
import { Loader } from 'uiplex';

<Loader variant="spinner" size="md" />
```

**Key Props:** `variant` ("spinner" | "dots" | "pulse"), `size`, `isCentered`

### Radio & RadioGroup

Radio button components with support for groups.

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

### Checkbox & CheckboxGroup

Checkbox components with support for multiple selections.

```tsx
import { Checkbox, CheckboxGroup } from 'uiplex';

<CheckboxGroup
  name="options"
  value={selected}
  onChange={(values) => setSelected(values)}
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

**Key Props:** `value` (string[]), `onChange`, `options`, `size`, `colorScheme`, `orientation`

### Input

Form input component with validation support.

```tsx
import { Input, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

<FormControl isInvalid={hasError}>
  <FormLabel>Email</FormLabel>
  <Input type="email" placeholder="Enter your email" />
  <FormErrorMessage>Email is required</FormErrorMessage>
</FormControl>
```

**Key Props:** `size`, `variant`, `isInvalid`, `isDisabled`

### Textarea

Multi-line text input component.

```tsx
import { Textarea } from 'uiplex';

<Textarea placeholder="Enter your message" rows={4} />
```

### Select

Custom dropdown with single/multi-select, search, and validation.

```tsx
import { Select } from 'uiplex';

// Single select
<Select
  placeholder="Select an option"
  options={options}
  value={value}
  onChange={(value) => setValue(value)}
/>

// Multi-select
<Select
  mode="multiple"
  placeholder="Select multiple"
  options={options}
/>

// Searchable
<Select searchable placeholder="Search..." options={options} />
```

**Key Props:** `mode` ("single" | "multiple"), `searchable`, `options`, `value`, `onChange`, `width`

### Tabs

Tab component for organizing content into multiple panels.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'uiplex';

<Tabs defaultIndex={0}>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

**Key Props:** `defaultIndex`, `variant` ("line" | "enclosed" | "soft-rounded"), `size`, `colorScheme`, `orientation`

### Accordion

Collapsible accordion component for organizing content.

```tsx
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from 'uiplex';

<Accordion defaultIndex={0} allowMultiple>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem index={1}>
    <AccordionButton index={1}>Item 2</AccordionButton>
    <AccordionPanel index={1}>Content 2</AccordionPanel>
  </AccordionItem>
</Accordion>
```

**Key Props:** `defaultIndex`, `allowMultiple`, `allowToggle`, `variant` ("default" | "bordered" | "filled"), `size`, `colorScheme`

### Modal

Modal dialog component for overlays and popups.

```tsx
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from 'uiplex';

function MyComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalBody>Content</ModalBody>
          <ModalFooter>Footer</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

### Tooltip

Contextual information displayed on hover.

```tsx
import { Tooltip } from 'uiplex';

<Tooltip label="Helpful tooltip" placement="top" width={200}>
  <Button>Hover me</Button>
</Tooltip>
```

### Popover

Floating content container with positioning.

```tsx
import { Popover, PopoverContent, PopoverHeader, PopoverBody } from 'uiplex';

<Popover
  content={
    <PopoverContent>
      <PopoverHeader>Title</PopoverHeader>
      <PopoverBody>Content</PopoverBody>
    </PopoverContent>
  }
  placement="bottom"
>
  <Button>Open Popover</Button>
</Popover>
```

### Toast

Toast notifications for displaying temporary messages.

```tsx
import { Toast, ToastContainerGlobal } from 'uiplex';

// Add to root layout
<ToastContainerGlobal />

// Use static methods
Toast.success("Operation completed!");
Toast.error("Something went wrong");
Toast.warning("Please check");
Toast.info("New update available");
```

### CircularProgress

Circular progress indicator.

```tsx
import { CircularProgress, CircularProgressLabel } from 'uiplex';

<CircularProgress value={75} size={64}>
  <CircularProgressLabel>75%</CircularProgressLabel>
</CircularProgress>
```

### IconButton

Button component for icons.

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

### Link

Link component with multiple variants.

```tsx
import { Link } from 'uiplex';

<Link href="/about" variant="primary" size="md">
  Learn More
</Link>
```

### Breadcrumb

Breadcrumb navigation component for showing the current page location.

```tsx
import { Breadcrumb } from 'uiplex';

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" }
  ]}
  separator="/"
/>
```

**Key Props:** `items` (BreadcrumbItem[]), `separator` (string | React.ReactNode)

### Table

Table component for displaying tabular data with head, body, footer, and configurable variants.

```tsx
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from 'uiplex';

<Table variant="bordered" size="md">
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Jane</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Key Props (Table):** `variant` ("default" | "bordered" | "striped"), `size` ("sm" | "md" | "lg")

### Switch

Toggle switch for boolean settings.

```tsx
import { Switch } from 'uiplex';

<Switch checked={on} onChange={setOn} />
<Switch label="Enable" defaultChecked size="md" />
```

**Key Props:** `checked`, `defaultChecked`, `onChange`, `disabled`, `size`, `leftLabel`, `rightLabel` (or `label` + `labelPosition`)

### DateTimePicker

Date, time, or datetime picker (date-only, time-only, or both).

```tsx
import { DateTimePicker } from 'uiplex';

<DateTimePicker mode="date" value={date} onChange={setDate} />
<DateTimePicker mode="time" value={time} onChange={setTime} />
<DateTimePicker mode="datetime" value={dt} onChange={setDt} />
```

**Key Props:** `mode` ("date" | "time" | "datetime"), `size` ("sm" | "md" | "lg"), `value`, `onChange`, `min`, `max`, `disabled`. Native picker icon follows theme (color-scheme).

### Upload

File upload with drag and drop.

```tsx
import { Upload } from 'uiplex';

<Upload onFileSelect={(files) => console.log(files)} />
<Upload multiple accept="image/*" maxSize={1024 * 1024} />
```

**Key Props:** `onFileSelect`, `onFilesChange`, `accept`, `multiple`, `disabled`, `maxSize`, `children`

### Skeleton

Loading skeleton placeholder.

```tsx
import { Skeleton } from 'uiplex';

<Skeleton variant="text" width={200} />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={200} height={100} />
```

**Key Props:** `variant` ("text" | "circular" | "rectangular"), `width`, `height`

### Drawer

Slide-out panel from left, right, top, or bottom. Supports nested drawers via `level`.

```tsx
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton, useDisclosure } from 'uiplex';

const { isOpen, onOpen, onClose } = useDisclosure();

<Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
  <DrawerHeader>Title <DrawerCloseButton onClose={onClose} /></DrawerHeader>
  <DrawerBody>Content</DrawerBody>
  <DrawerFooter>Footer</DrawerFooter>
</Drawer>

// Nested: second drawer with level={1}
<Drawer isOpen={innerOpen} onClose={...} placement="right" level={1}>...</Drawer>
```

**Key Props:** `isOpen`, `onClose`, `placement` ("left" | "right" | "top" | "bottom"), `size`, `closeOnOverlayClick`, `closeOnEsc`, `level` (for nested)

### Alert

Alert component for important messages with variants and optional close.

```tsx
import { Alert } from 'uiplex';

<Alert variant="info" title="Info">Your session will expire soon.</Alert>
<Alert variant="success">Changes saved successfully.</Alert>
<Alert variant="warning" onClose={() => {}}>Please review before submitting.</Alert>
<Alert variant="error" title="Error">Something went wrong.</Alert>
```

**Key Props:** `variant` ("info" | "success" | "warning" | "error"), `title`, `onClose`

### Badge

Small status or count indicator.

```tsx
import { Badge } from 'uiplex';

<Badge variant="primary">New</Badge>
<Badge variant="success" size="sm">Active</Badge>
<Badge variant="danger">3</Badge>
```

**Key Props:** `variant` ("default" | "primary" | "success" | "warning" | "danger"), `size` ("sm" | "md" | "lg")

### Avatar

User avatar with image and fallback (initials or first letter).

```tsx
import { Avatar } from 'uiplex';

<Avatar src="/user.jpg" alt="Jane" size="md" />
<Avatar name="Jane Doe" size="lg" />
<Avatar size="sm" />
```

**Key Props:** `src`, `alt`, `name`, `size` ("sm" | "md" | "lg"), `backgroundColor`, `color` (any CSS color for fallback)

### Card

Card container with optional header, body, footer, image, title, and subtitle. **Default variant is theme-adjusted** (follows light/dark theme). Use `variant="dark"` or `variant="light"` to force a look.

```tsx
import { Card, CardHeader, CardBody, CardFooter, CardImage, CardTitle, CardSubtitle } from 'uiplex';

// Image card (theme-adjusted – default)
<Card style={{ maxWidth: 320 }}>
  <CardImage src="/photo.jpg" alt="Card" />
  <CardBody>
    <CardTitle>Europe Street beat</CardTitle>
    <CardSubtitle>www.instagram.com</CardSubtitle>
  </CardBody>
</Card>

// Always dark or always light
<Card variant="dark">...</Card>
<Card variant="light">...</Card>

// Standard card
<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Card content goes here.</CardBody>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

**Key Props (Card):** `variant` ("default" | "dark" | "light"). **CardImage:** `src`, `alt`. **CardTitle / CardSubtitle:** typography for image cards.

### Layout Components

**Box** - Versatile container component
```tsx
<Box padding="md" margin="lg" borderRadius="md">Content</Box>
```

**Flex** - Flexbox layout component
```tsx
<Flex direction="row" align="center" justify="space-between" gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>
```

**Grid** - CSS Grid layout component
```tsx
<Grid columns={3} gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>
```

**Text** - Typography component
```tsx
<Text size="lg" weight="bold" variant="primary">Heading</Text>
```

## Hooks

### useDisclosure

Hook for managing open/close state.

```tsx
import { useDisclosure } from 'uiplex';

const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
```

### useOutsideClick

Hook for detecting clicks outside an element.

```tsx
import { useOutsideClick } from 'uiplex';

const ref = useRef(null);
useOutsideClick({
  refs: [ref],
  handler: () => console.log('Clicked outside')
});
```

## Theme System

### ThemeProvider

Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider, useTheme, ThemeToggle } from 'uiplex';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <YourApp />
    </ThemeProvider>
  );
}
```

### useTheme Hook

```tsx
const { theme, setTheme, resolvedTheme } = useTheme();
```

### ThemeToggle Component

```tsx
<ThemeToggle />
```

## Styling

CSS is automatically included when you import components. The library uses CSS variables for theming and supports light/dark modes.

All components automatically adapt to the current theme based on CSS variables.

**Manual CSS import** (if needed):
```tsx
import 'uiplex/styles.css';
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All components and their props are fully typed.

## Documentation

For complete documentation, examples, and API references, visit: [https://uiplex.ankitkaushal.in/](https://uiplex.ankitkaushal.in/)

## License

MIT
