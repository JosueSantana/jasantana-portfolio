import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { Dosis } from "@next/font/google";

const dosis = Dosis({ weight: "600", subsets: ["latin"] });

const AboutMe = () => {
  return (
    <div className={dosis.className + " about"}>
      <div className="about__header">
        <h1>About Me</h1>
      </div>
      <div className="about__content">
        <div className="about_content__text">
          <p>
            I{"'"}m motivated by thoughtful software design and devising
            creative solutions to challenging problems. I am mindful of often
            overlooked considerations such as accessibility and security, having
            worked in heavily regulated industries like FinTech and HealthTech.
          </p>
          <button>
            <AiOutlineDownload /> 
            {" "}
            Resume
          </button>
          <div className="about__cards">
            <div className="about__card">
              <p>
                Technologies I enjoy working with
              </p>
              <ul>
                <li>Typescript</li>
                <li>React</li>
                <li>Next</li>
                <li>Sass</li>
                <li>AWS</li>
              </ul>
            </div>
            <div className="about__card">
              <p>Tools I swear by</p>
              <ul>
                <li>Visual Studio Code</li>
                <li>React Dev Tools</li>
                <li>Postman</li>
                <li>Affinity Designer</li>
                <li>Obsidian</li>
              </ul>
            </div>
            <div className="about__card">
              <p>Interests outside of Work</p>
              <ul>
                <li>Learning new languages</li>
                <li>Traveling</li>
                <li>Indie game development</li>
                <li>Digital Art</li>
                <li>Reading</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="about__image"
            src={"/images/jsantana.jpg"}
            alt={"Head shot of the page author, Anthony Santana."}
            width="300"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
