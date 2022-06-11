export interface Movie {
    adult: boolean;
    backdrop_path:  string;
    genre_ids: string[];
    id: number;
    original_language: string,
    original_title:  string;
    overview:  string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string,
    video: false
    vote_average: number;
    vote_count: number;
}

export interface ListMovies {
    page: number;
    results: object[];
    total_pages: number;
    total_results: number;
}

export interface FavoriteList {
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    items: object[];
    item_count: number;
    iso_639_1: string;
    name: string;
    poster_path?: any;
}