import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ornek3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ornek3.component.html',
  styleUrl: './ornek3.component.scss'
})
export class Ornek3Component {
  val = "";
  temizle() {
    this.val = "Merhaba";
  }
}
