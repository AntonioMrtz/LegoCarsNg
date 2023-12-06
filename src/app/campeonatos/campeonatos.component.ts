import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfile } from "../header-profile/header-profile.component";
import { CampeonatoService } from '../services/campeonato.service';
import { CampeonatosCardComponent } from '../components/cards/campeonatos-card/campeonatos-card.component';
@Component({
    selector: 'app-campeonatos',
    standalone: true,
    templateUrl: './campeonatos.component.html',
    styleUrl: './campeonatos.component.scss',
    imports: [CommonModule, HeaderProfile, CampeonatosCardComponent]
})
export class CampeonatosComponent {

  private campeonatoService: CampeonatoService = new CampeonatoService;
  campeonatos: any;

  constructor() {
    this.campeonatos = this.campeonatoService.obtenerCampeonatos();
    console.log(this.campeonatos)
  }
}
