
import "../styles/Education.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
        <p>
          Designed with <span style={{color:"#FE6055"}}>Love</span> by<span style={{color:"#FBA333"}}> myself</span>.
        </p>
        <div style={{display:"flex"}}>
          <div className="footer-media">linkedIn</div>
          <div className="footer-media">behance</div>
          <div className="footer-media">instagram</div>
          <div className="footer-media" style={{border:"none"}}>dribble</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
