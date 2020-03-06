import React from "react";
import Background from "../images/header-background.jpg";

var backgroundImage = {
    width: "100%",
    height: "150px",  
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${Background})`,
    position: "relative",
    backgroundColor: "green",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  function InnerPageHeader() {
    return <header className="masthead text-white text-center" id="narrow-height" style={ backgroundImage }>
            </header>
      };

      export default InnerPageHeader;