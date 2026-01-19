"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "uiplex";
import { Info, AlertCircle, CheckCircle } from "feather-icons-react";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function AccordionPage() {
  const [controlledIndexes, setControlledIndexes] = useState<number[]>([0]);

  return (
    <ComponentPageLayout
      title="Accordion"
      description="A flexible accordion component for organizing content into collapsible panels. Supports multiple variants, sizes, color schemes, and both single and multiple open modes. Perfect for FAQs, content sections, and collapsible lists."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from 'uiplex';

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
      >
        <Accordion defaultIndex={0}>
          <AccordionItem index={0}>
            <AccordionButton index={0}>What is uiplex?</AccordionButton>
            <AccordionPanel index={0}>
              uiplex is a modern React component library built with TypeScript,
              featuring beautiful, accessible, and customizable UI components.
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
            <AccordionButton index={2}>Is uiplex free to use?</AccordionButton>
            <AccordionPanel index={2}>
              Yes, uiplex is free and open-source, released under the MIT
              license.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </DemoSection>

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

      <DemoSection
        title="Multiple Items Open"
        code={`<Accordion allowMultiple defaultIndex={[0, 1]}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem index={1}>
    <AccordionButton index={1}>Item 2</AccordionButton>
    <AccordionPanel index={1}>Content 2</AccordionPanel>
  </AccordionItem>
</Accordion>`}
      >
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
      </DemoSection>

      <DemoSection
        title="With Custom Icons"
        code={`import { Info, AlertCircle } from 'feather-icons-react';

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
      >
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
      </DemoSection>

      <DemoSection
        title="Controlled Mode"
        code={`const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

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
      >
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
      </DemoSection>

      <DemoSection
        title="Disable Toggle"
        code={`<Accordion defaultIndex={0} allowToggle={false}>
  <AccordionItem index={0}>
    <AccordionButton index={0}>Item 1</AccordionButton>
    <AccordionPanel index={0}>Content</AccordionPanel>
  </AccordionItem>
</Accordion>`}
      >
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
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Accordion Props",
            data: [
              {
                prop: "defaultIndex",
                type: "number | number[]",
                default: "-",
                description:
                  "Initial open index(es) for uncontrolled mode",
              },
              {
                prop: "index",
                type: "number | number[]",
                default: "-",
                description: "Controlled open index(es)",
              },
              {
                prop: "onChange",
                type: "(indexes: number[]) => void",
                default: "-",
                description: "Callback when open indexes change",
              },
              {
                prop: "allowMultiple",
                type: "boolean",
                default: "false",
                description:
                  "Allow multiple items to be open simultaneously",
              },
              {
                prop: "allowToggle",
                type: "boolean",
                default: "true",
                description:
                  "Allow closing an open item by clicking it again",
              },
              {
                prop: "variant",
                type: '"default" | "bordered" | "filled"',
                default: '"default"',
                description: "Visual variant of the accordion",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the accordion buttons",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for active state",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class name",
              },
              {
                prop: "style",
                type: "React.CSSProperties",
                default: "-",
                description: "Inline styles",
              },
            ],
          },
          {
            title: "AccordionItem Props",
            data: [
              {
                prop: "index",
                type: "number",
                default: "0",
                description: "Unique index for this item",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class name",
              },
              {
                prop: "style",
                type: "React.CSSProperties",
                default: "-",
                description: "Inline styles",
              },
            ],
          },
          {
            title: "AccordionButton Props",
            data: [
              {
                prop: "index",
                type: "number",
                default: "0",
                description: "Index of the associated item",
              },
              {
                prop: "icon",
                type: "React.ReactNode",
                default: "-",
                description: "Custom icon element",
              },
              {
                prop: "iconPosition",
                type: '"left" | "right"',
                default: '"right"',
                description: "Position of the icon",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class name",
              },
              {
                prop: "style",
                type: "React.CSSProperties",
                default: "-",
                description: "Inline styles",
              },
            ],
          },
          {
            title: "AccordionPanel Props",
            data: [
              {
                prop: "index",
                type: "number",
                default: "0",
                description: "Index of the associated item",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class name",
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
    </ComponentPageLayout>
  );
}
