"use client";

import React from "react";
import { Badge } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function BadgePage() {
  return (
    <ComponentPageLayout
      title="Badge"
      description="Small status or count indicator component with variants and sizes."
    >
      <DemoSection
        title="Variants"
        code={`import { Badge } from 'uiplex';

<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`}
      >
        <div className={styles.badgeRow}>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>`}
      >
        <div className={styles.badgeRow}>
          <Badge variant="primary" size="sm">
            Small
          </Badge>
          <Badge variant="primary" size="md">
            Medium
          </Badge>
          <Badge variant="primary" size="lg">
            Large
          </Badge>
        </div>
      </DemoSection>

      <DemoSection
        title="As Count"
        code={`<Badge variant="danger">3</Badge>
<Badge variant="primary">99+</Badge>`}
      >
        <div className={styles.badgeRow}>
          <Badge variant="danger">3</Badge>
          <Badge variant="primary">99+</Badge>
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "variant",
                type: '"default" | "primary" | "success" | "warning" | "danger"',
                default: '"default"',
                description: "Badge color variant",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Badge size",
              },
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Badge content (e.g. label or count)",
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
