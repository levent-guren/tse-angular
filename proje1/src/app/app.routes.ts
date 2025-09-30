import { Routes } from '@angular/router';
import { Ornek1Component } from './ornek1/ornek1.component';
import { Ornek2Component } from './ornek2/ornek2.component';
import { MenuComponent } from './menu/menu.component';
import { Ornek3Component } from './ornek3/ornek3.component';
import { Ornek4Component } from './ornek4/ornek4.component';
import { Ornek5Component } from './ornek5/ornek5.component';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'ornek1', component: Ornek1Component },
    { path: 'ornek2', component: Ornek2Component },
    { path: 'ornek3', component: Ornek3Component },
    { path: 'ornek4', component: Ornek4Component },
    { path: 'ornek5', component: Ornek5Component },
];
