import { useRef } from "react";
import type { Project } from "../data";

const label = (t: string) => (t === "Web" ? "Web development" : t);
export default function ProjectCard({ p }: { p: Project }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const shots = p.gallery ?? (p.image ? [{ src: p.image, caption: p.title }] : []);
  return (
    <article className="pcard">
      <div className="thumb">{p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : <span>{label(p.tag)}</span>}</div>
      <div className="pbody">
        <span className="chip">{label(p.tag)}</span>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        <div className="actions">
          <button className="btn small" onClick={() => dlg.current?.showModal()}>Learn more</button>
          {p.links?.map(l => <a key={l.url} className="btn small ghost" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}
        </div>
      </div>
      <dialog ref={dlg} className="modal" aria-label={p.title} onClick={e => { if (e.target === dlg.current) dlg.current?.close(); }}>
        <div className="mhead"><h2>{p.title}</h2><button className="x" aria-label="Close" onClick={() => dlg.current?.close()}>×</button></div>
        <div className="mbody">
          {shots.map(s => (
            <figure key={s.src}>
              <a href={s.src} target="_blank" rel="noreferrer" title="Open full size"><img src={s.src} alt={s.caption} /></a>
              {shots.length > 1 && <figcaption>{s.caption}</figcaption>}
            </figure>
          ))}
          {p.links && <div className="actions">{p.links.map(l => <a key={l.url} className="btn" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}</div>}
          {p.details.map(d => (
            <section key={d.heading}><h4>{d.heading}</h4>
              {(Array.isArray(d.text) ? d.text : d.text ? [d.text] : []).map(t => <p key={t}>{t}</p>)}
              {d.items && <ul>{d.items.map(i => <li key={i}>{i}</li>)}</ul>}</section>
          ))}
        </div>
      </dialog>
    </article>
  );
}
