import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

export default function HomePage() {
  return (
    <Fragment>
      <h1> Homepage </h1>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}
