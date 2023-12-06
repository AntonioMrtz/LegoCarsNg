import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfile } from '../header-profile/header-profile.component';

@Component({
    selector: 'app-campeonato',
    standalone: true,
    templateUrl: './campeonato.component.html',
    styleUrl: './campeonato.component.scss',
    imports: [CommonModule, HeaderProfile]
})
export class CampeonatoComponent {


}
