import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CampeonatoService {
  private readonly CAMPEONATOS_KEY = 'campeonatos';

  anadirCampeonato(carreras: any[]): void {
    const campeonatos = this.obtenerCampeonatos();
    const nuevoCampeonato = {
      id: this.generarIdUnico(),
      carreras: carreras,
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
  obtenerCampeonato(id: string) {
    let campeonatos = this.obtenerCampeonatos();
    return campeonatos.find((campeonato) => campeonato.id == id);
  }

  private generarIdUnico(): string {
    return Math.random().toString(36).substring(2, 9);
  }

  getCampeonatoFromCarrera(id:string){
    let campeonatos = this.obtenerCampeonatos();
    return campeonatos.find((campeonato) => campeonato.carreras.find((carrera: any) => carrera.id===id));
  }
}
