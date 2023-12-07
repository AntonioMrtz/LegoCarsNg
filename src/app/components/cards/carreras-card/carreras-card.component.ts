import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from '../base-card/base-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-carreras-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './carreras-card.component.html',
  styleUrls: [
    '../base-card/base-card.component.scss',
    './carreras-card.component.scss',
  ],
})
export class CarrerasCardComponent extends BaseCardComponent {
  constructor() {
    super();
    this.img =
      Math.random() < 0.49
        ? 'assets/imgs/circuito1.png'
        : 'assets/imgs/circuito2.png';

    this.routePath = '/carreras/';
  }
}
