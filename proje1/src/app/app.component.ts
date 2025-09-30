import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ornek1Component } from "./ornek1/ornek1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ornek1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proje1';
}
