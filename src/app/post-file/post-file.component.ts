import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-file',
  templateUrl: './post-file.component.html',
  styleUrl: './post-file.component.css'
})
export class PostFileComponent {
  @Output() postAdded = new EventEmitter<string>();
  newPostText: string = '';
  posts: string[] = [];

  submitPost(){
    if(this.newPostText.trim() !== ''){
      this.posts.unshift(this.newPostText);
      this.newPostText = ''
    }
  }
}
