import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import "../styles/pages.css";

const PAGE_SIZE = 10;
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Home() {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const { data: posts, loading, error } = useFetch(API_URL);

  // TODO: Filter posts by title using the query state (case-insensitive)
  const filteredPosts = (posts ?? []).filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  // TODO: Slice filteredPosts to only show `visible` number of posts
  const visiblePosts = filteredPosts.slice(0, visible);

  if (loading) return <p className="status">Loading posts…</p>;
  if (error) return <p className="status status--error">Error: {error}</p>;

  return (
    <section className="page">
      <h1 className="page__heading">All Posts</h1>

      <SearchBar
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setVisible(PAGE_SIZE); // reset pagination on new search
        }}
      />

      <div className="post-grid">
        {/* TODO: Map over the sliced, filtered posts and render a PostCard for each */}
        {visiblePosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
        {/* Key reminder: use post.id as the key */}
      </div>

      {/* TODO: Show "Load More" button only when there are more posts to show */}
      {/* Clicking it should increase `visible` by PAGE_SIZE */}
      {visiblePosts < filteredPosts.length && (
        <button
          className="load-more"
          onClick={() => setVisible((prev) => prev + PAGE_SIZE)}
        >
          Load More
        </button>
      )}
    </section>
  );
}
