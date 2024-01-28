import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PostsService, PostDTO } from '../posts.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostsService]
})
export class PostComponent {
  @Input() post!: PostDTO;


}
