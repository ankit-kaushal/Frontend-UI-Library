"use client";

import React from "react";
import { Link } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";

export default function LinkPage() {
  return (
    <ComponentPageLayout
      title="Link"
      description="A link component with multiple variants and color schemes. Supports external links with proper security attributes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Link } from 'uiplex';

<Link href="#basic">Basic Link</Link>
<Link href="https://example.com" isExternal>
  External Link
</Link>`}
      >
        <Link href="#basic">Basic Link</Link>
        <Link href="#external" isExternal>
          External Link
        </Link>
      </DemoSection>

      <DemoSection
        title="Variants"
        code={`<Link href="#" variant="link">Link variant</Link>
<Link href="#" variant="underline">Underline variant</Link>
<Link href="#" variant="none">None variant</Link>`}
      >
        <Link href="#link" variant="link">
          Link variant (underlined)
        </Link>
        <Link href="#underline" variant="underline">
          Underline variant
        </Link>
        <Link href="#none" variant="none">
          None variant (no underline)
        </Link>
      </DemoSection>

      <DemoSection
        title="Colors"
        code={`<Link href="#" color="primary">Primary</Link>
<Link href="#" color="secondary">Secondary</Link>
<Link href="#" color="accent">Accent</Link>`}
      >
        <Link href="#primary" color="primary">
          Primary color
        </Link>
        <Link href="#secondary" color="secondary">
          Secondary color
        </Link>
        <Link href="#accent" color="accent">
          Accent color
        </Link>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "href",
                type: "string",
                default: "-",
                description: "Link URL (required)",
              },
              {
                prop: "isExternal",
                type: "boolean",
                default: "false",
                description: "Whether link opens in new tab",
              },
              {
                prop: "variant",
                type: '"link" | "underline" | "none"',
                default: '"link"',
                description: "Visual style variant",
              },
              {
                prop: "color",
                type: '"primary" | "secondary" | "accent"',
                default: '"primary"',
                description: "Link color scheme",
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
                type: "React.AnchorHTMLAttributes",
                default: "-",
                description: "All standard HTML anchor attributes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
