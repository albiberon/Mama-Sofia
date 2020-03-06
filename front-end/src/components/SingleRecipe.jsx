import React from "react";

function SingleRecipe() {
    return <div className="container space-top-bottom">
    <div className="row">
        <div className="col-12">
        <h1 className="text-center">Sample Recipe</h1>
        </div>
        <div className="col-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis nulla aliquet, elementum est sed, porttitor est. Aenean eu nisi et risus convallis eleifend sed at sapien. </p>
            <h5>Preparation
            </h5>
            <p>Nullam lobortis massa felis, ut aliquam nulla tristique nec. Maecenas finibus dictum blandit. Etiam sit amet eros metus. Aliquam nec feugiat lorem, sit amet feugiat nulla. Nulla eleifend augue sed augue facilisis, vitae aliquam turpis consequat. Suspendisse potenti. Aliquam a est blandit, euismod dolor eu, egestas nisi. Etiam interdum arcu lectus, sit amet fermentum est pellentesque vitae. In quis diam sed magna ornare pharetra ac imperdiet libero.</p>

        </div>
        <div className="col-3  pl-3">
        <h5 className="text-center">Ingredients</h5>
            <ul>
                <li>2 Ingredient</li>
                <li>500g Ingredient</li>
                <li>2 Ingredient</li>
                <li>500g Ingredient</li>
                <li>2 Ingredient</li>
                <li>500g Ingredient</li>
            </ul>
        </div>
    </div>
    </div>

};

export default SingleRecipe;