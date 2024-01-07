import React from "react";
import "../styles/Education.scss";
function Contact() {
  return (
    <div className="contact-main"   style={{ padding: "50px 0px 130px 0px" }}>
      <div className="contact-sub" style={{ display: "flex" }}>
        <div className="contact-sub-first" style={{ width: "20%" }}>
            <div className="divvv">
 
            </div>

            
        </div>
        <div
          className="contact-sub-second"
          style={{ width: "60%", textAlign: "center" }}
        >
          <p style={{ marginTop: "140px", fontSize: "18px", color: "#a9a1a1" }}>
            Still curious about how to bring those imaginative ideas to life?
          </p>
          <h1
            style={{
              fontSize: "55px",
              fontWeight: "600",
              color: "white",
              margin: " 10px 30px",
            }}
          >
            Let me make your own story for you
          </h1>
         <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{borderBottom:"1px solid white",width:"fit-content"}}>
            <p
              style={{
                fontSize: "40px",
                color: "white",
                fontWeight: "400",
                marginTop: "100px",
              }}
            >
              Khubaib.design@gmail.com
            </p>
          </div>
          </div>
        </div>
        <div className="contact-sub-third" style={{ width: "20%" }}>

        <div className="divvv-two">
 
 </div>


        </div>
      </div>
    </div>
  );
}

export default Contact;
