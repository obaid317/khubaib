import { useState } from 'react';
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

function App() {

  const [toggleMenu, settoggleMenu] = useState(false)
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 
  return (
    <div className='home_container'>
      {
        toggleMenu ? <Menubar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} /> : null
      }

      <Navbar toggleMenu={toggleMenu} settoggleMenu={settoggleMenu} />
      <Banner />

      <Experience />
      <SliderComp></SliderComp>
      <VerticalCarousel items={items} />
      <Education />
      <Info />
   
      
   
      <Skills />
      <Tools />
      
      <Contact></Contact>
      <Footer />
    </div>
  )
}

export default App
