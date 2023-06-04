import React from 'react';
import base from '../img/base.jpg'
import './Menu.css'
import { Link } from 'react-router-dom';

const Menu = ({data,handleCartItem}) => {
    
    return (
        
    <div className='cards'>
      <h2>Our Menu</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            {data.map((x)=>
            <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={x.price}>
            <img
              className='cards__item__img'
              alt='course'
              src={x.image}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{x.name}</h5>
          </div>
          <button
          className='Cartbtn'
          onClick={()=>handleCartItem(x)}
          >
            Add to Cart!
          </button>
        </div>
      </li>
            )}
           
          
           
          </ul>

        </div>
      </div>
    </div>
    );
}

export default Menu;
