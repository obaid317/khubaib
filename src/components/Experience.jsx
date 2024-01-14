import CustomButton from "./CustomButton";
import "../styles/Experience.scss";
import exp1 from "../assets/cdj.png";
import exp2 from "../assets/meezanbank.png";
import exp3 from "../assets/nxtlabs.png";

const Experience = () => {
  return (
    <div className="wrapper">
      <div className="upper_wrapper">
        <div className="experience_heading">Experience</div>
        <div className="experience_paragraph">
        As a UI/UX Designer across diverse industries, I bring a unique blend of creativity and functionality
        to digital experiences. I've honed my skills in crafting intuitive interfaces and engaging user
        experiences that resonate with users in fields ranging from different industries, e.g., technology,
        healthcare, finance. My passion lies in seamlessly blending aesthetics with user-centric design,
        ensuring that every project not only looks visually stunning but also delivers a delightful and
        intuitive user journey. Explore my portfolio to witness how I've transformed ideas into immersive
         and impactful digital solutions. Let's collaborate to elevate your next project's user experience!
        </div>
        <div>
          <CustomButton />
        </div>
      </div>
      <div className="lower_wrapper">
        <div className="content">
          <div className="img-text-div ">
            <img src={exp2} alt="exp" className="logo-exp" />
            <p className="img-text-durat">Mar 2023 - Present</p>
            <p className="img-text-head">UI UX Designer</p>
            <p className="img-text-main">
            I contributing my design expertise to enhance the user interface and experience. Collaborating 
            with cross-functional teams, I played a pivotal role in crafting visually appealing and 
            intuitive digital solutions for banking services.
            </p>
          </div>
          <div className="img-text-div-two">
          <img src={exp1} alt="exp" className="logo-exp" />
            <p className="img-text-durat">Sep 2021 - Feb 2023</p>
            <p className="img-text-head">UI UX Designer</p>
            <p className="img-text-main">
            I contributed to creating visually appealing and user-centric digital experiences. Collaborating 
            with cross-functional teams. My role involved crafting intuitive interfaces, conducting 
            user research, and ensuring a seamless blend of creativity and functionality in our digital 
            solutions.
            </p>
          </div>
          <div className="img-text-div-three">
          <img  src={exp3} alt="exp" className="logo-exp" />
            <p className="img-text-durat">Jun 2021 - Aug 2021</p>
            <p className="img-text-head">UI UX Designer (Intern)</p>
            <p className="img-text-main">
            As a UI/UX Designer intern at NXTLABS, I work closely with the design team to learn about 
            wireframes, prototypes, and UI designs for web and mobile applications. My seniors also 
            conduct user research and usability testing phase to inform design decisions and improve the
            user experience of our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
