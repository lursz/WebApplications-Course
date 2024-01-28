import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ImgDTO, PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
  providers: [PhotosService]
})
export class PhotoComponent {
  @Input() img: ImgDTO = ImgDTO.empty();

  constructor(private route: ActivatedRoute, private service: PhotosService) {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');

      if (id === null) {
        return;
      }

      this.service.onImagesLoaded.subscribe(() => {
        this.img = this.service.getPhotoById(Number(id)) ?? ImgDTO.empty();
      });
    });
  }
}
