import classes from "./post-content.module.css";
import PostHeader from "./post-header";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      Content
    </article>
  );
}
