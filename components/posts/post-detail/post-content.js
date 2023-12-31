import Image from "next/image";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter";

export default function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderer = {
    img(image) {
      return (
        <div className={classes.image}>
          <Image
            src={`/images/posts/${post.slug}/${image.src}`} // image.src contains full image path
            alt={image.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },
    code(code) {
      const _array = code.className.split("-");
      const _language = _array[1];

      return (
        <SyntaxHighlighter language={_language} style={atomDark}>
          {code.children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderer}>{post.content}</ReactMarkdown>
    </article>
  );
}
