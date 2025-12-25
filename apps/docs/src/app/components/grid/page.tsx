"use client";

import React from "react";
import { Grid, Box } from "@uilab/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function GridPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Grid</h1>
          <p className={styles.description}>
            A CSS Grid layout component for creating two-dimensional layouts.
            Supports all standard grid properties and Box-style layout props.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Grid templateColumns="repeat(3, 1fr)" gap={16}>
              <Box className={styles.gridItem}>Item 1</Box>
              <Box className={styles.gridItem}>Item 2</Box>
              <Box className={styles.gridItem}>Item 3</Box>
            </Grid>
          </div>
          <CodeBlock language="tsx">
            {`import { Grid, Box } from '@uilab/ui';

<Grid templateColumns="repeat(3, 1fr)" gap={16}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Grid Templates</h2>
          <div className={styles.demo}>
            <Grid
              templateColumns="1fr 2fr 1fr"
              gap={12}
              style={{ marginBottom: "1rem" }}
            >
              <Box className={styles.gridItem}>1fr</Box>
              <Box className={styles.gridItem}>2fr</Box>
              <Box className={styles.gridItem}>1fr</Box>
            </Grid>
            <Grid templateRows="repeat(3, 100px)" gap={12}>
              <Box className={styles.gridItem}>Row 1</Box>
              <Box className={styles.gridItem}>Row 2</Box>
              <Box className={styles.gridItem}>Row 3</Box>
            </Grid>
          </div>
          <CodeBlock language="tsx">
            {`<Grid templateColumns="1fr 2fr 1fr" gap={12}>
  <Box>1fr</Box>
  <Box>2fr</Box>
  <Box>1fr</Box>
</Grid>

<Grid templateRows="repeat(3, 100px)" gap={12}>
  <Box>Row 1</Box>
  <Box>Row 2</Box>
  <Box>Row 3</Box>
</Grid>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Gap</h2>
          <div className={styles.demo}>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={8}
              style={{ marginBottom: "1rem" }}
            >
              <Box className={styles.gridItem}>Gap 8px</Box>
              <Box className={styles.gridItem}>Item 2</Box>
              <Box className={styles.gridItem}>Item 3</Box>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" columnGap={16} rowGap={8}>
              <Box className={styles.gridItem}>Column Gap 16px</Box>
              <Box className={styles.gridItem}>Row Gap 8px</Box>
              <Box className={styles.gridItem}>Item 3</Box>
            </Grid>
          </div>
          <CodeBlock language="tsx">
            {`<Grid templateColumns="repeat(3, 1fr)" gap={8}>...</Grid>
<Grid templateColumns="repeat(3, 1fr)" columnGap={16} rowGap={8}>...</Grid>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Layout Props</h2>
          <div className={styles.demo}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={16}
              padding={20}
              backgroundColor="var(--bg-secondary)"
              borderRadius={8}
            >
              <Box className={styles.gridItem}>Item 1</Box>
              <Box className={styles.gridItem}>Item 2</Box>
              <Box className={styles.gridItem}>Item 3</Box>
              <Box className={styles.gridItem}>Item 4</Box>
            </Grid>
          </div>
          <CodeBlock language="tsx">
            {`<Grid
  templateColumns="repeat(2, 1fr)"
  gap={16}
  padding={20}
  backgroundColor="var(--bg-secondary)"
  borderRadius={8}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Grid>`}
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
                  <td>templateColumns</td>
                  <td>string</td>
                  <td>-</td>
                  <td>CSS grid-template-columns value</td>
                </tr>
                <tr>
                  <td>templateRows</td>
                  <td>string</td>
                  <td>-</td>
                  <td>CSS grid-template-rows value</td>
                </tr>
                <tr>
                  <td>gap</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Gap between grid items</td>
                </tr>
                <tr>
                  <td>columnGap</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Gap between columns</td>
                </tr>
                <tr>
                  <td>rowGap</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>Gap between rows</td>
                </tr>
                <tr>
                  <td>autoFlow</td>
                  <td>
                    "row" | "column" | "dense" | "row dense" | "column dense"
                  </td>
                  <td>-</td>
                  <td>CSS grid-auto-flow value</td>
                </tr>
                <tr>
                  <td>width, height, padding, margin, etc.</td>
                  <td>number | string</td>
                  <td>-</td>
                  <td>All Box-style layout props are supported</td>
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
