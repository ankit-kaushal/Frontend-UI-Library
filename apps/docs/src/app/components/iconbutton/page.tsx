"use client";

import React from "react";
import { IconButton } from "uiplex";
import { Mail, Trash, Edit, Heart } from "feather-icons-react";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";

export default function IconButtonPage() {
  return (
    <ComponentPageLayout
      title="IconButton"
      description="A button component specifically designed for icons. Supports multiple sizes, variants, and color schemes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { IconButton } from 'uiplex';
import { Mail } from 'feather-icons-react';

<IconButton aria-label="Mail" icon={<Mail size={18} />} />`}
      >
        <IconButton aria-label="Mail" icon={<Mail size={18} />} />
        <IconButton aria-label="Edit" icon={<Edit size={18} />} />
        <IconButton aria-label="Delete" icon={<Trash size={18} />} />
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<IconButton aria-label="Icon" icon={<Mail />} size="xs" />
<IconButton aria-label="Icon" icon={<Mail />} size="sm" />
<IconButton aria-label="Icon" icon={<Mail />} size="md" />
<IconButton aria-label="Icon" icon={<Mail />} size="lg" />`}
      >
        <IconButton
          aria-label="Extra small"
          icon={<Mail size={12} />}
          size="xs"
        />
        <IconButton aria-label="Small" icon={<Mail size={14} />} size="sm" />
        <IconButton
          aria-label="Medium"
          icon={<Mail size={18} />}
          size="md"
        />
        <IconButton aria-label="Large" icon={<Mail size={22} />} size="lg" />
      </DemoSection>

      <DemoSection
        title="Variants"
        code={`<IconButton aria-label="Ghost" icon={<Mail />} variant="ghost" />
<IconButton aria-label="Outline" icon={<Edit />} variant="outline" />
<IconButton aria-label="Solid" icon={<Heart />} variant="solid" />`}
      >
        <IconButton
          aria-label="Ghost"
          icon={<Mail size={18} />}
          variant="ghost"
        />
        <IconButton
          aria-label="Outline"
          icon={<Edit size={18} />}
          variant="outline"
        />
        <IconButton
          aria-label="Solid"
          icon={<Heart size={18} />}
          variant="solid"
        />
      </DemoSection>

      <DemoSection
        title="Round"
        code={`<IconButton
  aria-label="Round"
  icon={<Mail />}
  variant="ghost"
  isRound
/>`}
      >
        <IconButton
          aria-label="Round ghost"
          icon={<Mail size={18} />}
          variant="ghost"
          isRound
        />
        <IconButton
          aria-label="Round outline"
          icon={<Edit size={18} />}
          variant="outline"
          isRound
        />
        <IconButton
          aria-label="Round solid"
          icon={<Heart size={18} />}
          variant="solid"
          isRound
        />
      </DemoSection>

      <DemoSection
        title="States"
        code={`<IconButton aria-label="Normal" icon={<Mail />} />
<IconButton aria-label="Disabled" icon={<Mail />} isDisabled />`}
      >
        <IconButton aria-label="Normal" icon={<Mail size={18} />} />
        <IconButton
          aria-label="Disabled"
          icon={<Mail size={18} />}
          isDisabled
        />
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "icon",
                type: "React.ReactNode",
                default: "-",
                description: "Icon element to display (required)",
              },
              {
                prop: "aria-label",
                type: "string",
                default: "-",
                description: "Accessibility label (required)",
              },
              {
                prop: "size",
                type: '"xs" | "sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the icon button",
              },
              {
                prop: "variant",
                type: '"ghost" | "outline" | "solid"',
                default: '"ghost"',
                description: "Visual style variant",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: "-",
                description: "Color scheme (for solid variant)",
              },
              {
                prop: "isRound",
                type: "boolean",
                default: "false",
                description: "Whether button is circular",
              },
              {
                prop: "isDisabled",
                type: "boolean",
                default: "false",
                description: "Whether button is disabled",
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
