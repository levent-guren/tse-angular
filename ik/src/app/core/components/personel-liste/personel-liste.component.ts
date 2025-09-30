import { Component } from '@angular/core';
import { PersonelSorguKriterComponent } from "../../../shared/components/personel-sorgu-kriter/personel-sorgu-kriter.component";
import { PersonelListComponent } from '../../../shared/components/personel-list/personel-list.component';
import { SorguKriter } from '../../../shared/models/personelSorguKriter';

@Component({
  selector: 'app-personel-liste',
  standalone: true,
  imports: [
    PersonelSorguKriterComponent,
    PersonelListComponent,
  ],
  templateUrl: './personel-liste.component.html',
  styleUrl: './personel-liste.component.scss'
})
export class PersonelListeComponent {
  kriter: SorguKriter;

  personelSorgula(kriter: SorguKriter) {
    this.kriter = kriter;
  }
}
