import { Idea } from './../classes/idea';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'filterCat'
})
export class FilterCatPipe implements PipeTransform {

  transform(ideas: any, term: string): any {
    if(term === undefined) 
        return ideas;
    
    return ideas.filter(idea => {
      return idea.category.toLowerCase().includes( term.toLowerCase() )
    } );
  }

}
