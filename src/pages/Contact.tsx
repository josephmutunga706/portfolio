import { FormEvent, useState } from "react";
import { profile } from "../data";
import { Icon } from "../components/Icons";
export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const form = e.currentTarget;
    try {
      const r = await fetch(profile.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (r.ok) { form.reset(); setState("ok"); } else setState("err");
    } catch { setState("err"); }
  }
  return (
    <section className="sec"><div className="wrap">
      <h1>Contact me</h1>
      <p className="sub">Have a project or a question? Send a message or reach me directly.</p>
      <div className="cgrid">
        <div className="cways">
          <a className="cway" href={`mailto:${profile.email}`}><span className="ci"><Icon name="Mail" /></span><span><small>Email</small><b>{profile.email}</b></span></a>
          <a className="cway" href={`tel:${profile.phone}`}><span className="ci"><Icon name="Phone" /></span><span><small>Phone</small><b>{profile.phone}</b></span></a>
        </div>
        <form onSubmit={submit}>
          <h3>Leave a message</h3>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Your email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Message<textarea name="message" rows={5} required /></label>
          <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
          {state === "ok" && <p className="ok" role="status">Message sent. I’ll reply by email.</p>}
          {state === "err" && <p className="bad" role="alert">The message did not send. Check your connection and try again, or email me directly.</p>}
        </form>
      </div>
    </div></section>
  );
}
