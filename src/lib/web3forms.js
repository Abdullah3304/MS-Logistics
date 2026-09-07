/**
 * Web3Forms submission helper.
 *
 * There is no backend. Forms POST straight to Web3Forms, which emails the
 * submission to the inbox tied to the access key. The key is public by design:
 * it can only deliver a message to that inbox, so the worst a leak allows is
 * spam — never sending mail "as" us. Get a free key at https://web3forms.com
 * and set it as VITE_WEB3FORMS_ACCESS_KEY (Vite only exposes VITE_* to the app).
 */
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export async function submitToWeb3Forms({ subject, replyTo, fields }) {
  if (!ACCESS_KEY) {
    throw new Error(
      "Form is not configured yet. Set VITE_WEB3FORMS_ACCESS_KEY (see .env.example)."
    );
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      from_name: "MS Logistics Website",
      replyto: replyTo,
      ...fields,
      subject, // last so it always wins over any field named "subject"
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || "Submission failed. Please try again.");
  }
  return data;
}
