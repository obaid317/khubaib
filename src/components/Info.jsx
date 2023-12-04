import "../styles/Info.scss"
import circle from "../assets/circle_info.png"
const Info = () => {
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
                    <p className="capital_words color_specific_blue">Endearing</p>
                </div>
                <div className="_lineFour">
                    <p className="capital_words color_white">Experiences</p>
                </div>
            </div>
        </div>
    )
}

export default Info
