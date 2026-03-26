export default function SerieStar({serie}){
    return(
        <>
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
        </>
    )
}