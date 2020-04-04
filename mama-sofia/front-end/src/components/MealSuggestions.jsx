import React from "react";
import Recipes from "../Recipes";
import RecipeCard from "./RecipeCard";

function MealSuggestions() {

    var breakfastRecipes = [];
    var lunchRecipes = [];
    var dinnerRecipes = [];
    var selectedBreakfast;
    var selectedLunch;
    var selectedDinner;

    function breakfastSuggestion() { 
            Recipes.data.map(function(e){
                if(e.category === "breakfast"){
                    breakfastRecipes.push(e);
                }
            });
    selectedBreakfast = breakfastRecipes[Math.floor(Math.random() * (breakfastRecipes.length))];
    };

    function lunchSuggestion() { 
        Recipes.data.map(function(e){
            if(e.category === "lunch"){
                lunchRecipes.push(e);
            }
        });
selectedLunch = lunchRecipes[Math.floor(Math.random() * (lunchRecipes.length))];
};

function dinnerSuggestion() { 
    Recipes.data.map(function(e){
        if(e.category === "dinner"){
            dinnerRecipes.push(e);
        }
    });
selectedDinner = dinnerRecipes[Math.floor(Math.random() * (dinnerRecipes.length))];
};


return <div className="container meal-suggestions">
            <h1 className="mb-5">Here are our suggestions for today!</h1>
                    {breakfastSuggestion()}
                    {lunchSuggestion()}
                    {dinnerSuggestion()}
                    <div className="row">
                        <div className = "col-2">
                    </div>

                    <RecipeCard
                        img={selectedBreakfast.imgURL}
                        name={selectedBreakfast.name}
                        shortDescription={selectedBreakfast.shortDescription}
                        category={selectedBreakfast.category}
                    />
                    <RecipeCard
                        img={selectedLunch.imgURL}
                        name={selectedLunch.name}
                        shortDescription={selectedLunch.shortDescription}
                        category={selectedLunch.category}
                    />
                    <RecipeCard
                        img={selectedDinner.imgURL}
                        name={selectedDinner.name}
                        shortDescription={selectedDinner.shortDescription}
                        category={selectedDinner.category}
                    />
                    <div className = "col-2"></div>
                    </div>
         </div>
};

export default MealSuggestions;