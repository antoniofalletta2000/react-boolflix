import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import FilmStar from "./FilmStar";
import { useState } from "react";


export default function FilmsMap({ film , id}) {
    const [actors, setActors] = useState([])

    const API_KEY = import.meta.env.VITE_API_KEY

    const Cast= async () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
            .then(res=> res.json())
            .then(data=>{
                setActors(data.cast)
            })
    }
            
       

    
   
    
    return (
        <>
            <li className=" col pt-4" onMouseEnter={Cast}>
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
                        <span className="fw-bold">Cast:</span>
                        {
                            actors.map(act=>
                                <div key={act.id}>{act.name}</div>
                            ).slice(0,5)
                        }
                    </div>
                
                </div>
            </li>

        </>
    )
}