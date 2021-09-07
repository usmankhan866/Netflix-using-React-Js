import React from "react";


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
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export  { Cards };