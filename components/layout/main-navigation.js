import Link from "next/link";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/blogposts"> Posts </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
