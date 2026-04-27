import { Link } from "react-router-dom";
import "../styles/postcard.css";

// TODO: Destructure the correct props: id, title, body, userId
export default function PostCard({
  /* props here */
  id,
  title,
  body,
  userId,
}) {
  return (
    <article className="post-card">
      <h2 className="post-card__title">
        {/* TODO: Wrap title in a <Link> to the correct post detail route */}
        <Link to={`/posts/${id}`}>{title}</Link>
      </h2>
      <p className="post-card__body">
        {/* TODO: Display a truncated version of body (first 100 characters + "...") */}
        {body.slice(0, 100)}
      </p>
      <footer className="post-card__footer">
        {/* TODO: Show a "By User #{userId}" link pointing to the user profile route */}
        <Link to={`/users/${userId}`}>By User #{userId}</Link>
      </footer>
    </article>
  );
}
