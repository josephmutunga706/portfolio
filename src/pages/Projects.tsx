import { useSearchParams } from "react-router-dom";
import { projects } from "../data";
import type { Tag } from "../data";
import ProjectCard from "../components/ProjectCard";

const tags: ("All" | Tag)[] = ["All", "GIS", "Remote Sensing", "Web", "GeoAI"];
export default function Projects() {
  const [params, setParams] = useSearchParams();
  const tag: "All" | Tag = (params.get("tag") as Tag | null) ?? "All";
  const list = projects.filter(p => tag === "All" || p.tag === tag);
  return (
    <section className="sec"><div className="wrap">
      <h1>Projects</h1>
      <div className="filters" role="group" aria-label="Filter by category">
        {tags.map(t => <button key={t} aria-pressed={t === tag} onClick={() => setParams(t === "All" ? {} : { tag: t })}>{t === "Web" ? "Web development" : t}</button>)}
      </div>
      <div className="pgrid">{list.map(p => <ProjectCard key={p.id} p={p} />)}</div>
    </div></section>
  );
}
