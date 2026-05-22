import type { WorkExperience } from "../data/work";

type WorkItemProps = {
  work: WorkExperience;
};

function WorkItem({ work }: WorkItemProps) {
  return (
    <article className="work-item">
      <div>
        <h3>{work.company}</h3>
        <p>{work.role}</p>
        {work.description && <p className="work-description">{work.description}</p>}
      </div>

      <span>{work.period}</span>
    </article>
  );
}

export default WorkItem;