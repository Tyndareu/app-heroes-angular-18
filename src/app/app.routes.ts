import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'heroes/list', 
        pathMatch: 'full' 
    },

    {
        path: 'heroes/list',
        loadComponent: () => 
            import('./core/components/heroes-list/heroes-list.component').then(m => m.HeroesListComponent)
    },

    {
        path: '**',
        redirectTo: 'heroes/list',
        pathMatch: 'full'
    },

];
