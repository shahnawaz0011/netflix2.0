import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../../../axios/axios'

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies , setMovie] = useState([]);


    const base_url = 'https://image.tmdb.org/t/p/original';

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(request,'reqq');
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL])


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
        {movies.map((movie) => (
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
                <img className={`row_poster ${isLargeRow && "row_poster_large"}`} 
                key={movie.id}
                src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`} alt={movie.name}/>
            )
            
        ))}
        </div>
    </div>
  )
}

export default Row