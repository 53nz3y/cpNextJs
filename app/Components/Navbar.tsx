"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const links = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#projets", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2.5 rounded-lg text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-sm font-bold text-white dark:text-neutral-900"
          >
            P
          </span>
          Portfolio
        </Link>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid h-9 w-9 place-items-center rounded-lg text-foreground transition-colors hover:bg-surface-2 md:hidden"
        >
          {open ? <HiOutlineXMark className="h-5 w-5" /> : <HiOutlineBars3 className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border md:hidden">
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-2.5 text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
