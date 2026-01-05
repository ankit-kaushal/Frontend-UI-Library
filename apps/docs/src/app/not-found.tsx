"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "feather-icons-react";
import { Button, Text } from "uiplex";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <div className={styles.errorCode}>
            <Text size="xl" weight="bold" color="primary" as="div">
              404
            </Text>
          </div>
          <div className={styles.illustrationCircle}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
          </div>
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <Text size="xl" weight="bold" as="span">
              Page Not Found
            </Text>
          </h1>
          <p className={styles.description}>
            <Text size="lg" color="secondary">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </Text>
          </p>
        </div>

        <div className={styles.actions}>
          <Link href="/">
            <Button variant="primary" size="md" leftIcon={<Home size={18} />}>
              Go Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="md"
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>

        <div className={styles.suggestions}>
          <div className={styles.suggestionsTitle}>
            <Text size="sm" weight="semibold">
              Popular Pages:
            </Text>
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              <Text size="sm">Overview</Text>
            </Link>
            <Link href="/components/button" className={styles.link}>
              <Text size="sm">Button</Text>
            </Link>
            <Link href="/components/modal" className={styles.link}>
              <Text size="sm">Modal</Text>
            </Link>
            <Link href="/components/input" className={styles.link}>
              <Text size="sm">Input</Text>
            </Link>
            <Link href="/components/toast" className={styles.link}>
              <Text size="sm">Toast</Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

