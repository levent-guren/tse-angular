import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SorguKriter } from '../../models/personelSorguKriter';

@Component({
  selector: 'app-personel-sorgu-kriter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personel-sorgu-kriter.component.html',
  styleUrl: './personel-sorgu-kriter.component.scss'
})
export class PersonelSorguKriterComponent {
  sorguKriter = new SorguKriter("", "");
  adi = '';
  soyadi = '';
  @Output('sorgula') sorgulaEvent = new EventEmitter();

  sorgula() {
    this.sorguKriter = { adi: this.adi, soyadi: this.soyadi };
    this.sorgulaEvent.emit(this.sorguKriter);
  }
}
