"use client";

import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "uiplex";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function CheckboxPage() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [groupValues, setGroupValues] = useState<string[]>([]);
  const [colorValues, setColorValues] = useState<string[]>([]);
  const [sizeValues, setSizeValues] = useState<string[]>([]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Checkbox</h1>
          <p className={styles.description}>
            A flexible checkbox component with support for individual checkboxes
            and checkbox groups with multiple selections
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Checkbox } from 'uiplex';

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Checkbox Group</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { CheckboxGroup } from 'uiplex';

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Descriptions</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Schemes</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup size="sm" options={[...]} />
<CheckboxGroup size="md" options={[...]} />
<CheckboxGroup size="lg" options={[...]} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Horizontal Layout</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disabled State</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup
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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Individual Disabled Options</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<CheckboxGroup
  name="individual-disabled"
  value={groupValues}
  onChange={setGroupValues}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
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
                  <td>id</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Unique identifier for the checkbox input</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Name attribute for the checkbox input (required)</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Value of the checkbox option (required)</td>
                </tr>
                <tr>
                  <td>checked</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the checkbox is selected</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the checkbox is disabled</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Label text for the checkbox option</td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Description text below the label</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size variant of the checkbox</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>
                    "blue" | "green" | "red" | "yellow" | "purple" | "gray"
                  </td>
                  <td>"blue"</td>
                  <td>Color scheme for the checkbox</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>(checked: boolean, value: string) =&gt; void</td>
                  <td>-</td>
                  <td>Callback when checkbox state changes</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>""</td>
                  <td>Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.apiTable} style={{ marginTop: "2rem" }}>
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
                  <td>name</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Name attribute for the checkbox group (required)</td>
                </tr>
                <tr>
                  <td>value</td>
                  <td>string[]</td>
                  <td>[]</td>
                  <td>Array of currently selected values</td>
                </tr>
                <tr>
                  <td>options</td>
                  <td>
                    Array&lt;
                    {
                      "{value: string, label?: string, description?: string, disabled?: boolean}"
                    }
                    &gt;
                  </td>
                  <td>-</td>
                  <td>Array of checkbox options (required)</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether all checkboxes in the group are disabled</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size variant for all checkboxes in the group</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>
                    "blue" | "green" | "red" | "yellow" | "purple" | "gray"
                  </td>
                  <td>"blue"</td>
                  <td>Color scheme for all checkboxes in the group</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>(values: string[]) =&gt; void</td>
                  <td>-</td>
                  <td>Callback when selection changes</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>""</td>
                  <td>Additional CSS classes</td>
                </tr>
                <tr>
                  <td>orientation</td>
                  <td>"horizontal" | "vertical"</td>
                  <td>"vertical"</td>
                  <td>Layout direction of the checkbox group</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
