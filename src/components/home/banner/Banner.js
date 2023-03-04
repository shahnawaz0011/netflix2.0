import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../../axios/axios'
// import request from '../../../Request';
import requests from '../../../Request';


function Banner() {

  const [movie, setMovie] = useState([]);

  const truncate = (string,n) =>{
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }



  useEffect(()=>{
    async function fetchData(){
      const request  = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request);

      return request;
    }

    fetchData();
  },[])

  return (
    <header className='banner' style={{ backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
      }}>
        <div className='banner-contents__wrapper'>
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(movie?.overview,150)}
        </h1>
      </div>
        <div className='banner__fadeButtom'/>
        </div>
    </header>
  )
}

export default Banner