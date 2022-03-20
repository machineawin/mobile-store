import './App.css';
import MobileStore from './Components/MobileStore';
import ShoppingCart from './Components/ShoppingCart';

function App() {

  const phones = [
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
]

//Add to cart
const addToCart = (id) => {
  // Duplicate phone object whose ID is passed in
  const phoneToAdd = phones.filter((phone) => phone.id === id)
  console.log (phoneToAdd)

  // Render above phone object in ShoppingCart
}

  return (
    <div className="App">
      <MobileStore phones = {phones} onAdd = {addToCart}/>
      <ShoppingCart />
    </div>
  );
}


export default App;
