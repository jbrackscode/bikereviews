import { CheckIcon, MinusIcon, StarIcon } from "lucide-react";

export interface RackSpec {
  name: string;
  origin: string;
  originFlag?: string;
  tagline: string;
  price: string;
  capacity: string;
  weight: string;
  warranty: string;
  hitch: string;
  pros: string[];
  cons: string[];
  featured?: boolean;
  verdict?: string;
}

export function RackCard({ rack }: { rack: RackSpec }) {
  return (
    <div
      className="rounded-xl overflow-hidden relative"
      style={{
        background: "var(--white)",
        border: rack.featured
          ? "2px solid var(--brand)"
          : "1px solid var(--rule)",
      }}
    >
      {rack.featured && (
        <div
          className="absolute top-0 left-0 flex items-center gap-1.5 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
          style={{
            background: "var(--brand)",
            borderRadius: "0 0 20px 0",
            fontFamily: "var(--font-sans)",
          }}
        >
          <StarIcon size={10} fill="white" />
          Editor&apos;s Pick – Best for Families
        </div>
      )}

      {/* Header */}
      <div
        className="px-6"
        style={{ paddingTop: rack.featured ? "2.5rem" : "1.25rem" }}
      >
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-0.5">
          <h3
            className="font-serif text-2xl font-bold"
            style={{ color: "var(--ink)" }}
          >
            {rack.name}
          </h3>
          <span
            className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border whitespace-nowrap"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "var(--ink-muted)",
              background: "var(--bg)",
              borderColor: "var(--rule)",
            }}
          >
            {rack.originFlag} {rack.origin}
          </span>
        </div>
        <p
          className="text-xs uppercase tracking-wider mb-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "var(--ink-muted)",
          }}
        >
          {rack.tagline}
        </p>
      </div>

      {/* Spec Bar */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          background: rack.featured ? "#fff8f2" : "var(--bg)",
        }}
      >
        {[
          { label: "From", value: rack.price, highlight: rack.featured },
          { label: "Capacity", value: rack.capacity, highlight: rack.featured },
          { label: "Rack Weight", value: rack.weight },
          { label: "Warranty", value: rack.warranty },
          { label: "Hitch", value: rack.hitch },
        ].map((spec, i) => (
          <div
            key={i}
            className="flex flex-col gap-0.5 px-3 py-3"
            style={{
              borderRight:
                i < 4 ? `1px solid ${rack.featured ? "#f0cda8" : "var(--rule)"}` : "none",
            }}
          >
            <span
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--ink-muted)",
              }}
            >
              {spec.label}
            </span>
            <span
              className="text-sm font-semibold leading-tight"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: spec.highlight ? "var(--brand)" : "var(--ink)",
              }}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Pros / Cons */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-md p-3" style={{ background: "var(--green-bg)" }}>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--green)" }}
            >
              What works
            </p>
            <ul className="space-y-0.5">
              {rack.pros.map((p, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1.5 text-xs leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--ink-mid)" }}
                >
                  <CheckIcon
                    size={11}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--green)" }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md p-3" style={{ background: "var(--red-bg)" }}>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--red)" }}
            >
              Consider
            </p>
            <ul className="space-y-0.5">
              {rack.cons.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1.5 text-xs leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--ink-mid)" }}
                >
                  <MinusIcon
                    size={11}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--red)" }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Verdict strip (featured only) */}
      {rack.verdict && (
        <div
          className="px-6 py-3 flex items-center gap-2.5"
          style={{ background: "var(--brand)" }}
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.7)" }}
          >
            Our Verdict
          </span>
          <span
            className="text-sm font-medium text-white leading-snug"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {rack.verdict}
          </span>
        </div>
      )}
    </div>
  );
}
