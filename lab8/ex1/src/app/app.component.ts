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
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
  selectedColor: string = '';

  setColor(color: string) {
    this.selectedColor = color;
  }
}
