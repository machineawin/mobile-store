import './App.css';
import MobileStore from './Components/MobileStore';
import ShoppingCart from './Components/ShoppingCart';
import { useState } from 'react';
import AddPhone from './Components/AddPhone';

function App() {

  const [phones, setPhones] = useState ([
    {
        id: 1,
        brand: 'Samsung',
        model: 'Galaxy S20',
        price: 700
    },
    {
        id: 2,
        brand: 'Google',
        model: 'Pixel 4',
        price: 600
    },
    {
        id: 3,
        brand: 'Apple',
        model: 'iPhone 7',
        price: 400
    },
])

const [cartPhones, setCartPhones] = useState ([])
const [cartTotal, setCartTotal] = useState (0)

//Add to cart
const addToCart = (id) => {
  // Duplicate phone object whose ID is passed in
  const phoneToAdd = phones.filter((phone) => phone.id === id)

  // Check if the same phone is already in the shopping cart
  const index = cartPhones.findIndex (phone => phone.id === id)

  //Add item if not already present in shopping cart (index = -1)
  if (index <0) {
    const addPhone = {...phoneToAdd[0], count : 1}
    setCartPhones ([...cartPhones, addPhone])   
  }
  //If item is already present in the shopping cart, increment count
  else {
    const newCartPhones = [...cartPhones]
    newCartPhones[index].count++  
    setCartPhones (newCartPhones)     
  }
  const totalArray = cartPhones.map(phone => phone.price*phone.count)
  const newTotal = totalArray.reduce((a, b) => a + b, 0)
  setCartTotal (newTotal)
  console.log ('cartPhones', cartPhones)
  console.log ('totalArray, newTotal, cartTotal', totalArray, newTotal, cartTotal) 
  
}

  return (
    <div className="App">
      <MobileStore phones = {phones} onAdd = {addToCart}/>
      <ShoppingCart phones = {cartPhones} total = {cartTotal}/>
    </div>
  );
}


export default App;
