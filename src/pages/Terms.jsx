import { Link } from "react-router-dom";
import { company } from "../data/company";
import "../styles/Pages.css";

export default function Terms() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Use</h1>
          <p>
            Terms that govern use of the {company.name} website and inquiry
            forms.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container legal-doc">
          <p className="legal-doc__updated">Last updated: September 2026</p>

          <h2>Agreement</h2>
          <p>
            By accessing this website, you agree to these Terms of Use. If you
            do not agree, please do not use the site. These terms apply to the
            website and online forms only; a separate transportation agreement
            may apply to any actual freight services.
          </p>

          <h2>About our services</h2>
          <p>
            {company.name} provides freight transportation and capacity
            information for shippers, brokers, 3PLs, and other business partners.
            Content on this site describes general capabilities and is for
            informational purposes. Equipment availability, rates, transit times,
            and coverage are not guaranteed until confirmed in writing by our
            dispatch or operations team.
          </p>

          <h2>Quote and contact requests</h2>
          <p>
            Submitting a quote or contact form is a request for information or
            follow-up — it does not create a binding shipping contract. You agree
            to provide accurate contact and shipment details. We may decline or
            not respond to incomplete, inaccurate, or inappropriate submissions.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Misuse forms for spam, harassment, or unrelated solicitation</li>
            <li>
              Attempt to disrupt, scrape excessively, or compromise the website
              or related systems
            </li>
            <li>
              Use site content in a way that suggests false affiliation or
              endorsement without permission
            </li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            Site text, branding, logos, and design belong to {company.name} or
            our licensors. You may view and share pages for ordinary business
            evaluation, but you may not copy or reuse site materials for
            competing commercial use without written permission.
          </p>

          <h2>Third-party links</h2>
          <p>
            If this site links to third-party websites or tools, we are not
            responsible for their content, policies, or practices.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The website is provided “as is.” To the fullest extent permitted by
            law, we disclaim warranties regarding uninterrupted access, error-free
            content, or fitness for a particular purpose. Freight services, when
            booked, are subject to separate terms, tariffs, or contracts.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {company.name} is not liable
            for indirect, incidental, or consequential damages arising from use
            of this website or reliance on site content. Nothing on this page
            limits liability that cannot be limited under applicable law.
          </p>

          <h2>Privacy</h2>
          <p>
            How we handle form and website information is described in our{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these Terms of Use periodically. Continued use of the
            site after changes means you accept the updated terms. The “Last
            updated” date will reflect revisions.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <Link to="/contact">Contact us</Link> or email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>. Business
            address: {company.address}.
          </p>
        </div>
      </section>
    </>
  );
}
