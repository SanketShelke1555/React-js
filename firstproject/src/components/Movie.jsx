import React, { useState } from 'react'

function Movie() {

    const [movieName, setMovieName] = useState("")
    const [movieList, setMovieList] = useState([]);

    const Add = (e) => {
        setMovieName(e.target.value);
    };

    const addMovie = () => {
        if (movieName.trim() === '')return;

            setMovieList([...movieList, movieName])
            setMovieName('');
    }

    return (
        <>

            <input type="text" onChange={Add} placeholder='Enter Your Movie:' value={movieName} />

            <button onClick={addMovie}>Add</button>

            <ol>
                {movieList.map((movie,index)=>(
                    <li key={index}>{movie}</li>
                ))}
            </ol>

        </>
    )
}

export default Movie