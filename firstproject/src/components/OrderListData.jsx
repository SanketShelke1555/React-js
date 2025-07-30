import React, { useState } from 'react'

function OrderListData() {

    const [data, setData] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json))
    return (
        <>


            {
                data.map(user =>
                    <>
                        <ul key={user.id} >
                            <li><strong>ID: </strong>{user.id}</li>
                            <li><strong>UserId: </strong>{user.userId}</li>
                            <li><strong>Title: </strong>{user.title}</li>
                            <li><strong>Body: </strong>{user.body}</li>
                        </ul>
                    </>
                )
            }

        </>
    )
}

export default OrderListData