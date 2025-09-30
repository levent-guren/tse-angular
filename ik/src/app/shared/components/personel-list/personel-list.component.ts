import { Component, inject, Input } from '@angular/core';
import { SorguKriter } from '../../models/personelSorguKriter';
import { JsonPipe } from '@angular/common';
import { Personel } from '../../models/personel';
import { PersonelService } from '../../services/personel.service';

@Component({
  selector: 'app-personel-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './personel-list.component.html',
  styleUrl: './personel-list.component.scss'
})
export class PersonelListComponent {
  private _kriter: SorguKriter;
  personelListesi: Personel[] = [];
  private personelService = inject(PersonelService);

  @Input()
  set kriter(yeniKriter: SorguKriter) {
    this._kriter = yeniKriter;
    if (yeniKriter) {
      // kriter undefined değilse
      this.personelListesiSorgula();
    }
  }
  get kriter(): SorguKriter {
    return this._kriter;
  }
  personelListesiSorgula() {
    this.personelService.getPersonellerSorgu(this._kriter).subscribe({
      next: (result) => {
        this.personelListesi = result;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
