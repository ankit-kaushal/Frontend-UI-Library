"use client";

import React, { useState } from "react";
import { Switch } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPageLayout
      title="Switch"
      description="Toggle switch component for boolean settings."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Switch } from 'uiplex';

<Switch checked={checked} onChange={setChecked} />
<Switch defaultChecked />`}
      >
        <div className={styles.row}>
          <Switch checked={checked} onChange={setChecked} />
          <Switch defaultChecked />
        </div>
      </DemoSection>

      <DemoSection
        title="Labels: left, right, or both"
        code={`<Switch label="Enable" />
<Switch leftLabel="Off" rightLabel="On" defaultChecked />
<Switch leftLabel="No" rightLabel="Yes" />
<Switch leftLabel="Left only" />
<Switch rightLabel="Right only" />`}
      >
        <div className={styles.column}>
          <Switch label="Enable" defaultChecked />
          <Switch leftLabel="Off" rightLabel="On" defaultChecked />
          <Switch leftLabel="No" rightLabel="Yes" />
          <Switch leftLabel="Left only" />
          <Switch rightLabel="Right only" />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Switch size="sm" defaultChecked />
<Switch size="md" defaultChecked />
<Switch size="lg" defaultChecked />`}
      >
        <div className={styles.row}>
          <Switch size="sm" defaultChecked />
          <Switch size="md" defaultChecked />
          <Switch size="lg" defaultChecked />
        </div>
      </DemoSection>

      <DemoSection
        title="Disabled"
        code={`<Switch disabled />
<Switch disabled defaultChecked />`}
      >
        <div className={styles.row}>
          <Switch disabled />
          <Switch disabled defaultChecked />
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              { prop: "checked", type: "boolean", default: "-", description: "Controlled checked state" },
              { prop: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state" },
              { prop: "onChange", type: "(checked: boolean) => void", default: "-", description: "Called when toggled" },
              { prop: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
              { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Switch size" },
              { prop: "leftLabel", type: "string", default: "-", description: "Label on the left of the switch" },
              { prop: "rightLabel", type: "string", default: "-", description: "Label on the right of the switch" },
              { prop: "label", type: "string", default: "-", description: "Single label (use with labelPosition)" },
              { prop: "labelPosition", type: '"left" | "right"', default: '"right"', description: "Position when using label" },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
