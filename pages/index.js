import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import getFeaturedPosts from "../lib/posts-util";

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

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
