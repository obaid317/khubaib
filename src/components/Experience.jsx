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
          Lorem ipsum dolor sit amet consectetur. Eu mauris praesent amet augue
          eget. Ut scelerisque dictum consequat purus ac vitae est. Vestibulum
          suscipit platea enim eu natoque aliquet turpis. Fames tellus pharetra
          vitae sit mauris ornare. Orci pulvinar gravida et proin tempor
          convallis velit sapien quis. Consectetur aliquet cursus ultricies
          interdum mauris egestas dui imperdiet nulla. Nibh mauris convallis sed
          pellentesque eros. Iaculis lorem lacus nulla aliquet eget et.
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
              Lorem ipsum dolor sit amet consectetur. Magna elit nunc odio
              viverra. Sed elementum pretium aliquet odio dictum et in non. Nunc
              elementum potenti feugiat pellentesque diam.
            </p>
          </div>
          <div className="img-text-div-two">
          <img src={exp1} alt="exp" className="logo-exp" />
            <p className="img-text-durat">Sep 2021 - Feb 2023s</p>
            <p className="img-text-head">UI UX Designer</p>
            <p className="img-text-main">
              Lorem ipsum dolor sit amet consectetur. Magna elit nunc odio
              viverra. Sed elementum pretium aliquet odio dictum et in non. Nunc
              elementum potenti feugiat pellentesque diam.
            </p>
          </div>
          <div className="img-text-div-three">
          <img  src={exp3} alt="exp" className="logo-exp" />
            <p className="img-text-durat">Jun 2021 - Aug 2021</p>
            <p className="img-text-head">UI UX Designer (Intern)</p>
            <p className="img-text-main">
              Lorem ipsum dolor sit amet consectetur. Magna elit nunc odio
              viverra. Sed elementum pretium aliquet odio dictum et in non. Nunc
              elementum potenti feugiat pellentesque diam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
