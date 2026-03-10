import { Component, OnInit, inject } from '@angular/core';
import { Message } from '../../modules/message';
import { MessageServices } from '../../services/message-services';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.html',
  styleUrl: './show-message.css'
})
export class ShowMessage implements OnInit {
  private messageService = inject(MessageServices);

  messages: Message[] = [];
  error = '';

  ngOnInit(): void {
    this.messageService.listarMensajes().subscribe({
      next: (response) => {
        this.messages = response; 
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los mensajes.';
        console.error(err);
      },
    });
  }
}