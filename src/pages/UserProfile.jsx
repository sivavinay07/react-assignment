import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import "../styles/pages.css";

export default function UserProfile() {
  const { id } = useParams();

  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const {
    data: userPosts,
    loading: postsLoading,
    error: postsError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  // TODO: Fetch user at /users/:id
  // TODO: Fetch all posts by this user at /posts?userId=:id

  // if (loading) return <p className="status">Loading…</p>;
  // if (error)return <p className="status status--error">Something went wrong.</p>;
  if (userLoading || postsLoading) return <p className="status">Loading…</p>;
  if (userError || postsError)
    return <p className="status status--error">Something went wrong.</p>;

  return (
    <section className="page">
      {/* TODO: Render UserCard with the user's data */}
      {user && (
        <UserCard
          name={user.name}
          email={user.email}
          company={user.company}
          website={user.website}
        />
      )}

      <h2 className="page__subheading">Posts by {user?.name}</h2>
      <ul className="user-posts">
        {/* TODO: Map over the user's posts; each item links to /posts/:id */}
        {userPosts &&
          userPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
