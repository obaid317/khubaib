import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Swipeable } from "react-touch";
import "../styles/Education.scss";
import lg1 from "../assets/meezan.png";
import img1 from "../assets/Illustrations/1.png";
import img2 from "../assets/Illustrations/2.png";
import img3 from "../assets/Illustrations/3.png";
import img4 from "../assets/Illustrations/4.png";
import img5 from "../assets/Illustrations/5.png";
import img6 from "../assets/Illustrations/6.png";
import img7 from "../assets/Illustrations/7.png";
import line from "../assets/edu_line.png";
import barrow from "../assets/back-arrow.png";
import farrow from "../assets/forward-arrow.png";
import { CSSTransition } from "react-transition-group";
// import { listItemButtonClasses } from "@mui/material";
const VerticalCarousel = () => {
  const [items, setItems] = useState([]); // Your data array
  const [swiped, setSwiped] = useState(false);
  const itemsToLoad = [
    {
      color: "#364332",
      text: "Item 6",
      topLogo: lg1,
      bgimg: img7,
      rightHeading: "Internet Banking App Launch",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#364332",
      text: "Item 6",
      topLogo: lg1,
      bgimg: img6,
      rightHeading: "Internet Banking App Launch 2",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#544F41",
      text: "Item 5",
      topLogo: lg1,
      bgimg: img5,
      rightHeading: "Internet Banking App  3",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#96715E",
      text: "Item 4",
      topLogo: lg1,
      bgimg: img4,
      rightHeading: "Internet Banking App  5",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#B3625D",
      text: "Item 3",
      topLogo: lg1,
      bgimg: img3,
      rightHeading: "Internet Banking App Launch",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#7EA1B2",
      text: "Item 2",
      topLogo: lg1,
      bgimg: img2,
      rightHeading: "Internet Banking App Launch",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },

    {
      color: "#A185F4",
      text: "Item 1",
      topLogo: lg1,
      bgimg: img1,
      rightHeading: "Internet Banking App Launch",
      rightPara:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },

    // { color: "#364332", text: "Item 6" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(
    itemsToLoad[itemsToLoad.length - 1]
  );
  const [direction, setDirection] = useState("");

  const handleNext = () => {
    setDirection("next");
    // setSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection("prev");
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    setItems(itemsToLoad);
    setSelectedIndex(itemsToLoad[itemsToLoad.length - 1]);
     
    // setSelectedIndex(itemsToLoad[itemsToLoad.length-1])
  }, []);
  
  useEffect(() => {
    
    // if (currentIndex < items.length - 1) {  
      setTimeout(() => { setCurrentIndex(items.length-1);
      setIsVisible(true);  }, 500);
      // } 
     
    // setSelectedIndex(itemsToLoad[itemsToLoad.length-1])
  }, [items]);

  const handleSwipe = (direction) => {
    if (direction === "up" && items.length > 1) {
      setSwiped(true);
    
      setTimeout(() => {
        
        setIsVisible(false);

        setItems((prevItems) => {
          console.log("pre", prevItems);
          return prevItems.slice(0, prevItems.length - 1);
        }); // Remove the top item
        // console.log('items[items.length-1]',items[items.length-1])
        setDirection("next");
        // setSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
        setSwiped(false);
      
      }, 10); // Adjust this delay to match your animation speed
    } else {
      itemsToLoad.forEach((val, ind) => {
        if (ind == 0) return 0;
        let tempAr = items;
        tempAr.push(val);
        setSwiped(true);
        setTimeout(() => {
          setItems(tempAr);
          setSwiped(false);
        }, 300);
      });
      // setSelectedIndex(items[items.length-1])
      // setItems(itemsToLoad)
    }
  };
  const texts = [
    "This is the first text",
    "Second text",
    "Another example text here",
    "Short text",
    "A longer example text for demonstration purposes",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {

  // };
  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateY(10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(15%)", marginTop: 20 },
    config: { tension: 500, friction: 100, duration: 400 }, // Adjust animation config as needed
  });
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="vertical-slider" className="education_wrapper" style={{ justifyContent: "start" }}>
      <div className="left_wrapper" style={{ width: "auto" }}>
        <p>Most Prestigious Moments</p>

        <div className="image_div">
          <img src={line} alt="pic" />
        </div>
        <h1 style={{ margin: "0px", padding: "0px" }}>Awards </h1>
        <br style={{ margin: "0px", padding: "0px" }} />
        <h1 style={{ margin: "0px", padding: "0px" }}>& Honors </h1>
      </div>
      <div style={{ width: "auto" }} className="right_wrapper">
        <div style={{ display: "flex" }}>
          <Swipeable   >
            <div
              style={{
                height: "550px",
                overflow: "hidden",
                position: "relative",
                display: "flex",

                justifyContent: "center",
                width: "450px",
              }}
            >
              {transitions((style, item, _, index) => (
                <animated.div
                  key={item.text}
                  style={{
                    ...style,
                    background: item.bgimg,
                    marginLeft: "10px",
                    position: "absolute",
                    transitionDelay: "1s",
                    transition: "all 1s",
                    transform: index == items.length - 1 ? "scale(1.03)" : "",
                    marginTop: index == items.length - 1 ? "10px" : "0px",
                    // marginTop:index == items.length-1?"10px":"0px",
                    opacity: index == items.length - 1 ? "1" : "1",
                    // width: `${300 + index * 10}px`,
                    borderRadius: "8px",
                    top: index > 0 ? `${index * 3}%` : "0",
                  }}
                >
                  <img
                    src={item.bgimg}
                    style={{
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      width: `${270 + index * 10}px`,
                      // background: item.bgimg,
                      height: "370px",
                    }}
                  ></img>
                </animated.div>
              ))}
            </div>
          </Swipeable>
          <div style={{ width: "60%" }}>
            <div className="transition-container">
              <div className="transition-content">
                <div className="container">
                  <div className="container">
                    <div className={`box ${isVisible ? "visible" : ""}`}>
                      {/* {    items[items.length-1]?.text} */}
                      <h1 className={`box ${isVisible ? "visible" : ""}`} style={{ color: "white", marginTop: "210px" }}>
                      {" "}
                      { items[items.length-1]?.rightHeading}
                    </h1>
                    <p className={`box ${isVisible ? "visible" : ""}`} style={{ color: "#e1dcdc", margin: "15px 0px" }}>
                      { items[items.length-1]?.rightPara}
                    </p>
                    </div>
                    {/* <button
                      onClick={() => {
                        handleNext();
                     
                      }}
                    >
                      Next
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="roun-div"
                onClick={() => {
                  // handleSwipe("up");
                  // handlePrevious();
                }}
              >
                {" "}
                <img src={barrow} alt="pic" style={{ height: "10px" }} />
              </div>{" "}
              <div
                className="roun-div"
                onClick={() => {
                  // handleNext();
                  handleSwipe("up");
                }}
              >
                <img src={farrow} alt="pic" style={{ height: "10px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
