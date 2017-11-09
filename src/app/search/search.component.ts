import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../filter.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {



  constructor(private filter: FilterService) { }

  changeSearch(e) {
    this.filter.filterSearch(e);
   }

  ngOnInit() {

  }



}
