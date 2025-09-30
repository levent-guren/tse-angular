import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SorguKriter } from '../models/personelSorguKriter';
import { Personel } from '../models/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {
  private http = inject(HttpClient);

  getPersonellerSorgu(kriter: SorguKriter) {
    kriter.adi = kriter.adi == '' ? null : kriter.adi;
    kriter.soyadi = kriter.soyadi == '' ? null : kriter.soyadi;

    return this.http.post<Personel[]>('/query', { adi: kriter.adi, soyadi: kriter.soyadi });
  }
}
