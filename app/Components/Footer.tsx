const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {year} Portfolio — Tous droits réservés.</p>
        <p>
          Conçu et développé avec{" "}
          <span className="font-medium text-foreground">Next.js &amp; Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
