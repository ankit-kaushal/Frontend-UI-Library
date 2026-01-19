"use client";

import React, { useState } from "react";
import { Radio, RadioGroup } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function RadioPage() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [groupValue, setGroupValue] = useState("option1");
  const [colorValue, setColorValue] = useState("blue");
  const [sizeValue, setSizeValue] = useState("md");

  return (
    <ComponentPageLayout
      title="Radio"
      description="A flexible radio button component with support for individual radios and radio groups"
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Radio } from 'uiplex';

const [selectedValue, setSelectedValue] = useState("option1");

<Radio
  name="basic"
  value="option1"
  label="Option 1"
  checked={selectedValue === "option1"}
  onChange={setSelectedValue}
/>
<Radio
  name="basic"
  value="option2"
  label="Option 2"
  checked={selectedValue === "option2"}
  onChange={setSelectedValue}
/>`}
      >
        <Radio
          name="basic"
          value="option1"
          label="Option 1"
          checked={selectedValue === "option1"}
          onChange={setSelectedValue}
        />
        <Radio
          name="basic"
          value="option2"
          label="Option 2"
          checked={selectedValue === "option2"}
          onChange={setSelectedValue}
        />
      </DemoSection>

      <DemoSection
        title="Radio Group"
        code={`import { RadioGroup } from 'uiplex';

const [groupValue, setGroupValue] = useState("option1");

<RadioGroup
  name="group"
  value={groupValue}
  onChange={setGroupValue}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <RadioGroup
          name="group"
          value={groupValue}
          onChange={setGroupValue}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="With Descriptions"
        code={`<RadioGroup
  name="descriptions"
  value={groupValue}
  onChange={setGroupValue}
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
        <RadioGroup
          name="descriptions"
          value={groupValue}
          onChange={setGroupValue}
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
        code={`<RadioGroup
  name="colors"
  value={colorValue}
  onChange={setColorValue}
  colorScheme="blue"
  options={[...]}
/>

<RadioGroup
  name="colors2"
  value={colorValue}
  onChange={setColorValue}
  colorScheme="green"
  options={[...]}
/>

<RadioGroup
  name="colors3"
  value={colorValue}
  onChange={setColorValue}
  colorScheme="red"
  options={[...]}
/>`}
      >
        <div className={styles.radioGroup}>
          <RadioGroup
            name="colors"
            value={colorValue}
            onChange={setColorValue}
            colorScheme="blue"
            options={[
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "red", label: "Red" },
            ]}
          />
          <RadioGroup
            name="colors2"
            value={colorValue}
            onChange={setColorValue}
            colorScheme="green"
            options={[
              { value: "blue", label: "Blue" },
              { value: "green", label: "Green" },
              { value: "red", label: "Red" },
            ]}
          />
          <RadioGroup
            name="colors3"
            value={colorValue}
            onChange={setColorValue}
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
        code={`<RadioGroup size="sm" options={[...]} />
<RadioGroup size="md" options={[...]} />
<RadioGroup size="lg" options={[...]} />`}
      >
        <div className={styles.radioGroup}>
          <RadioGroup
            name="size-sm"
            value={sizeValue}
            onChange={setSizeValue}
            size="sm"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
          <RadioGroup
            name="size-md"
            value={sizeValue}
            onChange={setSizeValue}
            size="md"
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Medium" },
              { value: "lg", label: "Large" },
            ]}
          />
          <RadioGroup
            name="size-lg"
            value={sizeValue}
            onChange={setSizeValue}
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
        code={`<RadioGroup
  name="horizontal"
  value={groupValue}
  onChange={setGroupValue}
  orientation="horizontal"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <RadioGroup
          name="horizontal"
          value={groupValue}
          onChange={setGroupValue}
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
        code={`<RadioGroup
  name="disabled"
  value={groupValue}
  onChange={setGroupValue}
  disabled
  options={[
    { value: "option1", label: "Disabled Option 1" },
    { value: "option2", label: "Disabled Option 2" },
    { value: "option3", label: "Disabled Option 3" },
  ]}
/>`}
      >
        <RadioGroup
          name="disabled"
          value={groupValue}
          onChange={setGroupValue}
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
        code={`<RadioGroup
  name="individual-disabled"
  value={groupValue}
  onChange={setGroupValue}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
      >
        <RadioGroup
          name="individual-disabled"
          value={groupValue}
          onChange={setGroupValue}
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
            title: "Radio Props",
            data: [
              {
                prop: "id",
                type: "string",
                default: "-",
                description: "Unique identifier for the radio input",
              },
              {
                prop: "name",
                type: "string",
                default: "-",
                description: "Name attribute for the radio input (required)",
              },
              {
                prop: "value",
                type: "string",
                default: "-",
                description: "Value of the radio option (required)",
              },
              {
                prop: "checked",
                type: "boolean",
                default: "false",
                description: "Whether the radio is selected",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the radio is disabled",
              },
              {
                prop: "label",
                type: "string",
                default: "-",
                description: "Label text for the radio option",
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
                description: "Size variant of the radio",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for the radio",
              },
              {
                prop: "onChange",
                type: "(value: string) => void",
                default: "-",
                description: "Callback when radio selection changes",
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
            title: "RadioGroup Props",
            data: [
              {
                prop: "name",
                type: "string",
                default: "-",
                description: "Name attribute for the radio group (required)",
              },
              {
                prop: "value",
                type: "string",
                default: "-",
                description: "Currently selected value",
              },
              {
                prop: "options",
                type:
                  "Array<{value: string, label?: string, description?: string, disabled?: boolean}>",
                default: "-",
                description: "Array of radio options (required)",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether all radios in the group are disabled",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size variant for all radios in the group",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for all radios in the group",
              },
              {
                prop: "onChange",
                type: "(value: string) => void",
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
                description: "Layout direction of the radio group",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
