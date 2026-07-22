import type { Dictionary } from "@/lib/i18n/types";

function LeafAccent({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 40" fill="none" aria-hidden>
      <path
        d="M10 28c0-10 8-18 18-20-1 10-8 18-18 20z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M22 30c2-9 10-15 20-16-3 10-11 16-20 16z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="7" y="9" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M7 14h18M12 6v5M20 6v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 19h4M12 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EquipmentIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 22c4-7 9-11 18-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 10h7l3 6H13L10 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13.5 16v8M10.5 24h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M23 9l1 2 2.2.3-1.6 1.5.4 2.2L23 13.8 20.9 15l.4-2.2-1.6-1.5 2.2-.3L23 9z"
        fill="currentColor"
      />
    </svg>
  );
}

function SatisfactionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M11 16.5l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="21" cy="13" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 25c1.2-5 4.5-7.5 7-7.5S17.8 20 19 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.5 24.5c.8-3.5 2.8-5.2 4.3-5.2 1.8 0 3.5 1.8 4.2 5.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const whyIcons = [BookingIcon, EquipmentIcon, SatisfactionIcon, TeamIcon];

export function WhyChooseUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="container why-inner">
        <header className="why-header">
          <p className="why-eyebrow">
            <span className="why-slash" aria-hidden />
            {dict.whyChoose.eyebrow}
            <span className="why-slash why-slash-right" aria-hidden />
          </p>
          <div className="why-title-wrap">
            <LeafAccent className="why-leaf why-leaf-left" />
            <h2 id="why-heading">{dict.whyChoose.title}</h2>
            <LeafAccent className="why-leaf why-leaf-right" />
          </div>
        </header>

        <div className="why-grid">
          {dict.whyChoose.items.map((item, index) => {
            const Icon = whyIcons[index] ?? BookingIcon;
            return (
              <article key={item.title} className="why-item">
                <span className="why-icon" aria-hidden>
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="stats-row" role="list">
          {dict.whyChoose.stats.map((stat) => (
            <div key={stat.label} className="stat-item" role="listitem">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
