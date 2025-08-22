"use client";

import React, { useState } from "react";
import { Radio, RadioGroup } from "@tslb/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function RadioPage() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [groupValue, setGroupValue] = useState("option1");
  const [colorValue, setColorValue] = useState("blue");
  const [sizeValue, setSizeValue] = useState("md");

  return (
    <div className={styles.container}>
      <h1>Radio Component</h1>
      <p>
        A flexible radio button component with support for individual radios and
        radio groups.
      </p>

      <section className={styles.section}>
        <h2>Basic Usage</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`import { Radio } from '@tslb/ui';

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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Radio Group</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`import { RadioGroup } from '@tslb/ui';

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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>With Descriptions</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`<RadioGroup
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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Color Schemes</h2>
        <div className={styles.demo}>
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
        <CodeBlock language="tsx">
          {`<RadioGroup
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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Sizes</h2>
        <div className={styles.sizeGroup}>
          <div className={styles.size}>
            <h3>Small</h3>
            <div className={styles.demo}>
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
            </div>
            <CodeBlock language="tsx">{`<RadioGroup size="sm" options={[...]} />`}</CodeBlock>
          </div>

          <div className={styles.size}>
            <h3>Medium (Default)</h3>
            <div className={styles.demo}>
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
            </div>
            <CodeBlock language="tsx">{`<RadioGroup size="md" options={[...]} />`}</CodeBlock>
          </div>

          <div className={styles.size}>
            <h3>Large</h3>
            <div className={styles.demo}>
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
            <CodeBlock language="tsx">{`<RadioGroup size="lg" options={[...]} />`}</CodeBlock>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Horizontal Layout</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`<RadioGroup
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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Disabled State</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`<RadioGroup
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
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Individual Disabled Options</h2>
        <div className={styles.demo}>
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
        </div>
        <CodeBlock language="tsx">
          {`<RadioGroup
  name="individual-disabled"
  value={groupValue}
  onChange={setGroupValue}
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2", disabled: true },
    { value: "option3", label: "Option 3" },
  ]}
/>`}
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2>Props</h2>
        <div className={styles.propsSection}>
          <h3>Radio Props</h3>
          <table className={styles.propsTable}>
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
                <td>Unique identifier for the radio input</td>
              </tr>
              <tr>
                <td>name</td>
                <td>string</td>
                <td>-</td>
                <td>Name attribute for the radio input (required)</td>
              </tr>
              <tr>
                <td>value</td>
                <td>string</td>
                <td>-</td>
                <td>Value of the radio option (required)</td>
              </tr>
              <tr>
                <td>checked</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the radio is selected</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether the radio is disabled</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>-</td>
                <td>Label text for the radio option</td>
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
                <td>Size variant of the radio</td>
              </tr>
              <tr>
                <td>colorScheme</td>
                <td>"blue" | "green" | "red" | "yellow" | "purple" | "gray"</td>
                <td>"blue"</td>
                <td>Color scheme for the radio</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>(value: string) =&gt; void</td>
                <td>-</td>
                <td>Callback when radio selection changes</td>
              </tr>
              <tr>
                <td>className</td>
                <td>string</td>
                <td>""</td>
                <td>Additional CSS classes</td>
              </tr>
            </tbody>
          </table>

          <h3>RadioGroup Props</h3>
          <table className={styles.propsTable}>
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
                <td>Name attribute for the radio group (required)</td>
              </tr>
              <tr>
                <td>value</td>
                <td>string</td>
                <td>-</td>
                <td>Currently selected value</td>
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
                <td>Array of radio options (required)</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether all radios in the group are disabled</td>
              </tr>
              <tr>
                <td>size</td>
                <td>"sm" | "md" | "lg"</td>
                <td>"md"</td>
                <td>Size variant for all radios in the group</td>
              </tr>
              <tr>
                <td>colorScheme</td>
                <td>"blue" | "green" | "red" | "yellow" | "purple" | "gray"</td>
                <td>"blue"</td>
                <td>Color scheme for all radios in the group</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>(value: string) =&gt; void</td>
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
                <td>Layout direction of the radio group</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
