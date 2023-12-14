import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex5';
  countries: string[] = [];
  newCountry: string = '';

  addCountry(): void{
    if (this.newCountry){
      this.countries.push(this.newCountry);
      this.newCountry = '';
    }
  }

  removeCountry(country: string){
    this.countries.splice(this.countries.indexOf(country), 1);
  }
}
