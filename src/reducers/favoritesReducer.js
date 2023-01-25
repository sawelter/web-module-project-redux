/*
Include the following state values in your initialState setup:

 Import your new reducer file into the ./reducers/index.js file. As a start, only add a default case to the switch statement.

 In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.

 Notice that your movie functions no longer work. Why? Make changes necessary to get the component connected to the movie reducer working again.

 Connect the favorites state to the FavoriteMovieList component and test.

 Connect the displayFavorites state to the Movie and MovieHeader component.
*/

import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";


const initialState = {
    favorites: [],
    displayFavorites: true
}



const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: [state.favorites.filter(movie => {
                    return movie.id !== action.payload;
                })]
            };
        default:
            return state;
    }
}

export default favoritesReducer;