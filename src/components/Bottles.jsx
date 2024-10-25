import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Header.css'
import { addToLS,getStoredCart, removeFromLS } from "../Utilities/localstorage";
import Cart from "../Cart/Cart";
const Bottles = () => {

const [bottles, setBottles] = useState([])
const[cart, setCart]= useState([])
useEffect( () =>{
    fetch('bottle.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
},[])
// load cart from local storage
useEffect(()=>{
    if(bottles.length){ 
        const storedCart = getStoredCart() ;
        const savedCart =[];
        for (const id of storedCart){
const bottle = bottles.find(bottle =>bottle.id === id)
if(bottle){

savedCart.push(bottle);
}
  }
  setCart(savedCart);

    }
} ,[bottles])


const handleAddToCart = bottle =>{
const newCart = [...cart, bottle];
setCart(newCart);
addToLS(bottle.id)

}

// remove cart ;two ways
 // visual cart remove
    // from local storage 
const handleRemoveFromCart = id =>{
   const remainingCart = cart.filter(bottle=> bottle.id!==id)
   setCart(remainingCart)
removeFromLS(id);
}

    return (
        <div>
            <h2> Bottles Available : {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
          <div className="bottle-container">
          {
                bottles.map(bottle=> <Bottle  
                    key={bottle.id} bottle={bottle}
                    handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;