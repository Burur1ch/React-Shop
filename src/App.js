import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Basket from './components/Basket'




function App() {
  
  const [item,SetItems] = React.useState([]);
  const [CartItems,SetCart] = React.useState([]);
  const [Opeon,SetOpen] = React.useState(false);
  const [finder,SetFinder]=React.useState('')

  React.useEffect(()=>{
    fetch('https://62e00862fa8ed271c47d0b51.mockapi.io/Items').then(res=>{
      return res.json();
    }).then(json=>{
      SetItems(json);
    });
  },[])

  
const OnSearch=(event)=>{
  SetFinder(event.target.value)
}

 const onAddToCart =(TIP)=>{
  SetCart(prev=>[...prev,TIP]);
 }

  return <div className="wrapper clear">
  
 { Opeon ? <Basket items={CartItems} OnCloseBascet={()=>SetOpen(Opeon=>!Opeon)}/> : null}
  <Header OnClickBascet={()=>SetOpen(Opeon=>!Opeon)}/>
  

   <div className="content p-40">
   <div className="d-flex align-center mb-35 justify-between">
   <h1 className=" ml-30">{finder ? `Поиск по запросу "${finder}"` : 'All Sneakers'}</h1>
  <div className="search d-flex mr-30">
    <img src="/img/find.svg" alt="Search"/> 
    {finder && 
    <img onClick={()=>SetFinder('')} className="clear removeBtn cu-p" src="/img/Krest.svg" alt="Clear"/> }
    <input onChange={OnSearch} value={finder}  placeholder="Поиск ..."/>
  </div>
   </div>

 <div className="d-flex flex-wrap ">
  {item.map((val, index)=>(
  <Card key={index}
  title={val.title}
  price={val.price}
  imU={val.imU}
  onPlus={onAddToCart} 
  onLike={()=>console.log('123') }
  />)
  )
  } 
  </div>
  </div>
 </div> 
}
export default App;
