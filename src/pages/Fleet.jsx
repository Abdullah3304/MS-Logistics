import { Link } from "react-router-dom";
import { equipment } from "../data/company";
import "../styles/Pages.css";
import "../styles/Home.css";

export default function Fleet() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Fleet & Capacity</p>
          <h1>Equipment ready for partnership lanes</h1>
          <p>
            Simple equipment profiles with the details partners ask for first —
            service type, coverage, capacity, and liftgate options.
          </p>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <div className="capacity-banner" style={{ marginBottom: "2.5rem" }}>
            <div>
              <p className="eyebrow">Open Capacity</p>
              <h2>Capacity available for new partnerships</h2>
              <p>
                MS Logistics is accepting new shipper, broker, 3PL, and
                dedicated-route opportunities. We can review one-time shipments,
                recurring weekly lanes, seasonal volume, and longer-term
                transportation agreements.
              </p>
            </div>
            <Link to="/partnerships" className="btn btn--primary">
              Discuss a Contract
            </Link>
          </div>

          <div className="section__head">
            <p className="eyebrow">Equipment</p>
            <h2>Request capacity by unit type</h2>
          </div>

          <div className="equip-grid">
            {equipment.map((unit) => (
              <article className="equip-card" key={unit.id}>
                <div className="equip-card__top">
                  <h3>{unit.name}</h3>
                  <span className="badge badge--live">In Service</span>
                </div>

                <dl className="equip-meta">
                  <div>
                    <dt>Service Type</dt>
                    <dd>{unit.serviceType}</dd>
                  </div>
                  <div>
                    <dt>Coverage Area</dt>
                    <dd>{unit.coverage}</dd>
                  </div>
                  <div>
                    <dt>Dimensions / Capacity</dt>
                    <dd>{unit.dimensions}</dd>
                  </div>
                  <div>
                    <dt>Liftgate</dt>
                    <dd>{unit.liftgate}</dd>
                  </div>
                </dl>

                <Link
                  to={`/quote?equipment=${encodeURIComponent(unit.name)}`}
                  className="btn btn--dark btn--full"
                >
                  Request Capacity
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
