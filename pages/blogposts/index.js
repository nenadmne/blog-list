import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function BlogPosts({ posts }) {
  return (
    <Fragment>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
