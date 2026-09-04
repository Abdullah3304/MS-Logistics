import { useState } from "react";
import { company } from "../data/company";
import "../styles/Pages.css";

const initial = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      setStatus({ type: "ok", message: data.message });
      setForm(initial);
    } catch (err) {
      setStatus({
        type: "err",
        message: err.message || "Unable to submit right now.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <p className="eyebrow">Contact</p>
          <h1>Talk with dispatch</h1>
          <p>
            Reach MS Logistics for spot freight, overflow support, or contract
            conversations. Our Houston dispatch team is ready to help.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-tile">
              <h3>Phone</h3>
              <p>{company.phone}</p>
            </div>
            <div className="contact-tile">
              <h3>Email</h3>
              <p>{company.email}</p>
            </div>
            <div className="contact-tile">
              <h3>Location</h3>
              <p>{company.address}</p>
            </div>
          </div>

          <div className="form-shell">
            <aside className="form-intro">
              <p className="eyebrow">Credentials</p>
              <h2>Operating details</h2>
              <ul>
                <li>{company.usdot}</li>
                <li>{company.mc}</li>
                <li>Insured: Yes</li>
                <li>GPS Tracking: Available</li>
                <li>Hours: {company.hours}</li>
                <li>Professional dispatch support</li>
              </ul>
            </aside>

            <form className="form-panel" onSubmit={onSubmit}>
              <div className="form-grid form-grid--2">
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={update}
                  />
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={update}
                  />
                </div>
              </div>

              <div className="field mt-1">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                />
              </div>

              <button
                className="btn btn--primary mt-2"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending…" : "Send Message"}
              </button>

              {status && (
                <div
                  className={`form-status form-status--${status.type}`}
                  role="status"
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
