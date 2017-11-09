import { Pipe, PipeTransform } from '@angular/core';
import { FilterService } from './filter.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(chickens: any, search?: any): any {
    if (search) { search = search.toLowerCase(); }
    return chickens.filter( (chicken ) => {
      let foundInName = chicken.name.toLowerCase().includes(search);
      let foundInHobby = chicken.hobby.toLowerCase().includes(search);
      return (foundInName || foundInHobby);
    });

  }

}
