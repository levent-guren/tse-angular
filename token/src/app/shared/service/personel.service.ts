import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Personel } from '../models/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  http = inject(HttpClient);

  getPersonelListesi() {
    return this.http.post<Personel[]>('/personelListesi', null);
  }
}
