"use client";

import React from "react";
import { Tooltip, Button } from "@uilab/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function TooltipPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Tooltip</h1>
          <p className={styles.description}>
            A tooltip component that displays contextual information on hover or
            click. Supports multiple placements and controlled/uncontrolled
            modes.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Tooltip label="This is a tooltip">
              <Button>Hover me</Button>
            </Tooltip>
          </div>
          <CodeBlock language="tsx">
            {`import { Tooltip, Button } from '@uilab/ui';

<Tooltip label="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Placements</h2>
          <div className={styles.demo}>
            <Tooltip label="Top tooltip" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip label="Bottom tooltip" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip label="Left tooltip" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip label="Right tooltip" placement="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
          <CodeBlock language="tsx">
            {`<Tooltip label="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip label="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip label="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip label="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Controlled Mode</h2>
          <div className={styles.demo}>
            <Tooltip label="Controlled tooltip" isOpen={true}>
              <Button>Always visible</Button>
            </Tooltip>
          </div>
          <CodeBlock language="tsx">
            {`const [isOpen, setIsOpen] = useState(false);

<Tooltip label="Controlled tooltip" isOpen={isOpen}>
  <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
</Tooltip>`}
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
                  <td>children</td>
                  <td>React.ReactElement</td>
                  <td>-</td>
                  <td>Trigger element</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Tooltip text content</td>
                </tr>
                <tr>
                  <td>placement</td>
                  <td>"top" | "bottom" | "left" | "right"</td>
                  <td>"top"</td>
                  <td>Tooltip placement relative to trigger</td>
                </tr>
                <tr>
                  <td>isOpen</td>
                  <td>boolean</td>
                  <td>-</td>
                  <td>Controlled open state</td>
                </tr>
                <tr>
                  <td>defaultIsOpen</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Initial open state (uncontrolled)</td>
                </tr>
                <tr>
                  <td>closeOnClick</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Close tooltip on click</td>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
