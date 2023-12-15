import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  http: HttpClient;

  images: ImgDTO[] = [];



  constructor(http: HttpClient) {
    this.http = http;

    http.get<ImgDTO[]>('https://jsonplaceholder.typicode.com/photos')
    .subscribe(response => {
      this.images = response as ImgDTO[];
    });
   }

   
   portImg(img: ImgDTO) {
    this.http.post('https://jsonplaceholder.typicode.com/photos', img)
    .subscribe(response => {
      console.log(response);
    });
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
}