import { Component } from '@angular/core';
import { Home } from '../home/home.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CampeonatosComponent } from '../campeonatos/campeonatos.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports:[Home,RouterOutlet,RouterLink,RouterLinkActive,CampeonatosComponent]
})
export class Sidebar {


}

