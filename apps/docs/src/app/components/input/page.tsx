"use client";

import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function InputPage() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  return (
    <ComponentPageLayout
      title="Input"
      description="Form input components with validation support, multiple sizes, and variants. Works seamlessly with FormControl for form state management."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Input } from 'uiplex';

<Input placeholder="Enter your name" />
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Enter your password" />`}
      >
        <div className={styles.inputGroup}>
          <Input placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
      >
        <div className={styles.inputGroup}>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input (default)" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </DemoSection>

      <DemoSection
        title="Variants"
        code={`<Input variant="outline" placeholder="Outline" />
<Input variant="filled" placeholder="Filled" />
<Input variant="unstyled" placeholder="Unstyled" />`}
      >
        <div className={styles.inputGroup}>
          <Input variant="outline" placeholder="Outline variant" />
          <Input variant="filled" placeholder="Filled variant" />
          <Input variant="unstyled" placeholder="Unstyled variant" />
        </div>
      </DemoSection>

      <DemoSection
        title="With FormControl"
        code={`import { Input, FormControl, FormLabel, FormErrorMessage } from 'uiplex';

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
      >
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
      </DemoSection>

      <DemoSection
        title="States"
        code={`<Input placeholder="Normal input" />
<Input isDisabled placeholder="Disabled input" />
<Input isReadOnly placeholder="Read only" value="Read only value" />
<Input isInvalid placeholder="Invalid input" />`}
      >
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
      </DemoSection>

      <DemoSection
        title="Textarea"
        code={`import { Textarea } from 'uiplex';

<Textarea placeholder="Enter your message" rows={4} />
<Textarea size="sm" placeholder="Small textarea" rows={3} />
<Textarea variant="filled" placeholder="Filled textarea" />`}
      >
        <div className={styles.inputGroup}>
          <Textarea placeholder="Enter your message" rows={4} />
          <Textarea size="sm" placeholder="Small textarea" rows={3} />
          <Textarea
            variant="filled"
            placeholder="Filled textarea"
            rows={4}
          />
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Size of the input",
              },
              {
                prop: "variant",
                type: '"outline" | "filled" | "unstyled"',
                default: '"outline"',
                description: "Visual style variant",
              },
              {
                prop: "isInvalid",
                type: "boolean",
                default: "false",
                description: "Whether the input is invalid",
              },
              {
                prop: "isDisabled",
                type: "boolean",
                default: "false",
                description: "Whether the input is disabled",
              },
              {
                prop: "isReadOnly",
                type: "boolean",
                default: "false",
                description: "Whether the input is read-only",
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
              {
                prop: "...props",
                type: "React.InputHTMLAttributes",
                default: "-",
                description: "All standard HTML input attributes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
