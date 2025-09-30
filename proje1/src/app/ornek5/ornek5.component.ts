import { CurrencyPipe, DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { KisalticiPipe } from '../pipes/kisaltici.pipe';

@Component({
  selector: 'app-ornek5',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    KisalticiPipe,
  ],
  templateUrl: './ornek5.component.html',
  styleUrl: './ornek5.component.scss'
})
export class Ornek5Component {
  txt = '';
  isimler = ['Ahmet', 'Mehmet', 'Ayşe', 'Fatma', 'Zeynep'];
  tarih = new Date();
}
