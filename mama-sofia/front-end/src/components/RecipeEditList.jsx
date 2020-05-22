import React from 'react';
import { Link } from "react-router-dom";


var marginArea = {
    marginLeft: '20%',
    marginRight: '20%'
}

function RecipeEditList(props){
    return <div>

<div className="media text-muted pt-3">
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" style={marginArea}>
        <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">{props.name}</strong>
        </div>
            <span className="d-block">{props.shortDescription}</span>
            <Link to={`/recipe-edit-details/${props._id}`}><i className="far fa-edit float-right edit-icon"></i></Link>
            <a href="#"><i className="far fa-trash-alt float-right delete-icon"></i></a>
      </div>
      
    </div>

    </div>

}

export default RecipeEditList;