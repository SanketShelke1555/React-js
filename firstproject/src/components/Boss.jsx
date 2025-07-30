import React, { useEffect, useState } from 'react'
import Toast from './Toast';
import { useLocation, useNavigate } from 'react-router-dom'
import './Boss.css'

function Boss() {
    const navigate = useNavigate();
    const location = useLocation();
    const { mail, pass } = location.state;

    const onBack = () => {
        navigate("/")
    }

    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        setShowToast(true);

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="boss-container">
                <h1 className="title">Welcome, Boss!</h1>
                <div className="info-box">
                    <p><strong>Email:</strong> {mail}</p>
                    <p><strong>Password:</strong> {pass}</p>
                </div>
                <button className="back-btn" onClick={onBack}>⬅ Back</button>
            </div>

            {showToast && (
                <Toast
                    message="👋 Welcome Boss!"
                    onClose={() => setShowToast(false)}
                />
            )}
        </>
    )
}

export default Boss