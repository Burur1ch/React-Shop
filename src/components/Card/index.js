import React from "react";
import styles from "./Card.module.scss"

function Card({imU,onLike,onPlus,price,title}){

  const [isGreen,SetGreen]=React.useState(false);
  
  const [isLike,SetLike]=React.useState(false);

  const Tog = ()=>{
    onPlus({title,price,imU});
    SetGreen((isGreen)=>!isGreen);
  }
  const TogLk = ()=>{
  onLike({title,price,imU});
  SetLike((isLike)=>!isLike);
  
  }
  
    return (
      
    <div className={styles.card} >
    <div className={styles.favour} onClick={onLike}> 
      <img onClick={TogLk} src={isLike ? "/img/Liked.svg" : "/img/Unlk.svg"} alt="unlike"/>
      </div>
    <img width={133} height={112} src={imU} alt="Sneakers" />
    <h5>{title}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> {price} rub</b>
      </div>
      
      <img className={styles.plus} onClick={Tog} src={isGreen ? "/img/gr-plus.svg" : "/img/plus.svg"} alt="plus" />
    
    </div>
  </div>
    )
}

export default Card;