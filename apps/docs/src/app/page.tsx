import Link from "next/link";
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
      name: "Modal",
      description: "A modal dialog component for overlays and popups",
      href: "/components/modal",
      status: "planned",
    },
    {
      name: "Input",
      description: "Form input components with validation support",
      href: "/components/input",
      status: "planned",
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
      status: "planned",
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
          <h1 className={styles.title}>TSLB UI Library</h1>
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
      </div>
    </div>
  );
}
