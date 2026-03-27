import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

export default function HomePage() {

    const [homeFilms, setHomeFilms] = useState([])

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setHomeFilms(data.results)

            })
    }, [])

    return (
        <>
            <div className="container">
                <h3 id="current_title" className="text-danger">I titoli del momento:</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 d-flex">
                    {homeFilms.map(film => (
                        <div className="col pt-3">
                            <div id="card_home" className="card bg-black">
                               <img id="img_home" src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
                            </div>
                            
                         </div>   
                    ))}
                        
                </div>
            </div>
        </>
    )
}