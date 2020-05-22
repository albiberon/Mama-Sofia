import React from "react";
import InnerPageHeader from "./InnerPageHeader";
import RecipeEditList from "./RecipeEditList";
import { useState } from "react";
import { useEffect } from "react";






function RecipeEdit() {

    const [Recipes, setRecipes] = useState({ data: null });

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8081/recipes");
            res.json().then((res) => setRecipes({ data: res }));
        }

        fetchData();
    }, []);

    return <div className="container-fluid flex" id="recipe-list">
                <InnerPageHeader
            imgURL = "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/ce250dcce490a07197157b19f207993e/photo-1533777857889-4be7c70b33f7"
            name = "Recipe Management"/>


                                {Recipes.data &&
                        Recipes.data.map((recipe) => (
                            <RecipeEditList
                                name={recipe.name}
                                shortDescription={recipe.shortDescription}
                                _id= {recipe._id}
                            />
                        ))}
          </div>

}

export default RecipeEdit;
