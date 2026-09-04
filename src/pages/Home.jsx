import { Link } from "react-router-dom";
import {
  capacitySolutions,
  company,
  customerNeeds,
  sellingPoints,
  transportationServices,
  trustItems,
} from "../data/company";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true" />
        <div className="home-hero__content">
          <p className="eyebrow reveal">Houston, TX · Est. {company.founded}</p>
          <div className="home-hero__brand reveal reveal-delay-1">
            MS Logistics
            <span>{company.tagline}</span>
          </div>
          <h1 className="reveal reveal-delay-2">{company.headline}</h1>
          <p className="home-hero__sub reveal reveal-delay-2">
            {company.subheadline}
          </p>
          <div className="home-hero__actions reveal reveal-delay-3">
            <Link to="/quote" className="btn btn--primary">
              Request a Quote
            </Link>
            <Link to="/partnerships" className="btn btn--ghost">
              Discuss a Contract
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container trust-bar__inner">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.label}>
              <div className="trust-item__label">{item.label}</div>
              <div className="trust-item__value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="section section--paper">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Why MS Logistics</p>
            <h2>
              Built for operators who need{" "}
              <span className="serif-accent">clear capacity</span>
            </h2>
            <p className="lede mt-1">
              We answer three things quickly: what we haul, where we run, and how
              you start working with us.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-panel">
              <h3>Core Selling Points</h3>
              <ul>
                {sellingPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="why-panel">
              <h3>Customer Needs Supported</h3>
              <ul>
                {customerNeeds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Services</p>
            <h2>Transportation built around your lanes</h2>
          </div>

          <div className="services-preview">
            <div className="service-list">
              {transportationServices.map((service, index) => (
                <article className="service-row" key={service.title}>
                  <div className="service-row__num">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="capacity-aside">
              <h3>Capacity Solutions</h3>
              <p style={{ color: "var(--text-muted-dark)" }}>
                Flexible support for recurring volume and sudden demand.
              </p>
              <ul>
                {capacitySolutions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/services" className="btn btn--primary">
                View All Services
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <div className="capacity-banner">
            <div>
              <p className="eyebrow">Fleet & Capacity</p>
              <h2>Capacity available for new partnerships</h2>
              <p>
                MS Logistics is accepting new shipper, broker, 3PL, and
                dedicated-route opportunities. We can review one-time shipments,
                recurring weekly lanes, seasonal volume, and longer-term
                transportation agreements.
              </p>
            </div>
            <Link to="/fleet" className="btn btn--primary">
              Explore Fleet
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container cta-strip">
          <div>
            <p className="eyebrow">Start Here</p>
            <h2>Ready to move freight with MS Logistics?</h2>
            <p>
              Request a quote for spot freight or discuss a contract for
              dedicated and recurring capacity.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/quote" className="btn btn--primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn btn--outline-light">
              Contact Dispatch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
