"use client";

import { Button } from "uilab";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";
import { Mail, Trash } from "feather-icons-react";

export default function ButtonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Button</h1>
          <p className={styles.description}>
            A versatile button component with multiple variants, sizes, color
            schemes, and states
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Button } from 'uilab'

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="link">Link Button</Button>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Schemes</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button colorScheme="blue">Blue</Button>
              <Button colorScheme="green">Green</Button>
              <Button colorScheme="red">Red</Button>
              <Button colorScheme="yellow">Yellow</Button>
              <Button colorScheme="purple">Purple</Button>
              <Button colorScheme="gray">Gray</Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Button colorScheme="blue">Blue</Button>
<Button colorScheme="green">Green</Button>
<Button colorScheme="red">Red</Button>
<Button colorScheme="yellow">Yellow</Button>
<Button colorScheme="purple">Purple</Button>
<Button colorScheme="gray">Gray</Button>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Icons</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button leftIcon={<Mail size={16} />} variant="primary">
                Send Email
              </Button>
              <Button rightIcon={<span>→</span>} variant="outline">
                Continue
              </Button>
              <Button
                leftIcon={<span>⭐</span>}
                rightIcon={<span>💫</span>}
                variant="secondary"
              >
                Star
              </Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Mail } from 'feather-icons-react'

<Button 
  leftIcon={<Mail size={16} />}
  variant="primary"
>
  Send Email
</Button>

<Button 
  rightIcon={<span>→</span>}
  variant="outline"
>
  Continue
</Button>

<Button 
  leftIcon={<span>⭐</span>}
  rightIcon={<span>💫</span>}
  variant="secondary"
>
  Star
</Button>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Loading State</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button loading>Loading...</Button>
              <Button loading variant="outline" size="sm">
                Loading
              </Button>
              <Button loading variant="link">
                Loading Link
              </Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Button loading>Loading...</Button>
<Button loading variant="outline" size="sm">Loading</Button>
<Button loading variant="link">Loading Link</Button>`}
          </CodeBlock>
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
          <CodeBlock language="tsx">
            {`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button onClick={() => alert('Button clicked!')}>
  Clickable
</Button>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Combined Examples</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button
                variant="primary"
                colorScheme="green"
                size="lg"
                leftIcon={<span>✅</span>}
              >
                Success Action
              </Button>
              <Button
                variant="outline"
                colorScheme="red"
                size="sm"
                rightIcon={<Trash size={16} />}
              >
                Delete
              </Button>
              <Button
                variant="link"
                colorScheme="purple"
                leftIcon={<span>🔗</span>}
              >
                External Link
              </Button>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Trash } from 'feather-icons-react'

<Button 
  variant="primary" 
  colorScheme="green" 
  size="lg"
  leftIcon={<span>✅</span>}
>
  Success Action
</Button>

<Button 
  variant="outline" 
  colorScheme="red" 
  size="sm"
  rightIcon={<Trash size={16} />}
>
  Delete
</Button>

<Button 
  variant="link" 
  colorScheme="purple"
  leftIcon={<span>🔗</span>}
>
  External Link
</Button>`}
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
                  <td>variant</td>
                  <td>'primary' | 'secondary' | 'outline' | 'link'</td>
                  <td>'primary'</td>
                  <td>The visual style variant of the button</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>'xs' | 'sm' | 'md' | 'lg'</td>
                  <td>'md'</td>
                  <td>The size of the button</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>
                    'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'
                  </td>
                  <td>'blue'</td>
                  <td>The color scheme of the button</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the button is disabled</td>
                </tr>
                <tr>
                  <td>loading</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the button is in loading state</td>
                </tr>
                <tr>
                  <td>leftIcon</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Icon to display on the left side</td>
                </tr>
                <tr>
                  <td>rightIcon</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Icon to display on the right side</td>
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
