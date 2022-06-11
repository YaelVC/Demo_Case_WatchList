import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children: [
      {
        path: 'listMovies',
        component: MovieListComponent,
      },
      {
        path: ':id',
        component: MoviesComponent
      },
    ],
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
