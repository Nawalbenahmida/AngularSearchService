import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';



import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PostsComponent } from './posts/posts.component';

import { FilterService } from './filter.service';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PostsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'posts', pathMatch: 'full'},
      { path: 'posts', component: PostsComponent},

    ])
  ],
  providers: [FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
