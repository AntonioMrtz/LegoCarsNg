import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {

  public img:string;

  @Input() id: string = '';
  @Input() routePath:string = ''

  constructor() {
    this.img = Math.random() < 0.49
        ? 'assets/imgs/camp.png'
        : 'assets/imgs/camp2.png';
  }

}
