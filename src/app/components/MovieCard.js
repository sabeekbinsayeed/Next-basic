import Link from 'next/link';
import React from 'react';

const MovieCard = (curElem) => {
    const { id, body, title } = curElem;
    console.log('curElem', curElem);

    const movieCardStyle = {
        display: 'flex',

    };

    const movieInfoStyle = {
        flex: 1,
    };

    return (
        <div >
            <div >
                <h1>{title}</h1>
                <Link href={`/service/${id}`}>
                    click here
                </Link>
                {/* <p>{body}</p> */}
            </div>
        </div>
    );
};

export default MovieCard;
