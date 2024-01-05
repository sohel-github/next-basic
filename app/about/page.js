const { default: Image } = require("next/image");

import snake from "../../public/snake.jpg";

const About = () => {
  return (
    <div className="mt-10">
      About us page
      <Image src={snake} alt="snake image" placeholder="blur" width={400} />
    </div>
  );
};

export default About;
