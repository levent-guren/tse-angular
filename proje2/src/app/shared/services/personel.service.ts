import { Injectable } from '@angular/core';
import { Personel } from '../model/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  personeller: Personel[] = [
    { sicil: '123', adi: 'Ayşe', soyadi: 'Uzun', email: 'auzun@gmail.com' },
    { sicil: '125', adi: 'Kerim', soyadi: 'Lale', email: 'kerim@hotmail.com' },
    { sicil: '132', adi: 'Murteza', soyadi: 'Kapi', email: 'mkapi@hotmail.com' },
    { sicil: '145', adi: 'Halime', soyadi: 'Uyur', email: 'haluyur@gmail.com' },
  ];

  constructor() { }
}
