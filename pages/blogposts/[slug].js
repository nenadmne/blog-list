import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function BlogPost({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostsFiles();

  const slugs = postFiles.map((item) => item.replace(/\.md$/, "")); // removes the file extension
  return {
    paths: slugs.map((item) => ({
      params: {
        slug: item,
      },
    })),
    fallback: "blocking",
  };
}
