import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';

// TODO: * [ ] **Find the HTML element that should trigger a deletion in the movie component.** Create and connect the necessary event handlers to call deleteMovie on the current movie's id. After setting the state, redirect the user using the push('/movies') command.


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movie = props.movies.find(movie=>movie.id===Number(id));

    const handleClick = (e) => {
        e.preventDefault();
        props.deleteMovie(id);
        push('/movies');

    }

    const handleFavorite = (e) => {
        e.preventDefault();
        props.addFavorite(movie);
        push("/movies");
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {props.displayFavorites ? <span className="m-2 btn btn-dark" onClick={handleFavorite}>Favorite</span> : ""}
                            <span className="delete">
                                <input 
                                    type="button" 
                                    className="m-2 btn btn-danger" 
                                    value="Delete" 
                                    onClick={handleClick}
                                />
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies,
        displayFavorites: state.favorites.displayFavorites,
    }
}

export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);