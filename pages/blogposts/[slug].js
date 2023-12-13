import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../lib/posts-util";

export default function BlogPost() {
  return <PostContent />;
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
