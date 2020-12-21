import React from 'react';
import brewhound from "../../images/brewhound.png";
import financeTracker from "../../images/finance-tracker.png";
import Weather from "../../images/Weather.jpg";
import PWAbudget from "../../images/PWA-budget.jpg";

function Portfolio(){
    return(
        <section id="portfolio" className="row">
            <h2>My Portfolio</h2>
            <div className = "column">
                <div className = "content">
                <h3><a href ="https://github.com/ryanabrown14/brew-hound" target="blank">Brew Hound</a></h3>
                    <a href = "https://ryanabrown14.github.io/brew-hound/" target="blank"><img src={brewhound} alt ="" className="img-thumbnail" ></img></a>
                   
                    

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3><a href ="https://github.com/mondrovic/finance-tracker" target="blank">Fianance Tracker</a></h3>
                    <a href = "https://mighty-meadow-45441.herokuapp.com/" target="blank"><img src={financeTracker} alt ="" className="img-thumbnail"></img></a>
                    

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3><a href ="https://github.com/ryanabrown14/weather-dashboard" target="blank">Weather Dashboard</a></h3>
                   <a href ="https://ryanabrown14.github.io/weather-dashboard/" target="blank"><img src={Weather} alt ="" className="img-thumbnail"></img></a> 
                    
                    

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3> <a href = "https://github.com/ryanabrown14/budget-trackerPWA" target="blank">PWA budget Tracker</a></h3>
                    <a href ="https://obscure-sands-50665.herokuapp.com/" target="blank" ><img src={PWAbudget} alt ="" className="img-thumbnail"></img></a>
                    
                  

                </div>
            </div>

        </section>
    )
}

export default Portfolio;