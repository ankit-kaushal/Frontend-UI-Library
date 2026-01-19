"use client";

import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "uiplex";
import { Home, Settings, User, Mail } from "feather-icons-react";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function TabPage() {
  const [controlledIndex, setControlledIndex] = useState(0);

  return (
    <ComponentPageLayout
      title="Tabs"
      description="A flexible tabs component for organizing content into multiple panels. Supports multiple variants, sizes, color schemes, and keyboard navigation. Perfect for creating tabbed interfaces in your applications."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'uiplex';

<Tabs defaultIndex={0}>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
    <Tab index={2}>Tab 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>
      <p>Content for Tab 1</p>
    </TabPanel>
    <TabPanel index={1}>
      <p>Content for Tab 2</p>
    </TabPanel>
    <TabPanel index={2}>
      <p>Content for Tab 3</p>
    </TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>
              <p>Content for Tab 1</p>
            </TabPanel>
            <TabPanel index={1}>
              <p>Content for Tab 2</p>
            </TabPanel>
            <TabPanel index={2}>
              <p>Content for Tab 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DemoSection>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Variants</h2>
        <div className={styles.demo}>
          <div className={styles.variantGroup}>
            <div>
              <h3>Line (Default)</h3>
              <Tabs variant="line" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Home</Tab>
                  <Tab index={1}>Settings</Tab>
                  <Tab index={2}>Profile</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Home content</TabPanel>
                  <TabPanel index={1}>Settings content</TabPanel>
                  <TabPanel index={2}>Profile content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            <div>
              <h3>Enclosed</h3>
              <Tabs variant="enclosed" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Home</Tab>
                  <Tab index={1}>Settings</Tab>
                  <Tab index={2}>Profile</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Home content</TabPanel>
                  <TabPanel index={1}>Settings content</TabPanel>
                  <TabPanel index={2}>Profile content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            <div>
              <h3>Soft Rounded</h3>
              <Tabs variant="soft-rounded" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Home</Tab>
                  <Tab index={1}>Settings</Tab>
                  <Tab index={2}>Profile</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Home content</TabPanel>
                  <TabPanel index={1}>Settings content</TabPanel>
                  <TabPanel index={2}>Profile content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
        <CodeBlock language="tsx">
          {`// Line variant (default)
<Tabs variant="line">
  <TabList>...</TabList>
  <TabPanels>...</TabPanels>
</Tabs>

// Enclosed variant
<Tabs variant="enclosed">
  <TabList>...</TabList>
  <TabPanels>...</TabPanels>
</Tabs>

// Soft rounded variant
<Tabs variant="soft-rounded">
  <TabList>...</TabList>
  <TabPanels>...</TabPanels>
</Tabs>`}
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.demo}>
          <div className={styles.sizeGroup}>
            <div>
              <h3>Small</h3>
              <Tabs size="sm" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Tab 1</Tab>
                  <Tab index={1}>Tab 2</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Small tab content</TabPanel>
                  <TabPanel index={1}>Small tab content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            <div>
              <h3>Medium (Default)</h3>
              <Tabs size="md" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Tab 1</Tab>
                  <Tab index={1}>Tab 2</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Medium tab content</TabPanel>
                  <TabPanel index={1}>Medium tab content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            <div>
              <h3>Large</h3>
              <Tabs size="lg" defaultIndex={0}>
                <TabList>
                  <Tab index={0}>Tab 1</Tab>
                  <Tab index={1}>Tab 2</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel index={0}>Large tab content</TabPanel>
                  <TabPanel index={1}>Large tab content</TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
        <CodeBlock language="tsx">
          {`<Tabs size="sm">...</Tabs>
<Tabs size="md">...</Tabs>
<Tabs size="lg">...</Tabs>`}
        </CodeBlock>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Color Schemes</h2>
        <div className={styles.demo}>
          <div className={styles.colorGroup}>
            <Tabs colorScheme="blue" defaultIndex={0}>
              <TabList>
                <Tab index={0}>Blue</Tab>
                <Tab index={1}>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel index={0}>Blue tab content</TabPanel>
                <TabPanel index={1}>Tab 2 content</TabPanel>
              </TabPanels>
            </Tabs>
            <Tabs colorScheme="green" defaultIndex={0}>
              <TabList>
                <Tab index={0}>Green</Tab>
                <Tab index={1}>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel index={0}>Green tab content</TabPanel>
                <TabPanel index={1}>Tab 2 content</TabPanel>
              </TabPanels>
            </Tabs>
            <Tabs colorScheme="red" defaultIndex={0}>
              <TabList>
                <Tab index={0}>Red</Tab>
                <Tab index={1}>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel index={0}>Red tab content</TabPanel>
                <TabPanel index={1}>Tab 2 content</TabPanel>
              </TabPanels>
            </Tabs>
            <Tabs colorScheme="purple" defaultIndex={0}>
              <TabList>
                <Tab index={0}>Purple</Tab>
                <Tab index={1}>Tab 2</Tab>
              </TabList>
              <TabPanels>
                <TabPanel index={0}>Purple tab content</TabPanel>
                <TabPanel index={1}>Tab 2 content</TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
        <CodeBlock language="tsx">
          {`<Tabs colorScheme="blue">...</Tabs>
<Tabs colorScheme="green">...</Tabs>
<Tabs colorScheme="red">...</Tabs>
<Tabs colorScheme="purple">...</Tabs>
<Tabs colorScheme="yellow">...</Tabs>
<Tabs colorScheme="gray">...</Tabs>`}
        </CodeBlock>
      </section>

      <DemoSection
        title="With Icons"
        code={`import { Home, Settings } from 'feather-icons-react';

<Tabs>
  <TabList>
    <Tab index={0} icon={<Home size={16} />}>
      Home
    </Tab>
    <Tab index={1} icon={<Settings size={16} />}>
      Settings
    </Tab>
  </TabList>
  <TabPanels>...</TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0} icon={<Home size={16} />}>
              Home
            </Tab>
            <Tab index={1} icon={<Settings size={16} />}>
              Settings
            </Tab>
            <Tab index={2} icon={<User size={16} />}>
              Profile
            </Tab>
            <Tab index={3} icon={<Mail size={16} />}>
              Messages
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>Home content with icon</TabPanel>
            <TabPanel index={1}>Settings content with icon</TabPanel>
            <TabPanel index={2}>Profile content with icon</TabPanel>
            <TabPanel index={3}>Messages content with icon</TabPanel>
          </TabPanels>
        </Tabs>
      </DemoSection>

      <DemoSection
        title="Controlled Mode"
        code={`const [activeIndex, setActiveIndex] = useState(0);

<Tabs index={activeIndex} onChange={setActiveIndex}>
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs index={controlledIndex} onChange={setControlledIndex}>
          <TabList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>
              <p>Controlled Tab 1 - Current index: {controlledIndex}</p>
            </TabPanel>
            <TabPanel index={1}>
              <p>Controlled Tab 2 - Current index: {controlledIndex}</p>
            </TabPanel>
            <TabPanel index={2}>
              <p>Controlled Tab 3 - Current index: {controlledIndex}</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DemoSection>

      <DemoSection
        title="Disabled Tabs"
        code={`<Tabs>
  <TabList>
    <Tab index={0}>Enabled Tab</Tab>
    <Tab index={1} disabled>
      Disabled Tab
    </Tab>
  </TabList>
  <TabPanels>...</TabPanels>
</Tabs>`}
      >
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab index={0}>Enabled Tab</Tab>
            <Tab index={1} disabled>
              Disabled Tab
            </Tab>
            <Tab index={2}>Another Enabled Tab</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>Enabled tab content</TabPanel>
            <TabPanel index={1}>This tab is disabled</TabPanel>
            <TabPanel index={2}>Another enabled tab content</TabPanel>
          </TabPanels>
        </Tabs>
      </DemoSection>

      <DemoSection
        title="Vertical Orientation"
        code={`<Tabs orientation="vertical">
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>`}
      >
        <Tabs orientation="vertical" defaultIndex={0} style={{ height: "300px" }}>
          <TabList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel index={0}>
              <p>Vertical tab content 1</p>
            </TabPanel>
            <TabPanel index={1}>
              <p>Vertical tab content 2</p>
            </TabPanel>
            <TabPanel index={2}>
              <p>Vertical tab content 3</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Tabs Props",
            data: [
              {
                prop: "defaultIndex",
                type: "number",
                default: "0",
                description: "Default active tab index (uncontrolled)",
              },
              {
                prop: "index",
                type: "number",
                default: "-",
                description: "Active tab index (controlled mode)",
              },
              {
                prop: "onChange",
                type: "(index: number) => void",
                default: "-",
                description: "Callback when active tab changes",
              },
              {
                prop: "variant",
                type: '"line" | "enclosed" | "soft-rounded"',
                default: '"line"',
                description: "Visual style variant",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the tabs",
              },
              {
                prop: "colorScheme",
                type:
                  '"blue" | "green" | "red" | "yellow" | "purple" | "gray"',
                default: '"blue"',
                description: "Color scheme for active tab",
              },
              {
                prop: "orientation",
                type: '"horizontal" | "vertical"',
                default: '"horizontal"',
                description: "Layout orientation",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class",
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
            title: "Tab Props",
            data: [
              {
                prop: "index",
                type: "number",
                default: "0",
                description: "Tab index (must be unique)",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the tab is disabled",
              },
              {
                prop: "icon",
                type: "ReactNode",
                default: "-",
                description: "Icon to display before tab label",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class",
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
            title: "TabPanel Props",
            data: [
              {
                prop: "index",
                type: "number",
                default: "0",
                description:
                  "Panel index (must match corresponding Tab index)",
              },
              {
                prop: "className",
                type: "string",
                default: "-",
                description: "Additional CSS class",
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
              <strong>Arrow Right / Arrow Down:</strong> Move to next tab
            </li>
            <li>
              <strong>Arrow Left / Arrow Up:</strong> Move to previous tab
            </li>
            <li>
              <strong>Home:</strong> Move to first tab
            </li>
            <li>
              <strong>End:</strong> Move to last tab
            </li>
          </ul>
        </div>
      </section>
    </ComponentPageLayout>
  );
}
