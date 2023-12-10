import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next JS",
    excerpt:
      "Next Js is React framework for prodaction. It makes fullstack React apps easier and better",
    image: "getting-started-nextjs.png",
    date: 2023 - 12 - 12,
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next JS",
    excerpt:
      "Next Js is React framework for prodaction. It makes fullstack React apps easier and better",
    image: "getting-started-nextjs.png",
    date: 2023 - 12 - 12,
  },
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with next JS",
    excerpt:
      "Next Js is React framework for prodaction. It makes fullstack React apps easier and better",
    image: "getting-started-nextjs.png",
    date: 2023 - 12 - 12,
  },
];

export default function BlogPosts() {
  return (
    <Fragment>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
