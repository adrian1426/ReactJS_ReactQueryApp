/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "react-query";
import { getPosts } from "../services/postServices";

export default function Posts({ setPostId }) {
  const { isLoading, error, data: posts } = useQuery(['posts'], getPosts);

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Posts...
      </div>
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error fetching posts: {error.message}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
