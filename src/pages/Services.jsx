import { Link } from "react-router-dom";
import {
  capacitySolutions,
  transportationServices,
} from "../data/company";
import "../styles/Pages.css";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Services</p>
          <h1>Transportation & capacity solutions</h1>
          <p>
            Exact service lines for shippers and partners who need dependable
            freight coverage across Texas and nationwide lanes.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container services-page-grid">
          <div>
            <div className="section__head">
              <p className="eyebrow">Transportation Services</p>
              <h2>What we move</h2>
            </div>
            {transportationServices.map((service) => (
              <article className="service-block" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>

          <aside className="side-panel">
            <h3>Capacity Solutions</h3>
            <ul>
              {capacitySolutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to="/quote" className="btn btn--primary mt-2">
              Request a Quote
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
