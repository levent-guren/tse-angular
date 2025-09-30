import { Component, inject, OnInit } from '@angular/core';
import { PersonelService } from '../../shared/service/personel.service';
import { ToastrService } from 'ngx-toastr';
import { Personel } from '../../shared/models/personel';

@Component({
  selector: 'app-personel-listesi',
  standalone: true,
  imports: [],
  templateUrl: './personel-listesi.component.html',
  styleUrl: './personel-listesi.component.scss'
})
export class PersonelListesiComponent implements OnInit {
  private personelService = inject(PersonelService);
  personelListesi: Personel[] = [];
  private toastr = inject(ToastrService);

  ngOnInit() {
    this.personelService.getPersonelListesi().subscribe({
      next: (result) => {
        this.personelListesi = result;
      },
      error: () => {
        this.toastr.error('Personel Listesi Alınamadı');
      }
    });
  }

}
