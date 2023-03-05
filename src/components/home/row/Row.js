import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../../../axios/axios'
import RowSkeleton from './rowSkeleton/RowSkeleton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../../app/action/movies';

function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovie] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const base_url = 'https://image.tmdb.org/t/p/original';

    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        setTimeout(() => {
            const fetchData = async () => {
                await axios.get(fetchURL)
                .then((result)=>{
                    console.log(result, 'reqq');
                    setMovie(result.data.results);
                    setIsLoading(false);
                    localStorage.setItem('movies_list', JSON.stringify(result.data));
                    dispatch(addMovies({movies: result.data.results}))
                    return result;
                })
                
            }
            fetchData();
        }, 2000)


    }, [fetchURL])


    return (
        <div className='row'>
            
            <h2>{title}</h2>
            {!isLoading ? (
                <div className='row_posters'>
                {movies.map((movie, key) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <Link to={`/movieDetails/${movie.id}`} key={movie.id} state={{movie}}>
                        <img className={`row_poster ${isLargeRow && "row_poster_large"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path
                            }`} alt={movie.name} loading="lazy" />
                            </Link>
                    )
                ))}
            </div>) :
             <div className='row_posters row_posters__skeleton'>
                <RowSkeleton isLargeRow={isLargeRow}/>
            </div>}
             
        </div>
    )
}

export default Row