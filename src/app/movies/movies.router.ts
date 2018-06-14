import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];

export const moviesRouter = RouterModule.forChild(MOVIES_ROUTES);
