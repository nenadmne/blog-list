import { Fragment } from "react";
import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function BlogPost({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
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
