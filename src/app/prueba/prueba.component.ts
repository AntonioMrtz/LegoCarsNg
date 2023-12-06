import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampeonatoService } from '../services/campeonato.service';
import { HeaderProfile } from '../header-profile/header-profile.component';
@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, HeaderProfile],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent {
  private campeonatoService: CampeonatoService = new CampeonatoService;
  campeonatos: any;

  constructor() {
    this.campeonatos = this.campeonatoService.obtenerCampeonatos();
  }

}
