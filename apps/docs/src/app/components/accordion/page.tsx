"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "uiplex";
import { ChevronDown, Info, AlertCircle, CheckCircle } from "feather-icons-react";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function AccordionPage() {
  const [controlledIndexes, setControlledIndexes] = useState<number[]>([0]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Accordion</h1>
          <p className={styles.description}>
            A flexible accordion component for organizing content into collapsible
            panels. Supports multiple variants, sizes, color schemes, and both
            single and multiple open modes. Perfect for FAQs, content sections,
            and collapsible lists.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Accordion defaultIndex={0}>
              <AccordionItem index={0}>
                <AccordionButton index={0}>What is uiplex?</AccordionButton>
                <AccordionPanel index={0}>
                  uiplex is a modern React component library built with
                  TypeScript, featuring beautiful, accessible, and customizable
                  UI components.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton index={1}>
                  How do I install uiplex?
                </AccordionButton>
                <AccordionPanel index={1}>
                  You can install uiplex using npm, yarn, or pnpm: npm install
                  uiplex
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton index={2}>
                  Is uiplex free to use?
                </AccordionButton>
                <AccordionPanel index={2}>
                  Yes, uiplex is free and open-source, released under the MIT
                  license.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <CodeBlock language="tsx">
            {`import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from 'uiplex';

<Accordion defaultIndex={0}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>What is uiplex?</AccordionButton>
    <AccordionPanel index={0}>
      uiplex is a modern React component library...
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem index={1}>
    <AccordionButton index={1}>How do I install uiplex?</AccordionButton>
    <AccordionPanel index={1}>
      You can install uiplex using npm, yarn, or pnpm...
    </AccordionPanel>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <div className={styles.variantGroup}>
              <div>
                <h3>Default</h3>
                <Accordion variant="default" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Default Variant</AccordionButton>
                    <AccordionPanel index={0}>
                      This is the default variant with a simple border between
                      items.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem index={1}>
                    <AccordionButton index={1}>Item 2</AccordionButton>
                    <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h3>Bordered</h3>
                <Accordion variant="bordered" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Bordered Variant</AccordionButton>
                    <AccordionPanel index={0}>
                      This variant has borders around each item.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem index={1}>
                    <AccordionButton index={1}>Item 2</AccordionButton>
                    <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h3>Filled</h3>
                <Accordion variant="filled" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Filled Variant</AccordionButton>
                    <AccordionPanel index={0}>
                      This variant has a filled background for each item.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem index={1}>
                    <AccordionButton index={1}>Item 2</AccordionButton>
                    <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Accordion variant="default">...</Accordion>
<Accordion variant="bordered">...</Accordion>
<Accordion variant="filled">...</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.sizeGroup}>
              <div>
                <h3>Small</h3>
                <Accordion size="sm" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Small Size</AccordionButton>
                    <AccordionPanel index={0}>
                      This is a small sized accordion.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h3>Medium</h3>
                <Accordion size="md" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Medium Size</AccordionButton>
                    <AccordionPanel index={0}>
                      This is a medium sized accordion (default).
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <h3>Large</h3>
                <Accordion size="lg" defaultIndex={0}>
                  <AccordionItem index={0}>
                    <AccordionButton index={0}>Large Size</AccordionButton>
                    <AccordionPanel index={0}>
                      This is a large sized accordion.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Accordion size="sm">...</Accordion>
<Accordion size="md">...</Accordion>
<Accordion size="lg">...</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Schemes</h2>
          <div className={styles.demo}>
            <div className={styles.colorGroup}>
              <Accordion colorScheme="blue" defaultIndex={0}>
                <AccordionItem index={0}>
                  <AccordionButton index={0}>Blue</AccordionButton>
                  <AccordionPanel index={0}>Blue color scheme</AccordionPanel>
                </AccordionItem>
                <AccordionItem index={1}>
                  <AccordionButton index={1}>Item 2</AccordionButton>
                  <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion colorScheme="green" defaultIndex={0}>
                <AccordionItem index={0}>
                  <AccordionButton index={0}>Green</AccordionButton>
                  <AccordionPanel index={0}>Green color scheme</AccordionPanel>
                </AccordionItem>
                <AccordionItem index={1}>
                  <AccordionButton index={1}>Item 2</AccordionButton>
                  <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion colorScheme="red" defaultIndex={0}>
                <AccordionItem index={0}>
                  <AccordionButton index={0}>Red</AccordionButton>
                  <AccordionPanel index={0}>Red color scheme</AccordionPanel>
                </AccordionItem>
                <AccordionItem index={1}>
                  <AccordionButton index={1}>Item 2</AccordionButton>
                  <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion colorScheme="purple" defaultIndex={0}>
                <AccordionItem index={0}>
                  <AccordionButton index={0}>Purple</AccordionButton>
                  <AccordionPanel index={0}>Purple color scheme</AccordionPanel>
                </AccordionItem>
                <AccordionItem index={1}>
                  <AccordionButton index={1}>Item 2</AccordionButton>
                  <AccordionPanel index={1}>Content for item 2</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Accordion colorScheme="blue">...</Accordion>
<Accordion colorScheme="green">...</Accordion>
<Accordion colorScheme="red">...</Accordion>
<Accordion colorScheme="purple">...</Accordion>
<Accordion colorScheme="yellow">...</Accordion>
<Accordion colorScheme="gray">...</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Multiple Items Open</h2>
          <div className={styles.demo}>
            <Accordion allowMultiple defaultIndex={[0, 1]}>
              <AccordionItem index={0}>
                <AccordionButton index={0}>Item 1</AccordionButton>
                <AccordionPanel index={0}>
                  Multiple items can be open at the same time when allowMultiple
                  is enabled.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton index={1}>Item 2</AccordionButton>
                <AccordionPanel index={1}>
                  This item is also open by default.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton index={2}>Item 3</AccordionButton>
                <AccordionPanel index={2}>
                  You can open this item while keeping the others open.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <CodeBlock language="tsx">
            {`<Accordion allowMultiple defaultIndex={[0, 1]}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem index={1}>
    <AccordionButton index={1}>Item 2</AccordionButton>
    <AccordionPanel index={1}>Content 2</AccordionPanel>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Custom Icons</h2>
          <div className={styles.demo}>
            <Accordion defaultIndex={0}>
              <AccordionItem index={0}>
                <AccordionButton
                  index={0}
                  icon={<Info size={16} />}
                  iconPosition="left"
                >
                  Information
                </AccordionButton>
                <AccordionPanel index={0}>
                  This accordion item has a custom icon on the left.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton
                  index={1}
                  icon={<AlertCircle size={16} />}
                  iconPosition="left"
                >
                  Warning
                </AccordionButton>
                <AccordionPanel index={1}>
                  This accordion item has a warning icon.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton
                  index={2}
                  icon={<CheckCircle size={16} />}
                  iconPosition="left"
                >
                  Success
                </AccordionButton>
                <AccordionPanel index={2}>
                  This accordion item has a success icon.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <CodeBlock language="tsx">
            {`import { Info, AlertCircle } from 'feather-icons-react';

<Accordion>
  <AccordionItem index={0}>
    <AccordionButton
      index={0}
      icon={<Info size={16} />}
      iconPosition="left"
    >
      Information
    </AccordionButton>
    <AccordionPanel index={0}>Content</AccordionPanel>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Controlled Mode</h2>
          <div className={styles.demo}>
            <Accordion
              index={controlledIndexes}
              onChange={setControlledIndexes}
              allowMultiple
            >
              <AccordionItem index={0}>
                <AccordionButton index={0}>Controlled Item 1</AccordionButton>
                <AccordionPanel index={0}>
                  This accordion is controlled. Open indexes:{" "}
                  {controlledIndexes.join(", ") || "none"}
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton index={1}>Controlled Item 2</AccordionButton>
                <AccordionPanel index={1}>
                  You can control which items are open programmatically.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton index={2}>Controlled Item 3</AccordionButton>
                <AccordionPanel index={2}>
                  The state is managed externally.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <CodeBlock language="tsx">
            {`const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

<Accordion
  index={openIndexes}
  onChange={setOpenIndexes}
  allowMultiple
>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content</AccordionPanel>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disable Toggle</h2>
          <div className={styles.demo}>
            <Accordion defaultIndex={0} allowToggle={false}>
              <AccordionItem index={0}>
                <AccordionButton index={0}>Item 1 (Cannot Close)</AccordionButton>
                <AccordionPanel index={0}>
                  When allowToggle is false, you cannot close an open item by
                  clicking it again. You can only open other items.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={1}>
                <AccordionButton index={1}>Item 2</AccordionButton>
                <AccordionPanel index={1}>
                  Clicking this will open it and close Item 1.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem index={2}>
                <AccordionButton index={2}>Item 3</AccordionButton>
                <AccordionPanel index={2}>
                  Clicking this will open it and close the previously open item.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <CodeBlock language="tsx">
            {`<Accordion defaultIndex={0} allowToggle={false}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content</AccordionPanel>
  </AccordionItem>
</Accordion>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <h3>Accordion Props</h3>
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
                  <td>defaultIndex</td>
                  <td>number | number[]</td>
                  <td>-</td>
                  <td>Initial open index(es) for uncontrolled mode</td>
                </tr>
                <tr>
                  <td>index</td>
                  <td>number | number[]</td>
                  <td>-</td>
                  <td>Controlled open index(es)</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>(indexes: number[]) =&gt; void</td>
                  <td>-</td>
                  <td>Callback when open indexes change</td>
                </tr>
                <tr>
                  <td>allowMultiple</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Allow multiple items to be open simultaneously</td>
                </tr>
                <tr>
                  <td>allowToggle</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Allow closing an open item by clicking it again</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"default" | "bordered" | "filled"</td>
                  <td>"default"</td>
                  <td>Visual variant of the accordion</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size of the accordion buttons</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>"blue" | "green" | "red" | "yellow" | "purple" | "gray"</td>
                  <td>"blue"</td>
                  <td>Color scheme for active state</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class name</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.apiTable}>
            <h3>AccordionItem Props</h3>
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
                  <td>index</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Unique index for this item</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class name</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.apiTable}>
            <h3>AccordionButton Props</h3>
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
                  <td>index</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Index of the associated item</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Custom icon element</td>
                </tr>
                <tr>
                  <td>iconPosition</td>
                  <td>"left" | "right"</td>
                  <td>"right"</td>
                  <td>Position of the icon</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class name</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.apiTable}>
            <h3>AccordionPanel Props</h3>
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
                  <td>index</td>
                  <td>number</td>
                  <td>0</td>
                  <td>Index of the associated item</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class name</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Keyboard Navigation</h2>
          <div className={styles.keyboardList}>
            <ul>
              <li>
                <strong>Enter / Space:</strong> Toggle the focused accordion item
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

