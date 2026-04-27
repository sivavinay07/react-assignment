import "../styles/commentcard.css";

// TODO: Accept and destructure: name, email, body
export default function CommentCard({
  /* props here */
  name,
  email,
  body,
}) {
  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <span className="comment-card__name">{name}</span>
        <span className="comment-card__email">{email}</span>
      </div>
      <p className="comment-card__body">{body}</p>
    </div>
  );
}
