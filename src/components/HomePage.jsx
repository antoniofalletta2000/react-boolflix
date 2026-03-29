import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import HomeMap from "./HomeMap";

export default function HomePage() {

    const [homeFilms, setHomeFilms] = useState([])

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setHomeFilms(data.results)
            })
    }, [])

    
    return (
        <>
            <div className="container">
                <h2 id="current_title" className="text-danger">I titoli del momento:</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex">
                    {homeFilms.map(film => (
                        <HomeMap key={film.id}  film={film} id={film.id}/>
                    ))}

                </div>
            </div>
        </>
    )
}