import { Link } from "react-router-dom";
import { company } from "../data/company";
import "../styles/Pages.css";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">About</p>
          <h1>MS Logistics — driven to deliver</h1>
          <p>
            A Houston-based freight partner focused on dependable capacity,
            clear communication, and long-term transportation relationships.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container about-split">
          <div className="about-visual">
            <div className="about-visual__caption">
              Houston, TX · Serving Texas & Nationwide
            </div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">Our Story</p>
            <h2>
              Established {company.founded} in{" "}
              <span className="serif-accent">Houston</span>
            </h2>
            <p>
              MS Logistics was founded in {company.founded} to deliver
              dependable freight transportation for shippers, brokers, and
              capacity partners who value responsiveness over marketing noise.
            </p>
            <p>
              {company.message}
            </p>
            <p>
              From Houston, we support spot freight, recurring routes, dedicated
              lanes, overflow capacity, and contract partnerships across Texas
              and nationwide corridors.
            </p>

            <div className="stat-row">
              <div className="stat">
                <strong>{company.founded}</strong>
                <span>Year Started</span>
              </div>
              <div className="stat">
                <strong>TX+</strong>
                <span>Coverage Focus</span>
              </div>
              <div className="stat">
                <strong>B2B</strong>
                <span>Partner Model</span>
              </div>
            </div>

            <div className="cta-actions mt-2">
              <Link to="/quote" className="btn btn--primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn--outline-light">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
