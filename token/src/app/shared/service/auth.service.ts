import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Login } from '../models/login';
import { Observable, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  accessToken = signal<string | null>(null);

  get token(): string | null { return this.accessToken(); }
  tokenChanges(): Observable<string | null> { return toObservable(this.accessToken); }

  login(username: string, password: string) {
    return this.http.post<{ accessToken: string }>('/login', { username, password })
      .pipe(tap({ next: res => this.accessToken.set(res.accessToken) }));
  }


  logout() {
    this.accessToken.set(null);
    return this.http.post<void>('/logout', {});
  }

  refresh() {
    return this.http.post<{ accessToken: string }>('/refresh', {})
      .pipe(tap({ next: res => this.accessToken.set(res.accessToken) }));
  }

}
