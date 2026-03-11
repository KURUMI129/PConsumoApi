import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { Message } from '../../modules/message';
import { MessageServices } from '../../services/message-services';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.html',
  styleUrl: './show-message.css'
})
export class ShowMessage implements OnInit {
  private messageService = inject(MessageServices);
  private cdr = inject(ChangeDetectorRef); 

  messages: Message[] = [];
  error = '';

  ngOnInit(): void {
    this.messageService.listarMensajes().subscribe({
      next: (response) => {
        this.messages = response; 
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los mensajes.';
        this.cdr.detectChanges(); 
        console.error(err);
      },
    });
  }
}