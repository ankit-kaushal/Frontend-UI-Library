"use client";

import { Button } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";
import { Mail, Trash } from "feather-icons-react";

export default function ButtonPage() {
  return (
    <ComponentPageLayout
      title="Button"
      description="A versatile button component with multiple variants, sizes, color schemes, and states"
    >
      <DemoSection
        title="Variants"
        code={`import { Button } from 'uiplex'

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="link">Link Button</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Color Schemes"
        code={`<Button colorScheme="blue">Blue</Button>
<Button colorScheme="green">Green</Button>
<Button colorScheme="red">Red</Button>
<Button colorScheme="yellow">Yellow</Button>
<Button colorScheme="purple">Purple</Button>
<Button colorScheme="gray">Gray</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button colorScheme="blue">Blue</Button>
          <Button colorScheme="green">Green</Button>
          <Button colorScheme="red">Red</Button>
          <Button colorScheme="yellow">Yellow</Button>
          <Button colorScheme="purple">Purple</Button>
          <Button colorScheme="gray">Gray</Button>
        </div>
      </DemoSection>

      <DemoSection
        title="With Icons"
        code={`import { Mail } from 'feather-icons-react'

<Button 
  leftIcon={<Mail size={16} />}
  variant="primary"
>
  Send Email
</Button>

<Button 
  rightIcon={<span>→</span>}
  variant="outline"
>
  Continue
</Button>

<Button 
  leftIcon={<span>⭐</span>}
  rightIcon={<span>💫</span>}
  variant="secondary"
>
  Star
</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button leftIcon={<Mail size={16} />} variant="primary">
            Send Email
          </Button>
          <Button rightIcon={<span>→</span>} variant="outline">
            Continue
          </Button>
          <Button
            leftIcon={<span>⭐</span>}
            rightIcon={<span>💫</span>}
            variant="secondary"
          >
            Star
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Loading State"
        code={`<Button loading>Loading...</Button>
<Button loading variant="outline" size="sm">Loading</Button>
<Button loading variant="link">Loading Link</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button loading>Loading...</Button>
          <Button loading variant="outline" size="sm">
            Loading
          </Button>
          <Button loading variant="link">
            Loading Link
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="States"
        code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button onClick={() => alert('Button clicked!')}>
  Clickable
</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button onClick={() => alert("Button clicked!")}>
            Clickable
          </Button>
        </div>
      </DemoSection>

      <DemoSection
        title="Combined Examples"
        code={`import { Trash } from 'feather-icons-react'

<Button 
  variant="primary" 
  colorScheme="green" 
  size="lg"
  leftIcon={<span>✅</span>}
>
  Success Action
</Button>

<Button 
  variant="outline" 
  colorScheme="red" 
  size="sm"
  rightIcon={<Trash size={16} />}
>
  Delete
</Button>

<Button 
  variant="link" 
  colorScheme="purple"
  leftIcon={<span>🔗</span>}
>
  External Link
</Button>`}
      >
        <div className={styles.buttonGroup}>
          <Button
            variant="primary"
            colorScheme="green"
            size="lg"
            leftIcon={<span>✅</span>}
          >
            Success Action
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            size="sm"
            rightIcon={<Trash size={16} />}
          >
            Delete
          </Button>
          <Button
            variant="link"
            colorScheme="purple"
            leftIcon={<span>🔗</span>}
          >
            External Link
          </Button>
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "variant",
                type: "'primary' | 'secondary' | 'outline' | 'link'",
                default: "'primary'",
                description: "The visual style variant of the button",
              },
              {
                prop: "size",
                type: "'xs' | 'sm' | 'md' | 'lg'",
                default: "'md'",
                description: "The size of the button",
              },
              {
                prop: "colorScheme",
                type:
                  "'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray'",
                default: "'blue'",
                description: "The color scheme of the button",
              },
              {
                prop: "disabled",
                type: "boolean",
                default: "false",
                description: "Whether the button is disabled",
              },
              {
                prop: "loading",
                type: "boolean",
                default: "false",
                description: "Whether the button is in loading state",
              },
              {
                prop: "leftIcon",
                type: "React.ReactNode",
                default: "-",
                description: "Icon to display on the left side",
              },
              {
                prop: "rightIcon",
                type: "React.ReactNode",
                default: "-",
                description: "Icon to display on the right side",
              },
              {
                prop: "onClick",
                type: "() => void",
                default: "-",
                description: "Click handler function",
              },
              {
                prop: "className",
                type: "string",
                default: "''",
                description: "Additional CSS classes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
