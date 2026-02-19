"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function DrawerPage() {
  const left = useDisclosure();
  const right = useDisclosure();
  const top = useDisclosure();
  const bottom = useDisclosure();
  const nested = useDisclosure();
  const nestedInner = useDisclosure();

  return (
    <ComponentPageLayout
      title="Drawer"
      description="Drawer panel that opens from left, right, top, or bottom with nested drawer support."
    >
      <DemoSection
        title="Placement"
        code={`import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton, useDisclosure } from 'uiplex';

const { isOpen, onOpen, onClose } = useDisclosure();

<Button onClick={onOpen}>Open</Button>
<Drawer isOpen={isOpen} onClose={onClose} placement="right">
  <DrawerHeader>
    Title <DrawerCloseButton onClose={onClose} />
  </DrawerHeader>
  <DrawerBody>Content</DrawerBody>
  <DrawerFooter>Footer</DrawerFooter>
</Drawer>`}
      >
        <div className={styles.buttonRow}>
          <Button variant="outline" onClick={left.onOpen}>
            Left
          </Button>
          <Button variant="outline" onClick={right.onOpen}>
            Right
          </Button>
          <Button variant="outline" onClick={top.onOpen}>
            Top
          </Button>
          <Button variant="outline" onClick={bottom.onOpen}>
            Bottom
          </Button>
        </div>
      </DemoSection>

      <Drawer isOpen={left.isOpen} onClose={left.onClose} placement="left" size="md">
        <DrawerHeader>
          Left Drawer
          <DrawerCloseButton onClose={left.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>Content slides in from the left.</p>
        </DrawerBody>
        <DrawerFooter>
          <Button size="sm" onClick={left.onClose}>
            Close
          </Button>
        </DrawerFooter>
      </Drawer>

      <Drawer isOpen={right.isOpen} onClose={right.onClose} placement="right" size="md">
        <DrawerHeader>
          Right Drawer
          <DrawerCloseButton onClose={right.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>Content slides in from the right.</p>
        </DrawerBody>
        <DrawerFooter>
          <Button size="sm" onClick={right.onClose}>
            Close
          </Button>
        </DrawerFooter>
      </Drawer>

      <Drawer isOpen={top.isOpen} onClose={top.onClose} placement="top" size="md">
        <DrawerHeader>
          Top Drawer
          <DrawerCloseButton onClose={top.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>Content slides in from the top.</p>
        </DrawerBody>
      </Drawer>

      <Drawer isOpen={bottom.isOpen} onClose={bottom.onClose} placement="bottom" size="md">
        <DrawerHeader>
          Bottom Drawer
          <DrawerCloseButton onClose={bottom.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>Content slides in from the bottom.</p>
        </DrawerBody>
      </Drawer>

      <DemoSection
        title="Nested Drawer"
        code={`<Drawer isOpen={outer} onClose={...} placement="right" level={0}>
  ...
  <Button onClick={openInner}>Open inner</Button>
</Drawer>
<Drawer isOpen={inner} onClose={...} placement="right" level={1}>
  Nested content
</Drawer>`}
      >
        <Button variant="outline" onClick={nested.onOpen}>
          Open drawer (then open nested)
        </Button>
      </DemoSection>

      <Drawer
        isOpen={nested.isOpen}
        onClose={nested.onClose}
        placement="right"
        size="md"
        level={0}
      >
        <DrawerHeader>
          Parent Drawer
          <DrawerCloseButton onClose={nested.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>Click the button below to open a nested drawer.</p>
          <Button variant="primary" size="sm" onClick={nestedInner.onOpen} className={styles.nestedBtn}>
            Open nested drawer
          </Button>
        </DrawerBody>
      </Drawer>

      <Drawer
        isOpen={nestedInner.isOpen}
        onClose={nestedInner.onClose}
        placement="right"
        size="sm"
        level={1}
      >
        <DrawerHeader>
          Nested Drawer
          <DrawerCloseButton onClose={nestedInner.onClose} />
        </DrawerHeader>
        <DrawerBody>
          <p>This drawer opens on top of the parent (higher level).</p>
        </DrawerBody>
      </Drawer>

      <APISection
        tables={[
          {
            title: "Drawer",
            data: [
              { prop: "isOpen", type: "boolean", default: "-", description: "Whether drawer is open" },
              { prop: "onClose", type: "() => void", default: "-", description: "Close handler" },
              { prop: "placement", type: '"left" | "right" | "top" | "bottom"', default: '"right"', description: "Slide direction" },
              { prop: "size", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Drawer size" },
              { prop: "closeOnOverlayClick", type: "boolean", default: "true", description: "Close when overlay is clicked" },
              { prop: "closeOnEsc", type: "boolean", default: "true", description: "Close on Escape key" },
              { prop: "level", type: "number", default: "0", description: "Z-index level for nested drawers" },
            ],
          },
          {
            title: "DrawerHeader, DrawerBody, DrawerFooter",
            data: [
              { prop: "children", type: "React.ReactNode", default: "-", description: "Section content" },
            ],
          },
          {
            title: "DrawerCloseButton",
            data: [
              { prop: "onClose", type: "() => void", default: "-", description: "Close handler" },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
