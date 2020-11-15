import React from "react";
import logo from "../Components/images/logo.jpg";
import langNorway from "../Components/images/icons/langNorway.png";



function Home() {



  return (
    <html>
    <header >
      <a href="Home.js" id="logoContainer">
        <img id="logo" alt="Siam Thai Cafe" src={logo}/> 
        <div  id="logoText" >Siam Thai Cafe</div>
      </a>
       <a class="headerLinks" href="takeAway">Take Away</a>
       <a class="headerLinks" href="ourJoruney">Vår Reise</a>
       <a class="headerLinks" href="contact">Kontakt</a>
       <div id="flagContainer">
         <img id="flag" alt="Siam Thai Cafe" src={langNorway}/> 
         <div id="flagText" >Velg Språk</div>
       </div>
    </header >

    <main>
      dfggfdfd
    </main>
    
    <body>
      
    </body>
    </html>
  )
}
export default Home;