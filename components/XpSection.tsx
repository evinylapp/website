const categories = [
  { color: "#5B9BD5", name: "Audiophile", desc: "Sessions d'écoute, durée, diversité" },
  { color: "#4A8F4A", name: "Collectionneur", desc: "Taille et rareté de la collection" },
  { color: "#E8941A", name: "Socialiseur", desc: "Messages, commentaires, prêts" },
  { color: "#D4C020", name: "Initié", desc: "Rencontre avec les artistes et expérience de la musique en concert" },
  { color: "#9B4EC8", name: "Musicien", desc: "Création et participation active (artistes)" },
];

export default function XpSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-xp-gold/3 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* XP Wheel visual */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-border" />
              <div className="absolute inset-4 rounded-full border border-border-light" />

              {/* SVG pie */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                {categories.map((cat, i) => {
                  const total = categories.length;
                  const angle = (2 * Math.PI) / total;
                  const startAngle = i * angle - Math.PI / 2;
                  const endAngle = startAngle + angle - 0.05;
                  const r = 75;
                  const x1 = 100 + r * Math.cos(startAngle);
                  const y1 = 100 + r * Math.sin(startAngle);
                  const x2 = 100 + r * Math.cos(endAngle);
                  const y2 = 100 + r * Math.sin(endAngle);
                  return (
                    <path
                      key={cat.name}
                      d={`M 100 100 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                      fill={cat.color}
                      opacity={0.85}
                    />
                  );
                })}
                {/* Center */}
                <circle cx="100" cy="100" r="28" fill="#162019" />
                <circle cx="100" cy="100" r="4" fill="#0E1410" />
              </svg>

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono-tech text-xp-gold text-xs font-bold">XP</p>
                  <p className="font-mono-tech text-text-muted text-xs">WHEEL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xp-gold font-mono-tech text-xs tracking-widest uppercase mb-4">
              Gamification
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              La XP Wheel
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Chaque action sur la plateforme alimente une roue d&apos;expérience à 5
              catégories. Visible sur le profil, visible dans les commentaires des pages
              artistes — l&apos;engagement des fans se voit.
            </p>

            <div className="space-y-3 mb-8">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-text-primary text-sm font-medium">{cat.name}</span>
                    </div>
                    <p className="text-text-muted text-xs">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-bg-card border border-border">
              <p className="text-text-secondary text-sm">
                Les articles de la boutique peuvent être réservés aux fans ayant atteint
                un seuil d&apos;XP défini.{" "}
                <span className="text-xp-gold">La fidélité se récompense.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
