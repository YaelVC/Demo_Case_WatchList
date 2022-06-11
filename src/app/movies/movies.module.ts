import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './moviesRouting.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './service/movies.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TitleListComponent } from './components/title-list/title-list.component';
import { PosterPipe } from './pipes/poster.pipe';

@NgModule({
  declarations: [
    MovieListComponent,
    MoviesComponent,
    HomeComponent,
    MovieCardComponent,
    TitleListComponent,
    PosterPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MoviesService]
})

export class MoviesModule { }
