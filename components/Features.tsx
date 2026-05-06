const features = [
  {
    tag: "P2P",
    color: "#E8941A",
    title: "Prêt d'album par contact NFC",
    description:
      "Prêtez temporairement un album à un ami par simple contact entre deux téléphones. Pendant le prêt, le prêteur ne peut pas écouter l'album — comme un vrai vinyl qu'on donne.",
    detail: "Durée configurable • Usage unique • Révocation automatique",
  },
  {
    tag: "Social",
    color: "#9B4EC8",
    title: "Jukebox multi-devices",
    description:
      "Plusieurs utilisateurs présents au même endroit fusionnent leurs collections en une bibliothèque commune. Queue partagée en temps réel.",
    detail: "Synchronisation temps réel • Sessions sauvegardées",
  },
  {
    tag: "Gamification",
    color: "#D4C020",
    title: "XP Wheel à 5 catégories",
    description:
      "Les utilisateurs accumulent de l'XP selon 5 axes : Écoute, Collection, Social, Découverte, Création. La roue est visible sur le profil et dans les commentaires artistes.",
    detail: "Règles configurables • Récompenses paliers • Boutique XP",
  },
  {
    tag: "Identité",
    color: "#5B9BD5",
    title: "Sans email, sans mot de passe",
    description:
      "L'identité est ancrée dans le téléphone lui-même. La récupération de compte se fait par scan d'un album déjà possédé par l'utilisateur + code à 6 chiffres — aucune donnée personnelle requise.",
    detail: "Identifiant matériel stable • Récupération par NFC",
  },
  {
    tag: "Offline",
    color: "#4A8F4A",
    title: "Lecture hors ligne sécurisée",
    description:
      "Téléchargez vos albums pour les écouter sans connexion. Le scan de l'objet NFC reste requis même hors ligne — l'objet physique demeure la clé d'accès.",
    detail: "Protection liée à l'appareil • Validation NFC locale",
  },
  {
    tag: "Exclusif",
    color: "#E8941A",
    title: "Messagerie par contact NFC",
    description:
      "Les fans s'authentifient par contact NFC entre téléphones pour envoyer un message à un artiste. L'artiste définit ses règles : combien de contacts requis, à quelle occasion.",
    detail: "Règles configurables par l'artiste • Messagerie de groupe",
  },
];

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xp-purple font-mono-tech text-xs tracking-widest uppercase mb-4">
            Fonctionnalités
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Ce qui rend E-VINYL unique
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Des mécanismes qui n&apos;existent nulle part ailleurs, construits sur la
            contrainte physique du vinyl comme principe directeur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-border-light transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono-tech px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: f.color + "20",
                    color: f.color,
                  }}
                >
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-text-muted text-xs font-mono-tech">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
