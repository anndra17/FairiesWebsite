import { Routes } from '@angular/router';
import { SITE_CONTENT } from './content/site-content';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/pages/home-page/home-page.component').then((module) => module.HomePageComponent), title: SITE_CONTENT.pageTitle },
  { path: '**', redirectTo: '' },
];
