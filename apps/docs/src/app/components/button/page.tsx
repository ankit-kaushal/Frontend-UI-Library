"use client";

import { Button } from "@tslb/ui";
import styles from "./page.module.scss";

export default function ButtonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Button</h1>
          <p className={styles.description}>
            A versatile button component with multiple variants and sizes
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
          </div>
          <div className={styles.code}>
            <pre>
              <code>{`import { Button } from '@tslb/ui'

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>`}</code>
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div className={styles.code}>
            <pre>
              <code>{`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}</code>
            </pre>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>States</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button onClick={() => alert("Button clicked!")}>
                Clickable
              </Button>
            </div>
          </div>
          <div className={styles.code}>
            <pre>
              <code>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button onClick={() => alert('Button clicked!')}>
  Clickable
</Button>`}</code>
            </pre>
          </div>
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
                  <td>variant</td>
                  <td>'primary' | 'secondary' | 'outline'</td>
                  <td>'primary'</td>
                  <td>The visual style variant of the button</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>'sm' | 'md' | 'lg'</td>
                  <td>'md'</td>
                  <td>The size of the button</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the button is disabled</td>
                </tr>
                <tr>
                  <td>onClick</td>
                  <td>{`() => void`}</td>
                  <td>-</td>
                  <td>Click handler function</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>''</td>
                  <td>Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
