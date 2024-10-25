import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import './Header.css'
import { addToLS } from "../Utilities/localstorage";
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
    if(bottles.lengthv){
        const storedCart = getStoredCart() ;
        const savedCart =[];
        for (const id of storedCart){
const bottle = bottles.find(bottle=>bottle.id ===id)
if(bottle){

savedCart.push(bottle);
setBottles(savedCart)
}
        }
    }
} ,[bottles])


const handleAddToCart = bottle =>{
const newCart = [...cart, bottle];
setCart(newCart);
addToLS(bottle.id)

}

    return (
        <div>
            <h2> Bottles Available : {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
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