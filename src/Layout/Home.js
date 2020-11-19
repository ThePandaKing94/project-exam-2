import React from "react";
import recInsta from "../Components/images/icons/recInsta.png";
import recGoogle from "../Components/images/icons/recGoogle.png";
import recFb from "../Components/images/icons/recFb.png";
import { NavLink } from 'react-router-dom';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function siam() {

  const home = () => (
    <div> <NavLink activeClassName="is-active" to="/Home">Home</NavLink></div>
  )

  const takeAway = () => (
    <div> <NavLink activeClassName="is-active" to="/TakeAway">Take Away</NavLink></div>
  )

  const ourJourney = () => (
    <div><NavLink activeClassName="is-active" to="/OurJourney">Our Journey </NavLink></div>
  )

  const contact = () => (
    <div> <NavLink activeClassName="is-active" to="/Contact">Contact</NavLink></div>
  )
  console.log(home)
  console.log(takeAway)
  return (
    <>
      <h1>MENY</h1>

      <main>
        <div className="menu">
          <div className="leftContainter">
            {home()}
            {takeAway()}
            {ourJourney()}
            {contact()}

          </div>
          <div className="centerContainter">
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
    </>
  )
}
export default siam;