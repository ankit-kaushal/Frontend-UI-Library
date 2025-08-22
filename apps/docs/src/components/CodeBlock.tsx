"use client";

import { useState } from "react";
import { Copy, Check } from "feather-icons-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeBlock.module.scss";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = "tsx",
  title,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className={styles.codeBlock}>
      {title && (
        <div className={styles.header}>
          <span className={styles.language}>{language.toUpperCase()}</span>
          {title && <span className={styles.title}>{title}</span>}
        </div>
      )}
      <div className={styles.content}>
        <button
          onClick={handleCopy}
          className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
          title="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <div className={styles.syntaxHighlighter}>
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: 1.6,
              fontFamily:
                '"JetBrains Mono", "Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
            }}
            showLineNumbers={false}
            wrapLines={false}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
