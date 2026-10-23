import { about, skills } from "../data";
export default function About() {
  return (
    <section className="sec"><div className="wrap">
      <h1>About me</h1>
      <div className="aboutgrid">
        <img className="portrait" src={about.photo} alt="Joseph Ndung’u Mutunga" />
        <div>
          <p className="lead">{about.intro}</p>
          {about.blocks.map(b => <div key={b.h} className="blk"><h3>{b.h}</h3><p>{b.t}</p></div>)}
        </div>
      </div>
      <div className="two">
        <div className="panel"><h3>Core values</h3><ul>{about.values.map(v => <li key={v}>{v}</li>)}</ul></div>
        <div className="panel"><h3>Awards and achievements</h3><ul>{about.awards.map(v => <li key={v}>{v}</li>)}</ul></div>
      </div>
      <h2 className="skh">Technical skills &amp; tools</h2>
      <p className="sub">The software I work in, and what I do with it, grouped by area.</p>
      <div className="skills">
        {skills.map(g => (
          <article key={g.title} className="sk">
            <h3>{g.title}</h3>
            <div className="tools">{g.tools.map(t => <span key={t}>{t}</span>)}</div>
            <ul>{g.skills.map(x => <li key={x}>{x}</li>)}</ul>
          </article>
        ))}
      </div>
    </div></section>
  );
}
