import React from "react";
import classes from './SolarSystemPlanets.module.css'
import Card from "../Card/Card";
import JupiterPlanet from '../../../assets/images/Jupiter.png'
import EarthImage from '../../../assets/images/EarthImage.png';
import MercuryImage from '../../../assets/images/Mercury.png'
// import MercuryImage from '../../../assets/images/Mars.png'
import MarsImage from '../../../assets/images/Mars.png';
import VenusImage from '../../../assets/images/Venus.png';
import SaturnImage from '../../../assets/images/Saturn.png';
import UranusImage from '../../../assets/images/Uranus.png';
import NeptuneImage from '../../../assets/images/Neptune.png';
import MoonImage from '../../../assets/images/Moon.png'


const SolarSystemPlanets = React.forwardRef((props, ref) => { 
    return (
        <div>
            <div ref={ref} className={classes.planets}>
                <h1 className={classes.present}>Planets In Our Solar System</h1>
                <div className={classes.JupiterCard}>
                <Card 
                    cardImage={classes.JupiterImage} 
                    image={JupiterPlanet} 
                    planetClassName={classes.Jupiter} 
                    planetName={'Jupiter'} 
                />
                </div>
                <div className={classes.EarthCard}>
                <Card 
                    cardImage={classes.EarthImage} 
                    image={EarthImage} 
                    planetClassName={classes.Earth} 
                    planetName={'Earth'} 
                />
                </div>
                <div className={classes.MercuryCard}>
                <Card 
                    cardImage={classes.MercuryImage} 
                    image={MercuryImage} 
                    planetClassName={classes.Mercury} 
                    planetName={'Mercury'} 
                />
                </div>
                <div className={classes.MarsCard}>
                <Card 
                    cardImage={classes.MarsImage} 
                    image={MarsImage} 
                    planetClassName={classes.Mars} 
                    planetName={'Mars'} 
                />
                </div>
                <div className={classes.VenusCard}>
                <Card 
                    cardImage={classes.VenusImage} 
                    image={VenusImage} 
                    planetClassName={classes.Venus} 
                    planetName={'Venus'} 
                />
                </div>
                <div className={classes.SaturnCard}>
                <Card 
                    cardImage={classes.SaturnImage} 
                    image={SaturnImage} 
                    planetClassName={classes.Saturn} 
                    planetName={'Saturn'} 
                />
                </div>
                <div className={classes.UranusCard}>
                <Card 
                    cardImage={classes.UranusImage} 
                    image={UranusImage} 
                    planetClassName={classes.Uranus} 
                    planetName={'Uranus'} 
                />
                </div>
                <div className={classes.NeptuneCard}>
                <Card 
                    cardImage={classes.NeptuneImage} 
                    image={NeptuneImage} 
                    planetClassName={classes.Neptune} 
                    planetName={'Neptune'} 
                />
                </div>
                <div className={classes.MoonCard}>
                <Card 
                    cardImage={classes.MoonImage} 
                    image={MoonImage} 
                    planetClassName={classes.Moon} 
                    planetName={'Moon'} 
                />
                </div>
            </div>
        </div>
    )
})

export default SolarSystemPlanets;