import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  private readonly CAMPEONATOS_KEY = 'campeonatos';


  anadirCampeonato(carreras: any[]): void {
    const campeonatos = this.obtenerCampeonatos();
    const nuevoCampeonato = {
      id: this.generarIdUnico(),
      carreras: carreras
    };
    campeonatos.push(nuevoCampeonato);
    const campeonatosJson = JSON.stringify(campeonatos);
    localStorage.setItem(this.CAMPEONATOS_KEY, campeonatosJson);
  }

  obtenerCampeonatos(): any[] {
    const campeonatosJson = localStorage.getItem(this.CAMPEONATOS_KEY);
    if (campeonatosJson) {
      return JSON.parse(campeonatosJson);
    } else {
      return [];
    }
  }

  private generarIdUnico(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
