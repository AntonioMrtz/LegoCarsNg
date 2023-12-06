import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { PruebaComponent } from './prueba/prueba.component';
import { SolicitarCampeonatoComponent } from './solicitar-campeonato/solicitar-campeonato.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'prueba', component: PruebaComponent },
  { path: 'solicitar-campeonato', component: SolicitarCampeonatoComponent}
];
