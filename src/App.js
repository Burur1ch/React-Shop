import Card from './components/Card'
import Header from './components/Header'
import Basket from './components/Basket'

function App() {

  return <div className="wrapper clear">

  
  <Basket/> 

  <Header/>

   <div className="content p-40">
   <div className="d-flex align-center mb-35 justify-between">
   <h1 className=" ml-30">All Sneakers</h1>
  <div className="search d-flex mr-30">
    <img src="/img/find.svg" alt="Search"/> 
    <input placeholder="Поиск ..."/>
  </div>
   </div>

 <div className="d-flex">

  <Card />

  <div className="card mb-25">
    <img width={133} height={112} src="/img/Sneakers/2.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Air Max 270</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> 15 999 rub</b>
      </div>
      <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>

  <div className="card mb-25">
    <img width={133} height={112} src="/img/Sneakers/3.svg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> 8 999 rub</b>
      </div>
      <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>

  <div className="card mb-25">
    <img width={133} height={112} src="/img/Sneakers/4.jpg" alt="Sneakers" />
    <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Price:</span>
        <b> 11 999 rub</b>
      </div>
      <button className="button">
      <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
      </button>
    </div>
  </div>

 </div>
 

   </div>
  </div>
  
}

export default App;
