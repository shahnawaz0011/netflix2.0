import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import './RowSkeleton.css';
import '../Row.css';
const RowSkeleton = ({isLargeRow}) => {

    const count = isLargeRow ? 5 : 3;

    return (
        <>
            <div className={`row_poster__skeleton ${isLargeRow && "row_poster_large"}`} ><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            <div className='row_poster__skeleton'><SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={count} />
                </p>
            </SkeletonTheme>
            </div>
            {/* <div className='row_poster__skeleton'><Skeleton count={10}/></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div>
        <div className='row_poster__skeleton'><Skeleton /></div> */}
        </>
    )
}

export default RowSkeleton