import React from 'react'
import './NavBar.css'

function NavBar(props) {
    return (
        <>
            <div className='Nav'>
                <p>{props.n1}</p>
                <p>{props.n2}</p>
                <p>{props.n3}</p>
            </div>

        </>
    )
}

export default NavBar