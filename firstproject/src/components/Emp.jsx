import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toast from './Toast';
import './Emp.css'
import TotalAsset from './TotalAsset';

function Emp() {
    const navigate = useNavigate();
    const location = useLocation();
    const { mail, pass } = location.state || {};

    const goBack = () => {
        navigate("/")
    }

    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        setShowToast(true);

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="emp-container">
                <h1 className="title">Welcome, Employee!</h1>
                <div className="info-box">
                    <p><strong>Email:</strong> {mail}</p>
                    <p><strong>Password:</strong> {pass}</p>
                </div>
                <button className="back-btn" onClick={goBack}>⬅ Back</button>
            </div>

            {showToast && (
                <Toast
                    message="👋 Welcome Employee!"
                    onClose={() => setShowToast(false)}
                />
            )}

            <TotalAsset/>
        </>
    )
}

export default Emp