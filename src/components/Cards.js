import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    {/* <h1>It's Us vs Us </h1> */}
    <h1>Cause We Believe We Have Solutions</h1>


    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Upcoming Medical Product'
              label='New'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Ideas to Products'
              label='Coming soon'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Product'
              label='Educational Tech'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Product'
              label='Medical Tech'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Product'
              label='Rural Tech'
              path='/products'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
