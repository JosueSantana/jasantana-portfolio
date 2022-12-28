import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <Image
        src={"/images/jsantana.jpg"}
        alt={"Head shot of the page author, Anthony Santana."}
        width="200"
        height="200"
      />
      <h1>Anthony Santana</h1>
      <p>
        Hi, my name is Anthony and I am a software engineer. I am based in
        Queens, New York and am currently open to work. Some of my favorite
        technologies are:
      </p>
      <ul>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Next</li>
      </ul>
    </div>
  );
};

export default AboutMe;
