"use client";

import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableHeader,
  TableCell,
} from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function TablePage() {
  return (
    <ComponentPageLayout
      title="Table"
      description="A table component for displaying tabular data with head, body, footer, and configurable variants and sizes."
    >
      <DemoSection
        title="Basic Usage"
        code={`import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from 'uiplex';

<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Email</TableHeader>
      <TableHeader>Role</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Jane Doe</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>John Smith</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Jane Doe</TableCell>
              <TableCell>jane@example.com</TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Smith</TableCell>
              <TableCell>john@example.com</TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DemoSection>

      <DemoSection
        title="Variants"
        code={`<Table variant="default">...</Table>
<Table variant="bordered">...</Table>
<Table variant="striped">...</Table>`}
      >
        <div className={styles.tableStack}>
          <div>
            <h4 className={styles.variantLabel}>Default</h4>
            <Table variant="default">
              <TableHead>
                <TableRow>
                  <TableHeader>Product</TableHeader>
                  <TableHeader>Price</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Widget A</TableCell>
                  <TableCell>$10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Widget B</TableCell>
                  <TableCell>$20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h4 className={styles.variantLabel}>Bordered</h4>
            <Table variant="bordered">
              <TableHead>
                <TableRow>
                  <TableHeader>Product</TableHeader>
                  <TableHeader>Price</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Widget A</TableCell>
                  <TableCell>$10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Widget B</TableCell>
                  <TableCell>$20</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h4 className={styles.variantLabel}>Striped</h4>
            <Table variant="striped">
              <TableHead>
                <TableRow>
                  <TableHeader>Product</TableHeader>
                  <TableHeader>Price</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Widget A</TableCell>
                  <TableCell>$10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Widget B</TableCell>
                  <TableCell>$20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Widget C</TableCell>
                  <TableCell>$30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        title="Sizes"
        code={`<Table size="sm">...</Table>
<Table size="md">...</Table>
<Table size="lg">...</Table>`}
      >
        <div className={styles.tableStack}>
          <div>
            <h4 className={styles.variantLabel}>Small</h4>
            <Table size="sm" variant="bordered">
              <TableHead>
                <TableRow>
                  <TableHeader>Col 1</TableHeader>
                  <TableHeader>Col 2</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Row 1</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h4 className={styles.variantLabel}>Medium (default)</h4>
            <Table size="md" variant="bordered">
              <TableHead>
                <TableRow>
                  <TableHeader>Col 1</TableHeader>
                  <TableHeader>Col 2</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Row 1</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h4 className={styles.variantLabel}>Large</h4>
            <Table size="lg" variant="bordered">
              <TableHead>
                <TableRow>
                  <TableHeader>Col 1</TableHeader>
                  <TableHeader>Col 2</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Row 1</TableCell>
                  <TableCell>Data</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </DemoSection>

      <DemoSection
        title="With Footer"
        code={`<Table variant="bordered">
  <TableHead>...</TableHead>
  <TableBody>...</TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell>$60</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
      >
        <Table variant="bordered">
          <TableHead>
            <TableRow>
              <TableHeader>Item</TableHeader>
              <TableHeader>Qty</TableHeader>
              <TableHeader>Amount</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Widget A</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Widget B</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$20</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>$40</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DemoSection>

      <APISection
        tables={[
          {
            title: "Table",
            data: [
              {
                prop: "variant",
                type: '"default" | "bordered" | "striped"',
                default: '"default"',
                description: "Visual style of the table",
              },
              {
                prop: "size",
                type: '"sm" | "md" | "lg"',
                default: '"md"',
                description: "Cell padding and font size",
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
            title: "TableHead, TableBody, TableFooter, TableRow",
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Table section content",
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
            title: "TableHeader, TableCell",
            data: [
              {
                prop: "children",
                type: "React.ReactNode",
                default: "-",
                description: "Cell content",
              },
              {
                prop: "colSpan",
                type: "number",
                default: "-",
                description: "Number of columns to span (HTML attribute)",
              },
              {
                prop: "rowSpan",
                type: "number",
                default: "-",
                description: "Number of rows to span (HTML attribute)",
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
