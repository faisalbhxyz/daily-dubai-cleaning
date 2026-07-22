import { steps } from "@/lib/site";

function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 28c0-10 8-18 18-20-1 10-8 18-18 20z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M22 30c2-9 10-15 20-16-3 10-11 16-20 16z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M8 20c6-1 10 2 12 8-7 1-12-1-12-8z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function StepArrow() {
  return (
    <svg className="step-arrow" viewBox="0 0 80 24" fill="none" aria-hidden>
      <path
        d="M2 12h68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 6"
      />
      <path
        d="M62 4l14 8-14 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="16" y="18" width="32" height="30" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16 26h32" stroke="currentColor" strokeWidth="2.2" />
      <path d="M24 14v8M40 14v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 36h6M24 42h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M42 34l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L42 34z"
        fill="currentColor"
      />
    </svg>
  );
}

function CleanIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M18 44c6-10 14-16 28-18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 22h10l4 8H24l-4-8z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M25 30v16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M21 46h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M40 20l1.5 3 3.3.5-2.4 2.3.6 3.3L40 27.4 37 29.1l.6-3.3-2.4-2.3 3.3-.5L40 20z"
        fill="currentColor"
      />
      <path
        d="M48 28l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L48 28z"
        fill="currentColor"
      />
    </svg>
  );
}

function HappyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="32" cy="26" r="10" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M18 52c2-10 10-15 14-15s12 5 14 15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M27 25h.01M37 25h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M27 31c1.4 2 3 3 5 3s3.6-1 5-3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M44 14l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4L44 14z"
        fill="currentColor"
      />
    </svg>
  );
}

const stepIcons = [QuoteIcon, CleanIcon, HappyIcon];
const leafPositions = ["leaf-left", "leaf-top", "leaf-right"] as const;

export function HowItWorks() {
  return (
    <section className="section how-section" aria-labelledby="how-heading">
      <div className="container how-inner">
        <header className="how-header">
          <p className="how-eyebrow">
            How Daily Dubai Cleaning Works
            <span className="how-accent" aria-hidden />
          </p>
          <h2 id="how-heading">
            Simple, Fast & Hassle-Free Cleaning Services in Dubai
          </h2>
        </header>

        <ol className="steps-grid">
          {steps.map((step, index) => {
            const Icon = stepIcons[index] ?? QuoteIcon;
            return (
              <li key={step.title} className="step-item">
                {index > 0 ? <StepArrow /> : null}
                <div className="step-icon-wrap">
                  <LeafCluster className={`step-leaves ${leafPositions[index]}`} />
                  <div className="step-icon">
                    <Icon />
                  </div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
