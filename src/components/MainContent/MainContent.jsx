import React from "react";
import classes from './MainContent.module.css';
// import MainEarth from '../../../assets/images/earth.png'
import MainEarth from '../../assets/images/earth.png';


function MainContent() {
  return (
    <div>
      <h1 className={classes.contentPresent}>Outer  Space, Commonly Referred <br/> To Simply As Space, Is The <br/> Expanse That Exists Beyond Earth <br/> And Its Atmosphere And Between <br/> Celestial Bodies.</h1>
      <img className={classes.mainEarth} src={MainEarth} />
      <p className={classes.contentDivider}>___________________________________________________</p>
    </div>
  )
}

export default MainContent;