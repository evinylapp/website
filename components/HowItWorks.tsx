const steps = [
  {
    number: "01",
    color: "#5B9BD5",
    title: "Scan",
    subtitle: "Approchez l'objet",
    description:
      "L'utilisateur approche un objet NFC de son téléphone. L'application le reconnaît instantanément — aucun QR code, aucune saisie manuelle.",
  },
  {
    number: "02",
    color: "#E8941A",
    title: "Validation",
    subtitle: "Ownership vérifié",
    description:
      "La plateforme vérifie instantanément que l'objet scanné vous appartient bien. Si c'est le vôtre, l'accès est immédiat. En mode hors ligne, l'album doit avoir été téléchargé au préalable et le scan de l'objet reste requis.",
  },
  {
    number: "03",
    color: "#D4C020",
    title: "Écoute",
    subtitle: "Streaming ou offline",
    description:
      "L'album est disponible en streaming ou en téléchargement. La qualité FLAC ou MP3 au choix. Un seul téléphone actif à la fois — comme un vrai vinyl qu'on ne peut pas dupliquer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="concept" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xp-gold font-mono-tech text-xs tracking-widest uppercase mb-4">
            Le concept
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Comment ça marche
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Trois étapes. Un objet physique. Une expérience digitale complète.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-bg-card border border-border rounded-2xl p-8 hover:border-border-light transition-colors h-full">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6 font-mono-tech font-bold text-bg-deep text-sm"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-mono-tech text-text-muted mb-4 tracking-wide uppercase">
                  {step.subtitle}
                </p>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key principle */}
        <div className="mt-16 p-8 rounded-2xl border border-xp-gold/20 bg-xp-gold/5 text-center">
          <p className="font-heading text-2xl text-text-primary">
            &ldquo;La possession de l&apos;objet physique confère le droit digital.&rdquo;
          </p>
          <p className="text-text-muted mt-3 text-sm font-mono-tech">
            1 objet NFC = 1 album = 1 accès exclusif
          </p>
        </div>
      </div>
    </section>
  );
}
