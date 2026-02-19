"use client";

import React from "react";
import { Upload } from "uiplex";
import {
  ComponentPageLayout,
  DemoSection,
  APISection,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function UploadPage() {
  return (
    <ComponentPageLayout
      title="Upload"
      description="File upload component with drag and drop, optional max size, and custom placeholder."
    >
      <DemoSection
        title="Basic Usage"
        code={`import { Upload } from 'uiplex';

<Upload onFileSelect={(files) => console.log(files)} />`}
      >
        <Upload onFileSelect={(files) => alert(`Selected ${files.length} file(s)`)} />
      </DemoSection>

      <DemoSection
        title="Multiple Files"
        code={`<Upload multiple onFileSelect={(files) => console.log(files)} />`}
      >
        <Upload
          multiple
          onFileSelect={(files) => alert(`Selected ${files.length} file(s)`)}
        />
      </DemoSection>

      <DemoSection
        title="Accept Type"
        code={`<Upload accept="image/*" onFileSelect={...} />`}
      >
        <Upload
          accept="image/*"
          onFileSelect={(files) => alert(`Selected ${files.length} image(s)`)}
        />
      </DemoSection>

      <DemoSection
        title="Custom Placeholder"
        code={`<Upload onFileSelect={...}>
  <span>Drop your files here</span>
</Upload>`}
      >
        <Upload onFileSelect={(files) => alert(`Selected ${files.length} file(s)`)}>
          <span className={styles.customText}>Drop your files here</span>
        </Upload>
      </DemoSection>

      <APISection
        tables={[
          {
            data: [
              { prop: "onFileSelect", type: "(files: File[]) => void", default: "-", description: "Called with selected files" },
              { prop: "onFilesChange", type: "(files: FileList | null) => void", default: "-", description: "Called with raw FileList" },
              { prop: "accept", type: "string", default: "-", description: "Accept attribute (e.g. \"image/*\")" },
              { prop: "multiple", type: "boolean", default: "false", description: "Allow multiple files" },
              { prop: "disabled", type: "boolean", default: "false", description: "Disable upload" },
              { prop: "maxSize", type: "number", default: "-", description: "Max file size in bytes" },
              { prop: "children", type: "React.ReactNode", default: "Default placeholder", description: "Custom drop zone content" },
            ],
          },
        ]}
      />
    </ComponentPageLayout>
  );
}
