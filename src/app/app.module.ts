import { HeaderComponent } from './header/header.component';
import { PostCreateComponent } from './Posts/Post-create/post-create.comoponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import { PostListComponent } from './Posts/Post-list/post-list.component';
import{MatExpansionModule} from '@angular/material/expansion'
const modules = [
  //MatButtonModule,
  //MatFormFieldModule,
   //MatRippleModule,
  MatInputModule,
  BrowserModule,
  FormsModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule

];
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
