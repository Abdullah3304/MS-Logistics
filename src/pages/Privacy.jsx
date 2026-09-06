import { Link } from "react-router-dom";
import { company } from "../data/company";
import "../styles/Pages.css";

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            How {company.name} collects, uses, and protects information submitted
            through this website.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container legal-doc">
          <p className="legal-doc__updated">Last updated: September 2026</p>

          <h2>Who we are</h2>
          <p>
            {company.name} (“we,” “us,” or “our”) operates this website to share
            transportation capabilities and receive quote and contact requests.
            You can reach us at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> or{" "}
            {company.phone}.
          </p>

          <h2>Information we collect</h2>
          <p>When you submit a quote or contact form, we may collect:</p>
          <ul>
            <li>Name, company name, email address, and phone number</li>
            <li>
              Shipment details such as origin, destination, equipment needs, and
              notes you provide
            </li>
            <li>Message content and subject lines from contact forms</li>
          </ul>
          <p>
            Our servers may also receive standard technical data (such as IP
            address, browser type, and request timing) as part of normal website
            operation and security logging.
          </p>

          <h2>How we use information</h2>
          <p>We use submitted information to:</p>
          <ul>
            <li>Respond to quote and capacity requests</li>
            <li>Follow up on partnership or contract inquiries</li>
            <li>Improve our dispatch communication and service</li>
            <li>Maintain records related to customer and partner outreach</li>
          </ul>
          <p>
            We do not sell your personal information. We do not use form
            submissions for unrelated third-party advertising.
          </p>

          <h2>Email and form delivery</h2>
          <p>
            Quote and contact submissions are sent to our business email and may
            also be stored securely on our server for operational follow-up. Only
            authorized personnel should access those records.
          </p>

          <h2>Sharing</h2>
          <p>
            We may share information with service providers who help us operate
            email delivery or hosting, solely as needed to run this website and
            communicate with you. We may also disclose information if required by
            law or to protect our rights and safety.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep inquiry records for as long as needed to respond to your
            request, support ongoing business relationships, and meet ordinary
            operational or legal needs.
          </p>

          <h2>Your choices</h2>
          <p>
            You may contact us to request a correction or deletion of information
            you submitted through this site, subject to any legitimate business or
            legal retention needs. Email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>

          <h2>Children</h2>
          <p>
            This website is intended for business customers and partners. We do
            not knowingly collect personal information from children.
          </p>

          <h2>Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top of this page will change when we do.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy:{" "}
            <Link to="/contact">Contact us</Link> or email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
