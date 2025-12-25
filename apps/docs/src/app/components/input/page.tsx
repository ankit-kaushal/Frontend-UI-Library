"use client";

import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@uilab/ui";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function InputPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Input</h1>
          <p className={styles.description}>
            Form input components with validation support, multiple sizes, and
            variants. Works seamlessly with FormControl for form state
            management.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <Input placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Input } from '@uilab/ui';

<Input placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Enter your password" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <Input size="sm" placeholder="Small input" />
              <Input size="md" placeholder="Medium input (default)" />
              <Input size="lg" placeholder="Large input" />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <Input variant="outline" placeholder="Outline variant" />
              <Input variant="filled" placeholder="Filled variant" />
              <Input variant="unstyled" placeholder="Unstyled variant" />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Input variant="outline" placeholder="Outline" />
<Input variant="filled" placeholder="Filled" />
<Input variant="unstyled" placeholder="Unstyled" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With FormControl</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <FormControl isInvalid={hasError} isRequired id="email-field">
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setHasError(e.target.value === "");
                  }}
                />
                <FormErrorMessage>
                  {hasError ? "Email is required" : ""}
                </FormErrorMessage>
              </FormControl>
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Input, FormControl, FormLabel, FormErrorMessage } from '@uilab/ui';

<FormControl isInvalid={hasError} isRequired id="email-field">
  <FormLabel>Email Address</FormLabel>
  <Input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <FormErrorMessage>Email is required</FormErrorMessage>
</FormControl>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>States</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <Input placeholder="Normal input" />
              <Input isDisabled placeholder="Disabled input" />
              <Input
                isReadOnly
                placeholder="Read only input"
                value="Read only value"
              />
              <Input isInvalid placeholder="Invalid input" />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`<Input placeholder="Normal input" />
<Input isDisabled placeholder="Disabled input" />
<Input isReadOnly placeholder="Read only" value="Read only value" />
<Input isInvalid placeholder="Invalid input" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Textarea</h2>
          <div className={styles.demo}>
            <div className={styles.inputGroup}>
              <Textarea placeholder="Enter your message" rows={4} />
              <Textarea size="sm" placeholder="Small textarea" rows={3} />
              <Textarea
                variant="filled"
                placeholder="Filled textarea"
                rows={4}
              />
            </div>
          </div>
          <CodeBlock language="tsx">
            {`import { Textarea } from '@uilab/ui';

<Textarea placeholder="Enter your message" rows={4} />
<Textarea size="sm" placeholder="Small textarea" rows={3} />
<Textarea variant="filled" placeholder="Filled textarea" />`}
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
                  <td>size</td>
                  <td>"sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size of the input</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"outline" | "filled" | "unstyled"</td>
                  <td>"outline"</td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td>isInvalid</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the input is invalid</td>
                </tr>
                <tr>
                  <td>isDisabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the input is disabled</td>
                </tr>
                <tr>
                  <td>isReadOnly</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether the input is read-only</td>
                </tr>
                <tr>
                  <td>className</td>
                  <td>string</td>
                  <td>""</td>
                  <td>Additional CSS classes</td>
                </tr>
                <tr>
                  <td>style</td>
                  <td>React.CSSProperties</td>
                  <td>-</td>
                  <td>Inline styles</td>
                </tr>
                <tr>
                  <td>...props</td>
                  <td>React.InputHTMLAttributes</td>
                  <td>-</td>
                  <td>All standard HTML input attributes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
