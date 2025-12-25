"use client";

import React, { useState, useEffect } from "react";
import { CircularProgress, CircularProgressLabel, Button } from "@uilab/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function CircularProgressPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>CircularProgress</h1>
          <p className={styles.description}>
            A circular progress indicator component for displaying loading
            states or progress values. Supports both determinate and
            indeterminate modes.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <CircularProgress value={75} />
            <CircularProgress value={50} />
            <CircularProgress value={25} />
          </div>
          <CodeBlock language="tsx">
            {`import { CircularProgress } from '@uilab/ui';

<CircularProgress value={75} />
<CircularProgress value={50} />
<CircularProgress value={25} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Label</h2>
          <div className={styles.demo}>
            <CircularProgress value={75}>
              <CircularProgressLabel>75%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress value={50}>
              <CircularProgressLabel>50%</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress value={value}>
              <CircularProgressLabel>{value}%</CircularProgressLabel>
            </CircularProgress>
          </div>
          <CodeBlock language="tsx">
            {`import { CircularProgress, CircularProgressLabel } from '@uilab/ui';

<CircularProgress value={75}>
  <CircularProgressLabel>75%</CircularProgressLabel>
</CircularProgress>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <CircularProgress value={75} size={32} />
            <CircularProgress value={75} size={48} />
            <CircularProgress value={75} size={64} />
            <CircularProgress value={75} size={96} />
          </div>
          <CodeBlock language="tsx">
            {`<CircularProgress value={75} size={32} />
<CircularProgress value={75} size={48} />
<CircularProgress value={75} size={64} />
<CircularProgress value={75} size={96} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Indeterminate</h2>
          <div className={styles.demo}>
            <CircularProgress isIndeterminate size={48} />
            <CircularProgress isIndeterminate size={64} />
            <CircularProgress isIndeterminate size={96} />
          </div>
          <CodeBlock language="tsx">
            {`<CircularProgress isIndeterminate size={48} />
<CircularProgress isIndeterminate size={64} />
<CircularProgress isIndeterminate size={96} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Colors</h2>
          <div className={styles.demo}>
            <CircularProgress value={75} color="#2563eb" trackColor="#e0e7ff" />
            <CircularProgress value={75} color="#059669" trackColor="#d1fae5" />
            <CircularProgress value={75} color="#dc2626" trackColor="#fee2e2" />
          </div>
          <CodeBlock language="tsx">
            {`<CircularProgress
  value={75}
  color="#2563eb"
  trackColor="#e0e7ff"
/>
<CircularProgress
  value={75}
  color="#059669"
  trackColor="#d1fae5"
/>`}
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
                  <td>value</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Progress value (0-100)</td>
                </tr>
                <tr>
                  <td>min</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Minimum value</td>
                </tr>
                <tr>
                  <td>max</td>
                  <td>number</td>
                  <td>100</td>
                  <td>Maximum value</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>number | string</td>
                  <td>48</td>
                  <td>Size of the progress circle</td>
                </tr>
                <tr>
                  <td>thickness</td>
                  <td>number</td>
                  <td>4</td>
                  <td>Thickness of the progress ring</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>string</td>
                  <td>"var(--accent-primary)"</td>
                  <td>Progress color</td>
                </tr>
                <tr>
                  <td>trackColor</td>
                  <td>string</td>
                  <td>"var(--bg-secondary)"</td>
                  <td>Track background color</td>
                </tr>
                <tr>
                  <td>isIndeterminate</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether progress is indeterminate</td>
                </tr>
                <tr>
                  <td>children</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Label content (usually CircularProgressLabel)</td>
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
