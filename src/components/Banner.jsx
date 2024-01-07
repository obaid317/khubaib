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
        <div className="banner_content">
            <div className="left_content">
                <div className='job_title'>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>

                </div>
                <div className='job_name'>
                    KHUBAIBULLAH
                </div>
                <div className='job_deatils'>
                    {`Winner of the world's most prestigious web design awards in
                    the fields of UI, UX, and innovation. With a diverse background
                    in art direction, design leadership, website and app UI/UX
                    design, 3D design, and branding, I bring a well-rounded skill
                    set to every project I take on`}
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
