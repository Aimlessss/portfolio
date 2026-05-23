import type { WorkExperience } from "../data/work";

type WorkItemProps = {
  work: WorkExperience;
};

function WorkItem({ work }: WorkItemProps) {
  return (
    <article>

      <img src = {work.logo!} alt={`${work.company} logo`}className="work-logo"/>
      <div className = "work-content">
        <h3>{work.company}</h3>
        <p>{work.role}</p>
        <p>{work.description}</p>
      </div>

      <p className="work-period">{work.period}</p>
    </article>
  );
}

export default WorkItem;