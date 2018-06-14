import * as movieDetailActions from '../actions/movie-details.actions';

export function MovieDetailReducer(state = [], action: movieDetailActions.Action) {
    switch (action.type) {
        case movieDetailActions.LOAD_MOVIE_DESCRIPTION_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
