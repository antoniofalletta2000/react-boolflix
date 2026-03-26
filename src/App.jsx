import { useState, useEffect } from "react";
import "flag-icons/css/flag-icons.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import SeriesMap from "./components/SeriesMap";
import AppHeader from "./components/AppHeader";
import FilmsMap from "./components/FilmsMap";
function App() {
  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])
  const [typeTitle, setTypeTitle] = useState("")

  return (
    <>
      <AppHeader setFilms={setFilms} setTypeTitle={setTypeTitle} setSeries={setSeries} typeTitle={typeTitle} />
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          {typeTitle===""&& films.length===0 && <h1 id="boolflix" className="text-danger fw-bold">La pagina è vuota, prova a cercare un Film o una Serie Tv!</h1>}
        </div>
        
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex">
          {
            films.map(film => (
              <FilmsMap key={film.id} film={film}/>
            ))
          }

          {
            series.map(serie => (
              <SeriesMap key={serie.id} serie={serie}/>
            ))
          }
        </ul >

      </div>
    </>
  )
}

export default App
