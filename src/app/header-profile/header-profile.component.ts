import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss'
})
export class HeaderProfile {
  @Input() headerTitle = 'Home';

}
