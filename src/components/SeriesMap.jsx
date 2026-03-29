import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import SerieStar from "./SerieStar";
import { useState } from "react";


export default function SeriesMap({ serie,id }) {
    const [SerieActors, setSerieActors] = useState([])

     const API_KEY = import.meta.env.VITE_API_KEY

    const castSerie= async () =>{
        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`)
            .then(res=> res.json())
            .then(data=>{
                setSerieActors(data.cast)
            })
    }
    return (
        <>
            <li className=" col pt-4" onMouseEnter={castSerie}>
                <div className="card bg-dark text-white">
                    <div className="d-flex justify-content-center">
                        <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} className="card_poster" alt="" />
                    </div>
                    <div className="card-body card_info pt-5">
                        <div ><span className="fw-bold">Titolo:</span> {serie.name}</div>
                        <div ><span className="fw-bold">Titolo originale:</span> {serie.original_name}</div>
                        <div className="d-flex gap-2">
                            <span className="fw-bold">Paese d'origine:</span>
                            <div className={` fi fi-${serie.original_language === "en" ? "gb" : serie.original_language === "ja" ? "jp" : serie.original_language === "zh" ? "cn" : serie.original_language === "ko" ? "kr" : serie.original_language}`}>
                                        </div>
                        </div>

                        <div className="d-flex gap-2">
                            <span className="fw-bold">Voto:</span>
                            <SerieStar serie={serie} />
                        </div>
                        <div ><span className="fw-bold">Trama:</span> {serie.overview}</div>
                        <span className="fw-bold">Cast:</span>
                        {
                            SerieActors.map(actor=>
                                <div key={actor.id}>{actor.name}</div>
                            ).slice(0,5)
                        }
                    </div>

                </div>
            </li>

        </>
    )
}