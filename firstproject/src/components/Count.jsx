import React, { useState } from 'react'
import './Count.css'

function Count() {


    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1)
    }

    function sub(){
        setCount(count > 0 ? count - 1 : 0);
    }

    const [price,setPrice] = useState(200);





    return (
        <>

            <div className='count'>
                <button onClick={sub}>-</button>
                <h2>{count}</h2>
                <button onClick={add}>+</button>
                <h1>Total Price Rs:{count * price}</h1>
            </div>

        </>
    )
}

export default Count