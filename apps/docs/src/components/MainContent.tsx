"use client";

import { useSidebar } from "@/contexts/SidebarContext";
import styles from "./MainContent.module.scss";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  const { isCollapsed, isLoaded } = useSidebar();

  // Don't apply collapsed styles until the state is loaded from localStorage
  const shouldShowCollapsed = isLoaded && isCollapsed;

  return (
    <div
      className={`${styles.mainContent} ${
        shouldShowCollapsed ? styles.collapsed : ""
      }`}
    >
      {children}
    </div>
  );
};

export default MainContent;
