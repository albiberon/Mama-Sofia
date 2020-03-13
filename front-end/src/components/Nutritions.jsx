import React from 'react';

function Nutritions (props) {

    return  <ul className="nutrition" 
                itemProp="nutrition" itemScope="" 
                itemType="http://schema.org/NutritionInformation">
                <li>
                    <span className="nutrition__label">kcal</span>
                    <span className="nutrition__value" itemProp="kcal">{props.kcal}</span>
                </li>
                <li>
                    <span className="nutrition__label">fat</span>
                    <span className="nutrition__value" itemProp="fat">{props.fat}</span>
                </li>
                <li>
                    <span className="nutrition__label">saturates</span>
                    <span className="nutrition__value" itemProp="saturates">{props.saturates}</span>
                </li>
                <li>
                    <span className="nutrition__label">carbs</span>
                    <span className="nutrition__value" itemProp="carbs">{props.carbs}</span>
                </li>
                <li>
                    <span className="nutrition__label">sugars</span>
                    <span className="nutrition__value" itemProp="sugars">{props.sugars}</span>
                </li>
                <li>
                    <span className="nutrition__label">fibre</span>
                    <span className="nutrition__value" itemProp="fibre">{props.fibre}</span>
                </li>
                <li>
                    <span className="nutrition__label">protein</span>
                    <span className="nutrition__value" itemProp="protein">{props.protein}</span>
                </li>
                <li>
                    <span className="nutrition__label">salt</span>
                    <span className="nutrition__value" itemProp="salt">{props.salt}</span>
                </li>
            </ul>

};

export default Nutritions;