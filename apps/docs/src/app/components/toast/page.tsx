"use client";

import { Button, Toast } from "uilab";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function ToastPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Toast</h1>
          <p className={styles.description}>
            A toast component for displaying temporary notifications and
            messages to users
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`import { Toast, Button } from 'uilab'

function App() {
  return (
    <>
      <Button
        onClick={() => {
          Toast.success('Success toast');
        }}
      >
        Success toast
      </Button>
      <Button
        onClick={() => {
          Toast.error('Error toast');
        }}
      >
        Error toast
      </Button>
      <Button
        onClick={() => {
          Toast.warning('Warning toast');
        }}
      >
        Warning toast
      </Button>
      <Button
        onClick={() => {
          Toast.info('Info toast');
        }}
      >
        Info toast
      </Button>
    </>
  )
}`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Title and Description</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`Toast.success({
  title: 'Success!'
  description: 'Your changes have been saved.',
})

Toast.error({
  title: 'Error!'
  description: 'Something went wrong. Please try again.',
})`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Duration</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`// Auto-close after 3 seconds
Toast.info('This will close in 3 seconds', {
  hideAfter: 3000
})

// Never auto-close (requires manual close)
Toast.warning('This requires manual dismissal', {
  hideAfter: 0
})`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Positions</h2>
          <div className={styles.demo}>
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
          </div>
          <CodeBlock language="tsx">
            {`// Position can be set per toast
Toast.success('Success toast', { position: 'top-right' })
Toast.error('Error toast', { position: 'bottom-left' })
Toast.info('Info toast', { position: 'top-center' })

// Default position is 'top-center' if not specified
Toast.success('This appears at top-center by default')

// Available positions:
// 'top-left', 'top-right', 'top-center'
// 'bottom-left', 'bottom-right', 'bottom-center'`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>API Reference</h2>
          <div className={styles.apiTable}>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Parameters</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Toast.success()</td>
                  <td>
                    message: string
                    <br />
                    options?: ToastOptions
                  </td>
                  <td>Show a success toast</td>
                </tr>
                <tr>
                  <td>Toast.error()</td>
                  <td>
                    message: string
                    <br />
                    options?: ToastOptions
                  </td>
                  <td>Show an error toast</td>
                </tr>
                <tr>
                  <td>Toast.warning()</td>
                  <td>
                    message: string
                    <br />
                    options?: ToastOptions
                  </td>
                  <td>Show a warning toast</td>
                </tr>
                <tr>
                  <td>Toast.info()</td>
                  <td>
                    message: string
                    <br />
                    options?: ToastOptions
                  </td>
                  <td>Show an info toast</td>
                </tr>
                <tr>
                  <td>Toast.close()</td>
                  <td>id: string</td>
                  <td>Close a specific toast by ID</td>
                </tr>
                <tr>
                  <td>Toast.closeAll()</td>
                  <td>-</td>
                  <td>Close all toasts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>ToastOptions</h2>
          <div className={styles.apiTable}>
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>title</td>
                  <td>string</td>
                  <td>-</td>
                  <td>
                    Toast title text (if provided, message becomes description)
                  </td>
                </tr>
                <tr>
                  <td>description</td>
                  <td>string</td>
                  <td>-</td>
                  <td>
                    Toast description text (only used if title is provided)
                  </td>
                </tr>
                <tr>
                  <td>hideAfter</td>
                  <td>number</td>
                  <td>5000</td>
                  <td>
                    Auto-close duration in milliseconds (0 = never auto-close)
                  </td>
                </tr>
                <tr>
                  <td>duration</td>
                  <td>number</td>
                  <td>5000</td>
                  <td>
                    Alias for hideAfter (auto-close duration in milliseconds)
                  </td>
                </tr>
                <tr>
                  <td>isClosable</td>
                  <td>boolean</td>
                  <td>true</td>
                  <td>Whether to show close button</td>
                </tr>
                <tr>
                  <td>position</td>
                  <td>
                    "top-left" | "top-right" | "top-center" | "bottom-left" |
                    "bottom-right" | "bottom-center"
                  </td>
                  <td>"top-center"</td>
                  <td>Position where the toast should appear</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
