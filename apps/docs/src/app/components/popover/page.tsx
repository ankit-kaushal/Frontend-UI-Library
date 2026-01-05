"use client";

import React, { useState } from "react";
import {
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Button,
  useDisclosure,
} from "uiplex";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

function PopoverWithClose() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Popover
      content={
        <>
          <PopoverHeader>
            Popover Title
            <PopoverCloseButton onClose={onClose} />
          </PopoverHeader>
          <PopoverBody>
            This is the popover body content. You can add any content here.
          </PopoverBody>
          <PopoverFooter>
            <Button size="sm" variant="primary">
              Action
            </Button>
            <Button size="sm" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </PopoverFooter>
        </>
      }
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (open) onOpen();
        else onClose();
      }}
    >
      <Button onClick={onToggle}>Open Popover</Button>
    </Popover>
  );
}

export default function PopoverPage() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Popover</h1>
          <p className={styles.description}>
            A popover component that displays rich content in a floating
            container. Supports click and hover triggers, multiple placements,
            and controlled/uncontrolled modes.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Popover
              content={
                <div style={{ padding: "1rem" }}>
                  This is a simple popover content.
                </div>
              }
            >
              <Button>Click me</Button>
            </Popover>
          </div>
          <CodeBlock language="tsx">
            {`import { Popover, Button } from 'uiplex';

<Popover
  content={
    <div style={{ padding: '1rem' }}>
      This is a simple popover content.
    </div>
  }
>
  <Button>Click me</Button>
</Popover>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Header, Body, and Footer</h2>
          <div className={styles.demo}>
            <PopoverWithClose />
          </div>
          <CodeBlock language="tsx">
            {`import {
  Popover,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Button,
} from 'uiplex';

<Popover
  content={
    <>
      <PopoverHeader>
        Popover Title
        <PopoverCloseButton onClose={() => {}} />
      </PopoverHeader>
      <PopoverBody>
        This is the popover body content.
      </PopoverBody>
      <PopoverFooter>
        <Button size="sm" variant="primary">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </PopoverFooter>
    </>
  }
>
  <Button>Open Popover</Button>
</Popover>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Placements</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Popover
                content={<div style={{ padding: "1rem" }}>Top</div>}
                placement="top"
              >
                <Button size="sm">Top</Button>
              </Popover>
              <Popover
                content={<div style={{ padding: "1rem" }}>Bottom</div>}
                placement="bottom"
              >
                <Button size="sm">Bottom</Button>
              </Popover>
              <Popover
                content={<div style={{ padding: "1rem" }}>Left</div>}
                placement="left"
              >
                <Button size="sm">Left</Button>
              </Popover>
              <Popover
                content={<div style={{ padding: "1rem" }}>Right</div>}
                placement="right"
              >
                <Button size="sm">Right</Button>
              </Popover>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Popover content={<div>Top</div>} placement="top">
  <Button>Top</Button>
</Popover>
<Popover content={<div>Bottom</div>} placement="bottom">
  <Button>Bottom</Button>
</Popover>
<Popover content={<div>Left</div>} placement="left">
  <Button>Left</Button>
</Popover>
<Popover content={<div>Right</div>} placement="right">
  <Button>Right</Button>
</Popover>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hover Trigger</h2>
          <div className={styles.demo}>
            <Popover
              content={
                <div style={{ padding: "1rem" }}>Hover to see popover</div>
              }
              trigger="hover"
            >
              <Button>Hover me</Button>
            </Popover>
          </div>
          <CodeBlock language="tsx">
            {`<Popover
  content={<div>Hover to see popover</div>}
  trigger="hover"
>
  <Button>Hover me</Button>
</Popover>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Controlled Mode</h2>
          <div className={styles.demo}>
            <Popover
              content={
                <div style={{ padding: "1rem" }}>
                  This popover is controlled by state.
                </div>
              }
              isOpen={isOpen}
              onOpenChange={(open) => {
                if (open) onOpen();
                else onClose();
              }}
            >
              <Button>Toggle Popover</Button>
            </Popover>
          </div>
          <CodeBlock language="tsx">
            {`import { useDisclosure } from 'uiplex';

const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

<Popover
  content={<div>This popover is controlled</div>}
  isOpen={isOpen}
  onOpenChange={(open) => {
    if (open) onOpen();
    else onClose();
  }}
>
  <Button onClick={onToggle}>Toggle Popover</Button>
</Popover>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Without Arrow</h2>
          <div className={styles.demo}>
            <Popover
              content={<div style={{ padding: "1rem" }}>No arrow</div>}
              showArrow={false}
            >
              <Button>No Arrow</Button>
            </Popover>
          </div>
          <CodeBlock language="tsx">
            {`<Popover
  content={<div>No arrow</div>}
  showArrow={false}
>
  <Button>No Arrow</Button>
</Popover>`}
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
                  <td>children</td>
                  <td>React.ReactElement</td>
                  <td>-</td>
                  <td>Trigger element</td>
                </tr>
                <tr>
                  <td>content</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Popover content</td>
                </tr>
                <tr>
                  <td>placement</td>
                  <td>
                    "top" | "bottom" | "left" | "right" | "top-start" |
                    "top-end" | "bottom-start" | "bottom-end" | "left-start" |
                    "left-end" | "right-start" | "right-end"
                  </td>
                  <td>"bottom"</td>
                  <td>Popover placement relative to trigger</td>
                </tr>
                <tr>
                  <td>isOpen</td>
                  <td>boolean</td>
                  <td>-</td>
                  <td>Controlled open state</td>
                </tr>
                <tr>
                  <td>defaultIsOpen</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Default open state (uncontrolled)</td>
                </tr>
                <tr>
                  <td>onOpenChange</td>
                  <td>(isOpen: boolean) =&gt; void</td>
                  <td>-</td>
                  <td>Callback when open state changes</td>
                </tr>
                <tr>
                  <td>trigger</td>
                  <td>"click" | "hover"</td>
                  <td>"click"</td>
                  <td>Trigger type</td>
                </tr>
                <tr>
                  <td>closeOnBlur</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Close when clicking outside</td>
                </tr>
                <tr>
                  <td>closeOnClick</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Close when clicking trigger again</td>
                </tr>
                <tr>
                  <td>showArrow</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Show arrow pointing to trigger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
