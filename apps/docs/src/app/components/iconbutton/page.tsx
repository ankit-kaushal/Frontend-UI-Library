"use client";

import React from "react";
import { IconButton } from "@uilab/ui";
import { Mail, Trash, Edit, Heart } from "feather-icons-react";
import CodeBlock from "@/components/CodeBlock";
import styles from "./page.module.scss";

export default function IconButtonPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>IconButton</h1>
          <p className={styles.description}>
            A button component specifically designed for icons. Supports
            multiple sizes, variants, and color schemes.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Basic Usage</h2>
          <div className={styles.demo}>
            <IconButton aria-label="Mail" icon={<Mail size={18} />} />
            <IconButton aria-label="Edit" icon={<Edit size={18} />} />
            <IconButton aria-label="Delete" icon={<Trash size={18} />} />
          </div>
          <CodeBlock language="tsx">
            {`import { IconButton } from '@uilab/ui';
import { Mail } from 'feather-icons-react';

<IconButton aria-label="Mail" icon={<Mail size={18} />} />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sizes</h2>
          <div className={styles.demo}>
            <IconButton
              aria-label="Extra small"
              icon={<Mail size={12} />}
              size="xs"
            />
            <IconButton
              aria-label="Small"
              icon={<Mail size={14} />}
              size="sm"
            />
            <IconButton
              aria-label="Medium"
              icon={<Mail size={18} />}
              size="md"
            />
            <IconButton
              aria-label="Large"
              icon={<Mail size={22} />}
              size="lg"
            />
          </div>
          <CodeBlock language="tsx">
            {`<IconButton aria-label="Icon" icon={<Mail />} size="xs" />
<IconButton aria-label="Icon" icon={<Mail />} size="sm" />
<IconButton aria-label="Icon" icon={<Mail />} size="md" />
<IconButton aria-label="Icon" icon={<Mail />} size="lg" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.demo}>
            <IconButton
              aria-label="Ghost"
              icon={<Mail size={18} />}
              variant="ghost"
            />
            <IconButton
              aria-label="Outline"
              icon={<Edit size={18} />}
              variant="outline"
            />
            <IconButton
              aria-label="Solid"
              icon={<Heart size={18} />}
              variant="solid"
            />
          </div>
          <CodeBlock language="tsx">
            {`<IconButton aria-label="Ghost" icon={<Mail />} variant="ghost" />
<IconButton aria-label="Outline" icon={<Edit />} variant="outline" />
<IconButton aria-label="Solid" icon={<Heart />} variant="solid" />`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Round</h2>
          <div className={styles.demo}>
            <IconButton
              aria-label="Round ghost"
              icon={<Mail size={18} />}
              variant="ghost"
              isRound
            />
            <IconButton
              aria-label="Round outline"
              icon={<Edit size={18} />}
              variant="outline"
              isRound
            />
            <IconButton
              aria-label="Round solid"
              icon={<Heart size={18} />}
              variant="solid"
              isRound
            />
          </div>
          <CodeBlock language="tsx">
            {`<IconButton
  aria-label="Round"
  icon={<Mail />}
  variant="ghost"
  isRound
/>`}
          </CodeBlock>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>States</h2>
          <div className={styles.demo}>
            <IconButton aria-label="Normal" icon={<Mail size={18} />} />
            <IconButton
              aria-label="Disabled"
              icon={<Mail size={18} />}
              isDisabled
            />
          </div>
          <CodeBlock language="tsx">
            {`<IconButton aria-label="Normal" icon={<Mail />} />
<IconButton aria-label="Disabled" icon={<Mail />} isDisabled />`}
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
                  <td>icon</td>
                  <td>React.ReactNode</td>
                  <td>-</td>
                  <td>Icon element to display (required)</td>
                </tr>
                <tr>
                  <td>aria-label</td>
                  <td>string</td>
                  <td>-</td>
                  <td>Accessibility label (required)</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>"xs" | "sm" | "md" | "lg"</td>
                  <td>"md"</td>
                  <td>Size of the icon button</td>
                </tr>
                <tr>
                  <td>variant</td>
                  <td>"ghost" | "outline" | "solid"</td>
                  <td>"ghost"</td>
                  <td>Visual style variant</td>
                </tr>
                <tr>
                  <td>colorScheme</td>
                  <td>
                    "blue" | "green" | "red" | "yellow" | "purple" | "gray"
                  </td>
                  <td>-</td>
                  <td>Color scheme (for solid variant)</td>
                </tr>
                <tr>
                  <td>isRound</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether button is circular</td>
                </tr>
                <tr>
                  <td>isDisabled</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Whether button is disabled</td>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
