"use client";

import React from "react";
import { Box, Flex } from "uilab";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function BoxPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Box</h1>
          <p className={styles.description}>
            A versatile container component that serves as a building block for
            layouts. It can render as any HTML element and accepts all standard
            HTML attributes, making it perfect for creating custom components
            and layouts.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Box
              style={{
                padding: "1rem",
                background: "var(--accent-primary)",
                color: "white",
                borderRadius: "4px",
              }}
            >
              This is a Box component
            </Box>
          </div>
          <CodeBlock language="tsx">
            {`import { Box } from 'uilab';

<Box
  style={{
    padding: "1rem",
    background: "var(--accent-primary)",
    color: "white",
    borderRadius: "4px",
  }}
>
  This is a Box component
</Box>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Polymorphic "as" Prop</h2>
          <div className={styles.demo}>
            <Flex direction="column" gap={12}>
              <Box
                as="section"
                style={{
                  padding: "1rem",
                  border: "1px solid var(--border-primary)",
                  borderRadius: "4px",
                }}
              >
                Rendered as &lt;section&gt;
              </Box>
              <Box
                as="article"
                style={{
                  padding: "1rem",
                  border: "1px solid var(--border-primary)",
                  borderRadius: "4px",
                }}
              >
                Rendered as &lt;article&gt;
              </Box>
              <Box
                as="header"
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "4px",
                }}
              >
                Rendered as &lt;header&gt;
              </Box>
              <Box
                as="footer"
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "4px",
                }}
              >
                Rendered as &lt;footer&gt;
              </Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Box as="section">Rendered as section</Box>
<Box as="article">Rendered as article</Box>
<Box as="header">Rendered as header</Box>
<Box as="footer">Rendered as footer</Box>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Styling</h2>
          <div className={styles.demo}>
            <Flex direction="column" gap={12}>
              <Box
                style={{
                  padding: "1rem",
                  background: "var(--accent-primary)",
                  color: "white",
                  borderRadius: "4px",
                }}
              >
                Primary styled box
              </Box>
              <Box
                style={{
                  padding: "1rem",
                  border: "2px solid var(--accent-primary)",
                  borderRadius: "4px",
                  color: "var(--accent-primary)",
                }}
              >
                Outlined box
              </Box>
              <Box
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                Box with shadow
              </Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Box style={{ padding: "1rem", background: "var(--accent-primary)", color: "white" }}>
  Primary styled box
</Box>
<Box style={{ padding: "1rem", border: "2px solid var(--accent-primary)" }}>
  Outlined box
</Box>
<Box style={{ padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
  Box with shadow
</Box>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Card Example</h2>
          <div className={styles.demo}>
            <Box
              style={{
                padding: "1.5rem",
                border: "1px solid var(--border-primary)",
                borderRadius: "8px",
                background: "var(--bg-primary)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <Flex direction="column" gap={12}>
                <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
                  Card Title
                </h3>
                <p style={{ margin: 0, color: "var(--text-secondary)" }}>
                  This is a card built using the Box component. It demonstrates
                  how Box can be used as a building block for more complex
                  components.
                </p>
                <Flex gap={8} justify="end">
                  <Box
                    as="button"
                    style={{
                      padding: "0.5rem 1rem",
                      border: "1px solid var(--border-primary)",
                      borderRadius: "4px",
                      background: "var(--bg-primary)",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </Box>
                  <Box
                    as="button"
                    style={{
                      padding: "0.5rem 1rem",
                      background: "var(--accent-primary)",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </div>
          <CodeBlock language="tsx">
            {`<Box
  style={{
    padding: "1.5rem",
    border: "1px solid var(--border-primary)",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  }}
>
  <Flex direction="column" gap={12}>
    <h3>Card Title</h3>
    <p>Card content goes here</p>
    <Flex gap={8} justify="end">
      <Box as="button">Cancel</Box>
      <Box as="button">Save</Box>
    </Flex>
  </Flex>
</Box>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Layout Example</h2>
          <div className={styles.demo}>
            <Flex direction="column" gap={16}>
              <Box
                as="header"
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                Header
              </Box>
              <Flex gap={16}>
                <Box
                  as="aside"
                  style={{
                    flex: "0 0 200px",
                    padding: "1rem",
                    background: "var(--bg-secondary)",
                    borderRadius: "4px",
                  }}
                >
                  Sidebar
                </Box>
                <Box
                  as="main"
                  style={{
                    flex: "1",
                    padding: "1rem",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "4px",
                  }}
                >
                  Main Content
                </Box>
              </Flex>
              <Box
                as="footer"
                style={{
                  padding: "1rem",
                  background: "var(--bg-secondary)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                Footer
              </Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Flex direction="column" gap={16}>
  <Box as="header">Header</Box>
  <Flex gap={16}>
    <Box as="aside" style={{ flex: "0 0 200px" }}>
      Sidebar
    </Box>
    <Box as="main" style={{ flex: "1" }}>
      Main Content
    </Box>
  </Flex>
  <Box as="footer">Footer</Box>
</Flex>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Layout Props</h2>
          <div className={styles.demo}>
            <Flex direction="column" gap={12}>
              <Box
                position="relative"
                width={200}
                height={100}
                padding={16}
                backgroundColor="var(--accent-primary)"
                color="white"
                borderRadius={8}
              >
                Position: relative, Width: 200px, Height: 100px
              </Box>
              <Box
                position="absolute"
                top={0}
                right={0}
                padding={8}
                backgroundColor="var(--bg-secondary)"
                borderRadius={4}
              >
                Absolute positioned
              </Box>
              <Box
                display="inline-block"
                padding={12}
                margin={8}
                border="2px solid var(--accent-primary)"
                borderRadius={4}
              >
                Inline block with border
              </Box>
            </Flex>
          </div>
          <CodeBlock language="tsx">
            {`<Box
  position="relative"
  width={200}
  height={100}
  padding={16}
  backgroundColor="var(--accent-primary)"
  color="white"
  borderRadius={8}
>
  Content
</Box>

<Box
  position="absolute"
  top={0}
  right={0}
  padding={8}
>
  Absolute positioned
</Box>

<Box
  display="inline-block"
  padding={12}
  margin={8}
  border="2px solid var(--accent-primary)"
>
  Inline block
</Box>`}
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
                  <td>Child elements</td>
                </tr>
                <tr>
                  <td>as</td>
                  <td>keyof JSX.IntrinsicElements</td>
                  <td>"div"</td>
                  <td>HTML element to render as</td>
                </tr>
                <tr>
                  <td>position</td>
                  <td>
                    "static" | "relative" | "absolute" | "fixed" | "sticky"
                  </td>
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
                  <td>zIndex</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Z-index value</td>
                </tr>
                <tr>
                  <td>display</td>
                  <td>
                    "block" | "inline-block" | "inline" | "flex" | "inline-flex"
                    | "grid" | "none"
                  </td>
                  <td>-</td>
                  <td>CSS display property</td>
                </tr>
                <tr>
                  <td>width, height</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Width and height (number in px or string)</td>
                </tr>
                <tr>
                  <td>minWidth, maxWidth, minHeight, maxHeight</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Size constraints (number in px or string)</td>
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
                  <td>color</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Text color</td>
                </tr>
                <tr>
                  <td>border, borderWidth, borderColor, borderRadius</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Border properties</td>
                </tr>
                <tr>
                  <td>boxShadow, shadow</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Box shadow (shadow is alias)</td>
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
                <tr>
                  <td>...props</td>
                  <td>React.HTMLAttributes&lt;HTMLDivElement&gt;</td>
                  <td>-</td>
                  <td>All standard HTML div attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
