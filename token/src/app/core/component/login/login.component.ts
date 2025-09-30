import { Component, inject } from '@angular/core';
import { Login } from '../../../shared/models/login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new Login('', '');
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);

  login() {
    const username = this.form.username;
    const password = this.form.password;
    this.authService.login(username, password).subscribe({
      next: () => {
        // giriş başarılı. Menu sayfasında gidilsin.
        this.toastr.info('Giriş Başarılı');
        this.router.navigate(['/menu']);
      },
      error: () => {
        // toastr ile hata mesajını yaz
        this.toastr.error('Giriş Başarısız');
      }
    });
  }
}
