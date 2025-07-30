import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Top Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <button className="menu-btn" onClick={toggleSidebar}>☰</button>
                    <h1 className="logo">HI</h1>
                </div>
                <div className='navbar-menu'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </nav>

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>×</button>

                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  🏠 Home
                </NavLink>

                <NavLink 
                  to="/count" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  👤 Count
                </NavLink>

                <NavLink 
                  to="/card" 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  💼 Card
                </NavLink>

                
            </div>
        </>
    );
};

export default SideBar;
