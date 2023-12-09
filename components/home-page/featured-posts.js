import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <PostsGrid posts={posts} />
    </section>
  );
}
