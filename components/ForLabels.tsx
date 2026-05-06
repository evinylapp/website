const guarantees = [
  {
    color: "#5B9BD5",
    title: "Chaque droit est attribué",
    description:
      "Chaque écoute est liée à un identifiant de téléphone unique et à un objet NFC physique acheté. Les droits sont attribués à chaque lecture, de manière fiable et vérifiable — sans nécessiter de nom ni d'adresse email.",
  },
  {
    color: "#D4C020",
    title: "Protection propriétaire sans dépendance tierce",
    description:
      "Un système de protection audio développé en interne, sans dépendance à Google ou Apple. Aucun fichier audio n'est accessible en clair sur le téléphone de l'utilisateur.",
  },
  {
    color: "#E8941A",
    title: "Modèle ownership — cadre juridique familier",
    description:
      "Le modèle « 1 objet NFC = 1 droit d'accès » s'inscrit dans la logique de la vente d'œuvres musicales physiques, un cadre bien établi pour les ayants droit.",
  },
  {
    color: "#9B4EC8",
    title: "Règle d'exclusivité stricte",
    description:
      "Un album ne peut être écouté que sur un seul téléphone simultanément. Écoute en ligne et hors ligne sont mutuellement exclusives. Le prêt suspend l'accès du prêteur.",
  },
  {
    color: "#4A8F4A",
    title: "Anti-duplication forte",
    description:
      "Un album téléchargé ne peut être lu que sur le téléphone qui l'a téléchargé. Aucune copie ne peut circuler — la protection est liée à l'appareil lui-même.",
  },
  {
    color: "#5B9BD5",
    title: "Données d'écoute exploitables",
    description:
      "Chaque lecture génère des données documentées : pays, durée, fréquence. Des informations exploitables pour le suivi de votre communauté d'auditeurs et la redistribution des droits.",
  },
];

export default function ForLabels() {
  return (
    <section id="labels" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] rounded-full bg-xp-blue/4 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xp-blue font-mono-tech text-xs tracking-widest uppercase mb-4">
            Pour les labels, producteurs & sociétés de droits
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Protection, attribution, droits
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Un système de protection audio transparent et vérifiable, construit sur un modèle
            d&apos;ownership physique. Pas une boîte noire — une architecture
            documentée et auditable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-bg-card border border-border rounded-2xl p-6 hover:border-border-light transition-colors"
            >
              <div
                className="w-1 h-10 rounded-full mb-4"
                style={{ backgroundColor: g.color }}
              />
              <h3 className="font-semibold text-text-primary mb-3">{g.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
