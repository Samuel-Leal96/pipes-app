import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Tampico, México'
};

const client2 = {
  name: 'Alejandra',
  gender: 'female',
  age: 30,
  address: 'Texas, Estados Unidos'
}

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe

  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //* i18n Select pipe

  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client2);
  }



  //* i18nPluralPipe

  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando'
  })

  clients = signal([
    'Samuel',
    'Maria',
    'Noe',
    'Eric',
    'Mariana',
    'Carlos',
    'Margarita'
  ])

  deleteClient(){
    this.clients.update( (prev) => prev.slice(1));
  }

  //* KeyValue Pipe
  profile = {
    name:  "Mario",
    age: 34,
    address: 'Monterrey, Nuevo León'
  }

  //* Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos la data en la promesa-.');
      console.log('Promesa finalizada');
    }, 3500);

  })

 }
