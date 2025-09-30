import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { JsonPipe } from '@angular/common';
import { usernameValidator } from '../validators/username.validator';

@Component({
  selector: 'app-ornek4',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './ornek4.component.html',
  styleUrl: './ornek4.component.scss'
})
export class Ornek4Component {
  form: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);

  constructor() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), usernameValidator('!')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('^[a-zA-Z\d]*$')]]
    });
  }

  giris() {
    console.log("Giriş yapıldı");
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    console.log("Kullanıcı Adı: " + username);
    console.log("Şifre: " + password);
    console.log("Value:", this.form.value);
    this.loginService.girisYap(username, password).subscribe({
      next: (response) => {
        console.log("Giriş başarılı:", response);
      },
      error: (error) => {
        console.error("Giriş hatası:", error);
      }
    });
  }
  setVal() {
    this.form.setValue({ username: 'ahmet', password: 'ahmet123' });
  }
  passTemizle() {
    this.form.patchValue({ password: '' });
    //this.form.get('password')?.setValue('');
  }
  reset() {
    this.form.reset();
  }
}
