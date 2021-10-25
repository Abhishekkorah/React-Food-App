import React from "react";
import Image from "./Image";
import './Card.css';

function Card(props){
    return (
      <React.Fragment>
        <div className="cards text" >
          <div className="card" >
            <Image imgsrc={props.imgsrc}/>
            <div>
              <span className="card__category">{props.title}</span>
              <h3 className="card__title"> {props.seriesName} </h3>
              <a href={props.webSeriesLink}>
                   {/* target="_blank"> */}
                <button> Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Card;