import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import { projects } from "./data/projects";
import WorkItem from "./components/WorkItem";
import { workExperiences } from "./data/work";
import FloatingDock from "./components/floatingDock";
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <>
    <main className="page-shell">
      <Section className="hero fade-in">
        <h1>hi, atharva here</h1>
        <p>love building stuff.</p>
      </Section>

      <Section className="section fade-in delay-1">
        <h2>about</h2>
        <p>
          i purse things which makes me ruthlessly curious 
        </p>
        <p>
          absolutely obsessed with solving problems that challenge my cognitive limits and curiosity.
        </p>
          <p>
          won multiple coding competitions and placed AIR 105 in ICPC regionals
        </p>
        <p>
          right now im working at product based startup which handles payments accross the world
        </p>
      </Section>
    <Section title="cool places ive worked at" className="fade-in delay-2">
      <div className="work-list">
        {workExperiences.map((work) => (
          <WorkItem key={`${work.company}-${work.period}`} work={work} />
        ))}
      </div>
    </Section>
    <Section title="projects" className="fade-in delay-2">
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
    </main>
    <FloatingDock/>
    <Analytics />
    </>
  );
}

export default App;