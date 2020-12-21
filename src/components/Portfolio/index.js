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
                <h3>Brew Hound</h3>
                    <img src={brewhound} alt ="" className="img-thumbnail" ></img>
                    
                    <p></p>

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3>Fianance Tracker</h3>
                    <img src={financeTracker} alt ="" className="img-thumbnail"></img>
                    <p></p>

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3>Weather Dashboard</h3>
                    <img src={Weather} alt ="" className="img-thumbnail"></img>
                    
                    <p></p>

                </div>
            </div>
            <div className = "column">
                <div className = "content">
                <h3>PWA budget Tracker</h3>
                    <img src={PWAbudget} alt ="" className="img-thumbnail"></img>
                    
                    <p></p>

                </div>
            </div>

        </section>
    )
}

export default Portfolio;