import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css file for styling

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Pelmeni Neu Ulm!</h1>
                <p>Your favorite spot for delicious Pelmeni.</p>
                <button>Order Now</button>
            </div>
        </div>
    );
};

export default Hero;