"use client";

import React from "react";
import { Link } from "uilab";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function LinkPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Link</h1>
          <p className={styles.description}>
            A link component with multiple variants and color schemes. Supports
            external links with proper security attributes.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Link href="#basic">Basic Link</Link>
            <Link href="#external" isExternal>
              External Link
            </Link>
          </div>
          <CodeBlock language="tsx">
            {`import { Link } from 'uilab';

<Link href="#basic">Basic Link</Link>
<Link href="https://example.com" isExternal>
  External Link
</Link>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <Link href="#link" variant="link">
              Link variant (underlined)
            </Link>
            <Link href="#underline" variant="underline">
              Underline variant
            </Link>
            <Link href="#none" variant="none">
              None variant (no underline)
            </Link>
          </div>
          <CodeBlock language="tsx">
            {`<Link href="#" variant="link">Link variant</Link>
<Link href="#" variant="underline">Underline variant</Link>
<Link href="#" variant="none">None variant</Link>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <div className={styles.demo}>
            <Link href="#primary" color="primary">
              Primary color
            </Link>
            <Link href="#secondary" color="secondary">
              Secondary color
            </Link>
            <Link href="#accent" color="accent">
              Accent color
            </Link>
          </div>
          <CodeBlock language="tsx">
            {`<Link href="#" color="primary">Primary</Link>
<Link href="#" color="secondary">Secondary</Link>
<Link href="#" color="accent">Accent</Link>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>href</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Link URL (required)</td>
                </tr>
                <tr>
                  <td>isExternal</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether link opens in new tab</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"link" | "underline" | "none"</td>
                  <td>"link"</td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>"primary" | "secondary" | "accent"</td>
                  <td>"primary"</td>
                  <td>Link color scheme</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>""</td>
                  <td>Additional CSS classes</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
                <tr>
                  <td>...props</td>
                  <td>React.AnchorHTMLAttributes</td>
                  <td>-</td>
                  <td>All standard HTML anchor attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
