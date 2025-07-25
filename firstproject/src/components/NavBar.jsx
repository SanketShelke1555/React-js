import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
    return (
        <>
            <div className='Nav'>

                <Link to="/"><p className='menu'>Home</p></Link>
                <Link to="/card"><p className='menu'>Card</p></Link>
                <Link to="/count"><p className='menu'>Count</p></Link>

            </div>

        </>
    )
}

export default NavBar