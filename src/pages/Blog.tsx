import { useState } from "react";
import { posts } from "../data";
export default function Blog() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="sec"><div className="wrap">
      <h1>Blog</h1>
      <div className="posts">
        {posts.map(p => (
          <article key={p.id} className="post">
            <img src={p.image} alt="" loading="lazy" />
            <div><h3>{p.title}</h3><p>{p.intro}</p>
              {open === p.id && <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul>}
              <button className="btn small ghost" onClick={() => setOpen(open === p.id ? null : p.id)}>{open === p.id ? "Show less" : "Read more"}</button></div>
          </article>
        ))}
      </div>
    </div></section>
  );
}
