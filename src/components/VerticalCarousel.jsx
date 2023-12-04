import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Swipeable } from "react-touch";
import "../styles/Education.scss";
import lg1 from "../assets/meezan.png";
import line from "../assets/edu_line.png";
import barrow from "../assets/back-arrow.png";
import farrow from "../assets/forward-arrow.png";
import { CSSTransition } from 'react-transition-group';
// import { listItemButtonClasses } from "@mui/material";
const VerticalCarousel = () => {
  const [items, setItems] = useState([]); // Your data array
  const [swiped, setSwiped] = useState(false);
  const itemsToLoad = [
    {
      color: "#A185F4",
      text: "Item 1",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#7EA1B2",
      text: "Item 2",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#B3625D",
      text: "Item 3",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#96715E",
      text: "Item 4",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#544F41",
      text: "Item 5",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    {
      color: "#364332",
      text: "Item 6",
      topLogo: lg1,
      rightHeading:"Internet Banking App Launch",
      rightPara:"Lorem ipsum dolor sit amet consectetur. Pellentesque parturient est adipiscing sit vel tempor. Odio rutrum tellus pellentesque viverra sit ut. Dignissim urna ultricies velit nisl.",
      bottomLogo: lg1,
      mainHeading: "Launch CMD \n Sep 10 2023",
      subheading: "Cash Management Software",
      listName: ["Khubaib", "Huzaifa", "Ubaid"],
    },
    // { color: "#364332", text: "Item 6" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(itemsToLoad[itemsToLoad.length-1]);
  const [direction, setDirection] = useState('');

  const handleNext = () => {
    setDirection('next');
    // setSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection('prev');
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };


  useEffect(() => {
    setItems(itemsToLoad);
    setSelectedIndex(itemsToLoad[itemsToLoad.length-1])
    // setSelectedIndex(itemsToLoad[itemsToLoad.length-1])
  }, []);
  useEffect(()=>{
    console.log("items[items.length-1]",items[items.length-1])
    setSelectedIndex(items[items.length-1])},[items])

  const handleSwipe = (direction) => {
    if (direction === "up" && items.length > 1) {
      setSwiped(true);
      
      setTimeout(() => {
        setItems((prevItems) => {
          console.log("pre", prevItems);
          return prevItems.slice(0, prevItems.length - 1);
        }); // Remove the top item
        // console.log('items[items.length-1]',items[items.length-1])
        setDirection('next');
        // setSelectedIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
        setSwiped(false);
      }, 500); // Adjust this delay to match your animation speed
    } else {
      
      itemsToLoad.forEach((val, ind) => {
        if (ind == 0) return 0;
        let tempAr = items;
        tempAr.push(val);
        setSwiped(true);
        setTimeout(() => {
          setItems(tempAr);
          setSwiped(false);
        }, 200);
      });
      // setSelectedIndex(items[items.length-1])
      // setItems(itemsToLoad)
    }
  };

  const transitions = useTransition(items, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(10%)",marginTop:10 },
    config: { tension: 100, friction: 20 }, // Adjust animation config as needed
  });

  return (
    <div className="education_wrapper" style={{ justifyContent: "start" }}>
      <div className="left_wrapper" style={{ width: "auto" }}>
        <p>Most Prestigious Moments</p>

        <div className="image_div">
          <img src={line} alt="pic" />
        </div>
        <h1 style={{ margin: "0px", padding: "0px" }}>Awards </h1>
        <br style={{ margin: "0px", padding: "0px" }} />
        <h1 style={{ margin: "0px", padding: "0px" }}>& Honors </h1>
      </div>
      <div style={{width:"auto"}} className="right_wrapper">
        <div style={{ display: "flex" }}>
          <Swipeable onSwipeUp={() => handleSwipe("up")}>
            <div
              style={{
                height: "500px",
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

                    position: "absolute",
                    width: `${300 + index * 5}px`,
                    borderRadius: "8px",
                    top: index > 0 ? `${index * 5}%` : 0,
                  }}
                >
                  <div
                    style={{
                      border: "none",
                      padding: "10px",
                      borderRadius: "8px",
                      background: item.color,
                      height: "370px",
                    }}
                  >
                    {/* {item.text} */}
                    <img
                      src={item.topLogo}
                      alt="logo"
                      style={{ height: "40px" }}
                    />
                    <h1
                      style={{
                        color: "white",
                        fontWeight: "600",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.mainHeading}
                    </h1>

                    <h3
                      style={{
                        color: "white",
                        marginTop: "10px",
                        fontWeight: "300",
                      }}
                    >
                      {item.subheading}
                    </h3>
                    {item.listName && item.listName.length ? (
                      <div style={{ marginTop: "10px" }}>
                        {item.listName.map((val, ind) => {
                          return (
                            <p
                              style={{
                                color: "white",
                                fontSize: "12px",
                                fontWeight: "200",
                              }}
                            >
                              {val}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <></>
                    )}

                    <img
                      src={item.bottomLogo}
                      alt="logo"
                      style={{
                        height: "30px",
                        marginBottom: "15px",
                        position: "fixed",
                        bottom: "0",
                      }}
                    />
                  </div>
                </animated.div>
              ))}
            </div>
          </Swipeable>
          <div> 
          <div className="transition-container">
      <div className="transition-content">

        {selectedIndex?<div style={{maxWidth:"450px"}}><h1 style={{color:"white",marginTop:"210px"}}>
        {selectedIndex.rightHeading}
        </h1>
        <p style={{color:"#e1dcdc",margin:"15px 0px"}}>
          {selectedIndex.rightPara}
        </p>
        </div>:""}
        {/* {items.map((item, index) => (
          <CSSTransition
            key={index}
            in={index === selectedIndex}
            timeout={300}
            
            classNames={direction === 'next' ? 'slide-next' : 'slide-prev'}
            unmountOnExit
          >
            <div className="item">{selectedIndex.text}</div>
          </CSSTransition>
        ))} */}
      </div>
      
    </div>
          <div style={{ display: "flex" }}>
            
        
            {/* <button onClick={() => handleSwipe("up")}>next</button> */}
            <div className="roun-div" onClick={() => {handleSwipe("up")
            handlePrevious()}}>
              {" "}
              <img src={barrow} alt="pic"  style={{ height: "10px" }} />
            </div>{" "}
            <div className="roun-div" onClick={() =>{handleNext();
                 handleSwipe("up")}} >
              <img src={farrow} alt="pic" style={{ height: "10px" }} />
            </div>
          </div>
          </div>
          {/* <div className="box_wrapper">
        <div className="upper_box" >
          <p className="degree_year">2023 - Present</p>
          <h1 className="degree_name">Master’s In Project Management</h1>
          <p className="uni_name">Bahria University</p>
        </div>
        <div className="dotted_line" >
        </div>

        <div className="upper_box">
          <p className="degree_year">2018 - 2022</p>
          <h1 className="degree_name">
            Bachelor’s In Information Technology
          </h1>
          <p className="uni_name">Bahria University</p>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
