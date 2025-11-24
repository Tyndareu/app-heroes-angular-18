import { Routes } from '@angular/router';
import { HeroesListComponent } from './core/components/heroes-list/heroes-list.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'heroes/list', 
        pathMatch: 'full' 
    },
    { 
        path: 'heroes/list', 
        component: HeroesListComponent 
    },
    {
        path: '**',
        redirectTo: 'heroes/list',
        pathMatch: 'full'
    },

];
