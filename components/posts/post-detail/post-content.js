import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with next JS",
  image: "getting-started-nextjs.png",
  date: 2023 - 12 - 12,
  content: "# This is a first post ",
};
export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      Content
    </article>
  );
}
