import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
} from "react-icons/ai";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ weight: "600", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer>
      <p className={dosis.className}> Reach out or follow me @</p>
      <ul>
        <li>
          <a href="mailto:josue@jasantana.com">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://github.com/josuesantana">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anthony-santana-ny">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@joansanres">
            <AiFillMediumCircle />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
