import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pelmeni Neu Ulm</h1>
        <p className="text-xl">Discover the flavors of authentic Pelmeni!</p>
        <button className="mt-6 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Order Now</button>
      </header>

      {/* Menu Showcase Section */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Classic Pelmeni</h3>
            <p>Delicious sour cream and herbs</p>
            <span className="font-bold">$10</span>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Beef Pelmeni</h3>
            <p>Savory beef filling, served hot</p>
            <span className="font-bold">$12</span>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Vegetarian Pelmeni</h3>
            <p>Fresh veggie filling with spices</p>
            <span className="font-bold">$11</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-blue-200 text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <p>Affordable pelmeni prices with quality ingredients!</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Standard Package</h3>
            <p className="text-lg font-bold">$15.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Family Package</h3>
            <p className="text-lg font-bold">$29.99</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Premium Package</h3>
            <p className="text-lg font-bold">$45.99</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <blockquote className="bg-gray-200 p-4 rounded shadow mb-4">
          <p>“The best pelmeni I have ever tasted!”</p>
          <cite>- Customer A</cite>
        </blockquote>
        <blockquote className="bg-gray-200 p-4 rounded shadow">
          <p>“Fantastic service and delightful flavors!”</p>
          <cite>- Customer B</cite>
        </blockquote>
      </section>

      {/* Contact Section */}
      <footer className="bg-blue-600 text-white text-center py-10">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <p>If you have any questions, feel free to contact us!</p>
        <p className="text-lg">Email: info@pelmenineulum.com</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
};

export default App;