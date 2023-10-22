import React from "react";
import MilkyWay from '../../assets/images/milkyway.png';
import classes from './gContent.module.css';

const GalaxyContent = React.forwardRef((props, ref) => {
    
    return (
        <div >
            <h1   className={classes.presentContext}>The Milky Way Is The Galaxy <br /> That Includes The Solar <br /> System, With The Name <br /> Describing The Galaxy's <br /> Appearance From Earth </h1>
            <img ref={ref} className={classes.galaxy} src={MilkyWay} />
        </div>
    )
})

export default GalaxyContent;