import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import { useState, useEffect } from 'react';

const Cart = ({cartItems,handleRemoveItem}) => {

   const calculateValue = () => {
        var amount = 0;
        cartItems.map((item)=>(
         amount+= item.quantity*item.price
        )
        )
        alert(`total bill amount is ${amount} ! Thanks for ordering`)
        console.log(`total bill amount is ${amount}`)
    };
    return (
        <div>
             {cartItems.length === 0 ? (
          <div>
            <h2 style={{marginTop:100}}>Your Cart is Empty </h2>
            <Link style={{marginTop:50,marginBottom:50}} className="nav-link" to="/"><button id="btn">Try Something</button> </Link>
          </div>
        ) :
    
        (
            <div >
            <h1>your Cart :</h1>
            {cartItems.map((item)=>(
            
             <div className='CartItem'>
                    <div >
                      {item.name}  -  {item.quantity}   
                    </div>
                    <button
                    onClick={()=>handleRemoveItem(item)}
                    >Remove</button>
                    

                
             </div>
            ))}
           <button onClick={calculateValue}>Checkout</button>
        </div>
        
      )}
      
      </div>
    );
}

export default Cart;
