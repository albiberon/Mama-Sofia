import React from "react";
import Nutritions from './Nutritions';
import SinglePageHeader from './InnerPageHeader';
import { useEffect } from "react";
import { useState } from "react";


function SingleRecipe(props) {

    const [recipe, setRecipe] = useState();

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(`http://localhost:8081/recipe/${props._id}`);
            res.json().then((res) => setRecipe(res));
        }
        fetchData();
    }, []);

    console.log(recipe)

    let listItems = null;
    if(recipe)
    {listItems = recipe.ingredients.map((ingredient) =>
        <li className="border-bottom">{ingredient}</li>
    );}
    
        if(!recipe){
            return <div className="container-fluid nopadding-container">Nope</div>
        }
    return <div className="container-fluid nopadding-container">

        <SinglePageHeader
            imgURL = {recipe.imgURL}
            name =  {recipe.name}
        />
                <div className="container single-recipe-container">
                    <div className="row">
                        <div className="col-12"> 
                            <br/>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <p>{recipe.shortDescription} </p>
                            <hr/>
                            <h5>Preparation
                            </h5>
                            <p>{recipe.preparation}</p>
                            <hr/>
                            <h5>Nutritions</h5>
                            <Nutritions
                                kcal = {recipe.nutritionalValues.kcal}
                                fat = {recipe.nutritionalValues.fat}
                                saturates = {recipe.nutritionalValues.saturates}
                                carbs = {recipe.nutritionalValues.carbs}
                                sugars = {recipe.nutritionalValues.sugars}
                                fibre = {recipe.nutritionalValues.fibre}
                                protein = {recipe.nutritionalValues.protein}
                                salt = {recipe.nutritionalValues.salt}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pl-3">
                            <h5 className="ml-4">Ingredients</h5>
                            <ul className="ingredients-list" id="ingredients">
                            {listItems}                         
                            </ul>
                            <img width="300" src={recipe.imgURL}/>
                        </div>
                    </div>
                </div>
            </div>    

};

export default SingleRecipe;