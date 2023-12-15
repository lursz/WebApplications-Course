import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService, ImgDTO } from './photos.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PhotoComponent } from "./photo/photo.component";


@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [PhotoComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
  providers: [PhotosService]
})
export class PhotosComponent {
  service: PhotosService;

  constructor(service: PhotosService) {
    this.service = service;
  }

}
