import { Routes } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list';
import { CityFormComponent } from './components/city-form/city-form';

export const routes: Routes = [
  { path: '', component: CityListComponent },
  { path: 'add', component: CityFormComponent },
  { path: '**', redirectTo: '' }
];
