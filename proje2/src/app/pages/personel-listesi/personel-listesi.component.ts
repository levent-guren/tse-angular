import { Component, Inject, inject } from '@angular/core';
import { Personel } from '../../shared/model/personel';
import { PersonelService } from '../../shared/services/personel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personel-listesi',
  standalone: true,
  imports: [],
  templateUrl: './personel-listesi.component.html',
  styleUrl: './personel-listesi.component.scss'
})
export class PersonelListesiComponent {
  personeller: Personel[];

  personelService = inject(PersonelService);
  router = inject(Router);

  constructor() {
    this.personeller = this.personelService.personeller;
  }
  personelDetayaGit(personel: Personel) {
    this.router.navigate(['/personelDetay', personel.sicil]);
  }
}
