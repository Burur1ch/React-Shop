import React from "react";
import styles from "./Card.module.scss"

function Card(props){const [isGreen,SetGreen]=React.useState(false);
  

  const Tog = ()=>{
    SetGreen((isGreen)=>!isGreen);
  }

  
    return (
      
    <div className={styles.card}>
    <div className={styles.favour} onClick={props.onLike}> 
      <img src="/img/Unlk.svg" alt="unlike"/>
      </div>
    <img width={133} height={112} src={props.imU} alt="Sneakers" />
    <h5>{props.title}</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> {props.price} rub</b>
      </div>
      
      <img className={styles.plus} onClick={Tog} src={isGreen ? "/img/1-plus.svg" : "/img/plus.svg"} alt="plus" />
    
    </div>
  </div>
    )
}

export default Card;