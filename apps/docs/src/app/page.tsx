"use client";

import Link from "next/link";
import { Button, Loader, Radio, RadioGroup } from "uiplex";
import styles from "./page.module.scss";

export default function Home() {
  const components = [
    {
      name: "Button",
      description:
        "A versatile button component with multiple variants and sizes",
      href: "/components/button",
      status: "ready",
    },
    {
      name: "Loader",
      description:
        "A versatile loading component with multiple variants and sizes",
      href: "/components/loader",
      status: "ready",
    },
    {
      name: "Radio",
      description:
        "A flexible radio button component with support for individual radios and radio groups",
      href: "/components/radio",
      status: "ready",
    },
    {
      name: "Text",
      description:
        "Typography component with sizes, weights, colors, alignment, and semantic elements",
      href: "/components/text",
      status: "ready",
    },
    {
      name: "Flex",
      description:
        "A flexible layout component built on CSS Flexbox for creating responsive layouts",
      href: "/components/flex",
      status: "ready",
    },
    {
      name: "Box",
      description:
        "A versatile container component that serves as a building block for layouts",
      href: "/components/box",
      status: "ready",
    },
    {
      name: "Modal",
      description: "A modal dialog component for overlays and popups",
      href: "/components/modal",
      status: "ready",
    },
    {
      name: "Input",
      description: "Form input components with validation support",
      href: "/components/input",
      status: "ready",
    },
    {
      name: "Grid",
      description: "CSS Grid layout component for two-dimensional layouts",
      href: "/components/grid",
      status: "ready",
    },
    {
      name: "Link",
      description: "Link component with multiple variants and color schemes",
      href: "/components/link",
      status: "ready",
    },
    {
      name: "IconButton",
      description: "Button component specifically designed for icons",
      href: "/components/iconbutton",
      status: "ready",
    },
    {
      name: "CircularProgress",
      description:
        "Circular progress indicator for loading states and progress values",
      href: "/components/circularprogress",
      status: "ready",
    },
    {
      name: "Card",
      description: "A flexible card component for displaying content",
      href: "/components/card",
      status: "planned",
    },
    {
      name: "Avatar",
      description: "User avatar component with image fallbacks",
      href: "/components/avatar",
      status: "planned",
    },
    {
      name: "Badge",
      description: "Small status indicators and labels",
      href: "/components/badge",
      status: "planned",
    },
    {
      name: "Alert",
      description: "Alert messages for user notifications",
      href: "/components/alert",
      status: "planned",
    },
    {
      name: "Tooltip",
      description: "Contextual information on hover",
      href: "/components/tooltip",
      status: "ready",
    },
    {
      name: "Toast",
      description: "Toast notifications for displaying temporary messages",
      href: "/components/toast",
      status: "ready",
    },
    {
      name: "Popover",
      description: "Floating content container with positioning and triggers",
      href: "/components/popover",
      status: "ready",
    },
    {
      name: "Dropdown",
      description: "Collapsible menu components",
      href: "/components/dropdown",
      status: "planned",
    },
    {
      name: "Tabs",
      description: "Tabbed content organization",
      href: "/components/tabs",
      status: "planned",
    },
    {
      name: "Accordion",
      description: "Collapsible content sections",
      href: "/components/accordion",
      status: "planned",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Uiplex</h1>
          <p className={styles.subtitle}>
            A collection of reusable React components built with TypeScript
          </p>
        </header>

        <section className={styles.components}>
          <h2 className={styles.sectionTitle}>Components</h2>
          <div className={styles.grid}>
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{component.name}</h3>
                  <span
                    className={`${styles.status} ${styles[component.status]}`}
                  >
                    {component.status}
                  </span>
                </div>
                <p className={styles.cardDescription}>
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.examples}>
          <h2 className={styles.sectionTitle}>Interactive Examples</h2>
          <div className={styles.exampleGrid}>
            <div className={styles.exampleCard}>
              <h3>Button Variants</h3>
              <div className={styles.exampleContent}>
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="link" size="sm">
                  Link
                </Button>
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Loader Variants</h3>
              <div className={styles.exampleContent}>
                <Loader variant="spinner" size="sm" />
                <Loader variant="dots" size="sm" />
                <Loader variant="pulse" size="sm" />
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Radio Options</h3>
              <div className={styles.exampleContent}>
                <RadioGroup
                  name="overview-example"
                  value="option1"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  size="sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
