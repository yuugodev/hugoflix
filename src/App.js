import Axios from 'axios'
import React, { Component } from 'react'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import Search from './components/Search'

class componentName extends Component {
  state = {
    movies: [],
    search: "",
    pageNumber: 1
  }
  
  apiKey = process.env.REACT_APP_MOVIEDB_KEY;
  handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`)
      .then(res => {
        console.log(res.data.results);
        this.setState({
          ...this.state,
          movies: res.data.results
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default componentName

