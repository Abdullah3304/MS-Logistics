import { Link } from "react-router-dom";
import { partnershipTypes } from "../data/company";
import "../styles/Pages.css";
import "../styles/Home.css";

export default function Partnerships() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Contract Partnerships</p>
          <h1>Long-term capacity for serious operators</h1>
          <p>
            Structured partnerships for shippers, brokers, 3PLs, and dedicated
            route programs — without vague fleet claims.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Who We Partner With</p>
            <h2>
              Partnerships built around{" "}
              <span className="serif-accent">real volume</span>
            </h2>
          </div>

          <div className="partner-grid">
            {partnershipTypes.map((item) => (
              <article className="partner-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="capacity-banner" style={{ border: "1px solid var(--line-dark)" }}>
            <div>
              <p className="eyebrow">Next Step</p>
              <h2>Discuss a contract with dispatch</h2>
              <p>
                Share your lanes, cadence, and equipment needs. We will review
                spot freight, recurring weekly lanes, seasonal surge, and
                longer-term transportation agreements.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/quote" className="btn btn--primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
