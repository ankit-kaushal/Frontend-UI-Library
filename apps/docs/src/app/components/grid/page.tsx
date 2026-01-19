"use client";

import React from "react";
import { Grid, Box } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function GridPage() {
  return (
    <ComponentPageLayout
      title="Grid"
      description="A CSS Grid layout component for creating two-dimensional layouts. Supports all standard grid properties and Box-style layout props."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Grid, Box } from 'uiplex';

<Grid templateColumns="repeat(3, 1fr)" gap={16}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Grid>`}
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={16}>
          <Box className={styles.gridItem}>Item 1</Box>
          <Box className={styles.gridItem}>Item 2</Box>
          <Box className={styles.gridItem}>Item 3</Box>
        </Grid>
      </DemoSection>

      <DemoSection
        title="Grid Templates"
        code={`<Grid templateColumns="1fr 2fr 1fr" gap={12}>
  <Box>1fr</Box>
  <Box>2fr</Box>
  <Box>1fr</Box>
</Grid>

<Grid templateRows="repeat(3, 100px)" gap={12}>
  <Box>Row 1</Box>
  <Box>Row 2</Box>
  <Box>Row 3</Box>
</Grid>`}
      >
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
      </DemoSection>

      <DemoSection
        title="Gap"
        code={`<Grid templateColumns="repeat(3, 1fr)" gap={8}>...</Grid>
<Grid templateColumns="repeat(3, 1fr)" columnGap={16} rowGap={8}>...</Grid>`}
      >
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
      </DemoSection>

      <DemoSection
        title="With Layout Props"
        code={`<Grid
  templateColumns="repeat(2, 1fr)"
  gap={16}
  padding={20}
  backgroundColor="var(--bg-secondary)"
  borderRadius={8}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Grid>`}
      >
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
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "templateColumns",
                type: "string",
                default: "-",
                description: "CSS grid-template-columns value",
              },
              {
                prop: "templateRows",
                type: "string",
                default: "-",
                description: "CSS grid-template-rows value",
              },
              {
                prop: "gap",
                type: "number | string",
                default: "-",
                description: "Gap between grid items",
              },
              {
                prop: "columnGap",
                type: "number | string",
                default: "-",
                description: "Gap between columns",
              },
              {
                prop: "rowGap",
                type: "number | string",
                default: "-",
                description: "Gap between rows",
              },
              {
                prop: "autoFlow",
                type:
                  '"row" | "column" | "dense" | "row dense" | "column dense"',
                default: "-",
                description: "CSS grid-auto-flow value",
              },
              {
                prop: "width, height, padding, margin, etc.",
                type: "number | string",
                default: "-",
                description: "All Box-style layout props are supported",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
              },
              {
                prop: "style",
                type: "React.CSSProperties",
                default: "-",
                description: "Inline styles",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
