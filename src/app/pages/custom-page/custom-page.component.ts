import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../pipes/can-fly.pipe';
import { HeroColorPipe } from '../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../pipes/hero-sort-by.pipe';
import { Hero } from '../../../../.history/src/app/interfaces/hero.interface_20250722155204';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Samuel Leal');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null)

}
