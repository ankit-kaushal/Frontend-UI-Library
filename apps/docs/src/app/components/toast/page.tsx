"use client";

import { Button, Toast } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function ToastPage() {
  return (
    <ComponentPageLayout
      title="Toast"
      description="A toast component for displaying temporary notifications and messages to users"
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Toast, Button } from 'uiplex'

function App() {
  return (
    <>
      <Button onClick={() => Toast.success('Success toast')}>
        Success toast
      </Button>
      <Button onClick={() => Toast.error('Error toast')}>
        Error toast
      </Button>
      <Button onClick={() => Toast.warning('Warning toast')}>
        Warning toast
      </Button>
      <Button onClick={() => Toast.info('Info toast')}>
        Info toast
      </Button>
    </>
  )
}`}
      >
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => {
              Toast.success("Success toast");
            }}
          >
            Success toast
          </Button>
          <Button
            onClick={() => {
              Toast.error("Error toast");
            }}
          >
            Error toast
          </Button>
          <Button
            onClick={() => {
              Toast.warning("Warning toast");
            }}
          >
            Warning toast
          </Button>
          <Button
            onClick={() => {
              Toast.info("Info toast");
            }}
          >
            Info toast
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="With Title and Description"
        code={`Toast.success({
  title: 'Success!'
  description: 'Your changes have been saved.',
})

Toast.error({
  title: 'Error!'
  description: 'Something went wrong. Please try again.',
})`}
      >
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => {
              Toast.success({
                title: "Success!",
                description: "Your changes have been saved.",
              });
            }}
          >
            Success with Title and Description
          </Button>
          <Button
            onClick={() => {
              Toast.error("hello.", {
                title: "Error!",
                description: "Something went wrong. Please try again.",
              });
            }}
          >
            Error with Title and Description
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Duration"
        code={`// Auto-close after 3 seconds
Toast.info('This will close in 3 seconds', {
  hideAfter: 3000
})

// Never auto-close (requires manual close)
Toast.warning('This requires manual dismissal', {
  hideAfter: 0
})`}
      >
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => {
              Toast.info("This will close in 3 seconds", {
                hideAfter: 3000,
              });
            }}
          >
            Short Duration (3s)
          </Button>
          <Button
            onClick={() => {
              Toast.warning("This requires manual dismissal", {
                hideAfter: 0,
              });
            }}
          >
            No Auto-Close
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Positions"
        code={`// Position can be set per toast
Toast.success('Success toast', { position: 'top-right' })
Toast.error('Error toast', { position: 'bottom-left' })
Toast.info('Info toast', { position: 'top-center' })

// Default position is 'top-center' if not specified
Toast.success('This appears at top-center by default')

// Available positions:
// 'top-left', 'top-right', 'top-center'
// 'bottom-left', 'bottom-right', 'bottom-center'`}
      >
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => {
              Toast.success("Success toast", { position: "top-left" });
            }}
          >
            Top Left
          </Button>
          <Button
            onClick={() => {
              Toast.success("Success toast", { position: "top-right" });
            }}
          >
            Top Right
          </Button>
          <Button
            onClick={() => {
              Toast.success("Success toast", { position: "top-center" });
            }}
          >
            Top Center
          </Button>
          <Button
            onClick={() => {
              Toast.error("Error toast", { position: "bottom-left" });
            }}
          >
            Bottom Left
          </Button>
          <Button
            onClick={() => {
              Toast.error("Error toast", { position: "bottom-right" });
            }}
          >
            Bottom Right
          </Button>
          <Button
            onClick={() => {
              Toast.error("Error toast", { position: "bottom-center" });
            }}
          >
            Bottom Center
          </Button>
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Toast Methods",
            data: [
              {
                prop: "Toast.success()",
                type: "message: string, options?: ToastOptions",
                default: "-",
                description: "Show a success toast",
              },
              {
                prop: "Toast.error()",
                type: "message: string, options?: ToastOptions",
                default: "-",
                description: "Show an error toast",
              },
              {
                prop: "Toast.warning()",
                type: "message: string, options?: ToastOptions",
                default: "-",
                description: "Show a warning toast",
              },
              {
                prop: "Toast.info()",
                type: "message: string, options?: ToastOptions",
                default: "-",
                description: "Show an info toast",
              },
              {
                prop: "Toast.close()",
                type: "id: string",
                default: "-",
                description: "Close a specific toast by ID",
              },
              {
                prop: "Toast.closeAll()",
                type: "-",
                default: "-",
                description: "Close all toasts",
              },
            ],
          },
          {
            title: "ToastOptions",
            data: [
              {
                prop: "title",
                type: "string",
                default: "-",
                description:
                  "Toast title text (if provided, message becomes description)",
              },
              {
                prop: "description",
                type: "string",
                default: "-",
                description:
                  "Toast description text (only used if title is provided)",
              },
              {
                prop: "hideAfter",
                type: "number",
                default: "5000",
                description:
                  "Auto-close duration in milliseconds (0 = never auto-close)",
              },
              {
                prop: "duration",
                type: "number",
                default: "5000",
                description:
                  "Alias for hideAfter (auto-close duration in milliseconds)",
              },
              {
                prop: "isClosable",
                type: "boolean",
                default: "true",
                description: "Whether to show close button",
              },
              {
                prop: "position",
                type:
                  '"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"',
                default: '"top-center"',
                description: "Position where the toast should appear",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
