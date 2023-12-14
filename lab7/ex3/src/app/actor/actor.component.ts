import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
  firstName: string = '';
  lastName: string = '';
  movieTitle: string = '';

}
