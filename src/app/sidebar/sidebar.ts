import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'


@Component({
  selector: 'sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports:[NgOptimizedImage]
})
export class Sidebar {

}

