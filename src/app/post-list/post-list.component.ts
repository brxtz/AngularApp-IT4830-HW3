import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: string[] = [];

  addPost(newPost: string){
    if(newPost.trim() !== ''){
      this.posts.unshift(newPost);
    }
  }
}
