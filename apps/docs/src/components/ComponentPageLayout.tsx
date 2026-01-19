"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";
import styles from "./ComponentPageLayout.module.scss";

interface ComponentPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ComponentPageLayout: React.FC<ComponentPageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </header>
        {children}
      </div>
    </div>
  );
};

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
  code?: string;
  language?: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  title,
  children,
  code,
  language = "tsx",
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.demo}>{children}</div>
      {code && <CodeBlock language={language}>{code}</CodeBlock>}
    </section>
  );
};

interface APITableProps {
  data: Array<{
    prop: string;
    type: string;
    default: string;
    description: string;
  }>;
  title?: string;
}

export const APITable: React.FC<APITableProps> = ({ data, title }) => {
  return (
    <div className={styles.apiTable}>
      {title && <h3 className={styles.apiTableTitle}>{title}</h3>}
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
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.prop}</td>
              <td>{row.type}</td>
              <td>{row.default}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface APISectionProps {
  title?: string;
  tables: Array<{
    title?: string;
    data: Array<{
      prop: string;
      type: string;
      default: string;
      description: string;
    }>;
  }>;
}

export const APISection: React.FC<APISectionProps> = ({
  title = "API Reference",
  tables,
}) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {tables.map((table, index) => (
        <APITable
          key={index}
          data={table.data}
          title={table.title}
        />
      ))}
    </section>
  );
};
