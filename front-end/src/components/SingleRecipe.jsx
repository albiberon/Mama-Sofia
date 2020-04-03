import React from "react";
import Nutritions from './Nutritions';
import Recipes from '../Recipes';
import SinglePageHeader from './InnerPageHeader';
import $ from 'jquery';


function SingleRecipe() {
    const listItems = Recipes.data[0].ingredients.map((ingredient) =>
    <li className="border-bottom">{ingredient}</li>
    
    );

    return <div className="container-fluid nopadding-container">
        <SinglePageHeader
            imgURL = {Recipes.data[0].imgURL}
            name =  {Recipes.data[0].name}
        />
                <div className="container single-recipe-container">
                    <div className="row">
                        <div className="col-12"> 
                            <br/>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <p>{Recipes.data[0].shortDescription} </p>
                            <hr/>
                            <h5>Preparation
                            </h5>
                            <p>{Recipes.data[0].preparation}</p>
                            <hr/>
                            <h5>Nutritions</h5>
                            <Nutritions
                                kcal = {Recipes.data[0].nutritionalValues.kcal}
                                fat = {Recipes.data[0].nutritionalValues.fat}
                                saturates = {Recipes.data[0].nutritionalValues.saturates}
                                carbs = {Recipes.data[0].nutritionalValues.carbs}
                                sugars = {Recipes.data[0].nutritionalValues.sugars}
                                fibre = {Recipes.data[0].nutritionalValues.fibre}
                                protein = {Recipes.data[0].nutritionalValues.protein}
                                salt = {Recipes.data[0].nutritionalValues.salt}
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pl-3">
                            <h5 className="ml-4">Ingredients</h5>
                            <ul className="ingredients-list" id="ingredients">
                            {listItems}                         
                            </ul>
                            <img width="300" src={Recipes.data[0].imgURL}/>
                        </div>
                    </div>
                </div>
            </div>    

};

export default SingleRecipe;