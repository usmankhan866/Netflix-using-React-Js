import React from "react";
import css from"./index.css"


function Cards(props){

    return(

        <div>
            <div className="cards">
                <div className="card">
                    <img  src={props.imgSrc} alt="myPic" className="card__img" />
                    <div className="card__info">
                        <span className="card__category"> {props.title} </span>
                        <h3 className="card__title"> {props.sname} </h3>
                        <a href= {props.link} target="_blank">
                            <button className="btn">Watch Now</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export  { Cards };