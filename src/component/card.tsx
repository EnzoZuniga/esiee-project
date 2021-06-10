import React from "react";
import { CardProps } from "../utils/interface/CardProps";
import "./../utils/scss/component/card.scss";

export const Card : React.FC<CardProps> = ({
  name,
  image,
  href
}) => {
  return(
    <>
      <div className="cardWrapper">
        <a href={href} target="_blank" rel="noreferrer">
          <div className="cardContent">
              <div className="imgWrapper">
                <img src={image} alt={image}/>
              </div>
              <span>{name}</span>
          </div>
        </a>
      </div>
    </>
  )
}
