export interface MovieDetailState {
    id: Number;
    title: String;
    tagline: String;
    vote_average: Number;
    vote_count: Number;
    release_date: String;
    poster_path: String;
    overview: String;
    budget: Number;
    revenue: Number;
    runtime: Number;
    genres: Array<String>;
}
