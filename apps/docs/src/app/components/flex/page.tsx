"use client";

import React from "react";
import { Flex, Box } from "@tslb/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function FlexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Flex</h1>
          <p className={styles.description}>
            A flexible layout component built on CSS Flexbox. Provides an easy
            way to create responsive layouts with full control over direction,
            alignment, justification, and spacing.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Flex gap={16}>
              <Box className={styles.demoBox}>Item 1</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`import { Flex, Box } from '@tslb/ui';

<Flex gap={16}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Direction</h2>
          <div className={styles.demo}>
            <Flex direction="row" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Row</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
            <Flex direction="column" gap={12}>
              <Box className={styles.demoBox}>Column</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex direction="row" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>

<Flex direction="column" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Alignment</h2>
          <div className={styles.demo}>
            <Flex
              align="start"
              gap={12}
              style={{ marginBottom: "1rem", height: "80px" }}
            >
              <Box className={styles.demoBox}>Start</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex
              align="center"
              gap={12}
              style={{ marginBottom: "1rem", height: "80px" }}
            >
              <Box className={styles.demoBox}>Center</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex align="end" gap={12} style={{ height: "80px" }}>
              <Box className={styles.demoBox}>End</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex align="start" gap={12}>...</Flex>
<Flex align="center" gap={12}>...</Flex>
<Flex align="end" gap={12}>...</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Justify Content</h2>
          <div className={styles.demo}>
            <Flex justify="start" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Start</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex justify="center" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Center</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex justify="end" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>End</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex justify="between" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Between</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex justify="around" gap={12} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Around</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
            <Flex justify="evenly" gap={12}>
              <Box className={styles.demoBox}>Evenly</Box>
              <Box className={styles.demoBox}>Item 2</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex justify="start" gap={12}>...</Flex>
<Flex justify="center" gap={12}>...</Flex>
<Flex justify="end" gap={12}>...</Flex>
<Flex justify="between" gap={12}>...</Flex>
<Flex justify="around" gap={12}>...</Flex>
<Flex justify="evenly" gap={12}>...</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Wrap</h2>
          <div className={styles.demo}>
            <Flex wrap="wrap" gap={12}>
              <Box className={styles.demoBox}>Item 1</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
              <Box className={styles.demoBox}>Item 4</Box>
              <Box className={styles.demoBox}>Item 5</Box>
              <Box className={styles.demoBox}>Item 6</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex wrap="wrap" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  {/* More items... */}
</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Gap</h2>
          <div className={styles.demo}>
            <Flex gap={8} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Gap 8px</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
            <Flex gap={16} style={{ marginBottom: "1rem" }}>
              <Box className={styles.demoBox}>Gap 16px</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
            <Flex gap="2rem">
              <Box className={styles.demoBox}>Gap 2rem</Box>
              <Box className={styles.demoBox}>Item 2</Box>
              <Box className={styles.demoBox}>Item 3</Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex gap={8}>...</Flex>
<Flex gap={16}>...</Flex>
<Flex gap="2rem">...</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Real-World Example</h2>
          <div className={styles.demo}>
            <Flex direction="column" gap={16}>
              <Flex justify="between" align="center">
                <h3 style={{ margin: 0 }}>Card Header</h3>
                <Box
                  style={{
                    padding: "0.5rem 1rem",
                    background: "var(--accent-primary)",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  New
                </Box>
              </Flex>
              <Box
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "4px",
                }}
              >
                <Flex direction="column" gap={8}>
                  <Box>Card content goes here</Box>
                  <Flex gap={8} justify="end">
                    <Box
                      style={{
                        padding: "0.5rem 1rem",
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border-primary)",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </Box>
                    <Box
                      style={{
                        padding: "0.5rem 1rem",
                        background: "var(--accent-primary)",
                        color: "white",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Save
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex direction="column" gap={16}>
  <Flex justify="between" align="center">
    <h3>Card Header</h3>
    <Box>New</Box>
  </Flex>
  <Box>
    <Flex direction="column" gap={8}>
      <Box>Card content</Box>
      <Flex gap={8} justify="end">
        <Box>Cancel</Box>
        <Box>Save</Box>
      </Flex>
    </Flex>
  </Box>
</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Layout Props</h2>
          <div className={styles.demo}>
            <Flex
              direction="column"
              gap={16}
              padding={20}
              backgroundColor="var(--bg-secondary)"
              borderRadius={8}
            >
              <Flex
                justify="between"
                align="center"
                padding={12}
                backgroundColor="var(--bg-primary)"
                borderRadius={4}
              >
                <Box className={styles.demoBox}>Left Content</Box>
                <Box className={styles.demoBox}>Right Content</Box>
              </Flex>
              <Flex
                position="relative"
                width="100%"
                height={100}
                padding={16}
                backgroundColor="var(--accent-primary)"
                color="white"
                borderRadius={4}
                alignItems="center"
                justifyContent="center"
              >
                Centered with position and size
              </Flex>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex
  direction="column"
  gap={16}
  padding={20}
  backgroundColor="var(--bg-secondary)"
  borderRadius={8}
>
  <Flex
    justify="between"
    align="center"
    padding={12}
  >
    Content
  </Flex>
  <Flex
    position="relative"
    width="100%"
    height={100}
    padding={16}
    alignItems="center"
    justifyContent="center"
  >
    Centered
  </Flex>
</Flex>`}
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
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Child elements to be laid out</td>
                </tr>
                <tr>
                  <td>direction</td>
                  <td>"row" | "column" | "row-reverse" | "column-reverse"</td>
                  <td>"row"</td>
                  <td>Direction of the flex container</td>
                </tr>
                <tr>
                  <td>align</td>
                  <td>"start" | "end" | "center" | "stretch" | "baseline"</td>
                  <td>"stretch"</td>
                  <td>Alignment of items (shorthand for alignItems)</td>
                </tr>
                <tr>
                  <td>alignItems</td>
                  <td>"flex-start" | "flex-end" | "center" | "stretch" | "baseline"</td>
                  <td>-</td>
                  <td>CSS alignItems property</td>
                </tr>
                <tr>
                  <td>justify</td>
                  <td>"start" | "end" | "center" | "between" | "around" | "evenly"</td>
                  <td>"start"</td>
                  <td>Justification (shorthand for justifyContent)</td>
                </tr>
                <tr>
                  <td>justifyContent</td>
                  <td>"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"</td>
                  <td>-</td>
                  <td>CSS justifyContent property</td>
                </tr>
                <tr>
                  <td>wrap</td>
                  <td>"nowrap" | "wrap" | "wrap-reverse"</td>
                  <td>"nowrap"</td>
                  <td>Whether items should wrap</td>
                </tr>
                <tr>
                  <td>gap</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Gap between items (number in px or string)</td>
                </tr>
                <tr>
                  <td>position</td>
                  <td>"static" | "relative" | "absolute" | "fixed" | "sticky"</td>
                  <td>-</td>
                  <td>CSS position property</td>
                </tr>
                <tr>
                  <td>top, right, bottom, left</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Position offsets (number in px or string)</td>
                </tr>
                <tr>
                  <td>width, height</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Width and height (number in px or string)</td>
                </tr>
                <tr>
                  <td>padding, margin</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Spacing (number in px or string)</td>
                </tr>
                <tr>
                  <td>paddingTop, paddingRight, etc.</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Individual spacing properties</td>
                </tr>
                <tr>
                  <td>backgroundColor, bg</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Background color (bg is alias)</td>
                </tr>
                <tr>
                  <td>borderRadius</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Border radius</td>
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
                  <td>Inline styles (merged with computed styles)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
