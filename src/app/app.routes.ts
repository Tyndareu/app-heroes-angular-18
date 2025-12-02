import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroes/list',
    pathMatch: 'full',
  },
  {
    path: 'heroes/list',
    loadComponent: () =>
      import('./heroes/pages/hero-list/hero-list.component').then(
        c => c.HeroListComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'heroes/list',
  },
];
