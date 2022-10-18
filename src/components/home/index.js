import React from 'react'
import './HomeScreen.css';
import Nav from './navBar/Nav';
import Banner from './banner/Banner';
import requests from '../../Request';
import Row from './row/Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>

            <Nav />

            {/* banner */}
            <Banner/>

            {/* Row */}
            <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title='TOP RATED' fetchURL={requests.fetchTopRated} />
            <Row title='ACTION MOVIES' fetchURL={requests.fetchActionMovies} />
            <Row title='COMEDY MOVIES' fetchURL={requests.fetchComedyMovies} />
            <Row title='HORROR MOVIES' fetchURL={requests.fetchHorrorMovies} />

        </div>

    )
}

export default HomeScreen