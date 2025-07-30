import React, { useState } from 'react'

import './FormValidate.css'

function FormValidate() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [formData, setFormData] = useState([])


    function handleForm(e) {
        e.preventDefault();
        alert("Form Submitted");
        setFormData([userName, password]);
    }

    function f1(e) {

        console.log(e.target.value)
        setUserName(e.target.value) 

    }

    function f2(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <>
            <div className='form'>
                <div className='form-container'>
                    <form onSubmit={handleForm}>

                        Enter Your UserName: <br />
                         <input type="text" onChange={f1} required /> <br />

                        {userName.length == 0 ? " " : (userName.length) < 8 ? <span style={{ color: "red" }}>user name should be greater than 8 characters</span> : <span style={{ color: "green" }}>username is valid</span>}

                        <br /><br />
                        Enter Your Password: <br />
                        <input type="password" onChange={f2} required /> <br />

                        {password.length == 0 ? " " : (password.length) < 8 ? <span style={{ color: "red" }}>Password should be greater than 8 characters</span> : <span style={{ color: "green" }}>Password is valid</span>}

                        <br /><br />

                        <button>Submit</button>

                    </form>
                </div>
            </div>

            <hr />

            {formData[0]}           <br /> <br />
            {formData[1]}

        </>
    )
}

export default FormValidate