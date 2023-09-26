import React, { useState } from 'react';
import './header.css'; // Import your CSS file

function Header() {
  // Example state variable and setter
  const [count, setCount] = useState(0);

  return (
    <div>
      <header className="header">
        <div className="logo">
        <img src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-1024.png" alt="Logo" />
             
             </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Location</li>
            <li className="nav-item">Service</li>
          </ul>
        </nav>
        <div className="contact">
          <a> Contact</a>
        </div>
      </header>
    </div>
  );
}

export default Header;