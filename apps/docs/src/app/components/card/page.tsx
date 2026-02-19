"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  CardTitle,
  CardSubtitle,
  Button,
} from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function CardPage() {
  return (
    <ComponentPageLayout
      title="Card"
      description="A flexible card component for displaying content with optional header, body, and footer."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Card, CardHeader, CardBody, CardFooter } from 'uiplex';

<Card>
  <CardHeader>Card Title</CardHeader>
  <CardBody>Card content goes here.</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>`}
      >
        <Card>
          <CardHeader>Card Title</CardHeader>
          <CardBody>Card content goes here.</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </DemoSection>

      <DemoSection
        title="Header and Body Only"
        code={`<Card>
  <CardHeader>Simple Card</CardHeader>
  <CardBody>Content without a footer.</CardBody>
</Card>`}
      >
        <Card>
          <CardHeader>Simple Card</CardHeader>
          <CardBody>Content without a footer.</CardBody>
        </Card>
      </DemoSection>

      <DemoSection
        title="Card with Image (theme-adjusted)"
        code={`import { Card, CardImage, CardBody, CardTitle, CardSubtitle } from 'uiplex';

// Default variant – follows light/dark theme
<Card style={{ maxWidth: 320 }}>
  <CardImage src="/your-image.jpg" alt="Card" />
  <CardBody>
    <CardTitle>Europe Street beat</CardTitle>
    <CardSubtitle>www.instagram.com</CardSubtitle>
  </CardBody>
</Card>`}
      >
        <Card className={styles.imageCard}>
          <CardImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop"
            alt="Street style"
          />
          <CardBody>
            <CardTitle>Europe Street beat</CardTitle>
            <CardSubtitle>www.instagram.com</CardSubtitle>
          </CardBody>
        </Card>
      </DemoSection>

      <DemoSection
        title="Card with Image – Dark or Light variant"
        code={`<Card variant="dark">...</Card>
<Card variant="light">...</Card>`}
      >
        <div className={styles.imageCardRow}>
          <Card variant="dark" className={styles.imageCard}>
            <CardImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop"
              alt="Dark card"
            />
            <CardBody>
              <CardTitle>Always dark</CardTitle>
              <CardSubtitle>variant="dark"</CardSubtitle>
            </CardBody>
          </Card>
          <Card variant="light" className={styles.imageCard}>
            <CardImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=250&fit=crop"
              alt="Light card"
            />
            <CardBody>
              <CardTitle>Always light</CardTitle>
              <CardSubtitle>variant="light"</CardSubtitle>
            </CardBody>
          </Card>
        </div>
      </DemoSection>

      <DemoSection
        title="With Actions"
        code={`<Card>
  <CardHeader>Product</CardHeader>
  <CardBody>Description and details.</CardBody>
  <CardFooter>
    <Button variant="primary" size="sm">Save</Button>
    <Button variant="outline" size="sm">Cancel</Button>
  </CardFooter>
</Card>`}
      >
        <Card>
          <CardHeader>Product</CardHeader>
          <CardBody>Description and details.</CardBody>
          <CardFooter className={styles.cardFooter}>
            <Button variant="primary" size="sm">
              Save
            </Button>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Card",
            data: [
              {
                prop: "variant",
                type: '"default" | "dark" | "light"',
                default: '"default"',
                description: "Default follows theme. Use \"dark\" or \"light\" to force a look.",
              },
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Card content",
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
          {
            title: "CardImage",
            data: [
              {
                prop: "src",
                type: "string",
                default: "-",
                description: "Image URL (required)",
              },
              {
                prop: "alt",
                type: "string",
                default: "-",
                description: "Alt text (required)",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
              },
            ],
          },
          {
            title: "CardTitle, CardSubtitle",
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Title or subtitle text",
              },
            ],
          },
          {
            title: "CardHeader, CardBody, CardFooter",
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Section content",
              },
              {
                prop: "className",
                type: "string",
                default: '""',
                description: "Additional CSS classes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
