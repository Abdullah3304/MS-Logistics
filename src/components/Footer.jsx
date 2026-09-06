import { Link } from "react-router-dom";
import { company, navLinks, phoneHref } from "../data/company";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src="/images/logo.png?v=3" alt="MS Logistics" />
          <h3>MS Logistics</h3>
          <p>
            Dependable freight transportation from Houston, TX — built for
            shippers, brokers, and dedicated-capacity partnerships.
          </p>
        </div>

        <div>
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Capability</h4>
          <ul>
            <li>
              <Link to="/services">Transportation Services</Link>
            </li>
            <li>
              <Link to="/fleet">Fleet & Capacity</Link>
            </li>
            <li>
              <Link to="/partnerships">Contract Partnerships</Link>
            </li>
            <li>
              <Link to="/quote">Request a Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <div className="site-footer__meta">
            <p>{company.address}</p>
            <p>
              Phone:{" "}
              <a href={phoneHref(company.phone)}>{company.phone}</a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              {company.usdot} · {company.mc}
            </p>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {year} {company.name}. All rights reserved.
        </span>
        <nav className="site-footer__legal" aria-label="Legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
        </nav>
        <span>
          Est. {company.founded} · {company.location} · {company.tagline}
        </span>
      </div>
    </footer>
  );
}
