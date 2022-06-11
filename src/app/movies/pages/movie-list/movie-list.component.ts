import { Component, OnInit } from '@angular/core';
import { FavoriteList, ListMovies, Movie } from '../../interface/movies.interface';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  listMoviesFavorite: any= [];
  listMoviesShow!: any;
  listMovies! :any;
  item!: Movie[];
  titleList: String = 'Lista de Películas';
  favoriteListTitle: String = 'Películas Favoritas';
  showBtnListMovies: boolean = false;
  showBtnFavoriteMovies: boolean = true;
  deleteBtn: boolean = false;
  deleteBtnA: boolean = true;
  id_session: any;

  constructor(
    private service: MoviesService,
  ) { 
    
  }

  ngOnInit(): void {
    this.getMoviesList();
    this.getMoviesApi();    
    this.id_session = localStorage.getItem('id_session')
  }
  
  getMoviesApi() {
    this.service.getMovies().subscribe( 
      (movies: ListMovies) => {
        this.listMovies = movies.results;
        this.listMoviesShow = this.listMovies;
            }
    )
  }

  getMoviesList() {
    this.service.getFavoriteList().subscribe(
      (data: FavoriteList) => {
        this.listMoviesFavorite = data.items;
      }
    )
  }

  addMovie(e: any) {
    this.addMovieListFavorite(e);
  }

  removeMovie(e: any) {
    this.deleteMovieList(e);
    this.getMoviesList();
    this.deleteElementsRepeat(this.listMovies, this.listMoviesFavorite);
  }


  addMovieListFavorite(id: number) {
    // this.parseList();
    this.service.addMovieList(id).subscribe(
      (data:any) =>{
        this.getMoviesList();
      },
      err => {
        console.log(err);
      } 
      
    )
  }

  deleteMovieList(id: number) {
    this.service.removeMovieList(id).subscribe(
      (data:any) =>{
        this.getMoviesList();
      },
      err => {
        console.log(err);
      } 
    )
  }

  deleteElementsRepeat(arrA: any, arrB: any) {
  
    // let result = arrA.concat(arrB);
    // console.log(result)
    // let hash:any = {};
    // result = result.filter((o:any) => hash[o.id] ? false : hash[o.id] = true);
    // console.log(result);

    for (let i=0; i< arrA.length; i++ ) {
      let equal = false;
      for (let j=0; j < arrB.length; j++ ) {
        if (arrA[i]['id'] === arrB[j]['id']) {
          arrA.splice(i, 1);
        }
      }
    }
    return arrA;
    

    // this.listMovies = arrA;
    // console.log(this.listMovies);
    // return result;
  }
}
