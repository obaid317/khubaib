import "../styles/Education.scss";
import line from '../assets/edu_line.png'

const Education = () => {
  return (
    <div className="education_wrapper">
      <div className="left_wrapper">
        <p>Educational Milestones</p>
        <div className="image_div">
          <img src={line} alt="pic" />
        </div>
        <h1>Education</h1>
      </div>
      <div className="right_wrapper">
        <div className="box_wrapper">
          <div className="upper_box" >
            <p className="degree_year">2023 - Present</p>
            <h1 className="degree_name">UI UX Foundation </h1>
            <p className="uni_name">Google</p>
          </div>
          <div className="dotted_line" >
          </div>

          <div className="upper_box">
            <p className="degree_year">2018 - 2022</p>
            <h1 className="degree_name">
              Bachelor’s In Information Technology
            </h1>
            <p className="uni_name">Bahria University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
