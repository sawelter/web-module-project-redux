/*
Include the following state values in your initialState setup:

 Import your new reducer file into the ./reducers/index.js file. As a start, only add a default case to the switch statement.

 In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.

 Notice that your movie functions no longer work. Why? Make changes necessary to get the component connected to the movie reducer working again.

 Connect the favorites state to the FavoriteMovieList component and test.

 Connect the displayFavorites state to the Movie and MovieHeader component.
*/


const initialState = {
    favorites: [],
    displayFavorites: true
}



const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default favoritesReducer;