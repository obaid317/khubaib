import CustomButton from "./CustomButton"
import '../styles/Experience.scss'
import exp1 from '../assets/exp-1.png'
import exp2 from '../assets/exp-2.png'
import exp3 from '../assets/exp-3.png'

const Experience = () => {
    return (
        <div className="wrapper">
            <div className="upper_wrapper">
                <div className="experience_heading">
                    Experience
                </div>
                <div className="experience_paragraph">
                    Lorem ipsum dolor sit amet consectetur. Eu mauris praesent amet augue eget. Ut scelerisque dictum consequat purus ac vitae est. Vestibulum suscipit platea enim eu natoque aliquet turpis. Fames tellus pharetra vitae sit mauris ornare. Orci pulvinar gravida et proin tempor convallis velit sapien quis. Consectetur aliquet cursus ultricies interdum mauris egestas dui imperdiet nulla. Nibh mauris convallis sed pellentesque eros. Iaculis lorem lacus nulla aliquet eget et.
                </div>
                <div>
                    <CustomButton />
                </div>
            </div>
            <div className="lower_wrapper">
                <div className="content">
                    <div className="">
                        <img src={exp1} alt="exp" />
                    </div>
                    <div className="">
                        <img src={exp2} alt="exp" />
                    </div>
                    <div className="">
                        <img src={exp3} alt="exp" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience
