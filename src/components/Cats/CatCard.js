import React from 'react'
import StarRatingComponent from "react-star-rating-component"

const CatCard = ({cat}) => {
    return (
          <div>
              <a href className="card">
                <img src={cat.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                      <img className="card__thumb" src="https://w7.pngwing.com/pngs/412/23/png-transparent-black-cat-kitten-emoji-sticker-butterfly-cute-cat-head-mammal-animals-cat-like-mammal-thumbnail.png" alt="" />
                      <div className="card__header-text">
                        <h3 className="card__title">{cat.name}</h3>            
                        <span className="card__status">{cat.breed}</span>
                      </div>
                    </div>
                  <StarRatingComponent 
                  className="card__description"
                    name="rate1" 
                    starCount={5}
                    value={cat.rate}
                    starColor="#6A515E"
                    emptyStarColor="grey"
                  />
                  </div>
              </a>      
          </div>
    )
}

export default CatCard
