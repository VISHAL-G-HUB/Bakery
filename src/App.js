// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart';
import { useState } from 'react';
import walnut from './Components/img/walnut.jpg';
import cake from './Components/img/cake.jpg';

function App() {
  const data = [
    {
        id:'1',
        name:"Walnut Cake",
        price : 299,
        image : walnut
    },
    {
        id: '2',
        name:"Banana Cake",
        price : 399 ,
        image : cake
    },
    {
        id: '3',
        name:"Cheese Cake",
        price : 499 ,
        image : cake
    },
    {
        id: '4',
        name:"Choco Cake",
        price : 599 , 
        image : cake
    }
]
  const [cartItems , setCartItems] = useState([]);

  const handleCartItem = (product) =>{   
    
    const ProductExist = cartItems.find((items) => items.id === product.id);
     if(ProductExist){
      setCartItems(
        cartItems.map((item) => 
          item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1 }
          : item
      ));
     }
     else{
      setCartItems([...cartItems,{...product,quantity: 1}]);
     }       
    //  console.log(cartItems.length);
    alert('Item Added to cart! Thankk you')    
  }

  const handleRemoveItem = (product) =>{   
    
    const ProductExist = cartItems.find((items) => items.id === product.id);
     if(ProductExist.quantity === 1){
      setCartItems(
        cartItems.filter((item) => 
          item.id !== product.id ));
     }
     else{
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1 }
        : item
    ) 
      );
     }          
  }

  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' Component={() => (<Menu data={data} handleCartItem={handleCartItem} />)} exact/>
    <Route path='/cart' Component={() => (<Cart cartItems={cartItems} handleRemoveItem={handleRemoveItem}  />)}  />

    </Routes>
    </Router>
  );
}

export default App;
