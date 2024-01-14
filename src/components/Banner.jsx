import '../styles/Banner.scss'
import photo from '../assets/photo.png'
import CustomButton from './CustomButton'
 import React from "react";
import TextTransition, { presets } from 'react-text-transition';

const Banner = () => {
    const [index, setIndex] = React.useState(0);
    const TEXTS = ['UI/UX Designer', 'Creative Director', 'Product Designer', 'Graphic\'s Designer'];
    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    return (
        <div className="banner_content ">
            <div className="left_content">
                <div className='job_title'>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>

                </div>
                <div className='job_name'>
                    KHUBAIBULLAH
                </div>
                <div className='job_deatils'>
                    {`Greetings! I'm Khubaibullah, a dynamic UI/UX Designer with a proven track record of three years, 
                    transforming visions into captivating digital experiences. My journey in design has traversed diverse
                     industries. I specialize in creating designs that strike the perfect balance between form and function.
                      Join me on a visual exploration of how I turn ideas into visually stunning and user-friendly realities`}
                </div>
                <CustomButton />
            </div>
            <div className="right_content">
                <img src={photo} alt="personal photo" />
            </div>

        </div>
    )
}

export default Banner
