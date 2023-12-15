import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  http: HttpClient;
  posts: PostDTO[] = [];

  constructor(http: HttpClient) {
    this.http = http;

    http.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response as PostDTO[];
      });
  }

  postPost(post: PostDTO) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', post)
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

