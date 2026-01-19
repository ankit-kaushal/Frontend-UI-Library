"use client";

import React, { useState, useEffect } from "react";
import { CircularProgress, CircularProgressLabel } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";

export default function CircularProgressPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ComponentPageLayout
      title="CircularProgress"
      description="A circular progress indicator component for displaying loading states or progress values. Supports both determinate and indeterminate modes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { CircularProgress } from 'uiplex';

<CircularProgress value={75} />
<CircularProgress value={50} />
<CircularProgress value={25} />`}
      >
        <CircularProgress value={75} />
        <CircularProgress value={50} />
        <CircularProgress value={25} />
      </DemoSection>

      <DemoSection
        title="With Label"
        code={`import { CircularProgress, CircularProgressLabel } from 'uiplex';

<CircularProgress value={75}>
  <CircularProgressLabel>75%</CircularProgressLabel>
</CircularProgress>`}
      >
        <CircularProgress value={75}>
          <CircularProgressLabel>75%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={50}>
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={value}>
          <CircularProgressLabel>{value}%</CircularProgressLabel>
        </CircularProgress>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<CircularProgress value={75} size={32} />
<CircularProgress value={75} size={48} />
<CircularProgress value={75} size={64} />
<CircularProgress value={75} size={96} />`}
      >
        <CircularProgress value={75} size={32} />
        <CircularProgress value={75} size={48} />
        <CircularProgress value={75} size={64} />
        <CircularProgress value={75} size={96} />
      </DemoSection>

      <DemoSection
        title="Indeterminate"
        code={`<CircularProgress isIndeterminate size={48} />
<CircularProgress isIndeterminate size={64} />
<CircularProgress isIndeterminate size={96} />`}
      >
        <CircularProgress isIndeterminate size={48} />
        <CircularProgress isIndeterminate size={64} />
        <CircularProgress isIndeterminate size={96} />
      </DemoSection>

      <DemoSection
        title="Custom Colors"
        code={`<CircularProgress
  value={75}
  color="#2563eb"
  trackColor="#e0e7ff"
/>
<CircularProgress
  value={75}
  color="#059669"
  trackColor="#d1fae5"
/>`}
      >
        <CircularProgress value={75} color="#2563eb" trackColor="#e0e7ff" />
        <CircularProgress value={75} color="#059669" trackColor="#d1fae5" />
        <CircularProgress value={75} color="#dc2626" trackColor="#fee2e2" />
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "value",
                type: "number",
                default: "0",
                description: "Progress value (0-100)",
              },
              {
                prop: "min",
                type: "number",
                default: "0",
                description: "Minimum value",
              },
              {
                prop: "max",
                type: "number",
                default: "100",
                description: "Maximum value",
              },
              {
                prop: "size",
                type: "number | string",
                default: "48",
                description: "Size of the progress circle",
              },
              {
                prop: "thickness",
                type: "number",
                default: "4",
                description: "Thickness of the progress ring",
              },
              {
                prop: "color",
                type: "string",
                default: "var(--accent-primary)",
                description: "Progress color",
              },
              {
                prop: "trackColor",
                type: "string",
                default: "var(--bg-secondary)",
                description: "Track background color",
              },
              {
                prop: "isIndeterminate",
                type: "boolean",
                default: "false",
                description: "Whether progress is indeterminate",
              },
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description:
                  "Label content (usually CircularProgressLabel)",
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
