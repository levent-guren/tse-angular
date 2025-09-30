import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ornek2',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ornek2.component.html',
  styleUrl: './ornek2.component.scss'
})
export class Ornek2Component {
  x = "hata";
  text1 = false;

  cssSinifi = {
    hata: this.text1,
    pointer: !this.text1
  }

  test() {
    this.text1 = !this.text1;
    this.x = "";
    this.cssSinifi.hata = this.text1;
  }
}
