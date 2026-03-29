import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import FilmStar from "./FilmStar";

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
                        <div key={film.id} className=" col pt-4">
                            <div className="card bg-dark text-white">
                                <div className="d-flex justify-content-center">
                                    <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className="card_poster" alt="" />
                                </div>
                                <div className="card-body card_info pt-5">
                                    <div ><span className="fw-bold">Titolo:</span> {film.title}</div>
                                    <div ><span className="fw-bold">Titolo originale:</span> {film.original_title}</div>
                                    <div className="d-flex gap-2">
                                        <span className="fw-bold">Paese d'origine:</span>
                                        <div className={` fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language === "zh" ? "cn" : film.original_language === "ko" ? "kr" : film.original_language}`}>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <span className="fw-bold">Voto:</span>
                                        <FilmStar film={film} />
                                    </div>
                                    <div ><span className="fw-bold">Trama:</span> {film.overview}</div>
                                </div>
                                
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}