"use client";

import React from "react";
import { Box, Flex } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";

export default function BoxPage() {
  return (
    <ComponentPageLayout
      title="Box"
      description="A versatile container component that serves as a building block for layouts. It can render as any HTML element and accepts all standard HTML attributes, making it perfect for creating custom components and layouts."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Box } from 'uiplex';

<Box
  style={{
    padding: "1rem",
    background: "var(--accent-primary)",
    color: "white",
    borderRadius: "4px",
  }}
>
  This is a Box component
</Box>`}
      >
        <Box
          style={{
            padding: "1rem",
            background: "var(--accent-primary)",
            color: "white",
            borderRadius: "4px",
          }}
        >
          This is a Box component
        </Box>
      </DemoSection>

      <DemoSection
        title="Polymorphic 'as' Prop"
        code={`<Box as="section">Rendered as section</Box>
<Box as="article">Rendered as article</Box>
<Box as="header">Rendered as header</Box>
<Box as="footer">Rendered as footer</Box>`}
      >
        <Flex direction="column" gap={12}>
          <Box
            as="section"
            style={{
              padding: "1rem",
              border: "1px solid var(--border-primary)",
              borderRadius: "4px",
            }}
          >
            Rendered as &lt;section&gt;
          </Box>
          <Box
            as="article"
            style={{
              padding: "1rem",
              border: "1px solid var(--border-primary)",
              borderRadius: "4px",
            }}
          >
            Rendered as &lt;article&gt;
          </Box>
          <Box
            as="header"
            style={{
              padding: "1rem",
              background: "var(--bg-secondary)",
              borderRadius: "4px",
            }}
          >
            Rendered as &lt;header&gt;
          </Box>
          <Box
            as="footer"
            style={{
              padding: "1rem",
              background: "var(--bg-secondary)",
              borderRadius: "4px",
            }}
          >
            Rendered as &lt;footer&gt;
          </Box>
        </Flex>
      </DemoSection>

      <DemoSection
        title="Styling"
        code={`<Box style={{ padding: "1rem", background: "var(--accent-primary)", color: "white" }}>
  Primary styled box
</Box>
<Box style={{ padding: "1rem", border: "2px solid var(--accent-primary)" }}>
  Outlined box
</Box>
<Box style={{ padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
  Box with shadow
</Box>`}
      >
        <Flex direction="column" gap={12}>
          <Box
            style={{
              padding: "1rem",
              background: "var(--accent-primary)",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Primary styled box
          </Box>
          <Box
            style={{
              padding: "1rem",
              border: "2px solid var(--accent-primary)",
              borderRadius: "4px",
              color: "var(--accent-primary)",
            }}
          >
            Outlined box
          </Box>
          <Box
            style={{
              padding: "1rem",
              background: "var(--bg-secondary)",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Box with shadow
          </Box>
        </Flex>
      </DemoSection>

      <DemoSection
        title="Card Example"
        code={`<Box
  style={{
    padding: "1.5rem",
    border: "1px solid var(--border-primary)",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  }}
>
  <Flex direction="column" gap={12}>
    <h3>Card Title</h3>
    <p>Card content goes here</p>
    <Flex gap={8} justify="end">
      <Box as="button">Cancel</Box>
      <Box as="button">Save</Box>
    </Flex>
  </Flex>
</Box>`}
      >
        <Box
          style={{
            padding: "1.5rem",
            border: "1px solid var(--border-primary)",
            borderRadius: "8px",
            background: "var(--bg-primary)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <Flex direction="column" gap={12}>
            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
              Card Title
            </h3>
            <p style={{ margin: 0, color: "var(--text-secondary)" }}>
              This is a card built using the Box component. It demonstrates how
              Box can be used as a building block for more complex components.
            </p>
            <Flex gap={8} justify="end">
              <Box
                as="button"
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid var(--border-primary)",
                  borderRadius: "4px",
                  background: "var(--bg-primary)",
                  cursor: "pointer",
                }}
              >
                Cancel
              </Box>
              <Box
                as="button"
                style={{
                  padding: "0.5rem 1rem",
                  background: "var(--accent-primary)",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save
              </Box>
            </Flex>
          </Flex>
        </Box>
      </DemoSection>

      <DemoSection
        title="Layout Example"
        code={`<Flex direction="column" gap={16}>
  <Box as="header">Header</Box>
  <Flex gap={16}>
    <Box as="aside" style={{ flex: "0 0 200px" }}>
      Sidebar
    </Box>
    <Box as="main" style={{ flex: "1" }}>
      Main Content
    </Box>
  </Flex>
  <Box as="footer">Footer</Box>
</Flex>`}
      >
        <Flex direction="column" gap={16}>
          <Box
            as="header"
            style={{
              padding: "1rem",
              background: "var(--bg-secondary)",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            Header
          </Box>
          <Flex gap={16}>
            <Box
              as="aside"
              style={{
                flex: "0 0 200px",
                padding: "1rem",
                background: "var(--bg-secondary)",
                borderRadius: "4px",
              }}
            >
              Sidebar
            </Box>
            <Box
              as="main"
              style={{
                flex: "1",
                padding: "1rem",
                background: "var(--bg-primary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "4px",
              }}
            >
              Main Content
            </Box>
          </Flex>
          <Box
            as="footer"
            style={{
              padding: "1rem",
              background: "var(--bg-secondary)",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            Footer
          </Box>
        </Flex>
      </DemoSection>

      <DemoSection
        title="Layout Props"
        code={`<Box
  position="relative"
  width={200}
  height={100}
  padding={16}
  backgroundColor="var(--accent-primary)"
  color="white"
  borderRadius={8}
>
  Content
</Box>

<Box
  position="absolute"
  top={0}
  right={0}
  padding={8}
>
  Absolute positioned
</Box>

<Box
  display="inline-block"
  padding={12}
  margin={8}
  border="2px solid var(--accent-primary)"
>
  Inline block
</Box>`}
      >
        <Flex direction="column" gap={12}>
          <Box
            position="relative"
            width={200}
            height={100}
            padding={16}
            backgroundColor="var(--accent-primary)"
            color="white"
            borderRadius={8}
          >
            Position: relative, Width: 200px, Height: 100px
          </Box>
          <Box
            position="absolute"
            top={0}
            right={0}
            padding={8}
            backgroundColor="var(--bg-secondary)"
            borderRadius={4}
          >
            Absolute positioned
          </Box>
          <Box
            display="inline-block"
            padding={12}
            margin={8}
            border="2px solid var(--accent-primary)"
            borderRadius={4}
          >
            Inline block with border
          </Box>
        </Flex>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Child elements",
              },
              {
                prop: "as",
                type: "keyof JSX.IntrinsicElements",
                default: '"div"',
                description: "HTML element to render as",
              },
              {
                prop: "position",
                type: '"static" | "relative" | "absolute" | "fixed" | "sticky"',
                default: "-",
                description: "CSS position property",
              },
              {
                prop: "top, right, bottom, left",
                type: "number | string",
                default: "-",
                description: "Position offsets (number in px or string)",
              },
              {
                prop: "zIndex",
                type: "number | string",
                default: "-",
                description: "Z-index value",
              },
              {
                prop: "display",
                type:
                  '"block" | "inline-block" | "inline" | "flex" | "inline-flex" | "grid" | "none"',
                default: "-",
                description: "CSS display property",
              },
              {
                prop: "width, height",
                type: "number | string",
                default: "-",
                description: "Width and height (number in px or string)",
              },
              {
                prop: "minWidth, maxWidth, minHeight, maxHeight",
                type: "number | string",
                default: "-",
                description: "Size constraints (number in px or string)",
              },
              {
                prop: "padding, margin",
                type: "number | string",
                default: "-",
                description: "Spacing (number in px or string)",
              },
              {
                prop: "paddingTop, paddingRight, etc.",
                type: "number | string",
                default: "-",
                description: "Individual spacing properties",
              },
              {
                prop: "backgroundColor, bg",
                type: "string",
                default: "-",
                description: "Background color (bg is alias)",
              },
              {
                prop: "color",
                type: "string",
                default: "-",
                description: "Text color",
              },
              {
                prop: "border, borderWidth, borderColor, borderRadius",
                type: "number | string",
                default: "-",
                description: "Border properties",
              },
              {
                prop: "boxShadow, shadow",
                type: "string",
                default: "-",
                description: "Box shadow (shadow is alias)",
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
                description: "Inline styles (merged with computed styles)",
              },
              {
                prop: "...props",
                type: "React.HTMLAttributes<HTMLDivElement>",
                default: "-",
                description: "All standard HTML div attributes",
              },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
