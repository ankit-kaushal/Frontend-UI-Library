import styles from "./page.module.scss";

export default function CardPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Card</h1>
          <p className={styles.description}>
            A flexible card component for displaying content
          </p>
        </header>

        <div className={styles.comingSoon}>
          <h2>Coming Soon</h2>
          <p>This component is currently in development.</p>
        </div>
      </div>
    </div>
  );
}
