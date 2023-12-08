import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing profile"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi, I'M Max </h1>
      <p> About bloger interests and posts</p>
    </section>
  );
}
