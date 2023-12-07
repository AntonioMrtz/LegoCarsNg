import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { BaseCardComponent } from '../base-card/base-card.component';
@Component({
  selector: 'app-campeonatos-card',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './campeonatos-card.component.html',
  styleUrls:['../base-card/base-card.component.scss','./campeonatos-card.component.scss']
})
export class CampeonatosCardComponent extends BaseCardComponent{

  constructor(){
    super()
  }
}
