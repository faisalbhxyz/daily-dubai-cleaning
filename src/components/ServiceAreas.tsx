import type { Dictionary } from "@/lib/i18n/types";
import { serviceAreas } from "@/lib/site";

export function ServiceAreas({ dict }: { dict: Dictionary }) {
  return (
    <section id="areas" className="section areas-section" aria-labelledby="areas-heading">
      <div className="container">
        <p className="eyebrow">{dict.areas.eyebrow}</p>
        <h2 id="areas-heading">{dict.areas.title}</h2>
        <p className="section-lead">{dict.areas.lead}</p>
        <ul className="areas-list">
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
