import { useEffect, useState } from "react";
import { NavLink, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { profile } from "./data";
import { Icon } from "./components/Icons";

const nav = [["/", "Home"], ["/about", "About Me"], ["/projects", "Projects"], ["/blog", "Blog"], ["/contact", "Contact"]];

export default function App() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <header className="top">
        <div className="wrap bar">
          <Link to="/" className="mark">{profile.name}</Link>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
          <nav className={open ? "open" : ""} aria-label="Main">
            {nav.map(([to, l]) => <NavLink key={to} to={to} end={to === "/"}>{l}</NavLink>)}
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /><Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer>
        <div className="wrap foot">
          <div className="soc">{profile.socials.map(x => <a key={x.label} href={x.url} target="_blank" rel="noreferrer" aria-label={x.label}><Icon name={x.label} /><span>{x.label}</span></a>)}</div>
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
