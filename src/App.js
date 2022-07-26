import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Basket from './components/Basket'


const arr = [
  { 
  title: 'Мужские Кроссовки Nike Blazer Mid Suede',
  price: 10999, 
  imU: "/img/Sneakers/1.svg",
  },

  { 
  title: 'Мужские Кроссовки Nike Air Max 270',
  price: 9070,
  imU:"/img/Sneakers/2.jpg",
  },
  
  { 
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 7599, 
    imU: "/img/Sneakers/3.svg",
    },

    { 
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999, 
      imU: "/img/Sneakers/4.jpg",
      },
]

function App() {
  
  
  // const [count,SetCount] = React.useState(0);

  // const plus= ()=>{
  //   SetCount(count+1);
  // }

  // const minus= ()=>{
  //   SetCount(count-1);
  // }

  return <div className="wrapper clear">

  <Basket/> 

  <Header/>
       {/* <h1>{count}</h1>  
      <button onClick={()=>{plus()}}>+</button>
      <button onClick={()=>{minus()}}>-</button> */}
   <div className="content p-40">
   <div className="d-flex align-center mb-35 justify-between">
   <h1 className=" ml-30">All Sneakers</h1>
  <div className="search d-flex mr-30">
    <img src="/img/find.svg" alt="Search"/> 
    <input placeholder="Поиск ..."/>
  </div>
   </div>

 <div className="d-flex ">
  {arr.map((val)=>(
  <Card
  title={val.title}
  price={val.price}
  imU={val.imU}
  onLike={()=>console.log("Favorite")}
  onPlus={()=>console.log("Plus")} />)
  )
  } 
  </div>
  </div>
 </div> 
}
export default App;
