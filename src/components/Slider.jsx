import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { Swipeable } from "react-touch";
import "../styles/Education.scss";
import lg1 from "../assets/meezan.png";
import img1 from "../assets/Illustrations/1.png";
import img2 from "../assets/Illustrations/2.png";
import img3 from "../assets/Illustrations/3.png";

import img11 from "../assets/images-back/IBIZI/Property 1=Default.png";
import img12 from "../assets/images-back/IBIZI/Property 1=Variant2.png";
import img13 from "../assets/images-back/IBIZI/Property 1=Variant3.png";

import img21 from "../assets/images-back/Filli/Property 1=Default.png";
import img22 from "../assets/images-back/Filli/Property 1=Variant2.png";
import img23 from "../assets/images-back/Filli/Property 1=Variant3.png";

import img31 from "../assets/images-back/Layndayn/Property 1=Default.png";
import img32 from "../assets/images-back/Layndayn/Property 1=Variant2.png";
import img33 from "../assets/images-back/Layndayn/Property 1=Variant3.png";

import img41 from "../assets/images-back/Qarya/Property 1=Default.png";
import img42 from "../assets/images-back/Qarya/Property 1=Variant2.png";
import img43 from "../assets/images-back/Qarya/Property 1=Variant3.png";

import img51 from "../assets/images-back/Spareats/Property 1=Default.png";
import img52 from "../assets/images-back/Spareats/Property 1=Variant2.png";
import img53 from "../assets/images-back/Spareats/Property 1=Variant3.png"; //Suh yoon lee

import img61 from "../assets/images-back/Suh yoon lee/Property 1=Default.png";
import img62 from "../assets/images-back/Suh yoon lee/Property 1=Variant2.png";
import img63 from "../assets/images-back/Suh yoon lee/Property 1=Variant3.png";

