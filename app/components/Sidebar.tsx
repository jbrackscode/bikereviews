const jbFacts = [
  { label: "Price (4-bike)", value: "$899", orange: true },
  { label: "Price (6-bike)", value: "$919", orange: true },
  { label: "Rack Weight", value: "~32 kg" },
  { label: "Bike Capacity", value: "4 or 6 Bikes" },
  { label: "Bike Hold", value: "Front Wheel" },
  { label: "Hitch Required", value: "2\" Receiver" },
  { label: "Warranty", value: "5 Years" },
  { label: "Construction", value: "Steel" },
  { label: "Designed In", value: "🇦🇺 Australia" },
  { label: "Bike Types", value: "MTB, Hybrid, Road" },
];

const rankings = [
  { rank: 1, name: "JB Racks", label: "Editor's Pick", featured: true },
  { rank: 2, name: "VelociRAX" },
  { rank: 3, name: "Shingleback" },
  { rank: 4, name: "Dirty Possum" },
  { rank: 5, name: "GripSport" },
  { rank: 6, name: "Atlantic" },
];

export function Sidebar() {
  return (
    <aside className="space-y-5">
      {/* CTA */}
      <div className="rounded-xl p-5 space-y-3" style={{ background: "var(--brand)" }}>
        <h3
          className=" text-xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Australia&apos;s Family Bike Rack
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          JB Racks is built for exactly this — multiple bikes, real families, Australian weekends.
        </p>
        <a
          href="https://jbracks.com.au?utm_source=bikereviews&utm_medium=sidebar&utm_campaign=lp-001&utm_content=shop"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm font-semibold py-3 rounded-lg transition-transform hover:scale-[1.02]"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            background: "white",
            color: "var(--brand)",
          }}
        >
          Shop JB Racks →
        </a>
        <a
          href="https://jbracks.com.au?utm_source=bikereviews&utm_medium=sidebar&utm_campaign=lp-001&utm_content=models"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm font-semibold py-3 rounded-lg transition-colors hover:bg-white/10"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            color: "white",
            border: "1.5px solid rgba(255,255,255,0.4)",
          }}
        >
          View All Models
        </a>
      </div>

      {/* Specs */}
      <div
        className="rounded-xl p-5 space-y-3"
        style={{
          background: "var(--white)",
          border: "1px solid var(--rule)",
        }}
      >
        <h4
          className="text-[11px] font-semibold uppercase tracking-widest"
          style={{ fontFamily: "'Libre Franklin', sans-serif", color: "var(--ink-muted)" }}
        >
          JB Racks — Specs at a Glance
        </h4>
        <div className="space-y-0.5">
          {jbFacts.map((f) => (
            <div
              key={f.label}
              className="flex justify-between items-center py-2 border-b text-sm"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                borderColor: "var(--bg)",
              }}
            >
              <span style={{ color: "var(--ink-muted)" }}>{f.label}</span>
              <span
                className="font-semibold"
                style={{ color: f.orange ? "var(--brand)" : "var(--ink)" }}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings */}
      <div
        className="rounded-xl p-5"
        style={{ background: "var(--white)", border: "1px solid var(--rule)" }}
      >
        <h4
          className="text-[11px] font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Libre Franklin', sans-serif", color: "var(--ink-muted)" }}
        >
          How They Stack Up
        </h4>
        <div className="space-y-0.5">
          {rankings.map((r) => (
            <div
              key={r.rank}
              className="flex items-center gap-2.5 py-2 border-b text-sm"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                borderColor: "var(--bg)",
                color: "var(--ink-mid)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                style={
                  r.featured
                    ? { background: "var(--brand)", color: "white" }
                    : { background: "var(--bg)", color: "var(--ink-muted)" }
                }
              >
                {r.rank}
              </div>
              <span>
                {r.featured ? <strong style={{ color: "var(--ink)" }}>{r.name}</strong> : r.name}
                {r.label && (
                  <span style={{ color: "var(--ink-muted)" }}> — {r.label}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
