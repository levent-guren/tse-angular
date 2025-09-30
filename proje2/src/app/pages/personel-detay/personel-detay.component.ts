import { Component, inject, OnInit } from '@angular/core';
import { Personel } from '../../shared/model/personel';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PersonelService } from '../../shared/services/personel.service';

@Component({
  selector: 'app-personel-detay',
  standalone: true,
  imports: [],
  templateUrl: './personel-detay.component.html',
  styleUrl: './personel-detay.component.scss'
})
export class PersonelDetayComponent implements OnInit {
  personel: Personel | null = null;
  personelSira = 0;
  personelService = inject(PersonelService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    //let sicil = this.route.snapshot.paramMap.get('sicil');
    //if (sicil) {
    //  this.personel = this.personelBul(sicil);
    //}
    this.route.paramMap.subscribe((p: ParamMap) => {
      let sicil = p.get('sicil');
      if (sicil) {
        this.personel = this.personelBul(sicil);
      }
    });
  }
  personelBul(sicil: string): Personel | null {
    for (let i = 0; i < this.personelService.personeller.length; i++) {
      if (this.personelService.personeller[i].sicil == sicil) {
        this.personelSira = i;
        return this.personelService.personeller[i];
      }
    }
    return null;
  }
  sonrakiPersonel() {
    if (this.personelSira < this.personelService.personeller.length - 1) {
      const sonrakiSicil = this.personelService.personeller[this.personelSira + 1].sicil;
      this.router.navigate(['/personelDetay', sonrakiSicil]);
    }
  }
  oncekiPersonel() {
    if (this.personelSira > 0) {
      const oncekiSicil = this.personelService.personeller[this.personelSira - 1].sicil;
      this.router.navigate(['/personelDetay', oncekiSicil]);
    }

  }
}
