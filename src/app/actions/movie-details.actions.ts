export const LOAD_MOVIE_DESCRIPTION = 'LOAD_MOVIE_DESCRIPTION';
export const LOAD_MOVIE_DESCRIPTION_SUCCESS = 'LOAD_MOVIE_DESCRIPTION_SUCCESS';

export class LoadMovieDescriptionAction {
    readonly type = LOAD_MOVIE_DESCRIPTION;
    constructor(public payload: Number) { }
}

export class LoadMovieDescriptionSuccessAction {
    readonly type = LOAD_MOVIE_DESCRIPTION_SUCCESS;
    constructor(public payload: Response) { }
}

export type Action =
    LoadMovieDescriptionAction
    | LoadMovieDescriptionSuccessAction;
