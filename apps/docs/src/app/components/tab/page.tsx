"use client";

import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "uiplex";
import { Home, Settings, User, Mail } from "feather-icons-react";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function TabPage() {
  const [controlledIndex, setControlledIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Tab</h1>
          <p className={styles.description}>
            A flexible tab component for organizing content into multiple panels.
            Supports multiple variants, sizes, color schemes, and keyboard
            navigation. Perfect for creating tabbed interfaces in your
            applications.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'uiplex';

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
          </CodeBlock>
        </section>

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

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Icons</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Home, Settings } from 'feather-icons-react';

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Controlled Mode</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`const [activeIndex, setActiveIndex] = useState(0);

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
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disabled Tabs</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Tabs>
  <TabList>
    <Tab index={0}>Enabled Tab</Tab>
    <Tab index={1} disabled>
      Disabled Tab
    </Tab>
  </TabList>
  <TabPanels>...</TabPanels>
</Tabs>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Vertical Orientation</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`<Tabs orientation="vertical">
  <TabList>
    <Tab index={0}>Tab 1</Tab>
    <Tab index={1}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel index={0}>Content 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
  </TabPanels>
</Tabs>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <h3>Tabs Props</h3>
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
                  <td>number</td>
                  <td>0</td>
                  <td>Default active tab index (uncontrolled)</td>
                </tr>
                <tr>
                  <td>index</td>
                  <td>number</td>
                  <td>-</td>
                  <td>Active tab index (controlled mode)</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>(index: number) =&gt; void</td>
                  <td>-</td>
                  <td>Callback when active tab changes</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"line" | "enclosed" | "soft-rounded"</td>
                  <td>"line"</td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size of the tabs</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>"blue" | "green" | "red" | "yellow" | "purple" | "gray"</td>
                  <td>"blue"</td>
                  <td>Color scheme for active tab</td>
                </tr>
                <tr>
                  <td>orientation</td>
                  <td>"horizontal" | "vertical"</td>
                  <td>"horizontal"</td>
                  <td>Layout orientation</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>

            <h3>Tab Props</h3>
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
                  <td>Tab index (must be unique)</td>
                </tr>
                <tr>
                  <td>disabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the tab is disabled</td>
                </tr>
                <tr>
                  <td>icon</td>
                  <td>ReactNode</td>
                  <td>-</td>
                  <td>Icon to display before tab label</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
              </tbody>
            </table>

            <h3>TabPanel Props</h3>
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
                  <td>Panel index (must match corresponding Tab index)</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Additional CSS class</td>
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
      </div>
    </div>
  );
}

