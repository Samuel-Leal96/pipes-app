import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
  standalone: true
})

export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {

    if (!sortBy) return value;

    console.log({ sortBy });

    switch (sortBy) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));

      case 'canFly':
        return value.sort((a, b) => {

          if (a.canFly !== b.canFly){
            return a.canFly ? -1 : 1; //* true va primero, osea el que salga -1 quiere decir que lo ordena al inicio.
          }

          //* Si ambos tienen el mismo valor de canFly, ordenamos alfabéticamente
          return a.name.localeCompare(b.name, undefined, {sensitivity: 'variant'});
        });

      case 'color':
        return value.sort((a, b) => a.color - b.color);

      case 'creator':
        return value.sort((a, b) => a.creator - b.creator);

      default:
        break;
    }


    return []
  }
}
