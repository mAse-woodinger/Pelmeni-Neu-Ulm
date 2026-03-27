import React from 'react';
import './Menu.css';

const Menu = () => {
  const pelmeniVarieties = [
    {
      name: 'Classic Pelmeni',
      description: 'Traditional meat-filled dumplings served with sour cream.',
      price: '$10',
      image: 'https://example.com/classic-pelmeni.jpg'
    },
    {
      name: 'Mushroom Pelmeni',
      description: 'Delicious dumplings filled with seasoned mushrooms.',
      price: '$12',
      image: 'https://example.com/mushroom-pelmeni.jpg'
    },
    {
      name: 'Cheese Pelmeni',
      description: 'Savory dumplings filled with creamy cheese.',
      price: '$11',
      image: 'https://example.com/cheese-pelmeni.jpg'
    },
  ];

  return (
    <div className='menu'>
      <h1>Pelmeni Varieties</h1>
      <div className='pelmeni-list'>
        {pelmeniVarieties.map((pelmeni, index) => (
          <div key={index} className='pelmeni-item'>
            <img src={pelmeni.image} alt={pelmeni.name} />
            <h2>{pelmeni.name}</h2>
            <p>{pelmeni.description}</p>
            <span>{pelmeni.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;