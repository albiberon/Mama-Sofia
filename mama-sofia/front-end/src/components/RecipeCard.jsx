import React from "react";
import { Link } from "react-router-dom";


function RecipeCard(props) {

    var backgroundImage = {
        width: "100%",
        height: "160px",      
        backgroundImage: `url(${props.img})`,
        position: "relative",
        backgroundColor: "green",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      };

    return <div className="col-lg-3 col-sm-6 grow-shadow recipe-card">
        <Link to={`/recipe-details/${props._id}`}>
        <div loading="lazy" className="card text-center hover-shadow-lg hover-translate-y-n10">
            <div className="px-4 py-5 meal-thumbnail" style={backgroundImage}>
            </div>
            <div className="px-4 pb-1">
                <h5 className="recipe-name">{props.name}</h5>
                <p className="recipe-short-description text-muted">{props.shortDescription}</p>
                <i className="recipe-category">{props.category}</i>
            </div>
        </div>
    </Link>
    </div>

};

export default RecipeCard;