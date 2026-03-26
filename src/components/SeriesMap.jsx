import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import SerieStar from "./SerieStar";


export default function SeriesMap({ serie }) {
    return (
        <>
            <li  className=" col pt-4">
                <div className="card bg-dark text-white">
                    <div className="d-flex justify-content-center">
                        <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} className="card_poster" alt="" />
                    </div>
                    <div className="card-body card_info pt-5">
                        <div ><span className="fw-bold">Titolo:</span> {serie.name}</div>
                        <div ><span className="fw-bold">Titolo originale:</span> {serie.original_name}</div>
                        <div className="d-flex gap-2">
                            <span className="fw-bold">Paese d'origine:</span>
                            <div className={` fi fi-${serie.original_language === "en" ? "gb" : serie.original_language === "ja" ? "jp" : serie.original_language}`}></div>
                        </div>

                        <div className="d-flex gap-2">
                            <span className="fw-bold">Voto:</span>
                            <SerieStar serie={serie} />
                        </div>
                        <div ><span className="fw-bold">Trama:</span> {serie.overview}</div>
                    </div>

                </div>
            </li>

        </>
    )
}