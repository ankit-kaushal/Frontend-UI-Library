import {
  ComponentPageLayout,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function CardPage() {
  return (
    <ComponentPageLayout
      title="Card"
      description="A flexible card component for displaying content"
    >
      <div className={styles.comingSoon}>
        <h2>Coming Soon</h2>
        <p>This component is currently in development.</p>
      </div>
    </ComponentPageLayout>
  );
}
