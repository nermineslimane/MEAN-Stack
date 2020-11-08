import { Post } from './../post.model';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  //posts=[
  //  {title:'First post',content:'This is the First post content'},
  //{title:'Second post',content:'This is the Second post content'},
  //{title:'Thrid post',content:'This is the Thrid post content'},
  //{title:'Fourth post',content:'This is the Fourth post content'}
  //]
  @Input() posts: Post[] = [];
}
