import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  nameLower = signal('samuel');
  nameUpper = signal('SAMUEL');
  fullName = signal('SamUeL lEaL')

}
