import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderProfile } from '../header-profile/header-profile.component';
import { CampeonatoService } from '../services/campeonato.service';
@Component({
  selector: 'app-solicitar-campeonato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderProfile],
  templateUrl: './solicitar-campeonato.component.html',
  styleUrl: './solicitar-campeonato.component.scss'
})

export class SolicitarCampeonatoComponent {
  carreras: any = [];

  private campeonatoService: CampeonatoService = new CampeonatoService;
  carreraForm = new FormGroup({
    localizacion: new FormControl('', Validators.required),
    numeroMaxParticipantes: new FormControl('',Validators.required),
    fecha: new FormControl('',Validators.required),
  });

  addCarrera() {
    var newCarrera: any = { ...this.carreraForm.value }; // Copia los valores del formulario
    newCarrera.id = this.generarIdUnico();
    this.carreras.push(newCarrera);
    this.carreraForm.reset(); // Resetea el formulario después de añadir una carrera
  }

  solicitarCampeonato() {
    console.log(this.carreras);
    this.campeonatoService.anadirCampeonato(this.carreras);

  }

  borrarCarrera(id: string) {
    this.carreras = this.carreras.filter((carrera: { id: string; }) => carrera.id !== id);

  }

  private generarIdUnico(): string {
    return Math.random().toString(36).substring(2, 9);
  }

}
