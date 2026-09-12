import { Link } from "react-router-dom";
import {
  company,
  phoneHref,
  driverBenefits,
  driverRequirements,
} from "../data/company";
import "../styles/Pages.css";
import "../styles/Home.css";

export default function DriverBenefits() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Careers</p>
          <h1>Driver Benefits</h1>
          <p>
            Drive with a Houston-based carrier that puts respect, steady miles,
            and home time first. Here's what you can expect behind the wheel at
            MS Logistics.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">What You Get</p>
            <h2>
              Built around <span className="serif-accent">drivers</span>
            </h2>
          </div>

          <div className="partner-grid">
            {driverBenefits.map((item) => (
              <article className="partner-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Requirements</p>
            <h2>What we look for</h2>
          </div>

          <ul className="driver-reqs">
            {driverRequirements.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div
            className="capacity-banner"
            style={{ border: "1px solid var(--line-dark)" }}
          >
            <div>
              <p className="eyebrow">Join the Team</p>
              <h2>Ready to drive with MS Logistics?</h2>
              <p>
                Reach out to our Houston dispatch team to talk routes, pay, and
                how to get started.
              </p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn--primary">
                Apply / Contact Us
              </Link>
              <a href={phoneHref(company.phone)} className="btn btn--ghost">
                Call {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
