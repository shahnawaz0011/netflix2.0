import React, { useCallback } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
    
    // const { id : movieId } = useParams();
    const {state: {movie}} = useLocation()
    console.log(movie);
    return (
        <div className='movie-details' style={{backgroundPosition:'center' , backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundSize:'cover'}}>
            <div className='movie-details__overview'>
              <h1 >{movie.name}</h1>
              <h2>{movie.overview}</h2>
              <h3>Rating : <span style={{backgroundColor:'red',color:'black', padding:'2px', borderRadius:'5px'}}>{movie.vote_average}</span></h3>
            </div>
        </div>
    )
}

export default MovieDetails