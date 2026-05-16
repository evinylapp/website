export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-xp-green/5 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xp-green font-mono-tech text-xs tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
          Vous êtes artiste, label ou société de droits ?
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-xl mx-auto">
          AURA V-NYL est en développement actif. Si vous souhaitez en savoir plus,
          discuter d&apos;un partenariat ou accéder à une démo, contactez-nous directement.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { label: "Artistes & labels", color: "#E8941A", desc: "Distribution, boutique, analytics" },
            { label: "Labels, producteurs & sociétés de droits", color: "#5B9BD5", desc: "Protection, droits, données d'écoute" },
            { label: "Investisseurs & partenaires", color: "#9B4EC8", desc: "Vision, roadmap, architecture" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-bg-card border border-border hover:border-border-light transition-colors text-left"
            >
              <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
              <p className="text-text-primary font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-text-muted text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:contact@auravnyl.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-xp-gold text-bg-deep font-semibold hover:bg-xp-orange transition-colors text-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          contact@auravnyl.com
        </a>

        <p className="text-text-muted text-xs mt-6 font-mono-tech">
          Projet déposé INPI e-Soleau • Gabriel JUNOD • Saint-Denis, France
        </p>
      </div>
    </section>
  );
}
