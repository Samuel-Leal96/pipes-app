import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes basicos',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
  },
  {
    path: 'numbers',
    title: 'Numbers pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component')
  },
  {
    path: 'uncomon',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page.component')
  },
  {
    path: 'custom',
    title: 'Pipes personalizados',
    loadComponent: () => import('./pages/custom-page/custom-page.component')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
