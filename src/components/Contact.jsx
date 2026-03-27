import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="location">
                <h3>Location</h3>
                <p>123 Pelmeni St, Neu-Ulm, Germany</p>
            </div>
            <div className="opening-hours">
                <h3>Opening Hours</h3>
                <p>Mon - Fri: 10:00 AM - 8:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
            </div>
            <div className="whatsapp">
                <h3>WhatsApp Us</h3>
                <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                    <button>WhatsApp</button>
                </a>
            </div>
        </div>
    );
};

export default Contact;