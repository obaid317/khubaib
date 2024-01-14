import '../styles/Button.scss'
import download_icon from '../assets/Download.svg'
import cv from '../../src/files/Khubaibullah-UIUX.pdf'


const CustomButton = () => {
    return (
        <div className='btn'>
            <a href={cv} download="Khubaib's Resume" target='_blank' rel="no noreferrer">
                <div className='download-btn'>
                    <div className='text-btn'>
                        Download CV
                    </div>
                    {/* <div className='download_btn_icon'>
                        <img src={download_icon} alt="download-icon" />
                    </div> */}
                </div>
            </a>
        </div>
    )
}

export default CustomButton
