import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  http: HttpClient;

  images: ImgDTO[] = [];
  onImagesLoaded: EventEmitter<void> = new EventEmitter<void>();


  constructor(http: HttpClient) {
    this.http = http;

    http.get<ImgDTO[]>('https://jsonplaceholder.typicode.com/photos')
    .subscribe(response => {
      this.images = response.slice(0, 20) as ImgDTO[];
      this.onImagesLoaded.emit();
    });
  }

  getPhotoById(id: number) {
    return this.images.find(img => img.id === id);
  }

}



export class ImgDTO {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(albumID: number, id: number, title: string, url: string, thumbnailUrl: string) {
    this.albumID = albumID;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }

  static empty() {
    return new ImgDTO(0, 0, '', '', '');
  }
}