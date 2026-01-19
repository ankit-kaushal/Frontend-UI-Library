import {
  ComponentPageLayout,
} from "@/components/ComponentPageLayout";
import styles from "./page.module.scss";

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      title="Avatar"
      description="User avatar component with image fallbacks"
    >
      <div className={styles.comingSoon}>
        <h2>Coming Soon</h2>
        <p>This component is currently in development.</p>
      </div>
    </ComponentPageLayout>
  );
}
