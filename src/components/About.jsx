// import Profile from "../assets/profile.png";
import IMG from "../assets/IMG_2972.jpg";
// import IMG from "../assets/IMG_2972-transformed.png";
import { Styles } from "../utils/Style";
import Resume from "../assets/Vishal_Resume.pdf"
import { TiArrowDownOutline } from "react-icons/ti";
import "../App.css";

function About() {
  return (
    <div
      className="flex flex-wrap justify-center items-center mt-10 p-10"
      id="Home"
    >
      <div className="violet-gradient rounded-full m-2 h-[250px] py-4 mt-10 pr-1  w-[10px] "></div>
      <div className="flex-1 py-4">
        <span className={Styles.heroHeadText}>
          Hi, I&apos;m <span className="text-orange-600"> Vishal Singh</span>
        </span>
        <br />
        <span className={Styles.heroSubText}>
          I am a MERN Stack Developer &
          <br />
          Java Developer
        </span>
        <br />

        <div className="w-[14rem]">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 mt-2 w-[13rem] rounded-xl shadow-lg text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500">
              {" "}
              <TiArrowDownOutline className="text-lg mr-3 mt-1 text-orange-500">
                {" "}
              </TiArrowDownOutline>
              Resume{" "}
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <img
          src={IMG}
          alt="image"
          className="element w-96 rounded-3xl object-contain p-4"
        />
      </div>
    </div>
  );
}

export default About;
