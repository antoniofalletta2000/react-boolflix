import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import FilmStar from "./components/FilmStar";
import SerieStar from "./components/SerieStar";
import AppHeader from "./components/AppHeader";

function App() {
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])
  const [typeTitle, setTypeTitle] = useState("")





  return (
    <>
      <AppHeader setFilms={setFilms} setTypeTitle={setTypeTitle} setSeries={setSeries} typeTitle={typeTitle} />
      <div className="container">

        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex">
          {
            films.map(film => (
              <li key={film.id} className=" col pt-4">
                <div className="card bg-dark text-white">
                  <div className="d-flex justify-content-center">
                    <img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} className="card_poster" alt="" />
                  </div>
                  <div className="card-body card_info pt-2">
                    <div ><span className="fw-bold">Titolo:</span> {film.title}</div>
                    <div ><span className="fw-bold">Titolo originale:</span> {film.original_title}</div>
                    <div className="d-flex gap-2">
                      <span className="fw-bold">Paese d'origine:</span>
                      <div className={` fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language}`}></div>
                    </div>

                    <div className="d-flex gap-2">
                      <span className="fw-bold">Voto:</span>
                      <FilmStar film={film} />
                    </div>
                    <div ><span className="fw-bold">Trama:</span> {film.overview}</div>
                  </div>

                </div>
              </li>
            ))
          }

          {
            series.map(serie => (
              <li key={serie.id} className=" col pt-4">
                <div className="card bg-dark text-white">
                  <div className="d-flex justify-content-center">
                    <img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} className="card_poster" alt="" />
                  </div>
                  <div className="card-body card_info pt-2">
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
            ))
          }
        </ul >

      </div>
    </>
  )
}

export default App
