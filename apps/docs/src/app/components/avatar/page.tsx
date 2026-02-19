"use client";

import React from "react";
import { Avatar } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      title="Avatar"
      description="User avatar component with image support and fallback to initials or first letter."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Avatar } from 'uiplex';

<Avatar name="Jane Doe" size="md" />
<Avatar size="md" />`}
      >
        <div className={styles.avatarRow}>
          <Avatar name="Jane Doe" size="md" />
          <Avatar size="md" />
        </div>
      </DemoSection>

      <DemoSection
        title="With Name (Initials Fallback)"
        code={`<Avatar name="Jane Doe" size="md" />
<Avatar name="John Smith" size="lg" />
<Avatar name="A" size="sm" />`}
      >
        <div className={styles.avatarRow}>
          <Avatar name="Jane Doe" size="md" />
          <Avatar name="John Smith" size="lg" />
          <Avatar name="A" size="sm" />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Avatar name="User" size="sm" />
<Avatar name="User" size="md" />
<Avatar name="User" size="lg" />`}
      >
        <div className={styles.avatarRow}>
          <Avatar name="User" size="sm" />
          <Avatar name="User" size="md" />
          <Avatar name="User" size="lg" />
        </div>
      </DemoSection>

      <DemoSection
        title="Custom Colors"
        code={`<Avatar name="JD" backgroundColor="#3b82f6" color="white" />
<Avatar name="AB" backgroundColor="#10b981" color="white" />
<Avatar name="XY" backgroundColor="#8b5cf6" color="white" />
<Avatar name="Jane" backgroundColor="#ec4899" color="white" />`}
      >
        <div className={styles.avatarRow}>
          <Avatar name="JD" backgroundColor="#3b82f6" color="white" />
          <Avatar name="AB" backgroundColor="#10b981" color="white" />
          <Avatar name="XY" backgroundColor="#8b5cf6" color="white" />
          <Avatar name="Jane" backgroundColor="#ec4899" color="white" />
        </div>
      </DemoSection>

      <DemoSection
        title="With Image"
        code={`<Avatar
  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  alt="Jane"
  size="md"
/>`}
      >
        <div className={styles.avatarRow}>
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
            alt="Jane"
            size="md"
          />
          <Avatar
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
            alt="John"
            size="lg"
          />
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "src",
                type: "string | null",
                default: "-",
                description: "Image URL for the avatar",
              },
              {
                prop: "alt",
                type: "string",
                default: '""',
                description: "Alt text for the image",
              },
              {
                prop: "name",
                type: "string",
                default: "-",
                description: "Name used for initials fallback when image fails or is missing",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Avatar size",
              },
              {
                prop: "backgroundColor",
                type: "string",
                default: "-",
                description: "Custom background color for fallback (e.g. \"red\", \"#3b82f6\")",
              },
              {
                prop: "color",
                type: "string",
                default: "-",
                description: "Custom text color for fallback",
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
