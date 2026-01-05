"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, Mail, Heart, Star } from "feather-icons-react";
import {
  Button,
  Loader,
  Radio,
  RadioGroup,
  Input,
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Tooltip,
  Toast,
} from "uiplex";
import styles from "./page.module.scss";

export default function Home() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [radioValue, setRadioValue] = useState("option1");
  const [inputValue, setInputValue] = useState("");
  const [progressValue, setProgressValue] = useState(45);

  const copyToClipboard = async (text: string, command: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
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

        <section className={styles.installation}>
          <div className={styles.installCard}>
            <h2 className={styles.installTitle}>Installation</h2>
            <p className={styles.installDescription}>
              Install Uiplex from npm and start building beautiful UIs
            </p>
            <div className={styles.installCode}>
              <div className={styles.codeBlock}>
                <span className={styles.codeLabel}>npm</span>
                <code>npm install uiplex</code>
                <button
                  className={styles.copyButton}
                  onClick={() => copyToClipboard("npm install uiplex", "npm")}
                  aria-label="Copy npm install command"
                >
                  {copiedCommand === "npm" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              <div className={styles.codeBlock}>
                <span className={styles.codeLabel}>yarn</span>
                <code>yarn add uiplex</code>
                <button
                  className={styles.copyButton}
                  onClick={() => copyToClipboard("yarn add uiplex", "yarn")}
                  aria-label="Copy yarn install command"
                >
                  {copiedCommand === "yarn" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
              <div className={styles.codeBlock}>
                <span className={styles.codeLabel}>pnpm</span>
                <code>pnpm add uiplex</code>
                <button
                  className={styles.copyButton}
                  onClick={() => copyToClipboard("pnpm add uiplex", "pnpm")}
                  aria-label="Copy pnpm install command"
                >
                  {copiedCommand === "pnpm" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
            <div className={styles.importCode}>
              <p className={styles.codeTitle}>Usage</p>
              <pre className={styles.codePre}>
                <code>{`import { Button, Loader, Radio } from 'uiplex';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`}</code>
              </pre>
            </div>
            <div className={styles.npmLink}>
              <a
                href="https://www.npmjs.com/package/uiplex"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.npmButton}
              >
                View on npm →
              </a>
            </div>
          </div>
        </section>
        {/* List of components */}
        {/* <section className={styles.components}>
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
        </section> */}

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
                  value={radioValue}
                  onChange={(value) => setRadioValue(value)}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  size="sm"
                />
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Input</h3>
              <div className={styles.exampleContent}>
                <Input
                  placeholder="Type something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  size="sm"
                  style={{ width: "200px" }}
                />
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Circular Progress</h3>
              <div
                className={`${styles.exampleContent} ${styles.progressExample}`}
              >
                <CircularProgress value={progressValue} size={64}>
                  <CircularProgressLabel>
                    {progressValue}%
                  </CircularProgressLabel>
                </CircularProgress>
                <div className={styles.progressControls}>
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={() =>
                      setProgressValue(Math.max(0, progressValue - 10))
                    }
                    disabled={progressValue <= 0}
                  >
                    -10
                  </Button>
                  <Button
                    size="xs"
                    variant="outline"
                    onClick={() =>
                      setProgressValue(Math.min(100, progressValue + 10))
                    }
                    disabled={progressValue >= 100}
                  >
                    +10
                  </Button>
                </div>
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Icon Buttons</h3>
              <div className={styles.exampleContent}>
                <IconButton aria-label="Mail" icon={<Mail size={18} />} />
                <IconButton aria-label="Heart" icon={<Heart size={18} />} />
                <IconButton aria-label="Star" icon={<Star size={18} />} />
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Tooltip</h3>
              <div className={styles.exampleContent}>
                <Tooltip label="This one appears on top." placement="top">
                  <Button size="sm" variant="outline">
                    Hover me
                  </Button>
                </Tooltip>
                <Tooltip
                  label="This tooltip appears on the right side of the button."
                  placement="right"
                >
                  <Button size="sm" variant="outline">
                    Right
                  </Button>
                </Tooltip>
                <Tooltip
                  label="This one appears at the bottom."
                  placement="bottom"
                >
                  <Button size="sm" variant="outline">
                    Bottom
                  </Button>
                </Tooltip>
                <Tooltip
                  label="Tooltips are great for improving user experience by providing helpful information without cluttering the interface."
                  placement="left"
                  width={250}
                >
                  <Button size="sm" variant="outline">
                    Left
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className={styles.exampleCard}>
              <h3>Toast</h3>
              <div className={styles.exampleContent}>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() =>
                    Toast.success("Operation completed successfully!")
                  }
                >
                  Success
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  colorScheme="red"
                  onClick={() => Toast.error("Something went wrong!")}
                >
                  Error
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  colorScheme="yellow"
                  onClick={() => Toast.warning("Please check your input")}
                >
                  Warning
                </Button>
                <Button
                  size="sm"
                  variant="primary"
                  colorScheme="blue"
                  onClick={() => Toast.info("New update available")}
                >
                  Info
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
