"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/components/button", label: "Button" },
    { href: "/components/modal", label: "Modal" },
    { href: "/components/input", label: "Input" },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Uiplex
        </Link>

        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
