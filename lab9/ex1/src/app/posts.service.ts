import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  http: HttpClient;
  posts: PostDTO[] = [];
  images: ImgDTO[] = [];

  constructor(http: HttpClient) {
    this.http = http;

    http.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response as PostDTO[];
      });

      http.get<ImgDTO[]>('https://jsonplaceholder.typicode.com/photos')
        .subscribe(response => {
          this.images = response as ImgDTO[];
        });
    }
    
    postPost(post: PostDTO) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', post)
      .subscribe(response => {
        console.log(response);
      });
    }

    portImg(img: ImgDTO) {
      this.http.post('https://jsonplaceholder.typicode.com/photos', img)
      .subscribe(response => {
        console.log(response);
      });
    }
    
  }




export class PostDTO {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
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