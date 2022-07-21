function Card(){
    return (
        <div className="card mb-25">
    <div className="favour"> 
      <img src="/img/Unlk.svg" alt="unlike"/>
      </div>
    <img width={133} height={112} src="/img/Sneakers/1.svg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> 12 999 rub</b>
      </div>
      <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>
    )
}

export default Card;