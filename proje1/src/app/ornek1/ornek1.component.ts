import { Component } from '@angular/core';

@Component({
  selector: 'app-ornek1',
  standalone: true,
  imports: [],
  templateUrl: './ornek1.component.html',
  styleUrl: './ornek1.component.scss'
})
export class Ornek1Component {
  adi = 'Ahmet';
  adres = window.location.href;
  getAdi() {
    return this.adi;
  }
}
