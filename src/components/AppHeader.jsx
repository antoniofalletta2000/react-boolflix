export default function AppHeader({ setFilms, setTypeTitle, setSeries, typeTitle }) {
    function handleSubmit(e) {
        e.preventDefault()
        const API_KEY = import.meta.env.VITE_API_KEY
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${typeTitle}`
        const url_tv = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=${typeTitle}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFilms(data.results)
                
            });
        fetch(url_tv)
            .then(res => res.json())
            .then(data => {
                setSeries(data.results)
                
            });
    }


    return (
        <>
            <div className="bg-dark">
                <div className="container pt-3 pb-2 ">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-between align-items-center">
                        <div className="col">
                            <h2 id="boolflix" className="text-danger">BOOLFLIX</h2>
                        </div>
                        <div className="col">
                            <form onSubmit={handleSubmit} className="d-flex">
                                <input type="text" className="border-0 rounded-start bg-light" value={typeTitle} onChange={(e) => setTypeTitle(e.target.value)} placeholder="Cosa vorresti guardare?" />
                                <div>
                                    <button type="submit" className="p-2 border-0 bg-danger text-white rounded-end">Cerca</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}