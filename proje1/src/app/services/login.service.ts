import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);

  constructor() { }

  girisYap(username: string, password: string) {
    //    this.http.post('https://jsonplaceholder.typicode.com/posts', {
    return this.http.post('http://localhost:8080/api/v1/login', { username, password });
  }
}
