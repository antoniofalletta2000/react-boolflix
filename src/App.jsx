import { useState, useEffect } from "react";

function App() {
  const [films, setFilms] = useState([])
  const [typeTitle, setTypeTitle] = useState("")
  console.log(typeTitle);

  function handleSubmit(e) {
    e.preventDefault()
    const API_KEY = import.meta.env.VITE_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${typeTitle}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setFilms(data.results)
      })
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
              <div>{film.title}</div>
              <div>{film.original_title}</div>
              <div>{film.original_language}</div>
              <div>{film.vote_average}</div>
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default App
