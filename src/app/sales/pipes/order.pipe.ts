import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.inferfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(heroes: Hero[], orderBy: string = 'valueless'): Hero[] {
    switch (orderBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));

      case 'fly':
        return heroes.sort((a, b) => (a.canFly > b.canFly ? -1 : 1));

      case 'colour':
        return heroes.sort((a, b) => (a.colour > b.colour ? 1 : -1));

      default:
        return heroes;
    }
  }
}
