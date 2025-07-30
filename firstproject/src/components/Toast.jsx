import React from 'react'
import './Toast.css'

function Toast({ message, onClose }) {
    return (
        <>

            <div className="custom-toast">
                {message}
            </div>

            <button className='close-btn' onClick={onClose}>×</button>

        </>
    )
}

export default Toast