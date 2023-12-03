import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderProfile } from './header-profile/header-profile.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,Sidebar,RouterOutlet,HeaderProfile,AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LegoCarsNg';
}
