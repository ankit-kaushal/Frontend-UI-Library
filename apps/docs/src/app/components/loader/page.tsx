import React from "react";
import { Loader } from "uiplex";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function LoaderPage() {
  return (
    <div className={styles.container}>
      <h1>Loader Component</h1>
      <p>A versatile loading component with multiple variants and sizes.</p>

      <section className={styles.section}>
        <h2>Basic Usage</h2>
        <div className={styles.demo}>
          <Loader />
        </div>
        <CodeBlock language="tsx">
          {`import { Loader } from 'uiplex';

<Loader />`}
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Variants</h2>

        <div className={styles.variantGroup}>
          <div className={styles.variant}>
            <h3>Spinner (Default)</h3>
            <div className={styles.demo}>
              <Loader variant="spinner" />
            </div>
            <CodeBlock language="tsx">{`<Loader variant="spinner" />`}</CodeBlock>
          </div>

          <div className={styles.variant}>
            <h3>Dots</h3>
            <div className={styles.demo}>
              <Loader variant="dots" />
            </div>
            <CodeBlock language="tsx">{`<Loader variant="dots" />`}</CodeBlock>
          </div>

          <div className={styles.variant}>
            <h3>Pulse</h3>
            <div className={styles.demo}>
              <Loader variant="pulse" />
            </div>
            <CodeBlock language="tsx">{`<Loader variant="pulse" />`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Sizes</h2>
        <div className={styles.sizeGroup}>
          <div className={styles.size}>
            <h3>Extra Small</h3>
            <div className={styles.demo}>
              <Loader size="xs" />
            </div>
            <CodeBlock language="tsx">{`<Loader size="xs" />`}</CodeBlock>
          </div>

          <div className={styles.size}>
            <h3>Small</h3>
            <div className={styles.demo}>
              <Loader size="sm" />
            </div>
            <CodeBlock language="tsx">{`<Loader size="sm" />`}</CodeBlock>
          </div>

          <div className={styles.size}>
            <h3>Medium (Default)</h3>
            <div className={styles.demo}>
              <Loader size="md" />
            </div>
            <CodeBlock language="tsx">{`<Loader size="md" />`}</CodeBlock>
          </div>

          <div className={styles.size}>
            <h3>Large</h3>
            <div className={styles.demo}>
              <Loader size="lg" />
            </div>
            <CodeBlock language="tsx">{`<Loader size="lg" />`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Custom Dimensions</h2>
        <div className={styles.demo}>
          <Loader width={60} height={60} />
        </div>
        <CodeBlock language="tsx">{`<Loader width={60} height={60} />`}</CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Centered Loader</h2>
        <div className={styles.centeredDemo}>
          <div className={styles.content}>
            <p>This content has a centered loader overlay</p>
            <button>Some Button</button>
          </div>
          <Loader isCentered />
        </div>
        <CodeBlock language="tsx">
          {`<div style={{ position: 'relative', height: '200px' }}>
  <div>Your content here</div>
  <Loader isCentered />
</div>`}
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Props</h2>
        <table className={styles.propsTable}>
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
              <td>width</td>
              <td>number</td>
              <td>-</td>
              <td>Custom width in pixels (overrides size)</td>
            </tr>
            <tr>
              <td>height</td>
              <td>number</td>
              <td>-</td>
              <td>Custom height in pixels (overrides size)</td>
            </tr>
            <tr>
              <td>isCentered</td>
              <td>boolean</td>
              <td>false</td>
              <td>Whether to center the loader with absolute positioning</td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>""</td>
              <td>Additional CSS classes</td>
            </tr>
            <tr>
              <td>size</td>
              <td>"xs" | "sm" | "md" | "lg"</td>
              <td>"md"</td>
              <td>Predefined size variants</td>
            </tr>
            <tr>
              <td>variant</td>
              <td>"spinner" | "dots" | "pulse"</td>
              <td>"spinner"</td>
              <td>Visual style variant</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
