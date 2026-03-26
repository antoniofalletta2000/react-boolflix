import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import FilmStar from "./FilmStar";


export default function FilmsMap({ film }) {
    return (
        <>
            <li className=" col pt-4">
                <div className="card bg-dark text-white">
                    <div className="d-flex justify-content-center">
                        <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} className="card_poster" alt="" />
                    </div>
                    <div className="card-body card_info pt-5">
                        <div ><span className="fw-bold">Titolo:</span> {film.title}</div>
                        <div ><span className="fw-bold">Titolo originale:</span> {film.original_title}</div>
                        <div className="d-flex gap-2">
                            <span className="fw-bold">Paese d'origine:</span>
                            <div className={` fi fi-
                            ${film.original_language === "en" ? "gb" :
                                    film.original_language === "ja" ? "jp" :
                                        film.original_language === "zh" ? "cn" :
                                            film.original_language === "ko" ? "kr" :
                                                film.original_language}`}>
                            </div>
                        </div>

                        <div className="d-flex gap-2">
                            <span className="fw-bold">Voto:</span>
                            <FilmStar film={film} />
                        </div>
                        <div ><span className="fw-bold">Trama:</span> {film.overview}</div>
                    </div>

                </div>
            </li>

        </>
    )
}