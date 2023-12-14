import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  contacts = [
    { name: 'Anna', phone: '123-456-789', email: 'anna@example.com', showDetails: false },
    { name: 'Bartek', phone: '987-654-321', email: 'bartek@example.com', showDetails: false },
    { name: 'Cezary', phone: '456-789-123', email: 'cezary@example.com', showDetails: false }
  ];
  toggleDetails(contact: { showDetails: boolean; }) {
    contact.showDetails = !contact.showDetails;
  }
}