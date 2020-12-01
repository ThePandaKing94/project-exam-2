import React, { Component} from 'react';
import logo from "./Components/images/logo.png";
import langNorway from "./Components/images/icons/langNorway.png";
import langEnglish from "./Components/images/icons/langEnglish.png";
import recInsta from "./Components/images/icons/recInsta.png";
import recGoogle from "./Components/images/icons/recGoogle.png";
import recFb from "./Components/images/icons/recFb.png";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Layout/Home';
import Contact from "./Layout/Contact"
import OurJourney from "./Layout/OurJourney"
import InputForm from "./Layout/TakeAway"
import './App.scss';
import './assets/sass/_contact.scss';



class App extends Component {
    
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

displayLang() {
  var langContainer = document.querySelector('#header__language');
  let flagContainer = document.querySelector('#header__flagContainer');
  console.log(langContainer);

  if (langContainer.style.display === "none") {
    flagContainer.onclick = "block";
  } 
  else if (langContainer.style.display === "block") {
    flagContainer.onclick = "none";
  }
  document.body.style.backgroundColor = "green";
}

ChangeLang() {
  let engTxt = document.querySelectorAll('.eng');
  let noTxt = document.querySelectorAll('.no');
  let langEng = document.querySelector('#langEng');
  let langNo = document.querySelector('#langNo');
  langEng.onclick = noTxt.style.display = "none";
  langEng.onclick = engTxt.style.display = "block";
  langNo.onclick = engTxt.style.display = "none";
  langNo.onclick = noTxt.style.display = "block";
  document.body.style.backgroundColor = "red";
}

 render() {
   return (
     <>
      <header>
        <div id="headerContainer">
          <a href="/"><img id="header__logo" alt="Siam Thai Cafe" src={logo} /></a>
          <a class="header__headerRoutes" href="/TakeAway">Take Away</a>
          <a class="no header__headerRoutes" href="/OurJourney">Vår Reise</a>
          <a class="eng header__headerRoutes" href="/OurJourney">Our Journey</a>
          <a class="no header__headerRoutes" href="/Contact">Kontakt</a>
          <a class="eng header__headerRoutes" href="/Contact">Contact</a>
          <div id="header__language"><img src={langNorway}/>
            <div id="header__flagContainer">
              <img class="langNor header__flagContainer--flag" alt="Language" src={langNorway} />
              <img class="langEng header__flagContainer--flag" alt="Language" src={langEnglish} />
              <div class="no header__flagContainer--flagText" >Velg Språk</div>
              <div class="eng header__flagContainer--flagText" >Velg Språk</div>
            </div>
          </div>
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
        <div id="footer__upperFooter">
          <div id="no footer__socialMedia--openingHours">
            Åpningstider:
          <span>Mandag-Fredag:10:30-22:00</span>
            <span>Lørdag:10:30-00:00</span>
            <span>Søndag:12:00-22:00</span>
          </div>
          <div id="eng footer__socialMedia--openingHours">
            Opening Hours:
          <span>Monday-Friday:10:30-10:00PM</span>
            <span>Saturday:10:30AM-00:00AM</span>
            <span>Sunday:00:00PM-10:00PM</span>
          </div>

          <div id="footer__recommendations">
           <span id="no">Anbefal oss:</span>
           <span id="en">Recommend us:</span>
          <div id="footer__socialMedia">
              <img id="footer__socialMedia--fbRecommendation" alt="Language" src={recFb} />
              <img id="footer__socialMedia--googleRecommendation" alt="Language" src={recGoogle} />
              <img id="footer__socialMedia--instaRecommendation" alt="Language" src={recInsta} />
            </div>
          </div>
        </div>


        <div id="footer__copyright">
          Copyright: Siam Thai Café
        </div>
      </footer>
      </>
    );  
  }
}

export default App;
