import React, { lazy, Suspense } from 'react'
import './HomeScreen.css';
import Nav from './navBar/Nav';
import Banner from './banner/Banner';
import requests from '../../Request';
// import Row from './row/Row';


const Row = lazy(() => import('./row/Row'));

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />

            <Banner />
            <Suspense >
                <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
                <Row title='TOP RATED' fetchURL={requests.fetchTopRated} />
                <Row title='ACTION MOVIES' fetchURL={requests.fetchActionMovies} />
                <Row title='COMEDY MOVIES' fetchURL={requests.fetchComedyMovies} />
                <Row title='HORROR MOVIES' fetchURL={requests.fetchHorrorMovies} />
            </Suspense>

        </div>

    )
}

export default HomeScreen