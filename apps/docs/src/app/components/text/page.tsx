"use client";

import React from "react";
import { Text } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function TextPage() {
  return (
    <ComponentPageLayout
      title="Text"
      description="A flexible typography component for rendering text with predefined sizes, weights, colors, alignment, and semantic elements."
    >
      <DemoSection
        title="Sizes"
        code={`import { Text } from 'uiplex';

<Text size="sm">Small text</Text>
<Text size="md">Medium text</Text>
<Text size="lg">Large text</Text>
<Text size="xl">Extra large text</Text>`}
      >
        <div className={styles.textStack}>
          <Text size="sm">Small text</Text>
          <Text size="md">Medium text</Text>
          <Text size="lg">Large text</Text>
          <Text size="xl">Extra large text</Text>
        </div>
      </DemoSection>

      <DemoSection
        title="Weights"
        code={`<Text weight="regular">Regular weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}
      >
        <div className={styles.textStack}>
          <Text weight="regular">Regular weight</Text>
          <Text weight="medium">Medium weight</Text>
          <Text weight="semibold">Semibold weight</Text>
          <Text weight="bold">Bold weight</Text>
        </div>
      </DemoSection>

      <DemoSection
        title="Colors"
        code={`<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="muted">Muted</Text>
<Text color="success">Success</Text>
<Text color="warning">Warning</Text>
<Text color="danger">Danger</Text>`}
      >
        <div className={styles.textStack}>
          <Text color="primary">Primary color</Text>
          <Text color="secondary">Secondary color</Text>
          <Text color="muted">Muted color</Text>
          <Text color="success">Success color</Text>
          <Text color="warning">Warning color</Text>
          <Text color="danger">Danger color</Text>
        </div>
      </DemoSection>

      <DemoSection
        title="Alignment"
        code={`<Text align="left">Left aligned</Text>
<Text align="center">Center aligned</Text>
<Text align="right">Right aligned</Text>`}
      >
        <div className={styles.textStack}>
          <Text align="left">Left aligned text</Text>
          <Text align="center">Center aligned text</Text>
          <Text align="right">Right aligned text</Text>
        </div>
      </DemoSection>

      <DemoSection
        title="Semantic Elements"
        code={`<Text as="p">Paragraph</Text>
<Text as="span">Span</Text>
<Text as="strong">Strong</Text>
<Text as="em">Emphasis</Text>`}
      >
        <div className={styles.textStack}>
          <Text as="p">Rendered as paragraph (p)</Text>
          <Text as="span">Rendered as span</Text>
          <Text as="strong" weight="semibold">
            Rendered as strong
          </Text>
          <Text as="em">Rendered as emphasis</Text>
        </div>
      </DemoSection>

      <DemoSection
        title="Combined Example"
        code={`<Text size="xl" weight="bold">Dashboard</Text>
<Text color="muted">Welcome back! Here is a quick summary...</Text>
<Text size="sm" color="secondary">Last updated 5 minutes ago</Text>
<Text as="strong" color="success">+12% growth this week</Text>`}
      >
        <div className={styles.textStack}>
          <Text size="xl" weight="bold">
            Dashboard
          </Text>
          <Text color="muted">
            Welcome back! Here is a quick summary of your recent activity.
          </Text>
          <Text size="sm" color="secondary">
            Last updated 5 minutes ago
          </Text>
          <Text as="strong" color="success">
            +12% growth this week
          </Text>
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "as",
                type: "keyof JSX.IntrinsicElements",
                default: '"p"',
                description: "HTML element to render",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg" | "xl"',
                default: '"md"',
                description: "Font size preset",
              },
              {
                prop: "weight",
                type: '"regular" | "medium" | "semibold" | "bold"',
                default: '"regular"',
                description: "Font weight preset",
              },
              {
                prop: "color",
                type:
                  '"primary" | "secondary" | "muted" | "danger" | "success" | "warning"',
                default: '"primary"',
                description: "Color preset",
              },
              {
                prop: "align",
                type: '"left" | "center" | "right"',
                default: '"left"',
                description: "Text alignment",
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
              {
                prop: "...props",
                type: "React.HTMLAttributes<HTMLElement>",
                default: "-",
                description: "All standard HTML attributes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
