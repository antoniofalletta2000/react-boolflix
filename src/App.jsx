

function App() {

  const API_KEY= import.meta.env.VITE_API_KEY
  const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=matrix`

  console.log(url);
  
  return (
    <>
      
    </>
  )
}

export default App
