"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";
import {
  Home,
  Square,
  Maximize2,
  Type,
  CreditCard,
  User,
  Tag,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  FileText,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Loader,
  Circle,
  Layout,
  Package,
} from "feather-icons-react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed, isLoaded } = useSidebar();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Don't show collapsed state until loaded from localStorage
  const shouldShowCollapsed = isLoaded && isCollapsed;

  const components = [
    { href: "/", label: "Overview", icon: Home },
    { href: "/components/button", label: "Button", icon: Square },
    { href: "/components/loader", label: "Loader", icon: Loader },
    { href: "/components/radio", label: "Radio", icon: Circle },
    { href: "/components/text", label: "Text", icon: Type },
    { href: "/components/flex", label: "Flex", icon: Layout },
    { href: "/components/box", label: "Box", icon: Package },
    { href: "/components/modal", label: "Modal", icon: Maximize2 },
    { href: "/components/input", label: "Input", icon: Type },
    { href: "/components/card", label: "Card", icon: CreditCard },
    { href: "/components/avatar", label: "Avatar", icon: User },
    { href: "/components/badge", label: "Badge", icon: Tag },
    { href: "/components/alert", label: "Alert", icon: AlertTriangle },
    { href: "/components/tooltip", label: "Tooltip", icon: HelpCircle },
    { href: "/components/dropdown", label: "Dropdown", icon: ChevronDown },
    { href: "/components/tabs", label: "Tabs", icon: FileText },
    { href: "/components/accordion", label: "Accordion", icon: BookOpen },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${
        shouldShowCollapsed ? styles.collapsed : ""
      }`}
    >
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          {!shouldShowCollapsed && "TSLB UI Library"}
        </Link>
        <button
          onClick={toggleSidebar}
          className={styles.toggleButton}
          title={shouldShowCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {shouldShowCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
      </div>

      <nav className={styles.nav}>
        <div className={styles.section}>
          {!shouldShowCollapsed && (
            <h3 className={styles.sectionTitle}>Components</h3>
          )}
          <ul className={styles.navList}>
            {components.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                  title={shouldShowCollapsed ? item.label : undefined}
                >
                  <span className={styles.icon}>
                    <item.icon size={18} />
                  </span>
                  {!shouldShowCollapsed && (
                    <span className={styles.label}>{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
