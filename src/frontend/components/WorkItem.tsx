import type { WorkExperience } from "../data/work";

type WorkItemProps = {
  work: WorkExperience;
};

function WorkItem({ work }: WorkItemProps) {
  return (
    <article className="work-item">
      {work.logo ? (
        <img src={work.logo} alt={`${work.company} logo`} className="work-logo" />
      ) : (
        <span aria-hidden="true" />
      )}
      <div className="work-content">
        <h3>{work.company}</h3>
        <ul className="work-roles">
          {work.roles.map(({ role, period, description }) => (
            <li className="work-role" key={`${role}-${period}`}>
              <div className="work-role-heading">
                <p>{role}</p>
                <p className="work-period">{period}</p>
              </div>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default WorkItem;
