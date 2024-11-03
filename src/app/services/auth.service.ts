import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // URL of the API

  // Método para autenticar al usuario
  authenticate(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      axios.post(`${this.apiUrl}/login`, { email, password })
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
