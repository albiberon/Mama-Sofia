import React from "react";
import Background from "../images/header-background.jpg";



  function InnerPageHeader(props) {

    var backgroundImage = {
      width: "100%",
      height: "100px",  
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${props.imgURL})`,
      position: "relative",
      backgroundColor: "green",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };

    return <header className="masthead text-white text-center" id="narrow-height" style={ backgroundImage }>
            <h1 className="text-white pt-4 innerpage-header">{props.name}</h1>
            </header>
      };

      export default InnerPageHeader;