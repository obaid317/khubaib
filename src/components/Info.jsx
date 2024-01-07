import "../styles/Info.scss"
import React from "react";
import circle from "../assets/circle_info.png"
import TextTransition, { presets } from 'react-text-transition';
const Info = () => {
    const [index, setIndex] = React.useState(0);
    const TEXTS = ['ENDEARING', 'MEMORABLE', 'EXCEPTIONAL', 'UNIQUE'];
    React.useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    return (
        <div className="info_container">
            <div className="content">
                <div className="_lineOne">
                    <span><img src={circle} alt="circle" /></span>
                    <p className="capital_words color_white">I Work To Give</p>
                </div>
                <div className="_lineTwo">
                    <p className="capital_words color_white">Customers</p>
                </div>
                <div className="_lineThree">
                    <div className="capital_words color_specific_blue">
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>

                    </div>
                </div>
                <div className="_lineFour">
                    <p className="capital_words color_white">Experiences</p>
                </div>
            </div>
        </div>
    )
}

export default Info
