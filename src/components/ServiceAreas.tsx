import { serviceAreas } from "@/lib/site";

export function ServiceAreas() {
  return (
    <section id="areas" className="section areas-section" aria-labelledby="areas-heading">
      <div className="container">
        <p className="eyebrow">Service areas</p>
        <h2 id="areas-heading">Cleaning Services Across Dubai</h2>
        <p className="section-lead">
          We proudly serve homes, villas, apartments, and offices throughout Dubai.
        </p>
        <ul className="areas-list">
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
