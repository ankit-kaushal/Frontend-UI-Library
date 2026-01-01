"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "uilab";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function ModalPage() {
  const basicModal = useDisclosure();
  const smModal = useDisclosure();
  const mdModal = useDisclosure();
  const lgModal = useDisclosure();
  const xlModal = useDisclosure();
  const fullModal = useDisclosure();
  const noCloseModal = useDisclosure();
  const customModal = useDisclosure();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Modal</h1>
          <p className={styles.description}>
            A flexible modal dialog component for overlays, popups, and dialogs.
            Includes sub-components for header, body, footer, and close button.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <Button onClick={basicModal.onOpen}>Open Modal</Button>
            <Modal
              isOpen={basicModal.isOpen}
              onClose={basicModal.onClose}
              size="md"
            >
              <ModalHeader>
                <h2>Modal Title</h2>
                <ModalCloseButton onClose={basicModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is a basic modal. You can add any content here. The modal
                  will close when you click the overlay or press the Escape key.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={basicModal.onClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={basicModal.onClose}>
                  Confirm
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <CodeBlock language="tsx">
            {`import { Modal, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure } from 'uilab';

const { isOpen, onOpen, onClose } = useDisclosure();

<Button onClick={onOpen}>Open Modal</Button>
<Modal isOpen={isOpen} onClose={onClose} size="md">
  <ModalHeader>
    <h2>Modal Title</h2>
    <ModalCloseButton onClose={onClose} />
  </ModalHeader>
  <ModalBody>
    <p>Modal content goes here</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={onClose}>Cancel</Button>
    <Button variant="primary" onClick={onClose}>Confirm</Button>
  </ModalFooter>
</Modal>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.buttonGroup}>
              <Button onClick={smModal.onOpen} size="sm">
                Small Modal
              </Button>
              <Button onClick={mdModal.onOpen} size="md">
                Medium Modal
              </Button>
              <Button onClick={lgModal.onOpen} size="lg">
                Large Modal
              </Button>
              <Button onClick={xlModal.onOpen} size="md">
                Extra Large Modal
              </Button>
              <Button onClick={fullModal.onOpen} size="md">
                Full Modal
              </Button>
            </div>

            {/* Small Modal */}
            <Modal isOpen={smModal.isOpen} onClose={smModal.onClose} size="sm">
              <ModalHeader>
                <h2>Small Modal</h2>
                <ModalCloseButton onClose={smModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is a small modal. Perfect for simple confirmations or
                  brief messages.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={smModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            {/* Medium Modal */}
            <Modal isOpen={mdModal.isOpen} onClose={mdModal.onClose} size="md">
              <ModalHeader>
                <h2>Medium Modal</h2>
                <ModalCloseButton onClose={mdModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is a medium modal. This is the default size and works
                  well for most use cases.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={mdModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            {/* Large Modal */}
            <Modal isOpen={lgModal.isOpen} onClose={lgModal.onClose} size="lg">
              <ModalHeader>
                <h2>Large Modal</h2>
                <ModalCloseButton onClose={lgModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is a large modal. Great for forms, detailed content, or
                  when you need more space.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={lgModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            {/* Extra Large Modal */}
            <Modal isOpen={xlModal.isOpen} onClose={xlModal.onClose} size="xl">
              <ModalHeader>
                <h2>Extra Large Modal</h2>
                <ModalCloseButton onClose={xlModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is an extra large modal. Use this when you need even more
                  space for complex content, tables, or detailed information.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={xlModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>

            {/* Full Modal */}
            <Modal
              isOpen={fullModal.isOpen}
              onClose={fullModal.onClose}
              size="full"
            >
              <ModalHeader>
                <h2>Full Modal</h2>
                <ModalCloseButton onClose={fullModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <p>
                  This is a full-size modal that takes up most of the viewport.
                  Perfect for complex interfaces, dashboards, or when you need
                  maximum space for your content.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={fullModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <CodeBlock language="tsx">
            {`<Modal isOpen={isOpen} onClose={onClose} size="sm">...</Modal>
<Modal isOpen={isOpen} onClose={onClose} size="md">...</Modal>
<Modal isOpen={isOpen} onClose={onClose} size="lg">...</Modal>
<Modal isOpen={isOpen} onClose={onClose} size="xl">...</Modal>
<Modal isOpen={isOpen} onClose={onClose} size="full">...</Modal>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Without Close Button</h2>
          <div className={styles.demo}>
            <Button onClick={noCloseModal.onOpen}>
              Open Modal Without Close Button
            </Button>
            <Modal
              isOpen={noCloseModal.isOpen}
              onClose={noCloseModal.onClose}
              size="md"
            >
              <ModalHeader>
                <h2>Modal Without Close Button</h2>
              </ModalHeader>
              <ModalBody>
                <p>
                  This modal doesn't have a close button in the header. Users
                  can still close it by clicking the overlay or pressing Escape.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="primary" onClick={noCloseModal.onClose}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <CodeBlock language="tsx">
            {`<Modal isOpen={isOpen} onClose={onClose}>
  <ModalHeader>
    <h2>Modal Title</h2>
    {/* No ModalCloseButton */}
  </ModalHeader>
  <ModalBody>...</ModalBody>
</Modal>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Content</h2>
          <div className={styles.demo}>
            <Button onClick={customModal.onOpen}>Open Custom Modal</Button>
            <Modal
              isOpen={customModal.isOpen}
              onClose={customModal.onClose}
              size="lg"
            >
              <ModalHeader>
                <h2>Custom Modal Content</h2>
                <ModalCloseButton onClose={customModal.onClose} />
              </ModalHeader>
              <ModalBody>
                <div>
                  <h3 style={{ marginTop: 0 }}>Custom Section</h3>
                  <p>
                    You can add any custom content inside the modal body. This
                    includes forms, images, lists, and more.
                  </p>
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={customModal.onClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={customModal.onClose}>
                  Save Changes
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <CodeBlock language="tsx">
            {`<Modal isOpen={isOpen} onClose={onClose} size="lg">
  <ModalHeader>
    <h2>Custom Modal</h2>
    <ModalCloseButton onClose={onClose} />
  </ModalHeader>
  <ModalBody>
    <div>
      <h3>Custom Section</h3>
      <p>Any content can go here</p>
      <ul>
        <li>List items</li>
      </ul>
    </div>
  </ModalBody>
  <ModalFooter>
    <Button onClick={onClose}>Close</Button>
  </ModalFooter>
</Modal>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Options</h2>
          <div className={styles.demo}>
            <p>
              The Modal component supports several options to customize
              behavior:
            </p>
            <ul>
              <li>
                <strong>closeOnOverlayClick</strong>: Close modal when clicking
                outside (default: true)
              </li>
              <li>
                <strong>closeOnEsc</strong>: Close modal when pressing Escape
                key (default: true)
              </li>
              <li>
                <strong>isCentered</strong>: Center the modal vertically
                (default: true)
              </li>
            </ul>
          </div>
          <CodeBlock language="tsx">
            {`<Modal
  isOpen={isOpen}
  onClose={onClose}
  closeOnOverlayClick={false}
  closeOnEsc={true}
  isCentered={true}
>
  ...
</Modal>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={7}>Modal</td>
                  <td>isOpen</td>
                  <td>boolean</td>
                  <td>-</td>
                  <td>Whether the modal is open</td>
                </tr>
                <tr>
                  <td>onClose</td>
                  <td>{`() => void`}</td>
                  <td>-</td>
                  <td>Function called when modal should close</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"sm" | "md" | "lg" | "xl" | "full"</td>
                  <td>"md"</td>
                  <td>Size of the modal</td>
                </tr>
                <tr>
                  <td>closeOnOverlayClick</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Close when clicking overlay</td>
                </tr>
                <tr>
                  <td>closeOnEsc</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Close when pressing Escape</td>
                </tr>
                <tr>
                  <td>isCentered</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Center modal vertically</td>
                </tr>
                <tr>
                  <td>children</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>
                    Modal content (usually ModalHeader, ModalBody, ModalFooter)
                  </td>
                </tr>
                <tr>
                  <td>ModalHeader</td>
                  <td>children</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Header content</td>
                </tr>
                <tr>
                  <td>ModalBody</td>
                  <td>children</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Main content area</td>
                </tr>
                <tr>
                  <td>ModalFooter</td>
                  <td>children</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Footer content (usually buttons)</td>
                </tr>
                <tr>
                  <td>ModalCloseButton</td>
                  <td>onClose</td>
                  <td>{`() => void`}</td>
                  <td>-</td>
                  <td>Function called when close button is clicked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
