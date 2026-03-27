import React from 'react';

const Pricing = () => {
  const pricingTiers = [
    { size: 'Small', price: '$5.00' },
    { size: 'Medium', price: '$10.00' },
    { size: 'Large', price: '$15.00' },
  ];

  return (
    <div>
      <h1>Pricing</h1>
      <ul>
        {pricingTiers.map((tier, index) => (
          <li key={index}> {tier.size}: {tier.price} </li>
        ))}
      </ul>
    </div>
  );
};

export default Pricing;