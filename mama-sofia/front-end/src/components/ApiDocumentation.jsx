import React from "react";
import InnerPageHeader from "./InnerPageHeader";
import Image1 from "../images/Screenshot 2020-05-22 at 16.23.35.png";
import Image2 from "../images/Screenshot 2020-05-22 at 21.12.07.png";

function ApiDocumentation() {

    var marginArea = {
        marginTop: '50px',
        marginLeft: '20%',
        marginRight: '20%'
    }

    var maxWidthImage = {
        maxWidth: '100%',
        borderRadius: '10px',
        border : '1px solid gray'

    };

    return <div>
                <InnerPageHeader
            imgURL = "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/ce250dcce490a07197157b19f207993e/photo-1533777857889-4be7c70b33f7"
            name = "Api Documentation"/>

<div loading="lazy" className = "container-fluid login-section nopadding-container">
    <div style={marginArea}>
    <h1>GET - all Recipes</h1>
        <p>Get request to http://localhost:8081/recipes will bring all the recipes in JSON format</p>
        <br/>
        <i>Example below</i>
        <img style={maxWidthImage} src={Image1}/>
        <br/>
        <hr/>
        <h1>GET - single Recipe</h1>
        <p>Get request to http://localhost:8081/recipe/--id of the recipe-- will bring the right recipe in JSON format</p>
        Example: http://localhost:8081/recipe/5ebfc2c7bfcc1718296cab17 will bring 'Caponata pasta'
        <br/><br/>
        <i>Example below</i>
        <img style={maxWidthImage} src={Image2}/>
        <br/>
        <hr/>
        <h1>PUT - Editing a single recipe</h1>
        <p>PUT request to http://localhost:8081/recipe/--id of the recipe-- will adjust the single recipe</p>
        Example: http://localhost:8081/recipe/5ebfc2c7bfcc1718296cab17 will adjust 'Caponata pasta'
        <br/>
        <hr/>
        <h1>DELETE - Deleting a single recipe</h1>
        <p>DELETE request to http://localhost:8081/recipe/--id of the recipe-- will delete the single recipe</p>
        Example: http://localhost:8081/recipe/5ebfc2c7bfcc1718296cab17 will delete 'Caponata pasta'
        <br/>
        <hr/>
    </div>

    </div>
    </div>
};


export default ApiDocumentation;