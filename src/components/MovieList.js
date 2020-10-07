import React from 'react'

const MovieList = (props) => {
  const movieList = props.movies.map((movie, i) => {
    console.log(props.movies);
    return (
      <div key={i} className="col s12 m6 l3">
        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="no movie found" style={{ height:360 }} />
      </div>
    )
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {movieList}
        </div>
      </div>  
    </div>
  )
}

export default MovieList
