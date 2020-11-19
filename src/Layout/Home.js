import React from "react";
import logo from "../Components/images/logo.png";
import langNorway from "../Components/images/icons/langNorway.png";
import recInsta from "../Components/images/icons/recInsta.png";
import recGoogle from "../Components/images/icons/recGoogle.png";
import recFb from "../Components/images/icons/recFb.png";
import background from '../Components/images/headerBackground.jpg';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
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
    <Router>
    <Switch>
            <Route path="/" exact component={home} id="logoContainer">
              <img id="logo" alt="Siam Thai Cafe" src={logo}/> 
            </Route>
            <Route path="about" component={takeAway} class="headerRoutes">Take Away</Route>
            <Route path="ourJourney" component={ourJourney} class="headerRoutes">Vår Reise</Route>
            <Route path="contact" component={contact} class="headerRoutes">Kontakt</Route>
       </Switch>
       <div id="flagContainer">
            <img id="flag" alt="Language" src={langNorway}/> 
            <div id="flagText" >Velg Språk</div>
       </div>
      </Router>
    </header >


    
    <body>
    <h1>MENY</h1>

      <main> 
        <div class="menu">
          <div class="leftContainter">
            
          </div>
          <div class="centerContainter">
            <h2>Pad Thai</h2>
            <p>Langtidskokte eggnudler tilført gjennomstekt egg, marinert svin, chilli, røkte nøtter og thai urter.</p>
            <span>Allergener: nøtter, egg, hvete</span>
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