import React from 'react'

function FormData() {

    //   keyvalue pair array
    const users = [                               
        { id: 1, name: 'Sanket', age: 21 },
        { id: 2, name: 'Chaitanya', age: 22 },
        { id: 1, name: 'Dodo', age: 23 },

        // it is also called as jason format

    ];


    return (
        <>
            <div>
                <h2>Form Data</h2>
                <table border = "1" cellPadding= "10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FormData