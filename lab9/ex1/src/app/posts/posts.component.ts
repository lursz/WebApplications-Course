import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsServiceService, Post } from '../posts-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PostComponent } from "./post/post.component";


@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.css',
    imports: [PostComponent, RouterLink, RouterLinkActive, CommonModule],
    providers: [PostsServiceService]
})
export class PostsComponent {
    service: PostsServiceService;

    constructor(service: PostsServiceService) {
        this.service = service;
    }

}
