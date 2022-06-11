import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteList, ListMovies } from '../interface/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey: String = 'c73137443b8135909e25587e280c14e3';
  private url: String = 'https://api.themoviedb.org/3/';
  private list_id:String = '8205745'
  private session_id: String = 'bff53c7111daa6137ba725e40b0a554d1455d2cf'

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    return this.http.get(`${this.url}authentication/token/new?api_key=${this.apiKey}`);
  };

  getSessionId(token: string) {
    const body = {
      "request_token": token
    }

    console.log(body)

    return this.http.post(`${this.url}authentication/session/new?api_key=${this.apiKey}`, body);
  }

  getMovies(): Observable<ListMovies> {
    return this.http.get<ListMovies>(`${this.url}discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc`);
  }

  getMovie(idMovie: string) {
    return this.http.get(`${this.url}movie/${idMovie}?api_key=${this.apiKey}&sort_by=popularity.desc`);
  }

  getFavoriteList(): Observable<FavoriteList> {
    return this.http.get<FavoriteList>(`${this.url}list/${this.list_id}?api_key=${this.apiKey}&language=en-US`)
  }

  addMovieList(id: number) {
    const body = {
      "media_id": id
    }
    return this.http.post(`${this.url}/list/${this.list_id}/add_item?api_key=${this.apiKey}&session_id=${this.session_id}`, body);
  }

  removeMovieList(id: number) {
    const body = {
      "media_id": id
    }

    return this.http.post(`${this.url}/list/${this.list_id}/remove_item?api_key=${this.apiKey}&session_id=${this.session_id}`, body);

  }
}
