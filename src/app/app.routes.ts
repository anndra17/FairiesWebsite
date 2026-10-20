import { Routes } from '@angular/router';
import { SITE_CONTENT } from './content/site-content';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/pages/home-page/home-page.component').then((module) => module.HomePageComponent), title: SITE_CONTENT.pageTitle },
  { path: 'galerie', loadComponent: () => import('./features/gallery/gallery-page.component').then((module) => module.GalleryPageComponent), title: 'Galerie — Ursitoarele Fermecătoare' },
  { path: 'pachete-2026', loadComponent: () => import('./features/packages/packages-page.component').then((module) => module.PackagesPageComponent), title: 'Pachete 2026 — Ursitoarele Fermecătoare' },
  { path: 'povestea-noastra', loadComponent: () => import('./features/story/story-page.component').then((module) => module.StoryPageComponent), title: 'Misiunea și povestea noastră — Ursitoarele Fermecătoare' },
  { path: '**', redirectTo: '' },
];
