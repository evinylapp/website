const features = [
  {
    icon: "🎵",
    title: "Distribution physique + digitale",
    description:
      "Distribuez vos albums via des objets NFC au design de votre choix : vinyles, bijoux, statuettes, pendentifs… Chaque vente physique génère automatiquement un accès digital permanent pour l'acheteur.",
  },
  {
    icon: "🏪",
    title: "Boutique configurable par l'artiste",
    description:
      "Créez votre boutique merchandise directement depuis l'application. Définissez des articles réservés aux fans les plus engagés via des seuils d'XP.",
  },
  {
    icon: "🌟",
    title: "Espace fan exclusif",
    description:
      "Publiez du contenu réservé à votre communauté : posts, médias, dates de concerts en avant-première. Un espace privé où seuls vos vrais fans — ceux qui possèdent votre objet — ont accès.",
  },
  {
    icon: "💬",
    title: "Messagerie fan–artiste par contact NFC",
    description:
      "Les fans s'authentifient par contact NFC entre téléphones pour vous envoyer un message. Vous définissez vos règles : combien de contacts requis, à quelle occasion (concert, événement, etc.).",
  },
  {
    icon: "📊",
    title: "Statistiques d'écoute",
    description:
      "Chaque écoute est référencée : pays, durée, fréquence. Des données concrètes pour mieux connaître votre audience et valoriser votre catalogue.",
  },
  {
    icon: "⭐",
    title: "Système XP — fidélisation",
    description:
      "Vos fans accumulent de l'XP en écoutant vos albums, en interagissant, en collectionnant. La XP Wheel est visible dans les commentaires de votre page.",
  },
];

export default function ForArtists() {
  return (
    <section id="artistes" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] rounded-full bg-xp-orange/4 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <p className="text-xp-orange font-mono-tech text-xs tracking-widest uppercase mb-4">
              Pour les artistes
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Reprenez le contrôle de votre distribution
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              E-VINYL vous donne les outils d&apos;une plateforme de streaming majeure,
              avec le modèle économique du vinyle physique. Vos fans achètent, ils
              possèdent — vous êtes payé à la vente, pas au clic.
            </p>
            <div className="space-y-3">
              {[
                "Aucun abonnement streaming pour vos fans",
                "Vente one-shot comme un vinyle classique",
                "Boutique et merch intégrés dans l'app",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-xp-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-xp-orange" />
                  </div>
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-xp-orange/30 hover:bg-bg-elevated transition-all"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-text-primary mb-2 text-sm">{f.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
