
import "../styles/Education.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
    <div>
    <p>
          Designed with <span style={{color:"#FE6055"}}>Love</span> by<span style={{color:"#FBA333"}}> myself</span>.
        </p>
        <p style={{marginTop:"10px"}}>
          Developed with <span style={{color:"#FE6055", }}>Passion</span> by<span style={{color:"#FBA333"}}> Ubaid Ur Rehman</span>.
        </p>
    </div>
        <div style={{display:"flex",marginTop:"10px"}}>
          <div  onClick={()=>{window.open("https://www.linkedin.com/in/khubaibullah-sherwani/")}} className="footer-media">linkedIn</div>
          <div   onClick={()=>{window.open("https://www.behance.net/khubaibsherwani")}} className="footer-media">behance</div>
          <div  onClick={()=>{window.open( "https://www.instagram.com/khubaib.design")}} className="footer-media">instagram</div>
          <div  onClick={()=>{window.open( "https://dribbble.com/khubaib_10")}} className="footer-media" style={{border:"none"}}>dribble</div>
        </div>
      </div>
    </div>
  );
};
 
export default Footer;
