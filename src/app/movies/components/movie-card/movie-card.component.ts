import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interface/movies.interface'
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent  {
  @Input() item!: any;
  @Input() show!: boolean;
  @Output() movieSelect: EventEmitter<object> = new EventEmitter();

  urlImg: string = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';


  constructor() { }


  getId(ev: any) {
    console.log(ev.target.id);
    this.movieSelect.emit(ev.target.id)
  }
}
