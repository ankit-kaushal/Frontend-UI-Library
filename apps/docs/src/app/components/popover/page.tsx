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
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ComponentPageLayout
      title="Popover"
      description="A popover component that displays rich content in a floating container. Supports click and hover triggers, multiple placements, and controlled/uncontrolled modes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Popover, Button } from 'uiplex';

<Popover
  content={
    <div style={{ padding: '1rem' }}>
      This is a simple popover content.
    </div>
  }
>
  <Button>Click me</Button>
</Popover>`}
      >
        <Popover
          content={
            <div style={{ padding: "1rem" }}>
              This is a simple popover content.
            </div>
          }
        >
          <Button>Click me</Button>
        </Popover>
      </DemoSection>

      <DemoSection
        title="With Header, Body, and Footer"
        code={`import {
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
      >
        <PopoverWithClose />
      </DemoSection>

      <DemoSection
        title="Placements"
        code={`<Popover content={<div>Top</div>} placement="top">
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
      >
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
      </DemoSection>

      <DemoSection
        title="Hover Trigger"
        code={`<Popover
  content={<div>Hover to see popover</div>}
  trigger="hover"
>
  <Button>Hover me</Button>
</Popover>`}
      >
        <Popover
          content={
            <div style={{ padding: "1rem" }}>Hover to see popover</div>
          }
          trigger="hover"
        >
          <Button>Hover me</Button>
        </Popover>
      </DemoSection>

      <DemoSection
        title="Controlled Mode"
        code={`import { useDisclosure } from 'uiplex';

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
      >
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
      </DemoSection>

      <DemoSection
        title="Without Arrow"
        code={`<Popover
  content={<div>No arrow</div>}
  showArrow={false}
>
  <Button>No Arrow</Button>
</Popover>`}
      >
        <Popover
          content={<div style={{ padding: "1rem" }}>No arrow</div>}
          showArrow={false}
        >
          <Button>No Arrow</Button>
        </Popover>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "children",
                type: "React.ReactElement",
                default: "-",
                description: "Trigger element",
              },
              {
                prop: "content",
                type: "React.ReactNode",
                default: "-",
                description: "Popover content",
              },
              {
                prop: "placement",
                type:
                  '"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"',
                default: '"bottom"',
                description: "Popover placement relative to trigger",
              },
              {
                prop: "isOpen",
                type: "boolean",
                default: "-",
                description: "Controlled open state",
              },
              {
                prop: "defaultIsOpen",
                type: "boolean",
                default: "false",
                description: "Default open state (uncontrolled)",
              },
              {
                prop: "onOpenChange",
                type: "(isOpen: boolean) => void",
                default: "-",
                description: "Callback when open state changes",
              },
              {
                prop: "trigger",
                type: '"click" | "hover"',
                default: '"click"',
                description: "Trigger type",
              },
              {
                prop: "closeOnBlur",
                type: "boolean",
                default: "true",
                description: "Close when clicking outside",
              },
              {
                prop: "closeOnClick",
                type: "boolean",
                default: "false",
                description: "Close when clicking trigger again",
              },
              {
                prop: "showArrow",
                type: "boolean",
                default: "true",
                description: "Show arrow pointing to trigger",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
