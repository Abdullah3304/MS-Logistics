import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { company, navLinks } from "../data/company";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img
            className="brand__mark"
            src="/images/logo.png"
            alt="MS Logistics logo"
          />
          <span className="brand__text">
            <span className="brand__name">MS Logistics</span>
            <span className="brand__tag">{company.tagline}</span>
          </span>
        </Link>

        <button
          className={`nav-toggle ${open ? "nav-toggle--open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav__link${isActive ? " nav__link--active" : ""}`
              }
              end={link.to === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/quote"
            className="btn btn--primary nav__cta"
            onClick={() => setOpen(false)}
          >
            Get Capacity
          </Link>
        </nav>
      </div>
    </header>
  );
}
