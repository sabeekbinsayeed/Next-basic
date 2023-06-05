import React from 'react';

const pages = async ({ params }) => {
    const id = params.id;


    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const main_data = await response.json();
    return (
        <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.body}</p>

        </div>
    );
};

export default pages;