import img5 from "../assets/Illustrations/5.png";
import img6 from "../assets/Illustrations/6.png";
import img7 from "../assets/download_icon.png";
import line from "../assets/edu_line.png";
import barrow from "../assets/back-arrow.png";
import Snackbar from "@mui/material/Snackbar";
import farrow from "../assets/forward-arrow.png";
import { CSSTransition } from "react-transition-group";
// import { listItemButtonClasses } from "@mui/material";
const SliderComp = () => {
  const [items, setItems] = useState([]); // Your data array
  const [swiped, setSwiped] = useState(false);
  const [open, setOpen] = React.useState(false);

  const itemsToLoad = [
    {
      color: ["#000000", "#FFFFFF", "#FFFFFF"],
      link: "http://www.ibizi.com/",
      download: "https://apps.apple.com/pk/app/ibizi/id1659590288",
      learnMore: "",

      images: [img11, img12, img13],
      rightHeading: "IBIZI",
      rightPara:
        "Introducing IBIZI, where automotive elegance meets seamless functionality. As a product designer for this innovative car dealership platform, I blend style and user-centric design for an unparalleled experience.",
    },
    {
      color: ["#F6DD63", "#FFF1CC", "black"],
      link: " https://figmashort.link/x6GbKE",
      download: "",
      learnMore: "",
      bgimg: img6,
      images: [img21, img22, img23],
      rightHeading: "Filli",
      rightPara:
        "Indulge your senses in the world of Filli, where culinary creativity meets gastronomic delight. Our restaurant products redefine flavors, offering a delectable journey for every palate. Taste perfection with Filli.",
    },
    {
      color: ["#F17F76", "#D3F0FF", "black"],
      link: "www.layndayn.io",
      download: "",
      learnMore: "",
      bgimg: img5,
      images: [img31, img32, img33],
      rightHeading: "LaynDayn",
      rightPara:
        "Welcome to LaynDayn, where financial technology meets sleek design. As the mind behind this fintech marvel, I've crafted an intuitive user experience for seamless financial interactions. Explore innovation with LaynDayn!",
    },
    {
      color: ["#EEFFEE", "white", "#544F41"],
      link: "https://figmashort.link/6nKban",
      download: "",
      learnMore: "",
      bgimg: img5,
      images: [img41, img42, img43],
      rightHeading: "Qwakk  Society App",
      rightPara:
        "Introducing Qwakk, ultimate solution for streamlined society management. Elevate community living with our innovative product, designed to simplify tasks, enhance communication, and foster seamless collaboration.",
    },
    {
      color: ["#D8E2DC", "#FFAEB0", "black"],
      link: "http://www.spareats.de/",
      download:
        "https://play.google.com/store/apps/details?id=com.spareats.mobile",
      learnMore: "",
      bgimg: img5,
      images: [img51, img52, img53],
      rightHeading: "Spareat App",
      rightPara:
        "Welcome to Spareats, where I blend design and gastronomy to create a delectable food app experience. From mouthwatering visuals to seamless navigation, every pixel is a flavor journey.",
    },
    {
      color: ["black", "#D3F0FF", "white"],
      link: "https://suhyoonlee.com/",
      download: "",
      learnMore: "",
      bgimg: img5,
      images: [img61, img62, img63],
      rightHeading: "Suh yoon lee",
      rightPara:
        "Welcome to the Suh Yoon Lee book writer web experience! Immerse yourself in a world of literary wonders as I design a digital sanctuary for the acclaimed wordsmith's works.",
    },
    // { color: "#364332",   },
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
    setTimeout(() => {
      setCurrentIndex(items.length - 1);
      setIsVisible(true);
    }, 500);
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
    enter: { opacity: 1, transform: "translateY(20%)" },
    leave: { opacity: 0, transform: "translateY(-65%)", marginTop: 20 },
    config: { tension: 500, friction: 100, duration: 400 }, // Adjust animation config as needed
  });
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open == true) {
      console.log("ajljlalja")
      // setTimeout(() => {
      //   handleClose;
      // }, 2000);
    }
  }, [open]);

  const handleClose = () => {
   

    setOpen(false);
  };
  return (
    <div className="education_wrapper" style={{ justifyContent: "start" }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="The app will be live soon."
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
       }}
        // action={action}
      />
      <div className="left_wrapper">
        <p>Exclusively design by me.</p>

        <div className="image_div">
          <img src={line} alt="pic" />
        </div>
        <h1 style={{ margin: "0px", padding: "0px" }}>Works </h1>
      </div>
      <div style={{ width: "auto" }} className="right_wrapper">
        <div style={{ display: "flex" }}>
          {items[items.length - 1] ? (
            <ImageSlider images={items[items.length - 1]?.images} />
          ) : (
            <></>
          )}

          <div style={{ width: "60%" }}>
            <div className="transition-container">
              <div className="transition-content">
                <div className="container">
                  <div className="container">
                    <div className={`box ${isVisible ? "visible" : ""}`}>
                      {/* {    items[items.length-1]?.text} */}
                      <h1
                        className={`box ${isVisible ? "visible" : ""}`}
                        style={{
                          color: "white",
                          margin: "130px 0px 10px 0px",
                          fontSize: "45px",
                        }}
                      >
                        {" "}
                        {items[items.length - 1]?.rightHeading}
                      </h1>
                      <div style={{ display: "flex" }}>
                        <div
                          onClick={() => {
                            let toOpen =
                              items[items.length - 1]?.link.toString();
                            console.log("toopen", toOpen);
                            window.open(toOpen);
                          }}
                          className="button-div"
                          style={{
                            background: items[items.length - 1]?.color[0],
                          }}
                        >
                          <p
                            style={{ color: items[items.length - 1]?.color[2] }}
                          >
                            Visit Live
                          </p>
                        </div>

                        <div
                          onClick={() => {
                            let toOpen =
                              items[items.length - 1]?.download.toString();
                            console.log("toopen", toOpen);
                            if (toOpen == "") {
                              setOpen(true);
                              return;
                            }
                            window.open(toOpen);
                          }}
                          className="button-div"
                          style={{
                            background: items[items.length - 1]?.color[1],
                          }}
                        >
                          <p>Download App</p>
                        </div>
                      </div>

                      <p
                        className={`box ${isVisible ? "visible" : ""}`}
                        style={{ color: "#e1dcdc", margin: "15px 0px" }}
                      >
                        {items[items.length - 1]?.rightPara}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="roun-div"
                onClick={() => {
                  handleSwipe("up");
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

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to display the next image
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <img
        style={{ height: "400px", margin: "0px 40px 40px 70px" }}
        src={images[index]}
        alt={`Slide ${index + 1}`}
      />
    </div>
  );
};

// Usage
const images = [
  img1,
  img2,
  img3,
  // Add more image URLs here
];

export default SliderComp;
