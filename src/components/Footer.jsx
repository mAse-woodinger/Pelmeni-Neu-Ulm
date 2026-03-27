import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="company-info">
                <h2>Company Name</h2>
                <p>Address: 1234 Example St, City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (234) 567-8900</p>
            </div>
            <div className="links">
                <h3>Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="social-media">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;