"use client";

import React from "react";
import { Breadcrumb } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function BreadcrumbPage() {
  return (
    <ComponentPageLayout
      title="Breadcrumb"
      description="A breadcrumb navigation component for showing the current page location and navigation path."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Breadcrumb } from 'uiplex';

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" }
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Electronics", href: "/products/electronics" },
            { label: "Laptops" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Custom Separator"
        code={`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team" }
  ]}
  separator=">"
/>

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Post" }
  ]}
  separator="→"
/>

<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Settings", href: "/settings" },
    { label: "Profile" }
  ]}
  separator={<span style={{ margin: "0 0.25rem" }}>•</span>}
/>`}
      >
        <div className={styles.breadcrumbStack}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Team" },
            ]}
            separator=">"
          />
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Post" },
            ]}
            separator="→"
          />
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Settings", href: "/settings" },
              { label: "Profile" },
            ]}
            separator={<span style={{ margin: "0 0.25rem" }}>•</span>}
          />
        </div>
      </DemoSection>

      <DemoSection
        title="With onClick Handler"
        code={`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { 
      label: "Dashboard", 
      onClick: () => console.log("Navigate to dashboard")
    },
    { label: "Analytics" }
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            {
              label: "Dashboard",
              onClick: () => alert("Navigate to dashboard"),
            },
            { label: "Analytics" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Simple Path"
        code={`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Current Page" }
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Current Page" },
          ]}
        />
      </DemoSection>

      <DemoSection
        title="Long Path"
        code={`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "Components", href: "/docs/components" },
    { label: "Forms", href: "/docs/components/forms" },
    { label: "Input" }
  ]}
/>`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Documentation", href: "/docs" },
            { label: "Components", href: "/docs/components" },
            { label: "Forms", href: "/docs/components/forms" },
            { label: "Input" },
          ]}
        />
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "items",
                type: "BreadcrumbItem[]",
                default: "-",
                description: "Array of breadcrumb items (required)",
              },
              {
                prop: "separator",
                type: "string | React.ReactNode",
                default: '"/"',
                description: "Separator between breadcrumb items",
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
                type: "React.HTMLAttributes<HTMLElement>",
                default: "-",
                description: "All standard HTML nav attributes",
              },
            ],
          },
          {
            title: "BreadcrumbItem",
            data: [
              {
                prop: "label",
                type: "string",
                default: "-",
                description: "Display text for the breadcrumb item (required)",
              },
              {
                prop: "href",
                type: "string",
                default: "-",
                description: "URL for navigation (optional, if not provided item is not clickable)",
              },
              {
                prop: "onClick",
                type: "() => void",
                default: "-",
                description: "Click handler function (optional, takes precedence over href)",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
