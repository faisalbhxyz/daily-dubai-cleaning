import { StarIcon } from "@/components/Icons";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="reviews-heading">
      <div className="container">
        <p className="eyebrow">Client Testimonials</p>
        <h2 id="reviews-heading">
          Trusted by Homeowners & Businesses Across Dubai
        </h2>

        <div className="review-badge">
          <p className="review-excellent">Excellent</p>
          <div className="stars" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <p>Based on Google reviews</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((review) => (
            <blockquote key={review.name} className="testimonial">
              <div className="stars" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p>“{review.text}”</p>
              <footer>
                <cite>{review.name}</cite>
                <span>Posted on Google</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
