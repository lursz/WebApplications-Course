import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex1';
  colors = ['czerwony', 'pomarańczowy', 'żółty', 'zielony', 'niebieski', 'indygo', 'fioletowy'];
  selectedColor = 'biały';

  onColorChange(color: string) {
    this.selectedColor = color;
  }
}
