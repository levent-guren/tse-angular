import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal';
  isim = signal('');
  isimUzunlugu = computed(() => {
    console.log('isim uzunlugu hesaplanıyor');
    return this.isim().length
  });
  constructor() {
    effect(() => {
      console.log('effect()');
      console.log(this.isim());
    });
  }
  test() {
    //this.isim.set('Levent');
    this.isim.update((eskiDeger) => { return eskiDeger + "."; });

  }
  test2() {
    console.log(this.isimUzunlugu());
  }
  topla(a: number, b: number) {
    return a + b;
  }
}
