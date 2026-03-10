import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Message } from '../../modules/message';
import { MessageServices } from '../../services/message-services';

@Component({
  selector: 'app-show-message',
  imports: [CommonModule],
  templateUrl: './show-message.html',
  styleUrl: './show-message.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
      error: () => {
        this.error = 'No se pudieron cargar los mensajes.';
      },
    });
  }
}
