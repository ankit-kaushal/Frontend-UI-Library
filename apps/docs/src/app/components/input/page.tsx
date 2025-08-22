import styles from "./page.module.scss";

export default function InputPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Input</h1>
          <p className={styles.description}>
            Form input components with validation support
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
