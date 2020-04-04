import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeSearchBar from "./RecipeSearchBar";
import Recipes from "../Recipes";

var grayBackground = {
    backgroundColor: "#dee2e6"
};

function RecipeList() {
    return <div className="container-fluid flex" style={grayBackground} id="recipe-list">
        <RecipeSearchBar />
        <div className="container space-top-bottom">
            <div className="row">

                <RecipeCard
                    img={Recipes.data[0].imgURL}
                    name={Recipes.data[0].name}
                    shortDescription={Recipes.data[0].shortDescription}
                    category={Recipes.data[0].category}
                />
                <RecipeCard
                    img={Recipes.data[1].imgURL}
                    name={Recipes.data[1].name}
                    shortDescription={Recipes.data[1].shortDescription}
                    category={Recipes.data[1].category}
                />
                <RecipeCard
                    img={Recipes.data[2].imgURL}
                    name={Recipes.data[2].name}
                    shortDescription={Recipes.data[2].shortDescription}
                    category={Recipes.data[2].category}
                />
                <RecipeCard
                    img={Recipes.data[3].imgURL}
                    name={Recipes.data[3].name}
                    shortDescription={Recipes.data[3].shortDescription}
                    category={Recipes.data[3].category}
                />
                <RecipeCard
                    img={Recipes.data[4].imgURL}
                    name={Recipes.data[4].name}
                    shortDescription={Recipes.data[4].shortDescription}
                    category={Recipes.data[4].category}
                />
                <RecipeCard
                    img={Recipes.data[5].imgURL}
                    name={Recipes.data[5].name}
                    shortDescription={Recipes.data[5].shortDescription}
                    category={Recipes.data[5].category}
                />
                <RecipeCard
                    img={Recipes.data[6].imgURL}
                    name={Recipes.data[6].name}
                    shortDescription={Recipes.data[6].shortDescription}
                    category={Recipes.data[6].category}
                />
                <RecipeCard
                    img={Recipes.data[7].imgURL}
                    name={Recipes.data[7].name}
                    shortDescription={Recipes.data[7].shortDescription}
                    category={Recipes.data[7].category}
                />
                <RecipeCard
                    img={Recipes.data[8].imgURL}
                    name={Recipes.data[8].name}
                    shortDescription={Recipes.data[8].shortDescription}
                    category={Recipes.data[8].category}
                />
                <RecipeCard
                    img={Recipes.data[9].imgURL}
                    name={Recipes.data[9].name}
                    shortDescription={Recipes.data[9].shortDescription}
                    category={Recipes.data[9].category}
                />
                <RecipeCard
                    img={Recipes.data[10].imgURL}
                    name={Recipes.data[10].name}
                    shortDescription={Recipes.data[10].shortDescription}
                    category={Recipes.data[10].category}
                />
                <RecipeCard
                    img={Recipes.data[11].imgURL}
                    name={Recipes.data[11].name}
                    shortDescription={Recipes.data[11].shortDescription}
                    category={Recipes.data[11].category}
                />
                <RecipeCard
                    img={Recipes.data[12].imgURL}
                    name={Recipes.data[12].name}
                    shortDescription={Recipes.data[12].shortDescription}
                    category={Recipes.data[12].category}
                />
            </div>
        </div>
    </div>
};

export default RecipeList;