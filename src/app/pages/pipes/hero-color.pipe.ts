import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../../interfaces/hero.interface';

@Pipe({
  name: 'heroColor',
  standalone: true
})

export class HeroColorPipe implements PipeTransform {

  transform(value: Color): string {
    console.log({heroColor: Color[value]});

    return Color[value];
  }

}
