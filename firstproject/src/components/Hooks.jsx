import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Hooks() {
    const initialCount = 0;

    const [count, setCount] = useState(initialCount);

    const Reset = () => {
        setCount(initialCount);
        toast.info("Count Reset")

    }

    const  Increment = () =>{
        setCount(count + 1);
        toast.success("Count increment by 1")

    }

    const Decrement=()=>{
        setCount(count - 1);
        toast.error("Count Decrement by 1")
    }

    const incrementfive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
            
        }
        toast.success("Count Increment by 5")

    }
    return (
        <>
            Count:{count} <br /> <br />
            <button onClick={Reset}>Reset</button> <br /> <br />

            <button onClick={Increment}>Increment Count</button> <br /><br />

            <button onClick={Decrement}>Decrement Count</button> <br /><br />

            <button onClick={incrementfive}>Increment By 5</button>

            <ToastContainer />

        </>
    )
}

export default Hooks