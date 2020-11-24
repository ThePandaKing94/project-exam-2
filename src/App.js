import React from 'react';
import logo from "./Components/images/logo.png";
import langNorway from "./Components/images/icons/langNorway.png";
import recInsta from "./Components/images/icons/recInsta.png";
import recGoogle from "./Components/images/icons/recGoogle.png";
import recFb from "./Components/images/icons/recFb.png";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Layout/Home';
import Contact from "./Layout/Contact"
import OurJourney from "./Layout/OurJourney"
import InputForm from "./Layout/TakeAway"
import "./express.js"
import './App.scss';


function App() {
  return (

    <html>

      <header>
        <a href="/"><img id="logo" alt="Siam Thai Cafe" src={logo} /></a>
        <a class="headerRoutes" href="/TakeAway">Take away</a>
        <a class="headerRoutes" href="/OurJourney">Vår Reise</a>
        <a class="headerRoutes" href="/Contact">Kontakt</a>
        <div id="flagContainer">
          <img id="flag" alt="Language" src={langNorway} />
          <div id="flagText" >Velg Språk</div>
        </div>
      </header >

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TakeAway" component={InputForm} />
          <Route path="/OurJourney" component={OurJourney} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>

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
              <img id="fbRecommendation" alt="Language" src={recFb} />
              <img id="googleRecommendation" alt="Language" src={recGoogle} />
              <img id="instaRecommendation" alt="Language" src={recInsta} />
            </div>
          </div>
        </div>


        <div id="copyright">
          Copyright: Siam Thai Café
        </div>
      </footer>

    </html>

  );
}

export default App;
