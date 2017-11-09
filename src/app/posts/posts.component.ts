import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilterService } from '../filter.service';
import { FilterPipe } from '../filter.pipe';

interface Chicken {
  name: string;
  hobby: string;
}

const CHICKENS: Chicken[] = [
  { name: 'pedro', hobby: 'freesbee sur la plage'},
  { name: 'marguerite', hobby: 'faire de l\'aquagym'},
  { name: 'bobby', hobby: 'aller au cinema'},

];


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],

})
export class PostsComponent implements OnInit {

  chickens: Chicken[];
  search: string;

  constructor(private filter: FilterService) {
    this.chickens = CHICKENS;
  }

  ngOnInit() {
    this.filter.search.subscribe(s  => {
      this.search = s ;
    });
  }

}
