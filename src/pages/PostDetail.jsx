import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import CommentCard from "../components/CommentCard";
import "../styles/pages.css";

export default function PostDetail() {
  const { id } = useParams();

  const {
    data: post,
    loading: postLoading,
    error: postError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  // TODO: Use useFetch to fetch the post at /posts/:id
  // TODO: Use useFetch to fetch comments at /posts/:id/comments

  // if (loading) return <p className="status">Loading…</p>;
  // if (error)return <p className="status status--error">Something went wrong.</p>;
  if (postLoading || commentsLoading) return <p className="status">Loading…</p>;
  if (postError || commentsError)
    return <p className="status status--error">Something went wrong.</p>;

  // const { title, body } = data;
  return (
    <section className="page">
      <article className="post-detail">
        <h1 className="post-detail__title">{post.title}</h1>
        <p className="post-detail__meta">
          By <Link to={`user/${post.userId}`}>User #{post.userId}</Link>
          {/* TODO: Link to /users/:userId showing "User #userId" */}
        </p>
        <p className="post-detail__body">{post.body}</p>
      </article>

      <section className="comments">
        <h2 className="comments__heading">Comments</h2>
        {/* TODO: Map over comments and render CommentCard for each */}
        {comments &&
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
      </section>
    </section>
  );
}
