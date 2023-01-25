import React from 'react';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        props.movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={props.movies.length}/>
        </div>
    );
}

const myMovies = [
    {
      id: 0,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: 100,
      genre: "Drama",
      description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
    }]

const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {})(MovieList);