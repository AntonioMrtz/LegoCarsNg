import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from '../info-panel/info-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InfoPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class Home {

}
