import { Component } from '@angular/core';
import { Home } from '../home/home.component';
import { PruebaComponent } from '../prueba/prueba.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports:[Home,PruebaComponent,RouterOutlet,RouterLink,RouterLinkActive]
})
export class Sidebar {

}

