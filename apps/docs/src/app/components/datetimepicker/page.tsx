"use client";

import React, { useState } from "react";
import { DateTimePicker } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function DateTimePickerPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [datetime, setDatetime] = useState("");

  return (
    <ComponentPageLayout
      title="DateTimePicker"
      description="Date, time, or combined datetime picker with date-only, time-only, and datetime modes."
    >
      <DemoSection
        title="Date Only"
        code={`import { DateTimePicker } from 'uiplex';

<DateTimePicker mode="date" value={date} onChange={setDate} />`}
      >
        <DateTimePicker mode="date" value={date} onChange={setDate} />
      </DemoSection>

      <DemoSection
        title="Time Only"
        code={`<DateTimePicker mode="time" value={time} onChange={setTime} />`}
      >
        <DateTimePicker mode="time" value={time} onChange={setTime} />
      </DemoSection>

      <DemoSection
        title="Date and Time"
        code={`<DateTimePicker mode="datetime" value={datetime} onChange={setDatetime} />`}
      >
        <DateTimePicker mode="datetime" value={datetime} onChange={setDatetime} />
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<DateTimePicker mode="date" size="sm" />
<DateTimePicker mode="date" size="md" />
<DateTimePicker mode="date" size="lg" />`}
      >
        <div className={styles.row}>
          <DateTimePicker mode="date" size="sm" />
          <DateTimePicker mode="date" size="md" />
          <DateTimePicker mode="date" size="lg" />
        </div>
      </DemoSection>

      <DemoSection
        title="With Min/Max"
        code={`<DateTimePicker mode="date" min="2025-01-01" max="2025-12-31" />`}
      >
        <DateTimePicker mode="date" min="2025-01-01" max="2025-12-31" />
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              { prop: "mode", type: '"date" | "time" | "datetime"', default: '"date"', description: "Picker mode" },
              { prop: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Width and padding size" },
              { prop: "value", type: "string", default: "-", description: "Controlled value (ISO-like string)" },
              { prop: "defaultValue", type: "string", default: "-", description: "Uncontrolled initial value" },
              { prop: "onChange", type: "(value: string) => void", default: "-", description: "Value change handler" },
              { prop: "min", type: "string", default: "-", description: "Min date/time" },
              { prop: "max", type: "string", default: "-", description: "Max date/time" },
              { prop: "disabled", type: "boolean", default: "false", description: "Disable the input" },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
