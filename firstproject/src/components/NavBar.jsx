import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            
            <div className='Nav'>
                <button onClick={toggleSidebar}>☰</button>
                <Link to="/"><p className='menu'>Home</p></Link>
                <Link to="/card"><p className='menu'>Card</p></Link>
                <Link to="/count"><p className='menu'>Count</p></Link>

                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                
            </div>

        </div>
    );
}

export default NavBar;
