import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import MainContent from './components/MainContent/MainContent';
import GalaxyContent from './components/gContent/gContent';
import SolarSystemPresent from './components/SolarSystem/SolarSystemPresent/SolarSystemPresent';
import SolarSystemPlanets from './components/SolarSystem/SolarSystemPlanets/SolarSystemPlanets';
import { useRef } from 'react';

function App() {

  const homeRef = useRef(null)
  const galaxyRef = useRef(null)
  const solarSystemRef = useRef(null)

  function solarSystemScroll() {
    solarSystemRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  function galaxyScroll() {
    galaxyRef.current.scrollIntoView({
      behavior: 'smooth',
    })
  }


  return (
    <div className="App">
      <div className='navbar active'>
      <Navbar galaxyScroll={galaxyScroll} solarSystemScroll={solarSystemScroll} />
      </div>
      <MainContent />
      <GalaxyContent ref={galaxyRef}/>
      <SolarSystemPresent />
      <SolarSystemPlanets ref={solarSystemRef}/>
    </div>
  );
}

export default App;
