import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;