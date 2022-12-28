import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-me">About Me</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="https://medium.com/@joansanres">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
