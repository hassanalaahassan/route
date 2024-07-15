import { Pipe, PipeTransform } from '@angular/core';
import { Orders } from '../orders';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(customr:Orders[],term:string): Orders[] {
    return customr.filter( customr => customr.name.toLowerCase().includes(term.toLowerCase()) );
  }

}
