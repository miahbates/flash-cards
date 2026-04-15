"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/deck", label: "Deck" },
  { href: "/cards/new", label: "Add card" },
  { href: "/tags", label: "Tags" },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="app-header">
      <Link className="app-header__brand" href="/">
        Flash Cards
      </Link>

      <nav className="app-header__nav" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className="app-header__link"
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
