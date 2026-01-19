"use client";

import React from "react";
import { Flex, Box } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function FlexPage() {
  return (
    <ComponentPageLayout
      title="Flex"
      description="A flexible layout component built on CSS Flexbox. Provides an easy way to create responsive layouts with full control over direction, alignment, justification, and spacing."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Flex, Box } from 'uiplex';

<Flex gap={16}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>`}
      >
        <Flex gap={16}>
          <Box className={styles.demoBox}>Item 1</Box>
          <Box className={styles.demoBox}>Item 2</Box>
          <Box className={styles.demoBox}>Item 3</Box>
        </Flex>
      </DemoSection>

      <DemoSection
        title="Direction"
        code={`<Flex direction="row" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>

<Flex direction="column" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Flex>`}
      >
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
      </DemoSection>

      <DemoSection
        title="Alignment"
        code={`<Flex align="start" gap={12}>...</Flex>
<Flex align="center" gap={12}>...</Flex>
<Flex align="end" gap={12}>...</Flex>`}
      >
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
      </DemoSection>

      <DemoSection
        title="Justify Content"
        code={`<Flex justify="start" gap={12}>...</Flex>
<Flex justify="center" gap={12}>...</Flex>
<Flex justify="end" gap={12}>...</Flex>
<Flex justify="between" gap={12}>...</Flex>
<Flex justify="around" gap={12}>...</Flex>
<Flex justify="evenly" gap={12}>...</Flex>`}
      >
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
      </DemoSection>

      <DemoSection
        title="Wrap"
        code={`<Flex wrap="wrap" gap={12}>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  {/* More items... */}
</Flex>`}
      >
        <Flex wrap="wrap" gap={12}>
          <Box className={styles.demoBox}>Item 1</Box>
          <Box className={styles.demoBox}>Item 2</Box>
          <Box className={styles.demoBox}>Item 3</Box>
          <Box className={styles.demoBox}>Item 4</Box>
          <Box className={styles.demoBox}>Item 5</Box>
          <Box className={styles.demoBox}>Item 6</Box>
        </Flex>
      </DemoSection>

      <DemoSection
        title="Gap"
        code={`<Flex gap={8}>...</Flex>
<Flex gap={16}>...</Flex>
<Flex gap="2rem">...</Flex>`}
      >
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
      </DemoSection>

      <DemoSection
        title="Real-World Example"
        code={`<Flex direction="column" gap={16}>
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
      >
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
      </DemoSection>

      <DemoSection
        title="With Layout Props"
        code={`<Flex
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
      >
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
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Child elements to be laid out",
              },
              {
                prop: "direction",
                type:
                  '"row" | "column" | "row-reverse" | "column-reverse"',
                default: '"row"',
                description: "Direction of the flex container",
              },
              {
                prop: "align",
                type: '"start" | "end" | "center" | "stretch" | "baseline"',
                default: '"stretch"',
                description: "Alignment of items (shorthand for alignItems)",
              },
              {
                prop: "alignItems",
                type:
                  '"flex-start" | "flex-end" | "center" | "stretch" | "baseline"',
                default: "-",
                description: "CSS alignItems property",
              },
              {
                prop: "justify",
                type:
                  '"start" | "end" | "center" | "between" | "around" | "evenly"',
                default: '"start"',
                description: "Justification (shorthand for justifyContent)",
              },
              {
                prop: "justifyContent",
                type:
                  '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"',
                default: "-",
                description: "CSS justifyContent property",
              },
              {
                prop: "wrap",
                type: '"nowrap" | "wrap" | "wrap-reverse"',
                default: '"nowrap"',
                description: "Whether items should wrap",
              },
              {
                prop: "gap",
                type: "number | string",
                default: "-",
                description: "Gap between items (number in px or string)",
              },
              {
                prop: "position",
                type:
                  '"static" | "relative" | "absolute" | "fixed" | "sticky"',
                default: "-",
                description: "CSS position property",
              },
              {
                prop: "top, right, bottom, left",
                type: "number | string",
                default: "-",
                description: "Position offsets (number in px or string)",
              },
              {
                prop: "width, height",
                type: "number | string",
                default: "-",
                description: "Width and height (number in px or string)",
              },
              {
                prop: "padding, margin",
                type: "number | string",
                default: "-",
                description: "Spacing (number in px or string)",
              },
              {
                prop: "paddingTop, paddingRight, etc.",
                type: "number | string",
                default: "-",
                description: "Individual spacing properties",
              },
              {
                prop: "backgroundColor, bg",
                type: "string",
                default: "-",
                description: "Background color (bg is alias)",
              },
              {
                prop: "borderRadius",
                type: "number | string",
                default: "-",
                description: "Border radius",
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
                description: "Inline styles (merged with computed styles)",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
