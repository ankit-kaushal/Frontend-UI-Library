"use client";

import React, { useState } from "react";
import { Alert, Button } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function AlertPage() {
  const [dismissibleVisible, setDismissibleVisible] = useState(true);

  return (
    <ComponentPageLayout
      title="Alert"
      description="Alert component for displaying important messages with variants and optional close button."
    >
      <DemoSection
        title="Variants"
        code={`import { Alert } from 'uiplex';

<Alert variant="info" title="Info">Your session will expire soon.</Alert>
<Alert variant="success">Changes saved successfully.</Alert>
<Alert variant="warning" title="Warning">Please review before submitting.</Alert>
<Alert variant="error" title="Error">Something went wrong.</Alert>`}
      >
        <div className={styles.alertStack}>
          <Alert variant="info" title="Info">
            Your session will expire soon.
          </Alert>
          <Alert variant="success">Changes saved successfully.</Alert>
          <Alert variant="warning" title="Warning">
            Please review before submitting.
          </Alert>
          <Alert variant="error" title="Error">
            Something went wrong.
          </Alert>
        </div>
      </DemoSection>

      <DemoSection
        title="With Close Button"
        code={`const [visible, setVisible] = useState(true);

<Alert variant="info" onClose={() => setVisible(false)}>
  Dismissible alert. Click × to close.
</Alert>`}
      >
        <div className={styles.alertStack}>
          {dismissibleVisible ? (
            <Alert
              variant="info"
              onClose={() => setDismissibleVisible(false)}
            >
              Dismissible alert. Click × to close.
            </Alert>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDismissibleVisible(true)}
            >
              Show alert again
            </Button>
          )}
        </div>
      </DemoSection>

      <DemoSection
        title="With Title"
        code={`<Alert variant="success" title="Success">
  Your profile has been updated.
</Alert>`}
      >
        <div className={styles.alertStack}>
          <Alert variant="success" title="Success">
            Your profile has been updated.
          </Alert>
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "variant",
                type: '"info" | "success" | "warning" | "error"',
                default: '"info"',
                description: "Alert style variant",
              },
              {
                prop: "title",
                type: "string",
                default: "-",
                description: "Optional title above the message",
              },
              {
                prop: "onClose",
                type: "() => void",
                default: "-",
                description: "Called when close button is clicked; shows close button when provided",
              },
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Alert message content",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
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
    </ComponentPageLayout>
  );
}
