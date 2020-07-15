import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movie => {
      const {title, IMDBRating, genres, poster} = movie
      return (
        <MovieCard key={title} title={title} IMDBRating={IMDBRating} 
        genres={genres} poster={poster} />
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
