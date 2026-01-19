"use client";

import React, { useState } from "react";
import { Select, FormControl, FormLabel, FormErrorMessage } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function SelectPage() {
  const [selectedValue, setSelectedValue] = useState("");
  const [multiValue, setMultiValue] = useState<(string | number)[]>([]);
  const [country, setCountry] = useState("");
  const [hasError, setHasError] = useState(false);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const countries = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "de", label: "Germany" },
    { value: "fr", label: "France" },
  ];

  return (
    <ComponentPageLayout
      title="Select"
      description="A custom dropdown select component with single and multi-select modes, search functionality, and validation support. Features a dropdown menu that appears below the trigger, similar to Ant Design."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Select } from 'uiplex';

<Select
  placeholder="Select an option"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  value={value}
  onChange={(value) => setValue(value)}
/>`}
      >
        <div className={styles.selectGroup}>
          <Select
            placeholder="Select an option"
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
            value={selectedValue}
            onChange={(value) => setSelectedValue(value as string)}
          />
          <Select
            placeholder="Choose a country"
            options={countries}
            value={country}
            onChange={(value) => setCountry(value as string)}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Multi-Select"
        code={`<Select
  mode="multiple"
  placeholder="Select multiple options"
  options={options}
  value={values}
  onChange={(values) => setValues(values)}
/>

<Select
  mode="multiple"
  placeholder="Select multiple countries"
  options={countries}
  allowClear
/>`}
      >
        <div className={styles.selectGroup}>
          <Select
            mode="multiple"
            placeholder="Select multiple options"
            options={options}
            value={multiValue}
            onChange={(value) =>
              setMultiValue(value as (string | number)[])
            }
          />
          <Select
            mode="multiple"
            placeholder="Select multiple countries"
            options={countries}
            allowClear
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Searchable"
        code={`<Select
  searchable
  placeholder="Search and select..."
  options={countries}
/>

<Select
  mode="multiple"
  searchable
  placeholder="Search and select multiple..."
  options={countries}
/>`}
      >
        <div className={styles.selectGroup}>
          <Select
            searchable
            placeholder="Search and select..."
            options={countries}
          />
          <Select
            mode="multiple"
            searchable
            placeholder="Search and select multiple..."
            options={countries}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Select size="sm" placeholder="Small select" options={options} />
<Select size="md" placeholder="Medium select" options={options} />
<Select size="lg" placeholder="Large select" options={options} />`}
      >
        <div className={styles.selectGroup}>
          <Select size="sm" placeholder="Small select" options={options} />
          <Select
            size="md"
            placeholder="Medium select (default)"
            options={options}
          />
          <Select size="lg" placeholder="Large select" options={options} />
        </div>
      </DemoSection>

      <DemoSection
        title="Variants"
        code={`<Select variant="outline" placeholder="Outline" options={options} />
<Select variant="filled" placeholder="Filled" options={options} />
<Select variant="unstyled" placeholder="Unstyled" options={options} />`}
      >
        <div className={styles.selectGroup}>
          <Select
            variant="outline"
            placeholder="Outline variant"
            options={options}
          />
          <Select
            variant="filled"
            placeholder="Filled variant"
            options={options}
          />
          <Select
            variant="unstyled"
            placeholder="Unstyled variant"
            options={options}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="With FormControl"
        code={`import { Select, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

<FormControl isInvalid={hasError} isRequired id="country-field">
  <FormLabel>Country</FormLabel>
  <Select
    placeholder="Select a country"
    options={countries}
    value={country}
    onChange={(value) => setCountry(value)}
  />
  <FormErrorMessage>Country is required</FormErrorMessage>
</FormControl>`}
      >
        <div className={styles.selectGroup}>
          <FormControl isInvalid={hasError} isRequired id="country-field">
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select a country"
              options={countries}
              value={country}
              onChange={(value) => {
                setCountry(value as string);
                setHasError(value === "");
              }}
            />
            <FormErrorMessage>
              {hasError ? "Country is required" : ""}
            </FormErrorMessage>
          </FormControl>
        </div>
      </DemoSection>

      <DemoSection
        title="States"
        code={`<Select placeholder="Normal select" options={options} />
<Select isDisabled placeholder="Disabled select" options={options} />
<Select isReadOnly placeholder="Read only" options={options} value="option1" />
<Select isInvalid placeholder="Invalid select" options={options} />`}
      >
        <div className={styles.selectGroup}>
          <Select placeholder="Normal select" options={options} />
          <Select
            isDisabled
            placeholder="Disabled select"
            options={options}
          />
          <Select
            isReadOnly
            placeholder="Read only select"
            options={options}
            value="option1"
            onChange={() => {}}
          />
          <Select
            isInvalid
            placeholder="Invalid select"
            options={options}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="With Disabled Options"
        code={`<Select
  placeholder="Select an option"
  options={[
    { value: 'option1', label: 'Available Option 1' },
    { value: 'option2', label: 'Available Option 2' },
    { value: 'option3', label: 'Disabled Option', disabled: true },
    { value: 'option4', label: 'Available Option 3' },
  ]}
/>`}
      >
        <div className={styles.selectGroup}>
          <Select
            placeholder="Select an option"
            options={[
              { value: "option1", label: "Available Option 1" },
              { value: "option2", label: "Available Option 2" },
              {
                value: "option3",
                label: "Disabled Option",
                disabled: true,
              },
              { value: "option4", label: "Available Option 3" },
            ]}
          />
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the select",
              },
              {
                prop: "variant",
                type: '"outline" | "filled" | "unstyled"',
                default: '"outline"',
                description: "Visual style variant",
              },
              {
                prop: "options",
                type: "SelectOption[]",
                default: "[]",
                description: "Array of option objects",
              },
              {
                prop: "placeholder",
                type: "string",
                default: '"Select..."',
                description:
                  "Placeholder text shown when no option is selected",
              },
              {
                prop: "value",
                type: "string | number | (string | number)[]",
                default: "-",
                description:
                  "Controlled value (single or array for multi-select)",
              },
              {
                prop: "defaultValue",
                type: "string | number | (string | number)[]",
                default: "-",
                description: "Default value (uncontrolled)",
              },
              {
                prop: "onChange",
                type: "(value) => void",
                default: "-",
                description: "Callback when value changes",
              },
              {
                prop: "mode",
                type: '"single" | "multiple"',
                default: '"single"',
                description: "Single or multi-select mode",
              },
              {
                prop: "searchable",
                type: "boolean",
                default: "false",
                description: "Enable search functionality",
              },
              {
                prop: "allowClear",
                type: "boolean",
                default: "false",
                description: "Show clear button when value is selected",
              },
              {
                prop: "width",
                type: "string | number",
                default: "-",
                description:
                  'Width of the select component (e.g., "300px", 300, "100%")',
              },
              {
                prop: "isInvalid",
                type: "boolean",
                default: "false",
                description: "Whether the select is invalid",
              },
              {
                prop: "isDisabled",
                type: "boolean",
                default: "false",
                description: "Whether the select is disabled",
              },
              {
                prop: "isReadOnly",
                type: "boolean",
                default: "false",
                description: "Whether the select is read-only",
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
                type: "React.SelectHTMLAttributes",
                default: "-",
                description: "All standard HTML select attributes",
              },
            ],
          },
          {
            title: "SelectOption Type",
            data: [
              {
                prop: "value",
                type: "string | number",
                default: "-",
                description: "Option value",
              },
              {
                prop: "label",
                type: "string",
                default: "-",
                description: "Option display text",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the option is disabled",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
