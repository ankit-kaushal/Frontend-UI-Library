"use client";

import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function CheckboxPage() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [groupValues, setGroupValues] = useState<string[]>([]);
  const [colorValues, setColorValues] = useState<string[]>([]);
  const [sizeValues, setSizeValues] = useState<string[]>([]);

  return (
    <ComponentPageLayout
      title="Checkbox"
      description="A flexible checkbox component with support for individual checkboxes and checkbox groups with multiple selections"
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Checkbox } from 'uiplex';

const [selectedValues, setSelectedValues] = useState<string[]>([]);

<Checkbox
  name="basic"
  value="option1"
  label="Option 1"
  checked={selectedValues.includes("option1")}
  onChange={(checked, value) => {
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  }}
/>`}
      >
        <Checkbox
          name="basic"
          value="option1"
          label="Option 1"
          checked={selectedValues.includes("option1")}
          onChange={(checked, value) => {
            if (checked) {
              setSelectedValues([...selectedValues, value]);
            } else {
              setSelectedValues(selectedValues.filter((v) => v !== value));
            }
          }}
        />
        <Checkbox
          name="basic"
          value="option2"
          label="Option 2"
          checked={selectedValues.includes("option2")}
          onChange={(checked, value) => {
            if (checked) {
              setSelectedValues([...selectedValues, value]);
            } else {
              setSelectedValues(selectedValues.filter((v) => v !== value));
            }
          }}
        />
      </DemoSection>

      <DemoSection
        title="Checkbox Group"
        code={`import { CheckboxGroup } from 'uiplex';

const [groupValues, setGroupValues] = useState<string[]>([]);

<CheckboxGroup
  name="group"
  value={groupValues}
  onChange={setGroupValues}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <CheckboxGroup
          name="group"
          value={groupValues}
          onChange={setGroupValues}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="With Descriptions"
        code={`<CheckboxGroup
  name="descriptions"
  value={groupValues}
  onChange={setGroupValues}
  options={[
    {
      value: "option1",
      label: "Free Plan",
      description: "Perfect for getting started",
    },
    {
      value: "option2",
      label: "Pro Plan",
      description: "Best for growing businesses",
    },
    {
      value: "option3",
      label: "Enterprise Plan",
      description: "For large organizations",
    },
  ]}
/>`}
      >
        <CheckboxGroup
          name="descriptions"
          value={groupValues}
          onChange={setGroupValues}
          options={[
            {
              value: "option1",
              label: "Free Plan",
              description: "Perfect for getting started",
            },
            {
              value: "option2",
              label: "Pro Plan",
              description: "Best for growing businesses",
            },
            {
              value: "option3",
              label: "Enterprise Plan",
              description: "For large organizations",
            },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Color Schemes"
        code={`<CheckboxGroup
  name="colors"
  value={colorValues}
  onChange={setColorValues}
  colorScheme="blue"
  options={[...]}
/>

<CheckboxGroup
  name="colors2"
  value={colorValues}
  onChange={setColorValues}
  colorScheme="green"
  options={[...]}
/>

<CheckboxGroup
  name="colors3"
  value={colorValues}
  onChange={setColorValues}
  colorScheme="red"
  options={[...]}
/>`}
      >
        <div className={styles.checkboxGroup}>
          <CheckboxGroup
            name="colors"
            value={colorValues}
            onChange={setColorValues}
            colorScheme="blue"
            options={[
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "red", label: "Red" },
            ]}
          />
          <CheckboxGroup
            name="colors2"
            value={colorValues}
            onChange={setColorValues}
            colorScheme="green"
            options={[
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "red", label: "Red" },
            ]}
          />
          <CheckboxGroup
            name="colors3"
            value={colorValues}
            onChange={setColorValues}
            colorScheme="red"
            options={[
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "red", label: "Red" },
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<CheckboxGroup size="sm" options={[...]} />
<CheckboxGroup size="md" options={[...]} />
<CheckboxGroup size="lg" options={[...]} />`}
      >
        <div className={styles.checkboxGroup}>
          <CheckboxGroup
            name="size-sm"
            value={sizeValues}
            onChange={setSizeValues}
            size="sm"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
          <CheckboxGroup
            name="size-md"
            value={sizeValues}
            onChange={setSizeValues}
            size="md"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
          <CheckboxGroup
            name="size-lg"
            value={sizeValues}
            onChange={setSizeValues}
            size="lg"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Horizontal Layout"
        code={`<CheckboxGroup
  name="horizontal"
  value={groupValues}
  onChange={setGroupValues}
  orientation="horizontal"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <CheckboxGroup
          name="horizontal"
          value={groupValues}
          onChange={setGroupValues}
          orientation="horizontal"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Disabled State"
        code={`<CheckboxGroup
  name="disabled"
  value={groupValues}
  onChange={setGroupValues}
  disabled
  options={[
    { value: "option1", label: "Disabled Option 1" },
    { value: "option2", label: "Disabled Option 2" },
    { value: "option3", label: "Disabled Option 3" },
  ]}
/>`}
      >
        <CheckboxGroup
          name="disabled"
          value={groupValues}
          onChange={setGroupValues}
          disabled
          options={[
            { value: "option1", label: "Disabled Option 1" },
            { value: "option2", label: "Disabled Option 2" },
            { value: "option3", label: "Disabled Option 3" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Individual Disabled Options"
        code={`<CheckboxGroup
  name="individual-disabled"
  value={groupValues}
  onChange={setGroupValues}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <CheckboxGroup
          name="individual-disabled"
          value={groupValues}
          onChange={setGroupValues}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2", disabled: true },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Checkbox Props",
            data: [
              {
                prop: "id",
                type: "string",
                default: "-",
                description: "Unique identifier for the checkbox input",
              },
              {
                prop: "name",
                type: "string",
                default: "-",
                description: "Name attribute for the checkbox input (required)",
              },
              {
                prop: "value",
                type: "string",
                default: "-",
                description: "Value of the checkbox option (required)",
              },
              {
                prop: "checked",
                type: "boolean",
                default: "false",
                description: "Whether the checkbox is selected",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the checkbox is disabled",
              },
              {
                prop: "label",
                type: "string",
                default: "-",
                description: "Label text for the checkbox option",
              },
              {
                prop: "description",
                type: "string",
                default: "-",
                description: "Description text below the label",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size variant of the checkbox",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for the checkbox",
              },
              {
                prop: "onChange",
                type: "(checked: boolean, value: string) => void",
                default: "-",
                description: "Callback when checkbox state changes",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
              },
            ],
          },
          {
            title: "CheckboxGroup Props",
            data: [
              {
                prop: "name",
                type: "string",
                default: "-",
                description: "Name attribute for the checkbox group (required)",
              },
              {
                prop: "value",
                type: "string[]",
                default: "[]",
                description: "Array of currently selected values",
              },
              {
                prop: "options",
                type:
                  "Array<{value: string, label?: string, description?: string, disabled?: boolean}>",
                default: "-",
                description: "Array of checkbox options (required)",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether all checkboxes in the group are disabled",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size variant for all checkboxes in the group",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for all checkboxes in the group",
              },
              {
                prop: "onChange",
                type: "(values: string[]) => void",
                default: "-",
                description: "Callback when selection changes",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
              },
              {
                prop: "orientation",
                type: '"horizontal" | "vertical"',
                default: '"vertical"',
                description: "Layout direction of the checkbox group",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
