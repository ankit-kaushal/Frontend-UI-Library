"use client";

import React from "react";
import { Text } from "uiplex";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function TextPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Text</h1>
          <p className={styles.description}>
            A flexible typography component for rendering text with predefined
            sizes, weights, colors, alignment, and semantic elements.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text size="sm">Small text</Text>
              <Text size="md">Medium text</Text>
              <Text size="lg">Large text</Text>
              <Text size="xl">Extra large text</Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Text } from 'uiplex';

<Text size="sm">Small text</Text>
<Text size="md">Medium text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Weights</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text weight="regular">Regular weight</Text>
              <Text weight="medium">Medium weight</Text>
              <Text weight="semibold">Semibold weight</Text>
              <Text weight="bold">Bold weight</Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Text weight="regular">Regular weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colors</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text color="primary">Primary color</Text>
              <Text color="secondary">Secondary color</Text>
              <Text color="muted">Muted color</Text>
              <Text color="success">Success color</Text>
              <Text color="warning">Warning color</Text>
              <Text color="danger">Danger color</Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="muted">Muted</Text>
<Text color="success">Success</Text>
<Text color="warning">Warning</Text>
<Text color="danger">Danger</Text>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Alignment</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text align="left">Left aligned text</Text>
              <Text align="center">Center aligned text</Text>
              <Text align="right">Right aligned text</Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Text align="left">Left aligned</Text>
<Text align="center">Center aligned</Text>
<Text align="right">Right aligned</Text>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Semantic Elements</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text as="p">Rendered as paragraph (p)</Text>
              <Text as="span">Rendered as span</Text>
              <Text as="strong" weight="semibold">
                Rendered as strong
              </Text>
              <Text as="em">Rendered as emphasis</Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Text as="p">Paragraph</Text>
<Text as="span">Span</Text>
<Text as="strong">Strong</Text>
<Text as="em">Emphasis</Text>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Combined Example</h2>
          <div className={styles.demo}>
            <div className={styles.textStack}>
              <Text size="xl" weight="bold">
                Dashboard
              </Text>
              <Text color="muted">
                Welcome back! Here is a quick summary of your recent activity.
              </Text>
              <Text size="sm" color="secondary">
                Last updated 5 minutes ago
              </Text>
              <Text as="strong" color="success">
                +12% growth this week
              </Text>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Text size="xl" weight="bold">Dashboard</Text>
<Text color="muted">Welcome back! Here is a quick summary...</Text>
<Text size="sm" color="secondary">Last updated 5 minutes ago</Text>
<Text as="strong" color="success">+12% growth this week</Text>`}
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
                  <td>as</td>
                  <td>keyof JSX.IntrinsicElements</td>
                  <td>"p"</td>
                  <td>HTML element to render</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg" | "xl"</td>
                  <td>"md"</td>
                  <td>Font size preset</td>
                </tr>
                <tr>
                  <td>weight</td>
                  <td>"regular" | "medium" | "semibold" | "bold"</td>
                  <td>"regular"</td>
                  <td>Font weight preset</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>
                    "primary" | "secondary" | "muted" | "danger" | "success" |
                    "warning"
                  </td>
                  <td>"primary"</td>
                  <td>Color preset</td>
                </tr>
                <tr>
                  <td>align</td>
                  <td>"left" | "center" | "right"</td>
                  <td>"left"</td>
                  <td>Text alignment</td>
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
                  <td>React.HTMLAttributes&lt;HTMLElement&gt;</td>
                  <td>-</td>
                  <td>All standard HTML attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
