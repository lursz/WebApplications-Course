import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PhotosService, ImgDTO } from '../photos.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  providers: [PhotosService]
})
export class PhotoComponent {
  @Input() img!: ImgDTO;

}
