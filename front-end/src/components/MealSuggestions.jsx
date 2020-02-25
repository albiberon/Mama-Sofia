import React from "react";
import SampleMeal from "../images/sample-meal.jpg";
import SampleMeal2 from "../images/sample-meal2.jpg";
import SampleMeal3 from "../images/sample-meal3.jpg";


var mealThumbnail = {
    width: "100%",
    height: "160px",      
    backgroundImage: `url(${SampleMeal})`,
    position: "relative",
    backgroundColor: "green",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  var mealThumbnail2 = {
    width: "100%",
    height: "160px",      
    backgroundImage: `url(${SampleMeal2})`,
    position: "relative",
    backgroundColor: "green",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  var mealThumbnail3 = {
    width: "100%",
    height: "160px",      
    backgroundImage: `url(${SampleMeal3})`,
    position: "relative",
    backgroundColor: "green",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

function MealSuggestions() {
return <div className="container">
    <h1 class="mb-5">Here are our suggestions for today!</h1>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 grow-shadow">
                            <div className="card text-center hover-shadow-lg hover-translate-y-n10">
                                <div className="px-4 py-5 meal-thumbnail" style={mealThumbnail3}>
                                </div>
                                <div className="px-4 pb-1">
                                    <h5 className="meal-name-h5">Breakfast</h5>
                                    <p className="text-muted">Breakfast meal name</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 grow-shadow">
                            <div className="card text-center hover-shadow-lg hover-translate-y-n10">
                                <div className="px-4 py-5 meal-thumbnail" style={mealThumbnail}>
                                </div>
                                <div className="px-4 pb-1">
                                    <h5 className="meal-name-h5">Lunch</h5>
                                    <p className="text-muted">Lunch meal name</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 grow-shadow">
                            <div className="card text-center hover-shadow-lg hover-translate-y-n10">
                                <div className="px-4 py-5 meal-thumbnail" style={mealThumbnail2}>
                                </div>
                                <div className="px-4 pb-1">
                                    <h5 className="meal-name-h5">Dinner</h5>
                                    <p className="text-muted">Dinner meal name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
};

export default MealSuggestions;