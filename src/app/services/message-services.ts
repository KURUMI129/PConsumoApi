import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from '../modules/message';

@Injectable({
  providedIn: 'root',
})
export class MessageServices {
  private apiUrl = 'http://localhost:8080/api/mensajes';
  private http = inject(HttpClient);

  listarMensajes() {
    return this.http.get<Message[]>(`${this.apiUrl}`);
  }
}
