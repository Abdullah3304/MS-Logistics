import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { company, equipment } from "../data/company";
import "../styles/Pages.css";

const initial = {
  name: "",
  company: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  equipment: "",
  freightType: "",
  notes: "",
};

export default function Quote() {
  const [params] = useSearchParams();
  const prefill = params.get("equipment") || "";

  const [form, setForm] = useState(() => ({
    ...initial,
    equipment: prefill,
  }));
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const equipmentOptions = useMemo(
    () => equipment.map((unit) => unit.name),
    []
  );

  function update(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");
      setStatus({ type: "ok", message: data.message });
      setForm({ ...initial, equipment: prefill });
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
          <p className="eyebrow">Request a Quote</p>
          <h1>Tell us about the move</h1>
          <p>
            Share lane details and equipment needs. Our dispatch team reviews
            requests and follows up at {company.email}.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container form-shell">
          <aside className="form-intro">
            <p className="eyebrow">What Helps</p>
            <h2>Faster quotes start with clear lanes</h2>
            <p>Include as much as you can:</p>
            <ul>
              <li>Origin and destination</li>
              <li>Equipment preference</li>
              <li>Freight type and timing</li>
              <li>Whether this is spot or recurring</li>
            </ul>
            <p>
              For dedicated contracts, note weekly volume and preferred windows
              in the notes field.
            </p>
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
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={update}
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
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="origin">Origin</label>
                <input
                  id="origin"
                  name="origin"
                  value={form.origin}
                  onChange={update}
                  placeholder="City, ST"
                />
              </div>
              <div className="field">
                <label htmlFor="destination">Destination</label>
                <input
                  id="destination"
                  name="destination"
                  value={form.destination}
                  onChange={update}
                  placeholder="City, ST"
                />
              </div>
              <div className="field">
                <label htmlFor="equipment">Equipment</label>
                <select
                  id="equipment"
                  name="equipment"
                  value={form.equipment}
                  onChange={update}
                >
                  <option value="">Select equipment</option>
                  {equipmentOptions.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="freightType">Freight Type</label>
                <input
                  id="freightType"
                  name="freightType"
                  value={form.freightType}
                  onChange={update}
                  placeholder="Spot, dedicated, expedited…"
                />
              </div>
            </div>

            <div className="field mt-1">
              <label htmlFor="notes">Shipment Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={update}
                placeholder="Weight, pallets, schedule, recurring lane details…"
              />
            </div>

            <button className="btn btn--primary mt-2" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Submit Quote Request"}
            </button>

            {status && (
              <div
                className={`form-status form-status--${status.type}`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <p className="form-note">
              Quotes are routed to {company.email}. Update this address in site
              constants when the customer provides the final inbox.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
