import { articles } from "../data/blogs";

export default function BlogTimeline() {
  return (
    <ul className="article-list">
      {articles.map(({ title, publisher, url }) => (
        <li key={url}>
          <a href={url} target="_blank" rel="noreferrer">{title}</a>
          <small>{publisher}</small>
        </li>
      ))}
    </ul>
  );
}
