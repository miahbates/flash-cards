"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppHeader.module.css";

const navItems = [
  { href: "/deck", label: "Deck" },
  { href: "/cards", label: "Add card" },
  { href: "/tags", label: "Tags" },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        Flash Cards
      </Link>

      <nav className={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={styles.link}
              data-active={isActive}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
