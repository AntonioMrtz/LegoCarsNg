import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderProfile } from '../header-profile/header-profile.component';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { CampeonatoService } from '../services/campeonato.service';

@Component({
  selector: 'app-carrera',
  standalone: true,
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.scss',
  imports: [CommonModule, HeaderProfile, RouterLink, RouterLinkActive],
})
export class CarreraComponent {
  [x: string]: any;

  id = '';
  headerTitulo = '';
  imgCircuito = 'assets/imgs/circuito1.png';
  campeonatoPath = '';
  campeonatoService = new CampeonatoService();

  constructor(route: ActivatedRoute) {
    let path_id = route.snapshot.paramMap.get('id');
    path_id ? (this.id = path_id) : (this.id = '');
    this.headerTitulo = `Carrera ${this.id}`;
    this.imgCircuito =
      Math.random() < 0.49
        ? 'assets/imgs/circuito1.png'
        : 'assets/imgs/circuito2.png';
    this.campeonatoPath = `/campeonato/${
      this.campeonatoService.getCampeonatoFromCarrera(this.id).id
    }`;

    console.log(this.campeonatoPath);
  }
}
