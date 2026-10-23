import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile, services, projects } from "../data";
import ProjectCard from "../components/ProjectCard";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, c = 0, del = false, t: number;
    const tick = () => {
      const word = words[w];
      c += del ? -1 : 1; setText(word.slice(0, c));
      let wait = del ? 40 : 90;
      if (!del && c === word.length) { del = true; wait = 1400; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
      t = window.setTimeout(tick, wait);
    };
    tick(); return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Home() {
  const typed = useTyping(profile.phrases);
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero.jpg)` }}>
        <div className="wrap hero-in">
          <h1>{profile.name}</h1>
          <p className="typed" aria-live="off">{typed}<i /></p>
          <div className="actions"><Link className="btn" to="/projects">View my projects</Link><Link className="btn ghost light" to="/contact">Get in touch</Link></div>
        </div>
      </section>
      <section className="sec"><div className="wrap">
        <h2>What I do</h2>
        <div className="services">
          {services.map(s => (
            <Link key={s.title} to={`/projects?tag=${encodeURIComponent(s.tag)}`} className="svc">
              <img src={s.image} alt="" loading="lazy" />
              <div><h3>{s.title}</h3><p>{s.text}</p><span className="more">See related projects</span></div>
            </Link>
          ))}
        </div>
      </div></section>
      <section className="stats"><div className="wrap">
        {profile.stats.map(s => <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
      </div></section>
      <section className="sec"><div className="wrap">
        <h2>Featured projects</h2>
        <div className="pgrid">{projects.slice(0, 3).map(p => <ProjectCard key={p.id} p={p} />)}</div>
        <p className="center"><Link className="btn ghost" to="/projects">All projects</Link></p>
      </div></section>
    </>
  );
}
