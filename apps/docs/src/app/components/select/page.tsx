"use client";

import React, { useState } from "react";
import { Select, FormControl, FormLabel, FormErrorMessage } from "uiplex";
import CodeBlock from "@/components/CodeBlock";
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
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Select</h1>
          <p className={styles.description}>
            A custom dropdown select component with single and multi-select
            modes, search functionality, and validation support. Features a
            dropdown menu that appears below the trigger, similar to Ant Design.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Select } from 'uiplex';

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Multi-Select</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Select
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Searchable</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Select
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.selectGroup}>
              <Select size="sm" placeholder="Small select" options={options} />
              <Select
                size="md"
                placeholder="Medium select (default)"
                options={options}
              />
              <Select size="lg" placeholder="Large select" options={options} />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Select size="sm" placeholder="Small select" options={options} />
<Select size="md" placeholder="Medium select" options={options} />
<Select size="lg" placeholder="Large select" options={options} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Select variant="outline" placeholder="Outline" options={options} />
<Select variant="filled" placeholder="Filled" options={options} />
<Select variant="unstyled" placeholder="Unstyled" options={options} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With FormControl</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Select, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>States</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Select placeholder="Normal select" options={options} />
<Select isDisabled placeholder="Disabled select" options={options} />
<Select isReadOnly placeholder="Read only" options={options} value="option1" />
<Select isInvalid placeholder="Invalid select" options={options} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Disabled Options</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Select
  placeholder="Select an option"
  options={[
    { value: 'option1', label: 'Available Option 1' },
    { value: 'option2', label: 'Available Option 2' },
    { value: 'option3', label: 'Disabled Option', disabled: true },
    { value: 'option4', label: 'Available Option 3' },
  ]}
/>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size of the select</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"outline" | "filled" | "unstyled"</td>
                  <td>"outline"</td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>SelectOption[]</td>
                  <td>[]</td>
                  <td>Array of option objects</td>
                </tr>
                <tr>
                  <td>placeholder</td>
                  <td>string</td>
                  <td>"Select..."</td>
                  <td>Placeholder text shown when no option is selected</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>string | number | (string | number)[]</td>
                  <td>-</td>
                  <td>Controlled value (single or array for multi-select)</td>
                </tr>
                <tr>
                  <td>defaultValue</td>
                  <td>string | number | (string | number)[]</td>
                  <td>-</td>
                  <td>Default value (uncontrolled)</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>(value) ={">"} void</td>
                  <td>-</td>
                  <td>Callback when value changes</td>
                </tr>
                <tr>
                  <td>mode</td>
                  <td>"single" | "multiple"</td>
                  <td>"single"</td>
                  <td>Single or multi-select mode</td>
                </tr>
                <tr>
                  <td>searchable</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Enable search functionality</td>
                </tr>
                <tr>
                  <td>allowClear</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Show clear button when value is selected</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>string | number</td>
                  <td>-</td>
                  <td>
                    Width of the select component (e.g., "300px", 300, "100%")
                  </td>
                </tr>
                <tr>
                  <td>isInvalid</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the select is invalid</td>
                </tr>
                <tr>
                  <td>isDisabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the select is disabled</td>
                </tr>
                <tr>
                  <td>isReadOnly</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the select is read-only</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>""</td>
                  <td>Additional CSS classes</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
                <tr>
                  <td>...props</td>
                  <td>React.SelectHTMLAttributes</td>
                  <td>-</td>
                  <td>All standard HTML select attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.apiTable} style={{ marginTop: "2rem" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.25rem",
                fontWeight: 600,
                paddingLeft: "1rem",
              }}
            >
              SelectOption Type
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>value</td>
                  <td>string | number</td>
                  <td>Option value</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>string</td>
                  <td>Option display text</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>Whether the option is disabled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
