import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { PersonelListeComponent } from './core/components/personel-liste/personel-liste.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {
        path: 'main', component: LayoutComponent,
        children: [
            { path: 'personelListe', component: PersonelListeComponent }
        ]
    }
];
