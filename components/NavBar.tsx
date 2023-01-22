import Link from "next/link";
import { Dosis, Wallpoet } from "@next/font/google";

const dosis = Dosis({ weight: "600", subsets: ["latin"] });
const wallPoet = Wallpoet({ weight: "400", subsets: ["latin"] });

const NavBar = () => {
  return (
    <nav>
      <div className={wallPoet.className + " navbar__logo"}>
        <Link className="navbar__logo--color" href="/">
          JS
        </Link>
      </div>
      <div className="navbar__items">
        <ul className={dosis.className}>
          <li>
            <Link className="navbar__item" href="/about-me">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navbar__item" href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="navbar__item"
              href="https://medium.com/@joansanres"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link className="navbar__item" href="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
