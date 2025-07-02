import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <main className="min-h-screen font-minecraft">
      <section className="text-white flex flex-col w-11/12 mx-auto mt-20">
        <div className="text-3xl 2xl:text-5xl mt-10">Projects</div>
        <ul className="flex flex-col gap-10 mt-10">
          {projects.map((project, idx) => 
            <li className="flex flex-col gap-3 text-sm w-4/5" key={idx}>
              <h2 className="text-lg">{project.title}</h2>
              <p>{project.description}</p>
              <ul className="flex gap-4">{project.technologies.map((tech) => 
                <li key={tech} className="bg-white text-xs text-neutral-600 px-3 py-2 rounded-md">{tech}</li>
              )}</ul>
              <Link className="border rounded-md w-fit p-2 text-xs" to={project.github}>Source Code...</Link>
            </li>
          )}
        
        </ul>
      </section>
    </main>
  );
}
