function Busket({OnCloseBascet, onRemove, items = []}){
    return (
        <div className="overlay">

        <div className="drawer">
      <h2 className="d-flex  justify-between mb-20 ">Корзина 
      <img onClick={OnCloseBascet} className="removeBtn cu-p" src="/img/Krest.svg" alt="Remove"/> 
      </h2>

      {
        items.length > 0 ? 
        (<div>
           <div className="Items">

        {items.map((obj)=>(
              <div className="cart d-flex align-center mb-20 mr-20 ml-10">
                
              <img className="mr-20" width={60} height={60} src={obj.imU} alt="Sneakers"/>
              
              <div className="mr-20">
               
                <p className="mb-5 mt-20">{obj.title}</p>
                
                <p>Price:<strong> {obj.price} rub</strong></p>
              </div>
                <img onClick={()=>onRemove(obj.id)} 
                className="removeBtn" src="/img/Krest.svg" 
                alt="Remove"/>
              </div>      
        ))}
  
      </div>
  
  <div>
    <div className="Total">
      <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 rub</b>
          </li>
          <li>
          <span>Налог 5%:</span>
            <div></div>
            <b>1076 rub</b>
          </li>
        </ul>
  
        <button className="GrBtn">Оформить заказ <img src="/img/strel.svg" alt="arrow"/></button></div></div></div>)
        :
        (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width={120} height={120} src="/img/empty-cart.jpg" alt="Empty"/>
        <h2><strong>Корзина пустая</strong></h2>
        <p className="opacity-6">Добавьте предмет в корзину, чтобы сделать заказ.</p> 
        <button onClick={OnCloseBascet} className="greenButton">
          <img src="/img/strel.svg" alt="arrow"/>
          Вернуться назад
        </button>
      </div>)
      }



   
    
     </div>
     </div>
    )
}

export default Busket;