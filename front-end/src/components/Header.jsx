import React from "react";
import MealSuggestions from "./MealSuggestions";
import Background from "../images/header-background.jpg";

var backgroundImage = {
  width: "100%",
  height: "500px",
          
  backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${Background})`,
  position: "relative",
  backgroundColor: "green",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

function Header() {
return <header className="masthead text-white text-center" style={ backgroundImage }>

<MealSuggestions/>
    
  </header>
  };

  export default Header;