import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'prueba', component: PruebaComponent },
];
