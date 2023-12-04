import '../styles/Button.scss'
import download_icon from '../assets/download_icon.png'
import cv from '../../src/files/Khubaib-UIUX-Resume.pdf'


const CustomButton = () => {
    return (
        <div className='btn'>
            <a href={cv} download="Khubaib's Resume" target='_blank' rel="no noreferrer">
                <div className='download-btn'>
                    <div className='text-btn'>
                        Download CV
                    </div>
                    <div className='download_btn_icon'>
                        <img src={download_icon} alt="download-icon" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CustomButton
