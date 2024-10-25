
// check data is available?
const getStoredCart = () =>{
  const storedCartString=  localStorage.getItem('cart')
if(storedCartString){
    return JSON.parse(storedCartString)
}
return [];
}

const savedCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
// add to localstorage

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id);
    savedCartToLS(cart)
}


export {addToLS};