import { Component } from '@angular/core';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.comoponent.css']
})
export class PostCreateComponent{
newPost="";
entredValue=""

onAddPost(){

this.newPost=this.entredValue
}
}
