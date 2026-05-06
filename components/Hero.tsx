import VinylDisc from "./VinylDisc";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-xp-green/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-xp-gold/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-xp-gold/30 bg-xp-gold/5">
            <span className="w-1.5 h-1.5 rounded-full bg-xp-gold" />
            <span className="text-xp-gold text-xs font-mono-tech tracking-widest uppercase">
              Distribution musicale NFC
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight text-text-primary">
            Le vinyl.{" "}
            <span className="text-gradient-gold">Réinventé.</span>
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
            Chaque puce NFC est une clé. Posséder l&apos;objet physique, c&apos;est posséder
            l&apos;album — pour le streamer, le télécharger, le prêter.
          </p>

          <p className="text-text-muted text-sm leading-relaxed max-w-md">
            Sans abonnement. Sans email obligatoire. L&apos;identité est dans le device
            et dans le vinyl lui-même.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#artistes"
              className="px-6 py-3 rounded-full bg-xp-gold text-bg-deep font-semibold text-sm hover:bg-xp-orange transition-colors"
            >
              Pour les artistes
            </a>
            <a
              href="#concept"
              className="px-6 py-3 rounded-full border border-border text-text-secondary hover:border-border-light hover:text-text-primary transition-colors text-sm"
            >
              Comment ça marche
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <VinylDisc size={380} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-xs font-mono-tech tracking-widest uppercase">Découvrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-text-muted to-transparent" />
      </div>
    </section>
  );
}
