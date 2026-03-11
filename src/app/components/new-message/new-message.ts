import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 
import { MessageServices } from '../../services/message-services';

@Component({
  selector: 'app-new-message',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './new-message.html',
  styleUrl: './new-message.css',
})
export class NewMessage {
  numControl: string = '';
  name: string = '';
  content: string = '';
  base64Image: string = ''; // Aquí guardaremos la foto convertida a texto

  private messageService = inject(MessageServices);
  private router = inject(Router); 

  // Esta función hace la conversión que te pidió el profe
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // e.target.result contiene la cadena de texto Base64
        this.base64Image = e.target.result; 
      };
      // Aquí le decimos que transforme la imagen a texto (Base64)
      reader.readAsDataURL(file); 
    }
  }

  onSubmit() {
    // Armamos el paquete JSON. 
    const nuevoMensaje = {
      NumControl: this.numControl, 
      name: this.name,
      content: this.content,
      imageUrl: this.base64Image // Mandamos la súper cadena de texto al backend
    };

    this.messageService.crearMensaje(nuevoMensaje).subscribe({
      next: (res) => {
        console.log('¡Mensaje creado con éxito!');
        this.router.navigate(['/ShowMessage']); // Nos vamos a la tabla a ver el resultado
      },
      error: (err) => {
        console.error('Error al crear', err);
      }
    });
  }
}