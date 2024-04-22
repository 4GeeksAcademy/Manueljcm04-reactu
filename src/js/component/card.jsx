import React from "react";
import ReactIMG from './../../img/react.png';

const Card = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="card mx-3">
            <img src= {ReactIMG} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
        </div>

        </div>
        
    );
};

export default Card;