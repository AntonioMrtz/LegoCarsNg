import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfile } from '../header-profile/header-profile.component';
import { ActivatedRoute } from '@angular/router';
import { CarrerasCardComponent } from '../components/cards/carreras-card/carreras-card.component';
import { CampeonatoService } from '../services/campeonato.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-campeonato',
  standalone: true,
  templateUrl: './campeonato.component.html',
  styleUrl: './campeonato.component.scss',
  imports: [CommonModule, HeaderProfile, CarrerasCardComponent, FormsModule],
})
export class CampeonatoComponent {
  headerTitulo: string = '';
  id: string = '';
  carreras: any;
  campeonatoService = new CampeonatoService();
  tcoche = '';
  nserie = '';
  pmotor = 0;
  nruedas = 0;
  coches : any[] = [];

  constructor(route: ActivatedRoute) {
    let path_id = route.snapshot.paramMap.get('id');
    path_id ? (this.id = path_id) : (this.id = '');
    this.headerTitulo = `Campeonato ${this.id}`;

    if (path_id) {
      let campetonato = this.campeonatoService.obtenerCampeonato(path_id);
      this.carreras = campetonato.carreras;
    }
  }

  addCoche() {

    if(this.tcoche!=='' && this.nserie!==''){

      this.coches.push({
        tcoche: this.tcoche,
        nserie: this.nserie,
        pmotor: this.pmotor,
        nruedas: this.nruedas,
      });
    }
  }
}
