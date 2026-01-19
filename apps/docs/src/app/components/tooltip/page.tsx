"use client";

import React from "react";
import { Tooltip, Button } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";

export default function TooltipPage() {
  return (
    <ComponentPageLayout
      title="Tooltip"
      description="A tooltip component that displays contextual information on hover or click. Supports multiple placements and controlled/uncontrolled modes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Tooltip, Button } from 'uiplex';

<Tooltip label="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
      >
        <Tooltip label="This is a tooltip">
          <Button>Hover me</Button>
        </Tooltip>
      </DemoSection>

      <DemoSection
        title="Placements"
        code={`<Tooltip label="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip label="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip label="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip label="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>`}
      >
        <Tooltip label="Top tooltip" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip label="Bottom tooltip" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip label="Left tooltip" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip label="Right tooltip" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </DemoSection>

      <DemoSection
        title="Controlled Mode"
        code={`const [isOpen, setIsOpen] = useState(false);

<Tooltip label="Controlled tooltip" isOpen={isOpen}>
  <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
</Tooltip>`}
      >
        <Tooltip label="Controlled tooltip" isOpen={true}>
          <Button>Always visible</Button>
        </Tooltip>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "children",
                type: "React.ReactElement",
                default: "-",
                description: "Trigger element",
              },
              {
                prop: "label",
                type: "string",
                default: "-",
                description: "Tooltip text content",
              },
              {
                prop: "placement",
                type: '"top" | "bottom" | "left" | "right"',
                default: '"top"',
                description: "Tooltip placement relative to trigger",
              },
              {
                prop: "isOpen",
                type: "boolean",
                default: "-",
                description: "Controlled open state",
              },
              {
                prop: "defaultIsOpen",
                type: "boolean",
                default: "false",
                description: "Initial open state (uncontrolled)",
              },
              {
                prop: "closeOnClick",
                type: "boolean",
                default: "false",
                description: "Close tooltip on click",
              },
              {
                prop: "width",
                type: "string | number",
                default: "-",
                description:
                  'Width of the tooltip (e.g., "300px", 300, "100%"). Enables text wrapping when set.',
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
