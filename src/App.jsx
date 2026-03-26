import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])
  const [typeTitle, setTypeTitle] = useState("")
  console.log(typeTitle);

  function handleSubmit(e) {
    e.preventDefault()
    const API_KEY = import.meta.env.VITE_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${typeTitle}`
    const url_tv = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=${typeTitle}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setFilms(data.results)
        setTypeTitle("")
      });
    fetch(url_tv)
      .then(res => res.json())
      .then(data => {
        setSeries(data.results)
        setTypeTitle("")
      });
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={typeTitle} onChange={(e) => setTypeTitle(e.target.value)} />
        <button type="submit">Cerca</button>
      </form>

      <ul>
        {
          films.map(film => (
            <li key={film.id}>
              <div><img src={`https://image.tmdb.org/t/p/w342/${film.poster_path}`} alt="" /></div>
              <div>{film.title}</div>
              <div>{film.original_title}</div>
              <div className={`fi fi-${film.original_language === "en" ? "gb" : film.original_language === "ja" ? "jp" : film.original_language}`}></div>
              <div>{Math.ceil(film.vote_average / 2)}</div>
              <div>
                {
                  Math.ceil(film.vote_average / 2) === 0 &&
                  <div className="d-flex">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(film.vote_average / 2) === 1 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(film.vote_average / 2) === 2 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(film.vote_average / 2) === 3 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(film.vote_average / 2) === 4 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                 {
                  Math.ceil(film.vote_average / 2) === 5 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                }
              </div>
            </li>
          ))
        }
        {
          series.map(serie => (
            <li key={serie.id}>
              <div><img src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`} alt="" /></div>
              <div>{serie.name}</div>
              <div>{serie.original_name}</div>
              <div className={`fi fi-${serie.original_language === "en" ? "gb" : serie.original_language === "ja" ? "jp" : serie.original_language}`}></div>
              <div>{Math.ceil(serie.vote_average / 2)}</div>
              <div>
                {
                  Math.ceil(serie.vote_average / 2) === 0 &&
                  <div className="d-flex">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(serie.vote_average / 2) === 1 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(serie.vote_average / 2) === 2 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(serie.vote_average / 2) === 3 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                {
                  Math.ceil(serie.vote_average / 2) === 4 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star"></i>
                  </div>
                }
                 {
                  Math.ceil(serie.vote_average / 2) === 5 &&
                  <div className="d-flex">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                }

              </div>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default App
