import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { SolicitarCampeonatoComponent } from './solicitar-campeonato/solicitar-campeonato.component';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { CampeonatoComponent } from './campeonato/campeonato.component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'solicitar-campeonato', component: SolicitarCampeonatoComponent },
  { path: 'campeonatos', component: CampeonatosComponent },
  { path: 'campeonato/:id', component: CampeonatoComponent, pathMatch: 'full' },
];
