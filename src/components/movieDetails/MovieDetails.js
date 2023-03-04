import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
const {id} = useParams();
    const movies = localStorage.getItem('movies_list');
    console.log(id,'***********************************');
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails