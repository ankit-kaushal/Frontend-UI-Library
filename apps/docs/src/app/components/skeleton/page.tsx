"use client";

import React from "react";
import { Skeleton } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function SkeletonPage() {
  return (
    <ComponentPageLayout
      title="Skeleton"
      description="Loading skeleton placeholder component with text, circular, and rectangular variants."
    >
      <DemoSection
        title="Variants"
        code={`import { Skeleton } from 'uiplex';

<Skeleton variant="text" width={200} />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={200} height={100} />`}
      >
        <div className={styles.column}>
          <Skeleton variant="text" width={200} />
          <div className={styles.row}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={200} height={100} />
          </div>
        </div>
      </DemoSection>

      <DemoSection
        title="Content Placeholder"
        code={`<div className="card">
  <Skeleton variant="rectangular" height={120} />
  <Skeleton variant="text" width="80%" />
  <Skeleton variant="text" width="60%" />
</div>`}
      >
        <div className={styles.card}>
          <Skeleton variant="rectangular" height={120} className={styles.cardImage} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              { prop: "variant", type: '"text" | "circular" | "rectangular"', default: '"text"', description: "Shape variant" },
              { prop: "width", type: "number | string", default: "-", description: "Width (px or CSS value)" },
              { prop: "height", type: "number | string", default: "-", description: "Height (px or CSS value)" },
              { prop: "className", type: "string", default: "-", description: "Additional CSS classes" },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
