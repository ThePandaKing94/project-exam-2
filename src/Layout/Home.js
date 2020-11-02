import React from "react";
import logo from "../src/Components/images/logo.jpg";


function Home() {



  return (
    <html>
    <header >
       <img alt="Siam Thai Cafe" src={logo}/> 
       <div className="headerContent" id="logo">Siam Thai Cafe</div>
       <a className="headerContent" href="ourJoruney">Vår Reise</a>
       <a className="headerContent" href="ourJoruney">Vår Reise</a>
       <a className="headerContent" href="Kontakt">Kontakt</a>
       <div className="headerContent" id="flag"></div>
    </header >
    
    <body>
      
    </body>
    </html>
  )
}
export default Home;