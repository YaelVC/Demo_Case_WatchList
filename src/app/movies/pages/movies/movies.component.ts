import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  idUrlMovie: string;
  idMovie: string = '';
  movie: any;
  url='https://image.tmdb.org/t/p/w185_and_h278_bestv2/'

  constructor(
    private service: MoviesService,
    private router: Router,
  ) { 
      this.idUrlMovie = this.router.url;
  }

  ngOnInit(): void {
    this.idMovie = this.idUrlMovie.slice(1);
    this.getMovie();
    console.log(this.idMovie)
  }

  getMovie() {
    this.service.getMovie(this.idMovie).subscribe(
      (data: any) => {
        this.movie = data;
        console.log(data);
      }
    )
  }

}
