import { AiFillGithub } from "react-icons/ai";
import { Dosis, Wallpoet } from "@next/font/google";

const dosis = Dosis({ weight: "600", subsets: ["latin"] });

const Projects = () => {
  return (
    <div className={"portfolio_content"}>
      <ul>
        <li>
          <div className="portfolio_content__list">
            <a href="https://github.com/JosueSantana/rallyrank">
              <AiFillGithub className="portfolio_content__icon" />
            </a>
            <p className={dosis.className + " portfolio_content__text"}>
              RallyRank - A Tennis Matching Application
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
