import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  http: HttpClient;
  posts: Post[] = [];

  constructor(http: HttpClient) {
    this.http = http;

    http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response as Post[];
      });
  }

  getPosts() {
    return this.posts;
  }

  getPost(id: number) {
    return this.posts.find(p => p.id === id);
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  postPost(post: Post) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', post)
      .subscribe(response => {
        console.log(response);
      });

  }
}




export class Post {
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