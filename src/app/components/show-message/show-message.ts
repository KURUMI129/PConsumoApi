import { Component, OnInit, inject } from '@angular/core';
import { Message } from '../../modules/message';
import { MessageServices } from '../../services/message-services';

@Component({
  selector: 'app-show-message',
  // Ya no necesitas importar CommonModule si usamos la nueva sintaxis
  templateUrl: './show-message.html',
  styleUrl: './show-message.css'
})
export class ShowMessage implements OnInit {
  private messageService = inject(MessageServices);

  messages: Message[] = [];
  error = '';

  ngOnInit(): void {
    console.log('1. Iniciando petición al backend...');
    
    this.messageService.listarMensajes().subscribe({
      next: (response) => {
        console.log('2. ¡Éxito! Datos recibidos:', response);
        this.messages = response;
      },
      error: (err) => {
        console.error('2. Error en la petición:', err);
        this.error = 'No se pudieron cargar los mensajes. Revisa la consola (F12).';
      },
    });
  }
}