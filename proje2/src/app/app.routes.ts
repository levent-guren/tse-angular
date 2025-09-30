import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'personelListesi', pathMatch: 'full' },
    {
        path: 'personelListesi',
        loadComponent: () =>
            import('./pages/personel-listesi/personel-listesi.component').then(c => c.PersonelListesiComponent),
    },
    {
        path: 'personelDetay/:sicil',
        loadComponent: () =>
            import('./pages/personel-detay/personel-detay.component').then(c => c.PersonelDetayComponent),
    }
];
