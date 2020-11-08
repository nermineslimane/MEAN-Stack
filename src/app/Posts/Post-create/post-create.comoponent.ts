import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.comoponent.css'],
})
export class PostCreateComponent {
  entredTitle = '';
  entredContent = '';
  @Output() postCreated = new EventEmitter<Post>();
  onAddPost() {
    const post: Post = {
      title: this.entredTitle,
      content: this.entredContent,
    };
    this.postCreated.emit(post);
  }
}
