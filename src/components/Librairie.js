import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './card';
import '../styles/Librairie.css'

const Librairie = () => {

    const api = "http://localhost:4001/shows";
    const [shows, setShows] = useState([]);

    function getShows(){
        axios.get(api)
        .then(({data}) => {
            setShows(data)
        })
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
        <>
            <h2>Mes jeux</h2>
            {
                (!shows || shows.length === 0)?
                <p>Votre librairie est vide :( </p>
            :
            <div className='grid'>
                {
                    shows.map(sh => <Card key={sh.id} title={sh.title} img={sh.image} status={sh.isPlayed}/>)
                }
            </div>
            }
        </>
    )
}
export default Librairie;