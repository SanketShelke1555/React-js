import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Toast from './Toast';
import './Manager.css'


function Manager() {

    const navigate = useNavigate();
    const location = useLocation();
    const { mail, pass } = location.state;
    const onBack = () => {
        navigate("/")
    }

    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        setShowToast(true); // Show toast on mount

        const timer = setTimeout(() => {
            setShowToast(false); // Hide toast after 3 seconds
        }, 5000);

        return () => clearTimeout(timer); // Clean up on unmount
    }, []);

    return (
        <>
            <div className="manager-container">
                <h1 className="manager-title">Welcome, Manager!</h1>

                <div className="manager-info">
                    <p><strong>Email:</strong> {mail}</p>
                    <p><strong>Password:</strong> {pass}</p>
                </div>

                <button onClick={onBack} className="back-btn">⬅ Back</button>
            </div>

            {showToast && (
                <Toast
                    message="👋 Welcome Manager!"
                    onClose={() => setShowToast(false)}
                />
            )}

        </>
    )
}

export default Manager