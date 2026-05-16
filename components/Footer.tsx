export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-bg-elevated border border-xp-gold/30 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-xp-gold" />
          </div>
          <span className="font-heading font-bold text-text-primary">AURA V-NYL</span>
        </div>

        <p className="text-text-muted text-xs font-mono-tech text-center">
          Distribution musicale NFC • Dépôt e-Soleau INPI 2026
        </p>

        <div className="flex gap-6">
          {[
            { href: "#concept", label: "Concept" },
            { href: "#artistes", label: "Artistes" },
            { href: "#labels", label: "Labels" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-muted text-xs hover:text-text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
