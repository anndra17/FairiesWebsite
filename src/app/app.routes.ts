import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/pages/home-page/home-page.component').then((module) => module.HomePageComponent), title: 'Ursitoarele Fermecătoare | Magia primelor amintiri' },
  { path: '**', redirectTo: '' },
];
