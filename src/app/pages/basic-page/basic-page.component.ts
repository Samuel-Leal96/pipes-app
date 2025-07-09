import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('samuel');
  nameUpper = signal('SAMUEL');
  fullName = signal('SamUeL lEaL');

  customDate = signal ( new Date() );

  tickingDateEffect = effect((onCleanup)=>{
    const interval = setInterval(() => {
      this.customDate.set(new Date())
      console.log('tic tak');
    }, 1000);

    onCleanup(()=>{
      clearInterval(interval);
    })
  })

  changeLocale(locale: availableLocale){
    console.log({locale});
    this.localeService.changeLocale(locale);
  }

}
