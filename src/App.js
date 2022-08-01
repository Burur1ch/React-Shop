import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import Basket from './components/Basket'
import Axios from 'axios'




function App() {

  
  
  const [item,SetItems] = React.useState([]);
  const [CartItems,SetCart] = React.useState([]);
  const [Favorite,SetFavorite] = React.useState([]);
  const [Opeon,SetOpen] = React.useState(false);
  const [finder,SetFinder]=React.useState('')

  React.useEffect(()=>{
   
   //-----------------------------Analog Axios---------------------------//
    // fetch('https://62e00862fa8ed271c47d0b51.mockapi.io/Items').then(res=>{
    //   return res.json();
    // }).then(json=>{
    //   SetItems(json);
    // });
   //--------------------------------------------------------------------//


    Axios.get('https://62e00862fa8ed271c47d0b51.mockapi.io/Items').then(res=>{
      SetItems(res.data);
    });

    Axios.get('https://62e00862fa8ed271c47d0b51.mockapi.io/Basket').then(res=>{
      SetCart(res.data);
    })

    Axios.get('https://62e00862fa8ed271c47d0b51.mockapi.io/Favorite').then(res=>{
      SetFavorite(res.data);
    })
  },[])

  
const OnSearch=(event)=>{
  SetFinder(event.target.value)
}

 const onAddToCart =(TIP)=>{

  Axios.post('https://62e00862fa8ed271c47d0b51.mockapi.io/Basket', TIP)

  SetCart((prev)=>[...prev,TIP]);

 }

 const onFavorite =(bip)=>{

  Axios.post('https://62e00862fa8ed271c47d0b51.mockapi.io/Favorite', bip)

  SetFavorite((prev)=>[...prev,bip]);
 }

const onDeleteCart = (id) =>{
  Axios.delete(`https://62e00862fa8ed271c47d0b51.mockapi.io/Basket/${id}`)
  SetCart((prev)=>prev.filter((item)=>item.id !== id));
}

  return <div className="wrapper clear">
  
 { Opeon ? <Basket items={CartItems} onRemove={onDeleteCart} OnCloseBascet={()=>SetOpen(Opeon=>!Opeon)}/> : null}
  <Header OnClickBascet={()=>SetOpen(Opeon=>!Opeon)}/>
  

   <div className="content p-40">
   <div className="d-flex align-center mb-35 justify-between">
   <h1 className=" ml-30">{finder ? `Поиск по запросу "${finder}"` : 'All Sneakers'}</h1>
  <div className="search d-flex mr-30">
    <img src="/img/find.svg" alt="Search"/> 
    {finder && 
    <img 
    onClick={()=>SetFinder('')} 
    className="clear removeBtn cu-p" 
    src="/img/Krest.svg" 
    alt="Clear"/> }
    <input onChange={OnSearch} value={finder}  placeholder="Поиск ..."/>
  </div>
   </div>

 <div className="d-flex flex-wrap ">
  {item.filter((val)=> val.title.toLowerCase().includes(finder.toLowerCase()))
  .map((val, index)=>(
  <Card key={index}
  title={val.title}
  price={val.price}
  imU={val.imU}
  onPlus={onAddToCart} 
  onLike={onFavorite }
  />)
  )
  } 
  </div>
  </div>
 </div> 
}
export default App;
