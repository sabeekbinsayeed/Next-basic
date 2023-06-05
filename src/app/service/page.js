import React from 'react';
import styles from '@/app/styles/common.module.css';
import MovieCard from '../components/MovieCard';

const Service = async () => {
    console.log('dhuktese service e')
    await new Promise(resolve => setTimeout(resolve, 2000));
    // const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
    //         'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    //     }
    // };

    // const res = await fetch(url, options);
    // const data = await res.json();
    // const main_data = data.titles;
    // console.log('data', main_data)


    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const main_data = await response.json();
    // console.log('maindata ', main_data)


    return (
        <>
            <section className={styles.serviceSection}>
                <div className={styles.container}>
                    <h1>This is service</h1>
                    <div className={styles.card_section}>
                        <div className={styles.card_section}>
                            {
                                main_data.map((curElem) => {
                                    return <MovieCard key={curElem.id} {...curElem} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
