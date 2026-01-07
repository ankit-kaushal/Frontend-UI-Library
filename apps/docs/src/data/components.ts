export interface ComponentData {
  name: string;
  description: string;
  href: string;
  category: "Components" | "Getting Started" | "Layout" | "Forms";
  tags: string[];
  icon?: string; // Icon name for reference
}

export const componentsData: ComponentData[] = [
  {
    name: "Overview",
    description: "Get started with Uiplex",
    href: "/",
    category: "Getting Started",
    tags: ["overview", "getting started", "introduction"],
  },
  {
    name: "Button",
    description:
      "A versatile button component with multiple variants, sizes, color schemes, and states",
    href: "/components/button",
    category: "Components",
    tags: ["button", "click", "action", "primary", "secondary", "outline", "link"],
  },
  {
    name: "Loader",
    description:
      "A versatile loading component with multiple variants and sizes",
    href: "/components/loader",
    category: "Components",
    tags: ["loader", "loading", "spinner", "progress"],
  },
  {
    name: "Radio",
    description:
      "A flexible radio button component with support for individual radios and radio groups",
    href: "/components/radio",
    category: "Forms",
    tags: ["radio", "form", "input", "selection"],
  },
  {
    name: "Text",
    description:
      "Typography component with sizes, weights, colors, alignment, and semantic elements",
    href: "/components/text",
    category: "Components",
    tags: ["text", "typography", "heading", "paragraph"],
  },
  {
    name: "Flex",
    description:
      "A flexible layout component built on CSS Flexbox for creating responsive layouts",
    href: "/components/flex",
    category: "Layout",
    tags: ["flex", "layout", "flexbox", "container"],
  },
  {
    name: "Box",
    description:
      "A versatile container component that serves as a building block for layouts",
    href: "/components/box",
    category: "Layout",
    tags: ["box", "container", "content", "wrapper"],
  },
  {
    name: "Grid",
    description:
      "CSS Grid layout component for two-dimensional layouts",
    href: "/components/grid",
    category: "Layout",
    tags: ["grid", "layout", "css grid", "container"],
  },
  {
    name: "Modal",
    description: "A modal dialog component for overlays and popups",
    href: "/components/modal",
    category: "Components",
    tags: ["modal", "dialog", "overlay", "popup"],
  },
  {
    name: "Input",
    description: "Form input components with validation support",
    href: "/components/input",
    category: "Forms",
    tags: ["input", "form", "text", "field"],
  },
  {
    name: "Select",
    description: "Dropdown select component with multiple sizes and variants",
    href: "/components/select",
    category: "Forms",
    tags: ["select", "dropdown", "menu", "form"],
  },
  {
    name: "Link",
    description: "Link component for navigation",
    href: "/components/link",
    category: "Components",
    tags: ["link", "navigation", "anchor"],
  },
  {
    name: "IconButton",
    description: "Icon button component for icon-only actions",
    href: "/components/iconbutton",
    category: "Components",
    tags: ["icon", "button", "action"],
  },
  {
    name: "CircularProgress",
    description: "Circular progress indicator component",
    href: "/components/circularprogress",
    category: "Components",
    tags: ["progress", "loading", "circular", "indicator"],
  },
  {
    name: "Tooltip",
    description: "Tooltip component for additional information",
    href: "/components/tooltip",
    category: "Components",
    tags: ["tooltip", "help", "information", "hint"],
  },
  {
    name: "Toast",
    description: "Toast notification component for displaying messages",
    href: "/components/toast",
    category: "Components",
    tags: ["toast", "notification", "message", "alert"],
  },
  {
    name: "Popover",
    description: "Popover component for displaying rich content",
    href: "/components/popover",
    category: "Components",
    tags: ["popover", "popup", "overlay", "content"],
  },
  {
    name: "Card",
    description: "A container component for displaying content",
    href: "/components/card",
    category: "Components",
    tags: ["card", "container", "content"],
  },
  {
    name: "Avatar",
    description: "User avatar component with image and fallback",
    href: "/components/avatar",
    category: "Components",
    tags: ["avatar", "user", "profile", "image"],
  },
  {
    name: "Badge",
    description: "Small status indicator component",
    href: "/components/badge",
    category: "Components",
    tags: ["badge", "status", "indicator", "label"],
  },
  {
    name: "Alert",
    description: "Alert component for displaying important messages",
    href: "/components/alert",
    category: "Components",
    tags: ["alert", "message", "notification", "warning"],
  },
  {
    name: "Tab",
    description: "Tab component for organizing content into multiple panels with keyboard navigation",
    href: "/components/tab",
    category: "Components",
    tags: ["tab", "tabs", "navigation", "content", "organization", "panels"],
  },
  {
    name: "Accordion",
    description: "Accordion component for collapsible content",
    href: "/components/accordion",
    category: "Components",
    tags: ["accordion", "collapse", "expand", "content"],
  },
];

