import { SearchComponent } from './search/search.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PostsComponent } from './posts/posts.component';




@Injectable()
export class FilterService {


  private searchSubject = new Subject<string>();

  search: Observable<string>;

  constructor() {
    this.search = this.searchSubject.asObservable();

   }

   filterSearch(e) {
      this.searchSubject.next(e);
  }



}
