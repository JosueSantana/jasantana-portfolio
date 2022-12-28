import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <p> Reach out or follow me @</p>
      <ul>
        <li>
          <a href="mailto:anthony@jasantana.com">
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
