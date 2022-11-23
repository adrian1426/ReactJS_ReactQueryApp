/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQuery } from "react-query";
import { getPostById } from "../services/postServices";

export default function Post({ postId }) {
  const { isLoading, error, data: post } = useQuery(['posts', postId], () => getPostById(postId));

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error fetching post: {error.message}
      </div>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
