import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';

function LoginForm() {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    function f1(event) {
        event.preventDefault();

        const role = document.getElementById('role').value;
        const mail = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;

        if (role === "Manager") {
            navigate("/Manager", { state: { mail, pass } });
        }
        else if (role === "Boss") {
            navigate("/Boss", { state: { mail, pass } });
        }
        else if (role === "Employee") {
            navigate("/Emp", { state: { mail, pass } });
        }
        else {

            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        }
    }

    return (
        <>
            <form onSubmit={f1}>
                <div className='form'>
                    <div className="form-row">
                        <label htmlFor="email">Enter Email:</label>
                        <input type="email" id="email" required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="pass">Enter Password:</label>
                        <input type="password" id="pass" required />
                    </div>

                    <div className="form-row">
                        <label htmlFor="role">Select Role:</label>
                        <select id="role" name="role" >
                            <option value="">-- Select Role --</option>
                            <option value="Manager">Manager</option>
                            <option value="Employee">Employee</option>
                            <option value="Boss">Boss</option>
                        </select>
                    </div>

                    <button type="submit" className="submit">Submit</button>
                </div>
            </form>

            {showToast && (
                <Toast
                    message="⚠️ Please select a valid role!"
                    onClose={() => setShowToast(false)}
                />
            )}

        </>
    );
}

export default LoginForm;
