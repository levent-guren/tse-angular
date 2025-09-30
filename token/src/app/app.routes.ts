import { Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { MenuComponent } from './core/component/menu/menu.component';
import { PersonelListesiComponent } from './pages/personel-listesi/personel-listesi.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'menu', component: MenuComponent,
        children: [
            { path: 'personelListesi', component: PersonelListesiComponent },
        ]
    },
];
