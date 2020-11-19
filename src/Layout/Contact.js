import React, { useState } from "react";
import logo from "../Components/images/logo.png";
import langNorway from "../Components/images/icons/langNorway.png";
import recInsta from "../Components/images/icons/recInsta.png";
import recGoogle from "../Components/images/icons/recGoogle.png";
import recFb from "../Components/images/icons/recFb.png";
import Home from "./Home"
import { BrowserRouter as Route, Switch, NavLink } from 'react-router-dom';
import background from '../Components/images/headerBackground.jpg';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


function siam() {

  const home = () => (
    <div>Home <NavLink activeClassName="is-active" to="/Home"></NavLink></div>
  )

  const takeAway = () => (
    <div>Take Away <NavLink activeClassName="is-active" to="/TakeAway"></NavLink></div>
  )

  const ourJourney = () => (
    <div>Our Journey <NavLink activeClassName="is-active" to="/OurJourney"></NavLink></div>
  )

  const contact = () => (
    <div>Contact <NavLink activeClassName="is-active" to="/Contact"></NavLink></div>
  )

  return (
    <html>
    <header style={{ backgroundImage:`url(${background})`}}>
      <Switch>
            <Route to="Home" component={home}>
              <img id="logo" alt="Siam Thai Cafe" src={logo}/> 
            </Route>
            <Route to="TakeAway" component={takeAway} class="headerRoutes">Take Away</Route>
            <Route to="OurJourney" component={ourJourney} class="headerRoutes">Vår Reise</Route>
            <Route to="Contact" component={contact} class="headerRoutes">Kontakt</Route>
       </Switch>
       <div id="flagContainer">
            <img id="flag" alt="Language" src={langNorway}/> 
            <div id="flagText" >Velg Språk</div>
       </div>
    </header >


    
    <body>
    <h1>Menu</h1>

      <main> 
        <div class="menu">
          <div class="leftContainter">
            
          </div>
          <div class="centerContainter">
            <h2>Pad Thai</h2>
            <p>Langtidskokte eggnudler tilført gjennomstekt egg, marinert svin, chilli, røkte nøtter og thai urter.</p>
            <span>Allergener: nøtter, egg, hvete</span>
            <img class=""></img>
          </div>
        </div>
      </main>

      <footer>
       <div id="upperFooter"> 
        <div id="openingHours">
          Åpningstider:
          <span>Mandag-Fredag:10:30-22:00</span>
          <span>Lørdag:10:30-00:00</span>
          <span>Mandag-Fredag:12:00-22:00</span>
        </div>

        <div id="recommendations">
          Anbefal oss:
          <div id="socialMedia">
            <img id="fbRecommendation" alt="Language" src={recFb}/> 
            <img id="googleRecommendation" alt="Language" src={recGoogle}/> 
            <img id="instaRecommendation" alt="Language" src={recInsta}/> 
          </div>
        </div>
        </div>
  

        <div id="copyright">
          Copyright: Siam Thai Café
        </div>
      </footer>
    </body>
    </html>
  )
}
export default siam;