function Header(){
    return (
        <div style={{display: "none"}}  className="overlay">
  
   
  

        <div className="drawer">
      <h2 className="d-flex  justify-between mb-20 ">Корзина 
      <img className="removeBtn cu-p" src="/img/Krest.svg" alt="Remove"/> 
      </h2>

    <div className="Items">

    <div className="cart d-flex align-center mb-20">
      <img className="mr-20" width={60} height={60} src="/img/Sneakers/1.svg" alt="Sneakers"/>
      
      <div className="mr-20">
        <p className="mb-5 mt-20">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <p><strong>12 999 rub</strong></p>
      </div>
        <img className="removeBtn" src="/img/Krest.svg" alt="Remove"/>
      </div>


      <div className="cart d-flex align-center mb-20">
      <img className="mr-20" width={60} height={60} src="/img/Sneakers/1.svg" alt="Sneakers"/>
      
      <div className="mr-20">
        <p className="mb-5 mt-20">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <p><strong>12 999 rub</strong></p>
      </div>
        <img className="removeBtn" src="/img/Krest.svg" alt="Remove"/>
      </div>
      
    

    </div>


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

      <button className="GrBtn">Оформить заказ <img src="/img/strel.svg" alt="arrow"/></button></div>
    
     </div>
     </div>
    )
}

export default Header;