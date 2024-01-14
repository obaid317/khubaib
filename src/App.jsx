import React, { useState, useEffect } from 'react';
import './App.css'
import Banner from './components/Banner'
import Experience from './components/Experience';
import Footer from './components/Footer';
import Info from './components/Info';
import Menubar from './components/Menubar';
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Tools from './components/Tools';
import './styles/Home.scss';
import Education from './components/Education';
import VerticalCarousel from './components/VerticalCarousel';
import SliderComp from './components/Slider';
import Contact from './components/Contact';
import AwardsSection from './components/AwardSection';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDelayActive, setIsDelayActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDelayActive) {
      setIsDelayActive(true);
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsDelayActive(false);
      }, 50); // 0.5 second delay
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDelayActive]);
  const [toggleMenu, settoggleMenu] = useState(false)
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 
  return (
    <div className='home_container containers'>
      {
        toggleMenu ? <Menubar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} /> : null
      }
 <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      
      <Navbar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
      <Banner />

      <Experience />
      <SliderComp></SliderComp>
      <VerticalCarousel items={items} />
      <Education />
      <Info />
   <AwardsSection></AwardsSection>
      
   
      <Skills />
      <Tools />
      
      <Contact></Contact>
      <Footer />
    </div>
  )
}

export default App
